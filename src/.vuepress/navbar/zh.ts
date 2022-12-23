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
    text: "憨山德清",
    link: "/buddhism/README.md",
    icon: "creative",
  },
 
  {
    text: "碧苑坛经",
    link: "/dao/README.md",
    icon: "creative",
  },


]);
