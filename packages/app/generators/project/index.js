import{CreateDir as Te}from"@yangzw/bruce-us/dist/node.js";import st from"./assets-render.js";import Se from"./brucerc-render.js";import He from"./package-render.js";import Ie from"./src-render.js";import Je from"./tsconfig-render.js";export default async function Ke({deps:e={},devdeps:s={},ext:r="js",frame:m="js",name:n="demo",style:o="scss",useTs:t=!1}={}){Te(`${n}/src`),Ie({frame:m,name:n,style:o,useTs:t}),st({name:n}),Se({ext:r,frame:m,name:n,style:o,useTs:t}),He({deps:e,devdeps:s,name:n}),Je({name:n,useTs:t})}