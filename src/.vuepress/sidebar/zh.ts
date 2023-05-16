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

  "/confucian/": [
    "" ,
    {
      icon: "fa-solid fa-books",
      text: "儒家解读汇总",
      prefix: "InterpretationSummary/",
      link: "InterpretationSummary/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "fa-solid fa-books",
      text: "礼记",
      prefix: "BookOfRites/",
      link: "BookOfRites/",
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

    {
      icon: "discover",
      text: "其他",
      prefix: "other/",
      link: "other/",
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
  ],

});
