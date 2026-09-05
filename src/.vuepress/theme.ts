import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/dabaoqiang/document.git",

  author: {
    name: "Mr.Dabaoqiang",
    url: "https://github.com/dabaoqiang/document.git",
  },


  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  hotReload: true,

  logo: "/coffee.svg",

  repo: "https://github.com/dabaoqiang/document.git",

  docsDir: "/",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  sidebarSorter: "filename",

  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "MIT licensed",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
      "/dao/昆仑语录讲课笔记/": ["20230222"],
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    math: true,
    mermaid: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
  },

  plugins: {
    icon: {
      assets: ["/document/assets/fontawesome/css/all.min.css"],
    },
  },

});