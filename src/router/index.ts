import KlerkNewsLetter from "@/components/KlerkNewsletter.vue";
import KlerkSocials from "@/components/KlerkSocials.vue";
import KlerkMessengers from "@/components/KlerkMessengers.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Newsletter",
    component: KlerkNewsLetter,
  },
  {
    path: "/socials",
    name: "Socials",
    component: KlerkSocials,
  },
  {
    path: "/messangers",
    name: "Messangers",
    component: KlerkMessengers,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
