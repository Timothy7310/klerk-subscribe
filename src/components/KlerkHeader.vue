<template>
  <header class="flex flex-col items-center gap-6">
    <svg class="w-[70px] h-[36px]">
      <use href="@/assets/icons/sprite.svg#klerk"></use>
    </svg>
    <BreadCrumbs :breadcrumbs="breadcrumbs" />
  </header>
</template>

<script setup lang="ts">
import BreadCrumbs from "@/components/BreadCrumbs.vue";

const breadcrumbs = [
  {
    name: "Хлебные крошки",
    path: "#",
  },
  {
    name: "Хлебные крошки",
    path: "#",
  },
  {
    name: "Хлебные крошки",
    path: "#",
  },
];
</script>

<style scoped></style>
