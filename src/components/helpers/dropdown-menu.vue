<template>
    <div ref="el">
        <button
            type="button"
            class="text-black block h-full dropdown-button hover:bg-white border w-full"
            :class="{
                'thick-left-border': open && !props.position.includes('end'),
                'thick-right-border': open && props.position.includes('end'),
                'bg-gray-200 hover:border-black': !open,
                'bg-white': open
            }"
            @click="toggleDropdown"
            :aria-label="ariaLabel ? String(ariaLabel) : String(tooltip)"
            ref="dropdownTrigger"
        >
            <slot name="header"></slot>
        </button>
        <div
            v-show="open"
            @click="popper.update()"
            class="naps-dropdown border border-black bg-white"
            :class="{
                'text-center': centered,
                'thick-left-border': open && !props.position.includes('end'),
                'thick-right-border': open && props.position.includes('end')
            }"
            ref="dropdown"
        >
            <slot v-bind:close="() => (open = !open)"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import type { Placement, Modifier, State } from '@popperjs/core';
import { createPopper, detectOverflow } from '@popperjs/core';

const open = ref<boolean>(false);
const popper = ref<any>(null);
const watchers = reactive<Array<Function>>([]);

const el = ref();
const dropdown = ref<HTMLElement>();
const dropdownTrigger = ref<Element>();

const props = defineProps({
    position: {
        type: String,
        default: 'bottom'
    },
    popperOptions: {
        type: Object,
        default() {
            return {};
        }
    },
    tooltip: { type: String },
    tooltipPlacement: { type: String, default: 'bottom' },
    tooltipPlacementAlt: { type: String, default: 'top' },
    tooltipTheme: { type: String, default: 'ramp4' },
    tooltipAnimation: { type: String, default: 'scale' },
    centered: { type: Boolean, default: true },
    ariaLabel: { type: String }
});

watchers.push(
    watch(open, () => {
        popper.value.update();
    })
);

const toggleDropdown = () => {
    open.value = !open.value;
};

onMounted(() => {
    window.addEventListener(
        'click',
        (event) => {
            if (!el.value || !el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );

    window.addEventListener('blur', () => {
        open.value = false;
    });

    window.addEventListener('focusin', (event) => {
        if (!el.value || !el.value.contains(event.target)) {
            open.value = false;
        }
    });

    // nextTick should prevent any race conditions by letting the child elements render before trying to place them using popper
    nextTick(() => {
        const overflowScrollModifier: Modifier<'overflowScroll', {}> = {
            name: 'overflowScroll',
            enabled: true,
            phase: 'main',
            fn({ state }: { state: State }) {
                const { bottom, right, left } = detectOverflow(state);

                if (bottom > 0) {
                    state.styles.popper.overflowY = bottom > 100 ? 'auto' : undefined;
                    state.styles.popper.overflowX = 'hidden';
                    state.styles.popper.height = `${state.rects.popper.height - bottom - 8}px`;
                } else {
                    state.styles.popper.height = 'auto';
                }

                if (right > 0) {
                    state.styles.popper.width = `${state.rects.popper.width - right - 16}px`;
                } else if (left > 0) {
                    state.styles.popper.width = `${state.rects.popper.width - left - 16}px`;
                } else {
                    state.styles.popper.width = `${el.value.clientWidth}px`;
                }
            }
        };

        if (dropdownTrigger.value && dropdown.value) {
            popper.value = createPopper(dropdownTrigger.value as Element, dropdown.value as HTMLElement, {
                placement: (props.position || 'bottom') as Placement,
                modifiers: [
                    overflowScrollModifier,
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 0]
                        }
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false // true by default
                        }
                    }
                ],
                ...props.popperOptions
            });
        }
    });
});

onBeforeUnmount(() => {
    watchers.forEach((unwatch) => unwatch());

    window.removeEventListener(
        'click',
        (event) => {
            if (!el.value || !el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );

    window.removeEventListener('blur', () => {
        open.value = false;
    });

    window.removeEventListener('focusin', (event) => {
        if (!el.value || !el.value.contains(event.target)) {
            open.value = false;
        }
    });

    open.value = false;
});
</script>

<style lang="scss">
.naps-dropdown {
    z-index: 999;
}
.dropdown-button:hover {
    color: #335075;
}

.thick-left-border {
    border-left: 6px solid #335075 !important;
}

.thick-right-border {
    border-right: 6px solid #335075 !important;
}
</style>
