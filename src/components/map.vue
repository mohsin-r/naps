<script setup lang="ts">
// @ts-ignore not sure why ts is grousing
import { createInstance } from 'ramp-pcar';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import mapConfig from '../../ramp-default.json';
import initialFilterConfig from '../../filters.json';
import Filter from '@/components/filter.vue';

const rampEl = ref<HTMLDivElement>();
const rampInstance = ref<any>();
const filterConfig = reactive<any>(initialFilterConfig);
const { t } = useI18n();

let activeSitesLayer: any = undefined;

onMounted(() => {
    rampInstance.value = createInstance(rampEl.value, mapConfig);
    (window as any).debugInstance = rampInstance.value;
    const layerWatcher = setInterval(() => {
        activeSitesLayer = rampInstance.value.geo.layer.getLayer('Active_Sites');
        if (activeSitesLayer) {
            clearInterval(layerWatcher);
            activeSitesLayer.loadPromise().then(() => {
                // External filter came in. We want to check which active places still pass the current filters
                rampInstance.value.event.on('filter/change', () => updateActiveSitesDropdown());
                rampInstance.value.event.on('layer/visibilitychange', () => updateActiveSitesDropdown());
            });
        }
    }, 200);
});

const updateActiveSitesDropdown = async () => {
    if (!activeSitesLayer.visibility) {
        filterConfig[1].selected = [];
        return;
    }
    const attribs = await activeSitesLayer.getAttributes();
    const filteredOids = await activeSitesLayer.getFilterOIDs();
    const oidField = activeSitesLayer.oidField;
    const filteredOwners = [
        ...new Set(
            attribs.features
                .filter((feat: any) => filteredOids?.includes(feat[oidField]) ?? true)
                .map((feat: any) => feat.Owner)
        )
    ];
    const options: Array<any> = filterConfig[1].groups[0].options;
    const newSelected = [...Array(options.length).keys()]
        .filter((optionIdx: number) => filteredOwners.includes(options[optionIdx].value))
        .map((optionIdx: number) => [0, optionIdx]);
    filterConfig[1].selected = newSelected;
};

const updateActiveSitesMap = () => {
    const options: Array<any> = filterConfig[1].groups[0].options;
    const filteredOwners = filterConfig[1].selected
        .map((sel: Array<number>) => sel[1])
        .map((optionIdx: number) => options[optionIdx].value);
    const clauses = filteredOwners.map((owner: string) => `(Owner = '${owner}')`);
    // only a subset of checkboxes are checked. need filter
    const sql = clauses.length === 0 ? '1 = 2' : clauses.join(' OR ');
    // Use the symbol sql filter to sync up with the legend
    activeSitesLayer.setSqlFilter('symbol', sql);
};

const onSelectChange = (filterIdx: number, selected: Array<any>) => {
    filterConfig[filterIdx].selected = selected;
    if (filterIdx === 1) {
        updateActiveSitesMap();
    }
};
</script>

<template>
    <div class="flex flex-col md:flex-row mt-4 w-full bg-gray-200 border-t-2 border-gray-500 overflow-hidden">
        <Filter
            v-for="(filter, idx) in filterConfig"
            :key="idx"
            :groups="filter.groups"
            :variable="filter.variable"
            :selected="filter.selected"
            :placement="filter.placement"
            :multi="filter.multi ?? false"
            @select-change="(sel) => onSelectChange(idx, sel)"
        />
    </div>
    <div ref="rampEl" class="w-full" style="height: 80vh"></div>
</template>
