import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",

  { text: "案例", icon: "discover", link: "/demo/" },

  // {
  //   text: "指南",
  //   icon: "creative",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "creative",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "more", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "config",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "more", link: "" }],
  //     },
  //   ],
  // },


  {
    text: "儒家",
    link: "/confucian/README.md",
    icon: "fa-solid fa-diagram-cells",
  },


  {
    text: "释家",
    link: "/buddhism/README.md",
    icon: "heart",
  },

  {
    text: "道家",
    link: "/dao/README.md",
    icon: "leaf",
  },

  {
    text: "java",
    link: "/java/README.md",
    icon: "code",
  },


]);
