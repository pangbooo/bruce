import{dirname as g}from"path";import{fileURLToPath as h}from"url";import{BROWSERS_ES5 as o,AbsPath as w}from"../../constants/util/index.js";export default function p({browsers:e=[],debug:r=!1,frame:t="js",mode:s="static",useTs:a=!1}={}){const l=g(h(import.meta.url)),n=e.length?e:o,i="static"===s;return{loader:"babel-loader",options:{babelrc:!1,cacheDirectory:!0,cwd:w("../..",l),plugins:[i&&!r&&["@babel/plugin-transform-runtime",{corejs:3,regenerator:!1,useESModules:!0}]].filter(Boolean),presets:[i&&["@babel/preset-env",{corejs:3,modules:!1,targets:{browsers:n},useBuiltIns:"usage"}],a&&["@babel/preset-typescript",{allExtensions:"vue"===t}],"@babel/preset-react"].filter(Boolean)}}}