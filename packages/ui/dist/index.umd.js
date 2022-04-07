!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).bruceUi=t()}(this,(function(){"use strict";var e={exports:{}},t={},r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=_.prototype=new b;g.constructor=_,m(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:c,props:a,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var $=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+j(i,0):a,w(u)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),R(u,t,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace($,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",w(e))for(var s=0;s<e.length;s++){var l=a+j(c=e[s],s);i+=R(c,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)i+=R(c=c.value,t,o,l=a+j(c,s++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function z(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},H={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:E};t.Children={map:z,forEach:function(e,t,r){z(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,r){return N.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,r){return N.current.useReducer(e,t,r)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return N.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return N.current.useTransition()},t.version="18.0.0-fc46dba67-20220329",e.exports=t;var V=e.exports,T={exports:{}};!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var u=r.apply(null,o);u&&e.push(u)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var c in o)t.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(T);var D=T.exports;function I(e){var t=e.children,r=e.className,n=e.disabled,o=e.href,a=e.icon,u=e.onClick,c=e.shape,i=e.type,s=D("button-component",r,i?"button-".concat(i):"",c?"button-".concat(c):""),l=a?V.createElement("i",{className:"button-icon icon icon-".concat(a)}):null;return o?V.createElement("a",{className:s,href:o,target:"_blank",rel:"noreferrer",onClick:u},l,t):V.createElement("button",{className:s,disabled:n,onClick:u},l,t)}I.defaultProps={children:"按钮",className:"",disabled:!1,href:"",icon:"",onClick:null,shape:"square",type:"normal"};function A(e){var t=e.children,r=e.className,n=e.height,o=e.icon,a=D("empty-component",r);return V.createElement("div",{className:a,style:{minHeight:"".concat(n<200?200:n,"px")}},null!=o?o:V.createElement("img",{className:"empty-icon icon-empty",src:"data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg t='1644557760919' class='icon' viewBox='0 0 1566 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='844' xmlns:xlink='http://www.w3.org/1999/xlink' width='305.859375' height='200'%3e%3cdefs%3e%3cstyle type='text/css'%3e%40font-face %7b font-family: element-icons%3b src: url('chrome-extension://moombeodfomdpjnpocobemoiaemednkg/fonts/element-icons.woff') format('woff')%2c url('chrome-extension://moombeodfomdpjnpocobemoiaemednkg/fonts/element-icons.ttf ') format('truetype')%3b %7d%3c/style%3e%3c/defs%3e%3cpath d='M156.661991 699.757959h21.096999a10.443999 10.443999 0 0 1 10.235999 10.443999c0 5.765-4.491 10.443999-10.235999 10.444h-21.096999v21.097999a10.443999 10.443999 0 0 1-10.444 10.234999 10.276999 10.276999 0 0 1-10.443999-10.234999v-21.097999h-21.096999a10.443999 10.443999 0 0 1-10.234999-10.444c0-5.765 4.49-10.443999 10.234999-10.443999h21.096999v-21.096999a10.443999 10.443999 0 0 1 10.443999-10.234999c5.765 0 10.443999 4.49 10.444 10.234999v21.096999z m1378.627919-83.552995v-21.096999a10.276999 10.276999 0 0 0-10.443999-10.234999 10.443999 10.443999 0 0 0-10.444 10.234999v21.096999h-21.096998a10.276999 10.276999 0 0 0-10.235 10.443999c0 5.598 4.595 10.443999 10.235 10.444h21.096998v21.096998c0 5.745 4.679 10.235999 10.444 10.236a10.443999 10.443999 0 0 0 10.443999-10.236v-21.096998h21.097999c5.744 0 10.234999-4.679 10.234999-10.444a10.443999 10.443999 0 0 0-10.234999-10.443999h-21.097999zM776.459955 960.861944H250.596985a20.804999 20.804999 0 0 1-20.825998-20.887999c0-11.529999 9.462999-20.888999 20.825998-20.888999h94.727995a83.009995 83.009995 0 0 1-11.112-41.671997v-605.969965a83.489995 83.489995 0 0 1 83.636996-83.447995h62.580996v-20.992999a83.489995 83.489995 0 0 1 83.636995-83.448995h501.151971a83.448995 83.448995 0 0 1 83.636995 83.448995v605.969965c0 15.184999-4.053 29.409998-11.134 41.671997h115.553994c11.551999 0 20.909999 9.273999 20.909998 20.887999 0 11.529999-9.295999 20.887999-20.888998 20.887999h-250.659986v20.992999c0 15.185999-4.052 29.409998-11.132999 41.671997h11.195999c11.488999 0 20.825999 9.274999 20.825999 20.888999 0 11.529999-9.462999 20.887999-20.825999 20.887999H892.807948a41.657998 41.657998 0 0 1-6.413 50.862997 41.671998 41.671998 0 0 1-59.071996 0l-50.862997-50.862997z m76.367995-41.776998h66.423996c22.977999 0 41.609998-18.589999 41.609998-41.879997V270.460984c0-22.559999-18.047999-40.689998-40.313998-40.689997H416.303976c-22.266999 0-40.314998 18.213999-40.314998 40.689997v606.741965c0 23.123999 18.799999 41.880998 41.589998 41.880997h317.083981l-10.736999-10.756999a41.692998 41.692998 0 0 1-10.862-40.376998l-19.718999-19.739999a146.259991 146.259991 0 0 1-190.980988-220.516987 146.217991 146.217991 0 0 1 220.517987 190.980989l19.738998 19.739999a41.629998 41.629998 0 0 1 40.376998 10.839999l69.829996 69.829996z m149.809991-104.440994h62.852997a41.796998 41.796998 0 0 0 41.589997-41.776997v-605.759965c0-23.144999-18.632999-41.776998-41.589997-41.776997H563.774967a41.796998 41.796998 0 0 0-41.566998 41.775997v20.888999h396.793977a83.448995 83.448995 0 0 1 83.636995 83.448995v543.199968zM266.326984 46.998997h31.122999c8.773999 0 15.875999 6.955 15.875999 15.665999 0 8.647999-7.102 15.665999-15.875999 15.665999h-31.122999v31.123999c0 8.772999-6.956 15.874999-15.665999 15.874999a15.769999 15.769999 0 0 1-15.666999-15.874999V78.329995H203.869988a15.728999 15.728999 0 0 1-15.874999-15.665999c0-8.647999 7.102-15.665999 15.874999-15.665999h31.122998V15.874999C234.992986 7.102 241.949986 0 250.659985 0c8.646999 0 15.665999 7.102 15.665999 15.874999V46.999997zM20.887999 939.973945c0-11.529999 9.462999-20.888999 20.825999-20.888999h125.454992c11.488999 0 20.825999 9.274999 20.825999 20.888999 0 11.529999-9.462999 20.887999-20.825999 20.887999H41.713998a20.804999 20.804999 0 0 1-20.825999-20.887999z m658.733961-135.021992A104.441994 104.441994 0 1 0 531.899969 657.229961a104.441994 104.441994 0 0 0 147.721991 147.721992z m-220.079987-491.626971a20.887999 20.887999 0 0 1 20.867999-20.888999h229.791986a20.887999 20.887999 0 1 1 0 41.776997H480.430972a20.825999 20.825999 0 0 1-20.887999-20.887998z m0 104.440994c0-11.529999 9.295999-20.887999 20.742999-20.887999H814.789952c11.446999 0 20.741999 9.273999 20.741999 20.887999 0 11.529999-9.294999 20.887999-20.741999 20.887998H480.284972a20.762999 20.762999 0 0 1-20.741999-20.887998z m0 104.441993c0-11.529999 9.316999-20.888999 20.846999-20.888998h146.301991c11.509999 0 20.845999 9.274999 20.845999 20.888998 0 11.529999-9.315999 20.887999-20.845999 20.887999H480.388972a20.804999 20.804999 0 0 1-20.845999-20.887999zM62.665996 396.877977a62.664996 62.664996 0 1 1 0-125.329993 62.664996 62.664996 0 0 1 0 125.329993z m0-31.332998a31.331998 31.331998 0 1 0 0-62.664997 31.331998 31.331998 0 0 0 0 62.664997z m1295.074924-93.996995a62.664996 62.664996 0 1 1 0-125.329993 62.664996 62.664996 0 0 1 0 125.329993z m0-31.332998a31.331998 31.331998 0 1 0 0-62.663996 31.331998 31.331998 0 0 0 0 62.663996z' fill='%23666666' p-id='845'%3e%3c/path%3e%3c/svg%3e"}),!!t&&V.createElement("div",{className:"empty-text"},t))}return A.defaultProps={children:"暂无数据",className:"",height:200,icon:null},{Button:I,Empty:A}}));