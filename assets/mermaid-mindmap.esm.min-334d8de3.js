import{_ as r}from"./app-2730f369.js";import"./framework-81e6c38b.js";const t="mindmap",i=a=>a.match(/^\s*mindmap/)!==null,o=async()=>{const{diagram:a}=await r(()=>import("./diagram-definition.0faef4c2-4dda171c.js"),[]);return{id:t,diagram:a}},e={id:t,detector:i,loader:o};export{e as default};