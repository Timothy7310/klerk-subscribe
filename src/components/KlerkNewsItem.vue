<template>
  <article
    class="bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08)] grid grid-cols-[1fr_minmax(min-content,40px)] gap-x-6 px-4 py-6 rounded-2xl table:grid-cols-[1fr_minmax(min-content,80px)] md:p-6"
  >
    <span
      class="font-roboto text-[13px] font-normal leading-4 text-secondary--lighter col-[1]"
    >
      {{ options.time }}
    </span>
    <h3 class="font-roboto text-xl font-medium leading-7 text-black col-[1]">
      {{ options.title }}
    </h3>
    <p
      class="font-roboto text-sm font-normal leading-5 text-[#666] mt-2 col-[1_/_3] table:col-[1]"
    >
      {{ options.about }}
    </p>
    <ul class="flex flex-col gap-2 mt-4 col-[1_/_3]">
      <li v-for="good in options.goods" class="flex items-baseline gap-2">
        <svg class="w-4 h-4 fill-good shrink-0">
          <use href="@/assets/icons/sprite.svg#checked"></use>
        </svg>
        <span
          class="font-roboto text-sm leading-5 text-black"
          :class="`${
            good.type === NewsGoodsType.Important
              ? 'font-medium'
              : 'font-normal'
          }`"
        >
          {{ good.text }}
        </span>
      </li>
    </ul>
    <div class="flex items-center mt-6 gap-2 col-[1_/_3] md:mt-4">
      <KlerkSwitch :options="options.switchOption" />
      <span class="font-roboto text-sm font-normal leading-5 text-black">
        Уже получает {{ Number(options.readers).toLocaleString() }} человек
      </span>
    </div>
    <picture class="col-[2] row-[1_/_3] table:row-[1_/_4]">
      <source
        :srcset="`
         ${options.images.smallModern} 1x,
         ${options.images.bigModern} 2x`"
        type="image/webp"
      />
      <img
        :src="options.images.smallOld"
        :srcset="`${options.images.bigOld} 2x`"
        alt=""
      />
    </picture>
  </article>
</template>

<script setup lang="ts">
import KlerkSwitch from "@/ui/KlerkSwitch.vue";
import { NewsGoodsType } from "@/types/index";

type Props = {
  options: {
    id: number;
    time: string;
    title: string;
    about: string;
    goods: {
      text: string;
      type: NewsGoodsType;
    }[];
    readers: number;
    images: {
      smallOld: string;
      bigOld: string;
      smallModern: string;
      bigModern: string;
    };
    switchOption: {
      checked: boolean;
      width: string;
      backgroundColor: string;
      backgroundColorDot: string;
      backgroundColorActive: string;
      backgroundColorHover: string;
    };
  };
};

const { options } = defineProps<Props>();
</script>

<style></style>
