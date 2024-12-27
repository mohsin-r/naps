<template>
    <div>
        <div class="h-full" ref="appSize">
            <h1 class="text-2xl font-semibold">{{ t('naps') }}</h1>
            <p class="text-lg mt-2">{{ t('description') }}</p>
            <Map />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Map from '@/components/map.vue';
import { onMounted, ref } from 'vue';
import CustomResizeObserver from '@/utils/resize-observer';

const { t } = useI18n();
const appSize = ref();

onMounted(() => {
    const ro = new CustomResizeObserver();
    ro.observe(appSize.value as Element);
});
</script>
