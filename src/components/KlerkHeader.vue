<template>
  <header class="flex flex-col items-center gap-6 mb-6 px-4 py-0">
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
    id: 1,
    name: "Главная",
    path: "#",
  },
  {
    id: 2,
    name: "Рассылки",
    path: "#",
  },
  {
    id: 3,
    name: "Хлебные крошки",
    path: "#",
  },
];
</script>

<style scoped></style>
