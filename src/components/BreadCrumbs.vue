<template>
  <nav>
    <ul class="flex gap-2">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        class="flex gap-2 items-center"
      >
        <a :href="breadcrumb.path" class="breadcrumb-link">
          {{ breadcrumb.name }}
        </a>
        <svg
          v-if="index !== breadcrumbs.length - 1"
          class="fill-secondary--lighter w-[13px] h-4"
        >
          <use href="@/assets/icons/sprite.svg#sep"></use>
        </svg>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type Props = {
  breadcrumbs: {
    name: string;
    path: string;
  }[];
};

const { breadcrumbs } = defineProps<Props>();
</script>

<style scoped>
.breadcrumb-link {
  @apply text-[13px] font-normal leading-4 text-secondary--lighter transition-colors duration-200 ease-in border-b-accent--lighter-2 border-b border-solid hover:text-black hover:border-accent;
}
</style>
