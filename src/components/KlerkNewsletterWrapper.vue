<template>
  <div class="bg-bg-main px-4 py-8 rounded-2xl md:px-6 md:py-12">
    <KlerkNewsLetter v-if="type === 'newsletter'" />
    <KlerkSocials v-if="type === 'socials'" />
    <KlerkMessengers v-if="type === 'messengers'" />
  </div>
</template>

<script setup lang="ts">
import KlerkNewsLetter from "@/components/KlerkNewsletter.vue";
import KlerkSocials from "@/components/KlerkSocials.vue";
import KlerkMessengers from "@/components/KlerkMessengers.vue";

type Props = {
  type: "newsletter" | "socials" | "messengers";
};

const { type } = defineProps<Props>();
</script>
