<template>
  <h2
    class="font-roboto text-2xl not-italic font-medium leading-8 tracking-[-0.24px] mb-4 text-black text-start table:text-center md:mb-6"
  >
    Выберите рассылки, которые подходят именно вам
  </h2>

  <form
    class="h-14 grid grid-cols-[1fr_max-content] bg-white rounded-[15px_100px_100px_15px] overflow-hidden md:mx-[25px]"
    @submit.prevent="submitForm"
  >
    <input
      class="font-roboto text-base font-normal leading-6 bg-transparent text-black p-4"
      type="email"
      v-model="usersInfo.email"
      placeholder="Электронная почта"
    />
    <button
      class="font-roboto bg-accent text-base not-italic font-normal leading-6 text-white px-8 py-4 rounded-[100px]"
      type="submit"
      v-if="!isMobile"
    >
      Подписаться
    </button>
    <button
      class="w-14 h-14 flex justify-center items-center rounded-[50%] bg-accent"
      type="submit"
      v-if="isMobile"
    >
      <svg class="w-6 h-6 fill-white">
        <use href="@/assets/icons/sprite.svg#arrow"></use>
      </svg>
    </button>
  </form>
  <div class="flex items-center gap-2 mt-4 md:mx-[25px]">
    <KlerkSwitch :options="switchAllOption" @toggleSwitch="handleAllSwitch" />
    <span class="font-roboto text-sm font-normal leading-5">
      Подписаться на все рассылки
    </span>
  </div>
  <div
    class="grid grid-cols-[1fr] gap-6 mt-[26px] md:grid-cols-[1fr_1fr] md:mt-8"
  >
    <KlerkNewsItem
      v-for="news in newsList"
      :options="news"
      :key="news.id"
      @updateSwitch="updateSwitch"
    />
  </div>
</template>

<script setup lang="ts">
import KlerkNewsItem from "@/components/KlerkNewsItem.vue";
import KlerkSwitch from "@/ui/KlerkSwitch.vue";
import { NewsGoodsType, SubscribeType } from "@/types/index";
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";

// Картинки
import accountantLightSmallOld from "@/assets/images/accountant-light@1x.png";
import accountantLightBigOld from "@/assets/images/accountant-light@2x.png";
import accountantLightSmallModern from "@/assets/images/accountant-light@1x.webp";
import accountantLightBigModern from "@/assets/images/accountant-light@2x.webp";
import accountantDarkSmallOld from "@/assets/images/accountant-dark@1x.png";
import accountantDarkBigOld from "@/assets/images/accountant-dark@2x.png";
import accountantDarkSmallModern from "@/assets/images/accountant-dark@1x.webp";
import accountantDarkBigModern from "@/assets/images/accountant-dark@2x.webp";
import scissorsSmallOld from "@/assets/images/scissors@1x.png";
import scissorsBigOld from "@/assets/images/scissors@2x.png";
import scissorsSmallModern from "@/assets/images/scissors@1x.webp";
import scissorsBigModern from "@/assets/images/scissors@2x.webp";
import freeSmallOld from "@/assets/images/free@1x.png";
import freeBigOld from "@/assets/images/free@2x.png";
import freeSmallModern from "@/assets/images/free@1x.webp";
import freeBigModern from "@/assets/images/free@2x.webp";

// Данные для рендера подписок и формы
const usersInfo = reactive({
  email: "",
  subscribe: [
    {
      type: "Утренний бухгалтер",
      status: true,
    },
    {
      type: "Ночной бухгалтер",
      status: false,
    },
    {
      type: "Ножницы скидок",
      status: false,
    },
    {
      type: "Чемодан вебинаров",
      status: false,
    },
  ],
});

const switchAllOption = {
  checked: false,
  width: "w-[32px]",
  backgroundColor: "bg-[#eee]",
  backgroundColorDot: "bg-white",
  backgroundColorActive: "!bg-accent",
  backgroundColorHover: "hover:bg-accent--lighter-2",
};

const getSubscribeStatus = (type: SubscribeType) => {
  return usersInfo.subscribe.find((x) => x.type === type)?.status ?? false;
};

const newsList = [
  {
    id: 1,
    time: "Перед рассветом",
    title: "Утренний бухгалтер",
    type: SubscribeType.MorningAccountant,
    about:
      "Самые важные новости и события за день. Кратко, по делу, структурировано.",
    goods: [
      {
        text: "Новости для бухгалтеров, ИП и директора",
        type: NewsGoodsType.Common,
      },
      {
        text: "Подборка статей за день",
        type: NewsGoodsType.Common,
      },
    ],
    readers: 59342,
    images: {
      smallOld: accountantLightSmallOld,
      bigOld: accountantLightBigOld,
      smallModern: accountantLightSmallModern,
      bigModern: accountantLightBigModern,
    },
    switchOption: {
      checked: getSubscribeStatus(SubscribeType.MorningAccountant),
      width: "w-[48px]",
      backgroundColor: "bg-[#eee]",
      backgroundColorDot: "bg-white",
      backgroundColorActive: "!bg-accent",
      backgroundColorHover: "hover:bg-accent--lighter-2",
    },
  },
  {
    id: 2,
    time: "После заката",
    title: "Ночной бухгалтер",
    type: SubscribeType.NightAccountant,
    about:
      "Самая краткая газета о налогах и бухучете в мире — современная рассылка для вечернего чтения.",
    goods: [
      {
        text: "Новости для бухгалтеров, ИП и директора",
        type: NewsGoodsType.Common,
      },
      {
        text: "Подборка статей за день",
        type: NewsGoodsType.Common,
      },
    ],
    readers: 59342,
    images: {
      smallOld: accountantDarkSmallOld,
      bigOld: accountantDarkBigOld,
      smallModern: accountantDarkSmallModern,
      bigModern: accountantDarkBigModern,
    },
    switchOption: {
      checked: getSubscribeStatus(SubscribeType.NightAccountant),
      width: "w-[48px]",
      backgroundColor: "bg-[#eee]",
      backgroundColorDot: "bg-white",
      backgroundColorActive: "!bg-accent",
      backgroundColorHover: "hover:bg-accent--lighter-2",
    },
  },
  {
    id: 3,
    time: "Раз в две недели",
    title: "Ножницы скидок",
    type: SubscribeType.Discounts,
    about:
      "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
    goods: [
      {
        text: "Акции и скидки от лидеров рынка",
        type: NewsGoodsType.Common,
      },
      {
        text: "Те, кто подписался – экономят много денег",
        type: NewsGoodsType.Common,
      },
    ],
    readers: 92118,
    images: {
      smallOld: scissorsSmallOld,
      bigOld: scissorsBigOld,
      smallModern: scissorsSmallModern,
      bigModern: scissorsBigModern,
    },
    switchOption: {
      checked: getSubscribeStatus(SubscribeType.Discounts),
      width: "w-[48px]",
      backgroundColor: "bg-[#eee]",
      backgroundColorDot: "bg-white",
      backgroundColorActive: "!bg-accent",
      backgroundColorHover: "hover:bg-accent--lighter-2",
    },
  },
  {
    id: 4,
    time: "По мере появления анонсов",
    title: "Чемодан вебинаров",
    type: SubscribeType.Webinars,
    about:
      "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
    goods: [
      {
        text: "Никогда не пришлем платные вебинары",
        type: NewsGoodsType.Important,
      },
      {
        text: "Подборка топовых тем для вебинаров",
        type: NewsGoodsType.Common,
      },
    ],
    readers: 92082,
    images: {
      smallOld: freeSmallOld,
      bigOld: freeBigOld,
      smallModern: freeSmallModern,
      bigModern: freeBigModern,
    },
    switchOption: {
      checked: getSubscribeStatus(SubscribeType.Webinars),
      width: "w-[48px]",
      backgroundColor: "bg-[#eee]",
      backgroundColorDot: "bg-white",
      backgroundColorActive: "!bg-accent",
      backgroundColorHover: "hover:bg-accent--lighter-2",
    },
  },
];

// Логика Switch и отправки формы

const isSomeSubChecked = () => {
  return usersInfo.subscribe.map((x) => x.status).some((x) => x);
};

const updateSwitch = (item: { status: boolean; type: SubscribeType }) => {
  usersInfo.subscribe = usersInfo.subscribe.map((x) =>
    x.type === item.type ? { type: x.type, status: item.status } : x
  );
};

const handleAllSwitch = () => {
  console.log("all switch");
};

const validate = () => {
  if (!isSomeSubChecked()) {
    alert("Выберите хотя бы одну подписку");
    return false;
  }
  if (usersInfo.email.length === 0) {
    alert("Заполните поле email");
    return false;
  }
  return true;
};

const submitForm = () => {
  if (!validate()) return;
  console.log(JSON.stringify(usersInfo));
};

// Для замены кнопки submit на моб. и десктоп
const isMobile = ref(window.innerWidth < 767);
const checkMobile = (e: MediaQueryListEvent) => {
  isMobile.value = e.matches;
};
const media = window.matchMedia("(max-width: 767px)");

onMounted(() => {
  media.addEventListener("change", checkMobile);
});

onUnmounted(() => {
  media.removeEventListener("change", checkMobile);
});
</script>

<style></style>
