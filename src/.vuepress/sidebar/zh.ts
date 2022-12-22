import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/buddhism/": [
    "" /* /buddhism/ */,
    "one" /* /buddhism/one.html */,
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
