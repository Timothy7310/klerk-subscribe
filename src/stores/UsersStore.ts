import { NewsGoodsType, SubscribeType } from "@/types/index";
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

import { defineStore } from "pinia";

export const useUsersStore = defineStore("userStore", {
  state: () => ({
    subscribes: [
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
          width: "w-[48px]",
          backgroundColor: "bg-[#eee]",
          backgroundColorDot: "bg-white",
          backgroundColorActive: "!bg-accent",
          backgroundColorHover: "hover:bg-accent--lighter-2",
        },
        isChecked: true,
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
          width: "w-[48px]",
          backgroundColor: "bg-[#eee]",
          backgroundColorDot: "bg-white",
          backgroundColorActive: "!bg-accent",
          backgroundColorHover: "hover:bg-accent--lighter-2",
        },
        isChecked: false,
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
          width: "w-[48px]",
          backgroundColor: "bg-[#eee]",
          backgroundColorDot: "bg-white",
          backgroundColorActive: "!bg-accent",
          backgroundColorHover: "hover:bg-accent--lighter-2",
        },
        isChecked: false,
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
          width: "w-[48px]",
          backgroundColor: "bg-[#eee]",
          backgroundColorDot: "bg-white",
          backgroundColorActive: "!bg-accent",
          backgroundColorHover: "hover:bg-accent--lighter-2",
        },
        isChecked: false,
      },
    ],
    email: "",
    switchAll: {
      isChecked: false,
      width: "w-[32px]",
      backgroundColor: "bg-[#eee]",
      backgroundColorDot: "bg-white",
      backgroundColorActive: "!bg-accent",
      backgroundColorHover: "hover:bg-accent--lighter-2",
    },
  }),
  getters: {
    getUserInfo(state) {
      return {
        email: state.email,
        subscribe: state.subscribes.map(({ isChecked, type }) => ({
          status: isChecked,
          type,
        })),
      };
    },
    isSomeSubChecked(state) {
      return state.subscribes.map((x) => x.isChecked).some((x) => x);
    },
  },
  actions: {
    toggleSwitch(type: SubscribeType) {
      if (type === "All") {
        this.switchAll.isChecked = !this.switchAll.isChecked;

        this.subscribes.forEach((x) => {
          x.isChecked = this.switchAll.isChecked;
        });
        return;
      }

      const index = this.subscribes.findIndex((x) => x.type === type);
      this.subscribes[index].isChecked = !this.subscribes[index].isChecked;

      if (this.subscribes.every((x) => x.isChecked)) {
        this.switchAll.isChecked = true;
      } else {
        this.switchAll.isChecked = false;
      }
    },
    saveEmail(value: string) {
      this.email = value;
    },
  },
});
