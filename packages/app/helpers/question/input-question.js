import ge from"chalk";import{checkPortStatus as aa}from"portscanner";import{QA_CHECK_TEXT as co,QA_MSG_TEXT as eo}from"../../constants/i18n/index.js";import{IsPath as X,REGEXP as ze}from"../../constants/util/index.js";const{redBright:ye}=ge,Oe={default:"demo",message:eo.namea,name:"namea",type:"input",validate:a=>ze.appName.test(a)?!X(a)||ye(co.appPath):ye(co.appName)},nt=a=>({default:"demo",message:eo.namem,name:"namem",type:"input",validate:e=>ze.mateName.test(e)?!X(`src/${a}s/${e}`)||ye(co.matePath):ye(co.mateName)}),lo={default:9999,message:eo.port,name:"port",type:"number",validate:async a=>{const e=+a;if(isNaN(e)||e%1!=0)return ye(co.portName);return"open"!==await aa(e,"127.0.0.1")||ye(co.portPath)}};export{Oe as NAMEA,nt as NAMEM,lo as PORT};