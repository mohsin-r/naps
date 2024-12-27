<script setup lang="ts">
// @ts-ignore not sure why ts is grousing
import { createInstance } from 'ramp-pcar';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import mapConfig from '../../ramp-default.json';
import Filter from '@/components/filter.vue';

const rampInstance = ref<HTMLDivElement>();
const { t } = useI18n();

const filters = [
    {
        variable: 'Dataset',
        placement: 'left',
        groups: [
            {
                title: 'Continuous',
                options: [
                    {
                        title: 'Dataset 1',
                        description: 'This dataset speaks volumes about pollution.'
                    },
                    { title: 'Dataset 2 (no description)' },
                    { title: 'Dataset 3', description: 'More information about dataset 3.' }
                ]
            },
            {
                title: 'Integrated',
                options: [
                    {
                        title: 'Dataset 4',
                        description:
                            'This is an integrated dataset that says different stuff about pollution. Very very long description. Very very long description. Very very long description. Very very long description.'
                    },
                    {
                        title: 'Dataset 5',
                        description: 'More information about dataset 5.'
                    },
                    { title: 'Dataset 6 (no description)' }
                ]
            }
        ],
        selected: [1, 1]
    },
    {
        variable: 'Pollutant',
        placement: 'left',
        groups: [
            {
                options: [
                    {
                        title: 'Carbon Monoxide (CO)'
                    },
                    { title: 'Nitrogen Dioxide (NO2)' },
                    { title: 'Nitric Oxide (NO)' },
                    { title: 'Nitric Oxides (NOX)' },
                    { title: 'Ozone (O3)' },
                    { title: 'Sulphur Dioxide (SO2)' }
                ]
            }
        ],
        selected: [0, 2]
    },
    {
        variable: 'Time of year',
        placement: 'right',
        groups: [
            {
                title: 'Annual',
                options: [{ title: 'Annual', description: 'Jan-Dec' }]
            },
            {
                title: 'Seasonal',
                options: [
                    { title: 'Winter', description: 'Dec-Feb' },
                    { title: 'Spring', description: 'Mar-May' },
                    { title: 'Summer', description: 'Jun-Aug' },
                    { title: 'Autumn', description: 'Sep-Nov' }
                ]
            }
        ],
        selected: [1, 1]
    },
    {
        variable: 'Unit of Measurement',
        placement: 'right',
        groups: [
            {
                options: [{ title: 'Parts per billion' }, { title: 'Micrograms per cubic meter' }]
            }
        ],
        selected: [0, 0]
    }
];

onMounted(() => {
    createInstance(rampInstance.value, mapConfig);
});
</script>

<template>
    <div class="flex flex-col md:flex-row flex-wrap items-center mt-4 w-full bg-gray-200 border-t-2 border-gray-500">
        <Filter
            v-for="(filter, idx) in filters"
            :key="idx"
            :groups="filter.groups"
            :variable="filter.variable"
            :selected="filter.selected"
            :placement="filter.placement"
        />
    </div>
    <div ref="rampInstance" class="w-full" style="height: 80vh"></div>
</template>
