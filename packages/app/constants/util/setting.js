import{existsSync as nr,readdirSync as cr,readFileSync as ur,statSync as ar}from"fs";import{dirname as g,extname as s,join as fr}from"path";import{cwd as lr,stdout as pr}from"process";import{fileURLToPath as h}from"url";import{promisify as dr}from"util";import{AsyncTo as gr,IsFunction as ue,IsObject as hr,NodeType as l,WaitFor as wr}from"@bruce/us/dist/node.js";import ge from"chalk";import{watch as yr}from"chokidar";import br from"latest-version";import N from"webpack";import jr from"yaml";import{ACTION_TEXT as D}from"../i18n/index.js";import{REGEXP as ze}from"./getting.js";function w(r="",t=lr()){return fr(t,r)}async function tt(r={}){const t=dr(N),o=await t(r),n=new Promise(((r,t)=>{pr.write(o.toString({children:!1,chunkModules:!1,chunks:!1,colors:!0,modules:!1})+"\n\n"),o.hasErrors()?t(!1):r(!0)}));return gr(n)}async function ot(r=[]){return r.reduce((async(r,t)=>{const o=await r,n=t.includes("vue")?await br(t,{version:"next"}):await br(t);return o[t]=n,o}),Promise.resolve({}))}function X(r="",t=lr()){return nr(w(r,t))}function n(r="",t="entryFile"){if(!X(r))return"";const o=cr(w(r)).filter((o=>ar(w(`${r}/${o}`)).isFile()&&ze[t].test(o)))[0]||"";return o?w(`${r}/${o}`):""}function i(r="",t=lr()){const o=w(r,t),n=s(o);if(!/^\.json$/.test(n))return{};const e=ur(o,"utf8");return JSON.parse(e)}function u(r="",t=lr()){const o=w(r,t),n=s(o);if(!/^\.yml$/.test(n))return{};const e=ur(o,"utf8");return jr.parse(e)}function rt(r="green",t=""){console.log(ge[`${r}Bright`](t))}function it(r=""){console.log(ge.white.bgMagenta(`## ${D[r]} ###`))}async function mt({mode:r="prod",opts:t=null,path:o=""}={}){await wr(3e3);const n=ue(t)?t(r):hr(t)?t:null;if(!n||!o)return!1;const{host:e="",password:s="",port:i=9999,privateKey:c="",remotePath:u="",username:m=""}=n,a=Object.assign({host:e,port:i,username:m},c?{privateKey:c}:{password:s});console.log("上传文件的功能正在开发中",{...a,remotePath:u})}function et(r=null){if("windows"===l().system)return;const t=g(h(import.meta.url));yr([w("../..",t),w("brucerc.js"),w("brucerc.json"),w("brucerc.yml"),w("tsconfig.json"),w("src/global.d.ts")]).on("change",(t=>{const o=t.replace(/\\/g,"/").split("/").pop();r&&r(o)}))}export{w as AbsPath,tt as BuildApp,ot as GetDepVers,X as IsPath,n as JudgeFile,i as ReadJson,u as ReadYml,rt as ShowMsg,it as ShowTitle,mt as UploadFiles,et as WatchFiles};