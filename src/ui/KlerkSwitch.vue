<template>
  <button
    @click="checked = !checked"
    type="button"
    role="switch"
    :aria-checked="checked"
    class="relative aspect-[2_/_1] cursor-pointer shrink-0 rounded-[100px]"
    :class="`${options.width} ${options.backgroundColor} ${
      options.backgroundColorHover
    } ${checked ? `${options.backgroundColorActive}` : ''}`"
  >
    <div
      class="absolute translate-x-[calc(0%_+_3px)] -translate-y-2/4 h-[90%] w-auto aspect-[1_/_1] transition-all duration-[0.2s] ease-[ease-in-out] rounded-[50%] top-2/4"
      :class="`${options.backgroundColorDot} ${
        checked ? 'translate-x-[calc(100%_+_1px)] -translate-y-2/4' : ''
      }`"
    ></div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Props = {
  options: {
    checked: boolean;
    width: string;
    backgroundColor: string;
    backgroundColorActive: string;
    backgroundColorHover: string;
    backgroundColorDot: string;
  };
};

const { options } = defineProps<Props>();

const checked = ref(options.checked);
</script>

<style scoped>
.klerk-switch {
  @apply relative w-12 h-6 cursor-pointer bg-[#eee] shrink-0 rounded-xl hover:bg-[#fde6e5];
}
.klerk-switch-handle {
  @apply absolute translate-x-[0%] -translate-y-2/4 h-[22px] w-[22px] bg-white transition-all duration-[0.2s] ease-[ease-in-out] rounded-[50%] top-2/4;
  inset-inline-start: 2px;
}
.klerk-switch-checked {
  @apply bg-[#ef3124] hover:bg-[#ef3124];
}
.klerk-switch-checked .klerk-switch-handle {
  @apply translate-x-full -translate-y-2/4;
}
</style>
