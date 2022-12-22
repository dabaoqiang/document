import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/document/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "学习汇总",
      description: "学习汇总记录",
    },
  },

  theme,

  shouldPrefetch: false,
});
