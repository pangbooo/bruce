> Web类型 - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**ua**|用户代理|`String`|`"navigator.userAgent"`|可传入任何UA字符串

出参|功能|类型
:-:|:-:|:-:
**system**|系统|`windows/macos/linux/android/ios`
**systemVs**|系统版本|`x.y.z`
**platform**|平台|`desktop/mobile`
**engine**|内核|`webkit/gecko/presto/trident`
**engineVs**|内核版本|`x.y.z`
**supporter**|载体|`chrome/safari/edge/firefox/opera/iexplore`
**supporterVs**|载体版本|`x.y.z`
**supporter**|外壳|`uc/qq/sougou/maxthon/2345/360/liebao/xiaomi/huawei/oppo/vivo/wechat/baidu/toutiao`
**supporterVs**|外壳版本|`x.y.z`

- [x] 权重依据：系统 > 平台 > 内核 > 载体 > 外壳
- [x] 载体指五大浏览器：`chrome`、`safari`、`firefox`、`opera`、`edge/iexplore`(师出同门)
- [x] 外壳指除了五大浏览器的其余浏览器，它们都基于五大浏览器开源的内核进行定制，一般都会在UA中加入自身浏览器的标识
- [x] 有小部分其余浏览器在UA中并未加入自身浏览器的标识，所以只能将其归类为五大浏览器之一
- [x] 安卓系统所有浏览器都基于`Chromium`进行定制，但它们的UA大部分不包括`chrome`标识，所以载体输出`safari`

```js
import { WebType } from "@yangzw/bruce-us/dist/web";

WebType();
/*{
	engine: "webkit"
	engineVs: "537.36"
	platform: "desktop"
	supporter: "chrome"
	supporterVs: "109.0.0.0"
	system: "windows"
	systemVs: "10"
}*/
```