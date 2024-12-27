<script setup lang="ts">
import { PropType, ref } from 'vue';
import DropdownMenu from '@/components/helpers/dropdown-menu.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    groups: Object as PropType<Array<{ title?: string; options: Array<{ title: string; description?: string }> }>>,
    placement: String,
    variable: String,
    selected: Array<number>
});

// Group and option index of the selected option
const selected = ref<Array<number>>(props.selected || [0, 0]);
</script>

<template>
    <dropdown-menu class="w-full md:w-64" :position="props.placement === 'right' ? 'bottom-end' : 'bottom-start'">
        <template #header>
            <div class="flex px-4 py-2 justify-center w-full items-center">
                <div class="flex flex-col mr-4 text-left">
                    <span>{{ variable }}</span>
                    <span class="font-semibold">{{ groups![selected[0]].options[selected[1]].title }}</span>
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
        </template>
        <template #default v-if="groups?.length === 1">
            <div
                class="cursor-pointer p-2 hover:bg-gray-200 text-left"
                :class="{ selected: selected[1] === idx }"
                v-for="(option, idx) in groups[0].options"
                @click="() => (selected = [0, idx])"
            >
                <span :class="{ 'text-white': selected[1] === idx }">{{ option.title }}</span
                ><br />
                <span
                    class="text-sm"
                    :class="selected[1] === idx ? 'text-gray-300' : 'text-gray-600'"
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
                    :class="{ selected: selected[1] === optionIdx && selected[0] === groupIdx }"
                    v-for="(option, optionIdx) in group.options"
                    @click="() => (selected = [groupIdx, optionIdx])"
                >
                    <span :class="{ 'text-white': selected[1] === optionIdx && selected[0] === groupIdx }">{{
                        option.title
                    }}</span
                    ><br />
                    <span
                        class="text-sm"
                        :class="
                            selected[1] === optionIdx && selected[0] === groupIdx ? 'text-gray-300' : 'text-gray-600'
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
