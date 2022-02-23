!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).BruceUs=e()}(this,(function(){"use strict";function t(){return"undefined"!=typeof window?"web":"undefined"!=typeof global?"node":"unknow"}function e(t){return Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function n(t){return"object"===e(t)}function r(t){return"function"===e(t)}function o(t){return Array.isArray(t)&&!t.length}function i(t){return n(t)&&!Object.keys(t).length}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var u={exports:{}};!function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",u="hour",a="day",s="week",c="month",d="quarter",f="year",l="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,c),i=n-o<0,u=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-u:u-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:a,D:l,h:u,m:i,s:o,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",S={};S[y]=p;var $=function(t){return t instanceof D},b=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)S[t]&&(r=t),e&&(S[t]=e,r=t);else{var o=t.name;S[o]=t,r=o}return!n&&r&&(y=r),r||!n&&y},M=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},x=w;x.l=b,x.i=$,x.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=p.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!x.u(e)||e,d=x.p(t),h=function(t,e){var o=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(a)},g=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,m=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case f:return r?h(1,0):h(31,11);case c:return r?h(1,p):h(0,p+1);case s:var y=this.$locale().weekStart||0,S=(v<y?v+7:v)-y;return h(r?m-S:m+(6-S),p);case a:case l:return g(w+"Hours",0);case u:return g(w+"Minutes",1);case i:return g(w+"Seconds",2);case o:return g(w+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,s=x.p(t),d="set"+(this.$u?"UTC":""),h=(n={},n[a]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[f]=d+"FullYear",n[u]=d+"Hours",n[i]=d+"Minutes",n[o]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===a?this.$D+(e-this.$W):e;if(s===c||s===f){var v=this.clone().set(l,1);v.$d[h](g),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[x.p(t)]()},m.add=function(r,d){var l,h=this;r=Number(r);var g=x.p(d),v=function(t){var e=M(h);return x.w(e.date(e.date()+Math.round(t*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===f)return this.set(f,this.$y+r);if(g===a)return v(1);if(g===s)return v(7);var p=(l={},l[i]=e,l[u]=n,l[o]=t,l)[g]||1,m=this.$d.getTime()+r*p;return x.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=x.z(this),i=this.$H,u=this.$m,a=this.$M,s=n.weekdays,c=n.months,d=function(t,n,o,i){return t&&(t[n]||t(e,r))||o[n].substr(0,i)},f=function(t){return x.s(i%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:x.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:x.s(i,2,"0"),h:f(1),hh:f(2),a:l(i,u,!0),A:l(i,u,!1),m:String(u),mm:x.s(u,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:o};return r.replace(v,(function(t,e){return e||g[t]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,h){var g,v=x.p(l),p=M(r),m=(p.utcOffset()-this.utcOffset())*e,w=this-p,y=x.m(this,p);return y=(g={},g[f]=y/12,g[c]=y,g[d]=y/3,g[s]=(w-m)/6048e5,g[a]=(w-m)/864e5,g[u]=w/n,g[i]=w/e,g[o]=w/t,g)[v]||w,h?y:x.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return S[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},p}(),k=D.prototype;return M.prototype=k,[["$ms",r],["$s",o],["$m",i],["$H",u],["$W",a],["$M",c],["$y",f],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=S[y],M.Ls=S,M.p={},M}()}(u);var a=u.exports;function s(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function f(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function l(t,e){return s(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,t.then((function(t){return[null,t]})).catch((function(t){return[e?Object.assign({},t,e):t,void 0]}))];case 1:return[2,n.sent()]}}))}))}function h(t,e){return void 0===t&&(t=0),void 0===e&&(e=10),Math.floor(Math.random()*(e-t+1)+t)}var g={address:{msg:"地址只能由2~200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/g},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/g},date:{msg:"日期只能由YYYY-MM-DD hh:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g},idcard:{msg:"身份证只能由13位数字或12位数字与X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/g},image:{msg:"图片只能是JPG、PNG、GIF、SVG或WEBP类型",regexp:/\.(jpe?g|png|gif|svg|webp)$/g},name:{msg:"名称只能由2~50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/g},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g},password:{msg:"密码只能由8~20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/g},phone:{msg:"手机只能由11位数字组成且需符合通讯运营商规范",regexp:/^1\d{10}$/g}},v="^$.*+-?=!:|\\/()[]{}".split("");function p(t,e,n){void 0===t&&(t=""),void 0===e&&(e=""),void 0===n&&(n=1);var r=new Date;r.setDate(r.getDate()+n),document.cookie="".concat(t,"=").concat(e,";expires=").concat(r.toString())}function m(){var t=location.search;return t?t.replace(/(^\?)|(&$)/g,"").split("&").reduce((function(t,e){var n=d(e.split("="),2),r=n[0],o=n[1];return t[r]=decodeURIComponent(o),t}),{}):{}}function w(t,e){return void 0===t&&(t={}),void 0===e&&(e=!1),Object.entries(t).reduce((function(t,n){return e&&[void 0,null,"",NaN].includes(n[1])?t:"".concat(t).concat(n[0],"=").concat(encodeURIComponent(n[1]),"&")}),i(t)?"":"?").replace(/&$/,"")}var y={Ajax:function(t){var e=t.data,n=void 0===e?{}:e,r=t.error,o=void 0===r?null:r,i=t.success,u=void 0===i?null:i,a=t.type,s=void 0===a?"get":a,c=t.url,d=void 0===c?"":c,f=new XMLHttpRequest,l=s.toUpperCase(),h=w(n);"GET"===l?(f.open("GET",n?"".concat(d).concat(h):"".concat(d,"?t=").concat(+new Date),!0),f.send()):"POST"===l&&(f.open("POST",d,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),f.send(h)),f.onreadystatechange=function(){4===f.readyState&&(200===f.status?null==u||u(f.responseText):null==o||o(f.status))}},AsyncTo:l,AutoResponse:function(t){void 0===t&&(t=750);var e=document.documentElement;e.clientWidth>=600?e.style.fontSize="80px":e.style.fontSize="".concat(e.clientWidth/t*100,"px")},CheckText:function(t,e){void 0===t&&(t=""),void 0===e&&(e="");var n=g[t],r=n.regexp,o=n.msg,i=r.test(e);return{flag:i,msg:i?"":o}},CheckTextPlus:function(t,e,n){void 0===e&&(e=""),void 0===n&&(n="");var r=t.test(e);return{flag:r,msg:r?"":n}},ClearLStorage:function(){localStorage.clear()},ClearSStorage:function(){sessionStorage.clear()},CopyPaste:function(t){void 0===t&&(t=document.body);var e=t.childNodes.length,n=document.createRange(),r=getSelection();r&&(n.setStart(t,0),n.setEnd(t,e),r.removeAllRanges(),r.addRange(n),document.execCommand("copy",!1),r.removeRange(n))},Debounce:function(t,e){var n;return void 0===e&&(e=50),function(){for(var r=this,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){return t.apply(r,o)}),e)}},DesePhone:function(t){return void 0===t&&(t=""),g.phone.regexp.test(t)?t.toString().replace(/(\d{3})\d*(\d{4})/g,"$1****$2"):t},DownloadFile:function(t,e){void 0===t&&(t=""),void 0===e&&(e="");var n=document.createElement("a"),r=document.createEvent("MouseEvents");n.setAttribute("href",t),n.setAttribute("download",e),n.click(),n.dispatchEvent(r)},EnvType:t,FillNum:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),t.toString().padStart(e,"0")},FilterObj:function(t,e){return void 0===t&&(t={}),void 0===e&&(e=[]),Object.keys(t).reduce((function(n,r){return e.includes(r)&&(n[r]=t[r]),n}),{})},FilterXss:function(t){void 0===t&&(t="");var e=document.createElement("div");return e.innerText=t,e.innerHTML},FormatByte:function(t){if(void 0===t&&(t=0),0===t)return"0 B";var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,e)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},FormatCountdown:function(t){if(!t)return"时间无效";var e=+new Date,n=+new Date(t)-e;if(n>=0){var r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),u=Math.floor(n/1e3%60),a=r?"".concat(r,"天"):"",s=o?"".concat(o,"时"):"",c=i?"".concat(i,"分"):"",d=u?"".concat(u,"秒"):"";return"".concat(a).concat(s).concat(c).concat(d)}return"时间已到"},FormatPhone:function(t,e){return void 0===t&&(t=""),void 0===e&&(e="-"),g.phone.regexp.test(t)&&["-"," "].includes(e)?t.toString().replace(/(\d{3})(\d{4})(\d{4})/g,"$1".concat(e,"$2").concat(e,"$3")):t},FormatTimeDiff:function(t){if(!t)return"时间无效";var e=+new Date,n=+new Date(t),r=e-n,o=r>=0?"前":"后",i=Math.abs(r),u=30.4375,s=36e5,c=24*s,d=i/6e4,f=i/s,l=i/c,h=i/26298e5;return i/315576e5>=1||h>=12?a(n).format("YYYY-MM-DD HH:mm:ss"):h>=1&&h<12?"".concat(parseInt(h.toString()),"个月").concat(o):l>=1&&l<u?"".concat(parseInt(l.toString()),"天").concat(o):f>=1&&f<24?"".concat(parseInt(f.toString()),"小时").concat(o):d>=1&&d<60?"".concat(parseInt(d.toString()),"分钟").concat(o):r>=0?"刚刚":"准备"},GetCookie:function(){var t=document.cookie;return t?t.split("; ").reduce((function(t,e){var n=e.split("=");return t[n[0]]=n[1],t}),{}):{}},GetLStorage:function(t){void 0===t&&(t="");var e=localStorage.getItem(t);return e?JSON.parse(e):null},GetSStorage:function(t){void 0===t&&(t="");var e=sessionStorage.getItem(t);return e?JSON.parse(e):null},GroupArrKey:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=""),e?t.reduce((function(t,n){return!t[n[e]]&&(t[n[e]]=[]),t[n[e]].push(n),t}),{}):{}},Img2Base64:function(t,e){return void 0===t&&(t=""),void 0===e&&(e="jpg"),s(this,void 0,void 0,(function(){var n,r,o,i;return c(this,(function(u){switch(u.label){case 0:return n=new Promise((function(n,r){var o=new Image;"jpg"===e&&(e="jpeg"),o.setAttribute("src",t),o.setAttribute("crossOrigin",""),o.addEventListener("load",(function(){var t,r=document.createElement("canvas");if(r){r.setAttribute("width","".concat(o.width,"px")),r.setAttribute("height","".concat(o.height,"px")),null===(t=r.getContext("2d"))||void 0===t||t.drawImage(o,0,0);var i=r.toDataURL('"image/'.concat(e,'"'));n(i)}else n("")})),o.addEventListener("error",(function(){return r(new Error("error"))}))})),[4,l(n)];case 1:return r=d.apply(void 0,[u.sent(),2]),o=r[0],i=r[1],[2,!o&&i?i:""]}}))}))},IsArguments:function(t){return"arguments"===e(t)},IsArray:function(t){return"array"===e(t)},IsAsyncFunction:function(t){return"asyncfunction"===e(t)},IsBoolean:function(t){return"boolean"===e(t)},IsClass:function(t){return r(t)&&/^class\s+[\dA-Za-z]/.test(t.toString())},IsDate:function(t){return"date"===e(t)},IsElement:function(t){return/^html(.+?)element$/.test(e(t))},IsEmpty:function(t){return!t},IsEmptyArray:o,IsEmptyObject:i,IsError:function(t){return t instanceof Error},IsFunction:r,IsMap:function(t){return"map"===e(t)},IsNode:function(){return"node"===t()},IsNull:function(t){return"null"===e(t)},IsNumber:function(t){return"number"===e(t)},IsObject:n,IsRegExp:function(t){return"regexp"===e(t)},IsSet:function(t){return"set"===e(t)},IsString:function(t){return"string"===e(t)},IsSymbol:function(t){return"symbol"===e(t)},IsSyncFunction:function(t){return"function"===e(t)},IsUndefined:function(t){return"undefined"===e(t)},IsWeakMap:function(t){return"weakmap"===e(t)},IsWeakSet:function(t){return"weakset"===e(t)},IsWeb:function(){return"web"===t()},Jsonp:function(t,e,n){return void 0===t&&(t=""),void 0===e&&(e="jsonp"),void 0===n&&(n=null),s(this,void 0,void 0,(function(){var r,o,i;return c(this,(function(u){switch(u.label){case 0:return[4,l(new Promise((function(r,o){var i=document.createElement("script");i.setAttribute("src",t),i.setAttribute("async","true"),i.addEventListener("load",(function(){return r(!0)})),i.addEventListener("error",(function(){return o(new Error("error"))})),window[e]=function(t){return null==n?void 0:n(t)},document.body.appendChild(i)})))];case 1:return r=d.apply(void 0,[u.sent(),2]),o=r[0],i=r[1],[2,!o&&!!i]}}))}))},LoadScript:function(t,e){return void 0===t&&(t=""),void 0===e&&(e="body"),s(this,void 0,void 0,(function(){var n,r,o;return c(this,(function(i){switch(i.label){case 0:return[4,l(new Promise((function(n,r){f([],d(document.getElementsByTagName("script")),!1).some((function(e){return e.src===t||e.src.includes(t)}))&&r(new Error("<".concat(e,">已存在").concat(t,"该脚本")));var o=document.createElement("script");o.setAttribute("src",t),o.addEventListener("load",(function(){return n(!0)})),o.addEventListener("error",(function(){return r(new Error("error"))})),"head"===e&&document.head.appendChild(o),"body"===e&&document.body.appendChild(o)})))];case 1:return n=d.apply(void 0,[i.sent(),2]),r=n[0],o=n[1],[2,!r&&!!o]}}))}))},MatchBracketText:function(t,e){var n;void 0===t&&(t="(*)"),void 0===e&&(e="");var r=t.split("*").map((function(t){return v.includes(t)?"\\"+t:t})),o=new RegExp(r[0]+"(.+?)"+r[1],"g");return(null!==(n=e.match(o))&&void 0!==n?n:[]).map((function(t){return t.replace(o,"$1")}))},ParseUrlSearch:m,RandomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")},RandomId:function(t){return void 0===t&&(t=5),(t<1||t>10)&&(t=5),Math.random().toString(36).substr(3,t)},RandomNum:h,RandomNumPlus:function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=10),void 0===n&&(n=1);for(var r=[];;){for(var o=!1,i=h(t,e),u=0;u<r.length;u++)if(i===r[u]){o=!0;break}if(o||r.push(i),r.length===n)return r}},RecordArrPosition:function(t,e){return void 0===t&&(t=[]),t.reduce((function(t,n,r){return n===e&&t.push(r),t}),[])},RemoveCookie:function(t){void 0===t&&(t=""),p(t,"",-1)},RemoveLStorage:function(t){void 0===t&&(t=""),localStorage.removeItem(t)},RemoveSStorage:function(t){void 0===t&&(t=""),sessionStorage.removeItem(t)},RemoveTag:function(t){return void 0===t&&(t=""),t.replace(/<[^>]*>/g,"")},RemoveUrlSearch:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!o(t)){var n=location.origin+location.pathname,r=location.hash,i=m();t.forEach((function(t){return Reflect.deleteProperty(i,t)}));var u=w(i);history.pushState({},document.title,n+u+r)}},ReverseText:function(t){return void 0===t&&(t=""),t.split("").reduceRight((function(t,e){return t+e}))},RoundNum:function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=2),void 0===n&&(n=!1),n?"".concat(Math.round(t*Math.pow(10,e)*100)/Math.pow(10,e),"%"):Math.round(t*Math.pow(10,e))/Math.pow(10,e)},SetCookie:p,SetLStorage:function(t,e){void 0===t&&(t=""),localStorage.setItem(t,JSON.stringify(e))},SetSStorage:function(t,e){void 0===t&&(t=""),sessionStorage.setItem(t,JSON.stringify(e))},SetUrlSearch:function(t){if(void 0===t&&(t={}),!i(t)){var e=location.origin+location.pathname,n=location.hash,r=m(),o=w(Object.assign({},r,t));history.pushState({},document.title,e+o+n)}},StartScore:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=5),t<0&&(t=0),t>e&&(t=e),f(f([],d(new Array(e).fill("★")),!1),d(new Array(e).fill("☆")),!1).join("").slice(e-t,2*e-t)},StatArrCount:function(t){return void 0===t&&(t=[]),t.reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})},StatArrKeyword:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),e.reduce((function(e,n){return t.some((function(t){return t.includes(n)}))&&e.push(n),e}),[])},StringifyUrlSearch:w,ThousandNum:function(t){return void 0===t&&(t=0),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},Throttle:function(t,e){var n;void 0===e&&(e=50);var r=!1,o=0;return function(){for(var i=this,u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];r?(clearTimeout(n),n=setTimeout((function(){Date.now()-o>=e&&(t.apply(i,u),o=Date.now())}),Math.max(e-(Date.now()-o),0))):(t.apply(this,u),o=Date.now(),r=!0)}},TypeOf:e,WaitFor:function(t){return void 0===t&&(t=1e3),s(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){return setTimeout((function(){return e(!0)}),t)}))];case 1:return[2,e.sent()]}}))}))},WebType:function(t){var e,n,r,o;void 0===t&&(t=navigator.userAgent.toLowerCase());var i=function(e){return e.test(t)},u=function(e){var n;return e?(null!==(n=t.match(e))&&void 0!==n?n:"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."):"unknow"},a={windows:/windows|win32|win64|wow32|wow64/g,macos:/macintosh|macintel/g,linux:/x11/g,android:/android|adr/g,ios:/ios|iphone|ipad|ipod|iwatch/g},s=null!==(e=Object.keys(a).find((function(t){return i(a[t])})))&&void 0!==e?e:"unknow",c="unknow"===s?"unknow version":"windows"===s?function(){var e,n,r=(null!==(e=t.match(/(windows nt [\d._]+)|(windows [\w._]+)/g))&&void 0!==e?e:"").toString().replace(/windows( nt)? /g,""),o={2e3:/^(5\.0|2000)/g,xp:/^(5\.1|xp)/g,2003:/^(5\.2|2003)/g,vista:/^(6\.0|vista)/g,7:/^(6\.1|7)/g,8:/^(6\.2|8)/g,8.1:/^(6\.3|8\.1)/g,10:/^(10\.0|10)/g};return null!==(n=Object.keys(o).find((function(t){return o[t].test(r)})))&&void 0!==n?n:"unknow"}():u({macos:/os x [\d._]+/g,android:/android [\d._]+/g,ios:/os [\d._]+/g}[s]),d={desktop:["windows","macos","linux"],mobile:["android","ios"]},f=i(/mobile/g)?"mobile":null!==(n=Object.keys(d).find((function(t){return d[t].includes(s)})))&&void 0!==n?n:"unknow",l={webkit:[/applewebkit/g,/applewebkit\/[\d._]+/g],gecko:[/(?=.*gecko)(?=.*firefox)/g,/gecko\/[\d._]+/g],presto:[/presto/g,/presto\/[\d._]+/g],trident:[/trident|compatible|msie/g,/trident\/[\d._]+/g]},h=null!==(r=Object.keys(l).find((function(t){return i(l[t][0])})))&&void 0!==r?r:"unknow",g="unknow"===h?"unknow version":u(l[h][1]),v={gecko:"firefox",presto:"opera",trident:"iexplore"},p=v[h]?"webkit"===h?function(){var t,e={edge:/edge/g,opera:/opr/g,chrome:/chrome/g,safari:/safari/g};return null!==(t=Object.keys(e).find((function(t){return i(e[t])})))&&void 0!==t?t:"unknow"}():v[h]:"unknow",m=u({chrome:/chrome\/[\d._]+/g,safari:/version\/[\d._]+/g,firefox:/firefox\/[\d._]+/g,opera:/opr\/[\d._]+/g,iexplore:/(msie [\d._]+)|(rv:[\d._]+)/g,edge:/edge\/[\d._]+/g}[p]),w={wechat:[/micromessenger/g,/micromessenger\/[\d._]+/g],qq:[/qqbrowser/g,/qqbrowser\/[\d._]+/g],uc:[/ucbrowser/g,/ucbrowser\/[\d._]+/g],360:[/qihu 360se/g],2345:[/2345explorer/g,/2345explorer\/[\d._]+/g],sougou:[/metasr/g],liebao:[/lbbrowser/g],maxthon:[/maxthon/g,/maxthon\/[\d._]+/g]},y=null!==(o=Object.keys(w).find((function(t){return i(w[t][0])})))&&void 0!==o?o:"none",S="none"===y?"none":w[y][1]?u(w[y][1]):"unknow version";return Object.assign({engine:h,engineVs:g,platform:f,supporter:p,supporterVs:m,system:s,systemVs:c},"none"===y?{}:{shell:y,shellVs:S})}};return y}));
