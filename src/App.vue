<template>
  <KlerkHeader />
  <main class="flex justify-center">
    <KlerkNewsletterPage />
  </main>
  <KlerkFooter />
</template>

<script setup lang="ts">
import KlerkHeader from "@/components/KlerkHeader.vue";
import KlerkNewsletterPage from "@/components/KlerkNewsletterPage.vue";
import KlerkFooter from "@/components/KlerkFooter.vue";
</script>
