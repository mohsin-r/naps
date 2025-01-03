<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import DropdownMenu from '@/components/helpers/dropdown-menu.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    groups: Object as PropType<Array<{ title?: string; options: Array<{ title: string; description?: string }> }>>,
    placement: String,
    variable: String,
    selected: {type: Object as PropType<Array<number> | Array<Array<number>>>, required: true},
    multi: Boolean
});

const emit = defineEmits(['selectChange'])

const totalOpts = computed<number>(() => {
    let res = 0
    for (let i = 0; i < props.groups!.length; i+= 1) {
        res += props.groups![i].options.length
    }
    return res
})

const isItemSelected = (groupIdx: number, optionIdx: number) => {
    if (props.multi) {
        return (props.selected as Array<Array<number>>).some((sel: number[]) => sel[0] === groupIdx && sel[1] === optionIdx)
    }
    else {
        return props.selected![0] === groupIdx && props.selected![1] === optionIdx
    }
}

const toggleItemSelected = (groupIdx: number, optionIdx: number) => {
    let selectedCopy = JSON.parse(JSON.stringify(props.selected))
    if (props.multi) {
        const removeIdx = (selectedCopy as Array<Array<number>>).findIndex((sel: number[]) => sel[0] === groupIdx && sel[1] === optionIdx)
        if (removeIdx === -1) {
            (selectedCopy as Array<Array<number>>).push([groupIdx, optionIdx])
        }
        else {
            selectedCopy.splice(removeIdx, 1)
        }
    } else {
        selectedCopy = [groupIdx, optionIdx]
    }
    emit('selectChange', selectedCopy)
}

const clearAll = () => {
    emit('selectChange', [])
}

const selectAll = () => {
    let allSelected: any = [];
    for (let groupIdx = 0; groupIdx < props.groups!.length; groupIdx += 1) {
        allSelected = allSelected.concat([...Array(props.groups![groupIdx].options.length).keys()].map((optionIdx: number) => [groupIdx, optionIdx]))
    }
    emit('selectChange', allSelected)
}
</script>

<template>
    <dropdown-menu class="md:w-1/5" :position="props.placement === 'right' ? 'bottom-end' : 'bottom-start'">
        <template #header>
            <div class="py-2 flex flex-col items-stretch h-full">
                <div class="px-4 flex h-full justify-center w-full items-center">
                    <div class="flex flex-col mr-4 text-left overflow-hidden">
                        <span class="truncate" v-truncate>{{ variable }}</span>
                        <span v-if="selected.length === 0" class="font-semibold">{{ t('none') }}</span>
                        <span v-else-if="(multi ? selected.length : 1) === totalOpts" class="font-semibold">{{ t('all') }}</span>
                        <span v-else class="font-semibold truncate" v-truncate>{{multi ? (selected as Array<Array<number>>).map((sel: number[]) => groups![sel[0]].options[sel[1]].title).join(', ') : groups![(selected as Array<number>)[0]].options[(selected as Array<number>)[1]].title }}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 ml-auto flex-shrink-0"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div v-if="multi" class="px-2 flex items-center w-full">
                    <button class="hover:bg-gray-400 p-2" :content="t('select.all')" v-tippy @click.stop="selectAll()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>
                    </button>
                    <button class="hover:bg-gray-400 p-2 ml-auto mr-1" :content="t('clear.all')" v-tippy @click.stop="clearAll()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </template>
        <template #default v-if="groups?.length === 1">
            <div
                class="cursor-pointer p-2 hover:bg-gray-200 text-left"
                :class="{ selected: isItemSelected(0, idx) }"
                v-for="(option, idx) in groups[0].options"
                @click="toggleItemSelected(0, idx)"
            >
                <span :class="{ 'text-white': isItemSelected(0, idx)}">{{ option.title }}</span
                ><br />
                <span
                    class="text-sm"
                    :class="isItemSelected(0, idx) ? 'text-gray-300' : 'text-gray-600'"
                    v-if="option.description"
                    >{{ option.description }}</span
                >
            </div>
        </template>
        <template #default v-else class="w-full">
            <div v-for="(group, groupIdx) in groups">
                <div v-if="groupIdx !== 0" class="w-full border border-gray-200"></div>
                <div class="text-lg p-2 pb-0 text-gray-600">{{ group.title }}</div>
                <div
                    class="cursor-pointer p-2 hover:bg-gray-200 text-left"
                    :class="{ selected: isItemSelected(groupIdx, optionIdx) }"
                    v-for="(option, optionIdx) in group.options"
                    @click="toggleItemSelected(groupIdx, optionIdx)"
                >
                    <span :class="{ 'text-white': isItemSelected(groupIdx, optionIdx) }">{{
                        option.title
                    }}</span
                    ><br />
                    <span
                        class="text-sm"
                        :class="
                            isItemSelected(groupIdx, optionIdx) ? 'text-gray-300' : 'text-gray-600'
                        "
                        v-if="option.description"
                        >{{ option.description }}</span
                    >
                </div>
            </div>
        </template>
    </dropdown-menu>
</template>

<style lang="scss" scoped>
.selected {
    background-color: #335075;
}

.selected:hover {
    background-color: #335075 !important;
}
</style>
