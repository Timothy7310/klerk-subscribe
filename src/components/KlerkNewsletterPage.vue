<template>
  <section class="w-full max-w-screen-lg md:w-[90%]">
    <h1
      class="font-roboto text-black text-center text-[32px] font-medium leading-[42px] mb-6 px-4 md:text-[56px] md:leading-[72px] md:tracking-[-0.56px]"
    >
      Подписки «Клерка»
    </h1>
    <div
      class="flex flex-wrap items-center justify-around gap-[5px] px-4 md:gap-6 table:justify-center table:gap-4"
    >
      <a class="navigation-link" href="#">Рассылки</a>
      <a class="navigation-link" href="#">Соцсети</a>
      <a class="navigation-link" href="#">Мессенджеры</a>
    </div>
    <KlerkNewsletterWrapper type="newsletter" />
  </section>
</template>

<script setup lang="ts">
import KlerkNewsletterWrapper from "@/components/KlerkNewsletterWrapper.vue";
</script>

<style scoped>
.navigation-link {
  @apply font-roboto text-base font-normal leading-6 text-secondary transition-all duration-200 ease-in pb-3.5 border-b-2 border-b-transparent border-solid hover:font-medium hover:text-accent--lighter-1 hover:border-accent--lighter-1 md:pb-4;
}
</style>
