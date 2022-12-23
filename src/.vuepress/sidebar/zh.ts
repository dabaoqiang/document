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

  ],

  "/buddhism/": [

    "" /* /buddhism/ */,
    {
      icon: "discover",
      text: "11月份记录",
      prefix: "202211/",
      link: "202211/",
      collapsible: true,
      children: "structure",
    },
    
    {
      icon: "discover",
      text: "12月份记录",
      prefix: "202212/",
      link: "202212/",
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
