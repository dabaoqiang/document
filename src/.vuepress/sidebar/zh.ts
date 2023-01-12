import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({



  "/java/": [

    "",

    {
      icon: "fa-thin fa-frame",
      text: "SpringFramework",
      prefix: "SpringFramework/",
      link: "SpringFramework/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "fa-solid fa-bolt",
      text: "SpringBoot",
      prefix: "SpringBoot/",
      link: "SpringBoot/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "fa-regular fa-cloud",
      text: "SpringCloud",
      prefix: "SpringCloud/",
      link: "SpringCloud/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "fa-sharp fa-solid fa-list-check",
      text: "Project Manager",
      prefix: "ProjectManager/",
      link: "ProjectManager/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "fa-solid fa-book-open",
      text: "Open Project",
      prefix: "OpenProject/",
      link: "OpenProject/",
      collapsible: true,
      children: "structure",
    },

  ],

  "/dao/": [

    "" ,

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
      icon: "heart",
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
