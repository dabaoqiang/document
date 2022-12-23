import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/dao/": [

    "" /* /dao/ */,
 
    {
      icon: "discover",
      text: "碧苑坛经",
      prefix: "biyuantanjng/",
      link: "biyuantanjng/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "discover",
      text: "昆仑语录",
      prefix: "kunlunjf/",
      link: "kunlunjf/",
      collapsible: true,
      children: "structure",
    },

  ],

  "/buddhism/": [

    "" /* /buddhism/ */,
    {
      icon: "discover",
      text: "憨山德清",
      prefix: "HanShanDeiQing/",
      link: "HanShanDeiQing/",
      collapsible: true,
      children: "structure",
    },
  ],

  "/": [
    "",

    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },

    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],

});
