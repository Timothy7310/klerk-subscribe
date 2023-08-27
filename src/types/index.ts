export enum NewsGoodsType {
  Common = "COMMON",
  Important = "IMPORTANT",
}

export enum SubscribeType {
  MorningAccountant = "Утренний бухгалтер",
  NightAccountant = "Ночной бухгалтер",
  Discounts = "Ножницы скидок",
  Webinars = "Чемодан вебинаров",
  All = "All",
}

export type SubscribeProps = {
  options: Subscribe;
};

export type Subscribe = {
  id: number;
  time: string;
  title: string;
  type: SubscribeType;
  about: string;
  goods: {
    text: string;
    type: NewsGoodsType;
  }[];
  readers: number;
  images: {
    smallOld: string;
    bigOld: string;
    smallModern: string;
    bigModern: string;
  };
  switchOption: {
    width: string;
    backgroundColor: string;
    backgroundColorDot: string;
    backgroundColorActive: string;
    backgroundColorHover: string;
  };
  isChecked: boolean;
};

export type SubscribesStore = {
  subscribe: Subscribe[];
};
