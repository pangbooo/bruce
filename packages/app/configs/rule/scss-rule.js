import{CssLoader as a,CssUrlLoader as f,PostcssLoader as v,ScssLoader as x,StyleLoader as y}from"../loader/index.js";export default function er({browsers:e=[],debug:s=!1}={}){return{exclude:/node_modules/,include:/src/,test:/\.scss$/,use:[y(s),a(),v(e),f(),x()]}}