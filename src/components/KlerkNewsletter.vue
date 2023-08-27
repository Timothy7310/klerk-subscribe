<template>
  <h2
    class="font-roboto text-2xl not-italic font-medium leading-8 tracking-[-0.24px] mb-4 text-black text-start table:text-center md:mb-6"
  >
    Выберите рассылки, которые подходят именно вам
  </h2>

  <form
    class="h-14 grid grid-cols-[1fr_max-content] bg-white rounded-[15px_100px_100px_15px] overflow-hidden md:mx-[25px]"
    @submit.prevent="submitForm"
    novalidate
  >
    <div class="relative">
      <input
        class="input"
        type="email"
        placeholder=""
        id="email"
        v-model="userEmail"
        @input="usersStore.saveEmail(userEmail)"
        @focusin="validateInfo.isFocused = true"
        @focusout="focusOut"
      />
      <label class="label" for="email">Электронная почта</label>
    </div>
    <button
      class="font-roboto bg-accent text-base not-italic font-normal leading-6 text-white px-8 py-4 rounded-[100px] hover:bg-accent--lighter-1 transition-all duration-200 ease-in"
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
  <span
    class="block text-[#ff4464] text-[13px] leading-4 m-[5px_25px_0px_25px]"
    v-if="validateInfo.hasError && !validateInfo.isFocused"
  >
    {{ validateInfo.text }}
  </span>
  <div class="flex items-center gap-2 mt-4 md:mx-[25px]">
    <KlerkSwitch
      :is-checked="switchAll.isChecked"
      :options="switchAll"
      :type="SubscribeType.All"
    />
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
import { SubscribeType } from "@/types/index";
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { useUsersStore } from "@/stores/UsersStore";

const usersStore = useUsersStore();
const {
  subscribes: newsList,
  getUserInfo: usersInfo,
  switchAll,
  email,
} = usersStore;

const userEmail = ref(email);

const validateInfo = reactive({ text: "", hasError: false, isFocused: false });

const updateSwitch = ({
  status,
  type,
}: {
  status: boolean;
  type: SubscribeType;
}) => {
  usersInfo.subscribe = usersInfo.subscribe.map((x) =>
    x.type === type ? { type: x.type, status } : x
  );
};

const validate = () => {
  if (!usersStore.isSomeSubChecked) {
    validateInfo.hasError = true;
    validateInfo.text = "Выберите хотя бы одну подписку";
    return false;
  }

  if (userEmail.value.length === 0) {
    validateInfo.hasError = true;
    validateInfo.text = "Обязательно для заполнения";
    return false;
  }
  const emailReg =
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

  if (!emailReg.test(userEmail.value)) {
    validateInfo.hasError = true;
    validateInfo.text = "Введите адрес электронной почты";
    return false;
  }

  validateInfo.hasError = false;
  validateInfo.text = "";
  return true;
};

const focusOut = () => {
  if (validateInfo.hasError) {
    validate();
  }
  validateInfo.isFocused = false;
};

const submitForm = async () => {
  if (!validate()) return;

  console.log(usersStore.getUserInfo);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usersInfo),
  };
  const response = await fetch(
    "https://awesomeurl.ru/users/subscribe",
    options
  );
  const result = await response.json();
  console.log(result);
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

<style scoped>
.input {
  @apply absolute w-full h-full text-base leading-6 font-normal leading-6 text-black bg-transparent p-4 caret-accent--lighter-1 focus-visible:border-b-2 focus-visible:border-b-accent focus-visible:border-solid focus-visible:outline-none;
}

.label {
  @apply absolute text-base leading-6 font-normal leading-6 pointer-events-none -translate-y-2/4 left-4 top-[calc(50%)] transition-all duration-200 ease-in;
}
.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  @apply translate-x-[-58px] translate-y-[-47px] text-accent--lighter-1;
  scale: 0.6;
}
</style>
