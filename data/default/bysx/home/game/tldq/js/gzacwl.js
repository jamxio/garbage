var _czc = _czc || [];
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=z.appId,a.verifyAppId=z.appId,a.verifySignType="sha1",a.verifyTimestamp=z.timestamp+"",a.verifyNonceStr=z.nonceStr,a.verifySignature=z.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",z.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case o.config:e="config";break;case o.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=p[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),"failed"==g&&(g="fail"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(z.debug&&!b.isInnerInvoke){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){if(!("6.0.2">w||y.systemType<0)){var b=new Image;y.appId=z.appId,y.initTime=x.initEndTime-x.initStartTime,y.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(a){y.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+y.version+"&o="+y.isPreVerifyOk+"&s="+y.systemType+"&c="+y.clientVersion+"&a="+y.appId+"&n="+y.networkType+"&i="+y.initTime+"&p="+y.preVerifyTime+"&u="+y.url;b.src=c}})}}function l(){return(new Date).getTime()}function m(b){t&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){C.invoke||(C.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},C.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=-1!=s.indexOf("micromessenger"),u=-1!=s.indexOf("android"),v=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),w=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),x={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},y={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:u?2:-1,clientVersion:w,url:encodeURIComponent(location.href)},z={},A={_completes:[]},B={state:0,res:{}},m(function(){x.initEndTime=l()}),C={config:function(a){z=a,j("config",a),m(function(){c(o.config,{verifyJsApiList:i(z.jsApiList)},function(){A._complete=function(a){x.preVerifyEndTime=l(),B.state=1,B.res=a},A.success=function(){y.isPreVerifyOk=0},A.fail=function(a){A._fail?A._fail(a):B.state=-1};var a=A._completes;return a.push(function(){z.debug||k()}),A.complete=function(b){for(var c=0,d=a.length;d>c;++c)a[c](b);A._completes=[]},A}()),x.preVerifyStartTime=l()}),z.beta&&n()},ready:function(a){0!=B.state?a():(A._completes.push(a),!t&&z.debug&&a())},error:function(a){"6.0.2">w||(-1==B.state?a(B.res):A._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(u){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"]},function(){return a._complete=function(a){if(u){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{immediate_close:a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;v&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:z.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=C),C});
var Base64={table:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'],UTF16ToUTF8:function(str){var res=[],len=str.length;for(var i=0;i<len;i++){var code=str.charCodeAt(i);if(code>0x0000&&code<=0x007F){res.push(str.charAt(i))}else if(code>=0x0080&&code<=0x07FF){var byte1=0xC0|((code>>6)&0x1F);var byte2=0x80|(code&0x3F);res.push(String.fromCharCode(byte1),String.fromCharCode(byte2))}else if(code>=0x0800&&code<=0xFFFF){var byte1=0xE0|((code>>12)&0x0F);var byte2=0x80|((code>>6)&0x3F);var byte3=0x80|(code&0x3F);res.push(String.fromCharCode(byte1),String.fromCharCode(byte2),String.fromCharCode(byte3))}else if(code>=0x00010000&&code<=0x001FFFFF){}else if(code>=0x00200000&&code<=0x03FFFFFF){}else{}};return res.join('')},UTF8ToUTF16:function(str){var res=[],len=str.length;var i=0;for(var i=0;i<len;i++){var code=str.charCodeAt(i);if(((code>>7)&0xFF)==0x0){res.push(str.charAt(i))}else if(((code>>5)&0xFF)==0x6){var code2=str.charCodeAt(++i);var byte1=(code&0x1F)<<6;var byte2=code2&0x3F;var utf16=byte1|byte2;res.push(Sting.fromCharCode(utf16))}else if(((code>>4)&0xFF)==0xE){var code2=str.charCodeAt(++i);var code3=str.charCodeAt(++i);var byte1=(code<<4)|((code2>>2)&0x0F);var byte2=((code2&0x03)<<6)|(code3&0x3F);var utf16=((byte1&0x00FF)<<8)|byte2;res.push(String.fromCharCode(utf16))}else if(((code>>3)&0xFF)==0x1E){}else if(((code>>2)&0xFF)==0x3E){}else{}};return res.join('')},encode:function(str){if(!str){return''};var utf8=this.UTF16ToUTF8(str);var i=0;var len=utf8.length;var res=[];while(i<len){var c1=utf8.charCodeAt(i++)&0xFF;res.push(this.table[c1>>2]);if(i==len){res.push(this.table[(c1&0x3)<<4]);res.push('==');break};var c2=utf8.charCodeAt(i++);if(i==len){res.push(this.table[((c1&0x3)<<4)|((c2>>4)&0x0F)]);res.push(this.table[(c2&0x0F)<<2]);res.push('=');break};var c3=utf8.charCodeAt(i++);res.push(this.table[((c1&0x3)<<4)|((c2>>4)&0x0F)]);res.push(this.table[((c2&0x0F)<<2)|((c3&0xC0)>>6)]);res.push(this.table[c3&0x3F])};return res.join('')},decode:function(str){if(!str){return''};var len=str.length;var i=0;var res=[];while(i<len){code1=this.table.indexOf(str.charAt(i++));code2=this.table.indexOf(str.charAt(i++));code3=this.table.indexOf(str.charAt(i++));code4=this.table.indexOf(str.charAt(i++));c1=(code1<<2)|(code2>>4);c2=((code2&0xF)<<4)|(code3>>2);c3=((code3&0x3)<<6)|code4;res.push(String.fromCharCode(c1));if(code3!=64){res.push(String.fromCharCode(c2))};if(code4!=64){res.push(String.fromCharCode(c3))}};return this.UTF8ToUTF16(res.join(''))}};
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
Gzacwl = function(gameid, cpid) {
	this.gameid = gameid || null;
	this.game = null;
	this.cpid = cpid || null;
	this.spid = null;
	this.source = null;
	this.animalid = null;
	this.fromid = null;
	this.fromuser = null;
	this.baseurl = "http://game.gzacwl.com/";
	this.gameurl = null;
	this.homeurl = null;
	this.gzurl = null;
	this.moreurl = null;
	this.score = null;
	this.scoreName = null;
	this.shareDomain = null;
	this.shareDomains = ["", "", ""];
	this.shareData = {
		imgurl: "",
		link: this.baseurl,
		title: "鳌创网络",
		content: "鳌创网络"
	};
	this.app = null;
	this.user = null;
	this.isnewuser = false;
	this.event = null;
	this.pkuid = null;
	this.pklastuser = null;
	this.utils = new GzacwlUtils(this);
	this.auth = new GzacwlAuth(this);
	this.init()
};
Gzacwl.prototype.init = function() {
	this.spid = this.utils.getParameter("spid");
	this.source = this.utils.getParameter("source");
	this.animalid = this.utils.getParameter("animalid");
	this.fromid = this.utils.getParameter("id");
	this.isnewuser = (this.utils.getParameter("f") == "zf");
	this.homeurl = this.baseurl + "" + (this.spid ? "?spid=" + this.spid : "");
	this.gzurl = this.baseurl + "/" + (this.spid ? "?spid=" + this.spid : "");
	this.moreurl = (this.isnewuser ? this.gzurl : this.homeurl);
	this.shareDomain = this.shareDomains[parseInt(Math.random() * this.shareDomains.length)];
	this.pkuid = this.utils.getParameter("pkuid");
	this.pklastuser = this.utils.getParameter("pklastuser");
	switch (this.utils.getAppType()) {
	case "wx":
		this.app = new GzacwlWx(this);
		break;
	case "ac":
		this.app = new GzacwlApp(this);
		break;
	case "uc":
		this.app = new GzacwlUC(this);
		break;
	case "ac":
		this.app = new GzacwlZhongsou(this);
		break
	};
	if (this.gameid) this.initGame();
	var _this = this;
	/*setTimeout(function() {
		_this.utils.heartbeat()
	}, 1000);
	setTimeout(function() {
		_this.utils.logView()
	}, 1200)*/
};
Gzacwl.prototype.initGame = function() {
	var _this = this;
	this.gameurl = "";
	this.shareData.imgurl = "";
	this.shareData.link = "http://www.gzacwl.com/";
	this.utils.loading();
	if (!this.spid || this.spid == "uc" || this.spid == "ac") {
		if (this.utils.getAppType() == "ac" && this.app && this.app.version == "1.0.5" && this.utils.isIOS()) {} else {
			this.ui = new GzacwlUI(this)
		}
	};
	if (this.utils.getAppType() == "ac" && this.utils.isIOS()) {
		setTimeout(function() {
			window.location = "appcall::setbackurl::" + _this.baseurl + "/app/games.html?r=" + Math.random()
		}, 1000)
	};
	this.connect();
	setTimeout(function() {
		_this.getEventToday()
	}, 1000);
	setTimeout(function() {
		_this.utils.showAd()
	}, 2000);
	if (this.utils.getAppType() == "wx" || this.utils.getAppType() == "ac") {
		setTimeout(function() {
			_this.bonus()
		}, 3000)
	};
	_czc.push(["_setCustomVar", "用户", (this.isnewuser ? "新用户" : "老用户"), 1]);
	_czc.push(["_setCustomVar", "gameid", this.gameid, 1]);
	_czc.push(["_setCustomVar", "spid", this.spid, 1]);
	if (this.utils.getAppType() == "wx") {
		_czc.push(["_setCustomVar", "wx_ver", this.app.version, 1])
	}
};
Gzacwl.prototype.connect = function() {
	if (localStorage.accessToken) {
		var url = "";
		var _this = this;
		this.utils.ajax(url, function(data) {
			if (data.errcode) {
				_this.auth.clear();
				_this.user = null
			} else {
				localStorage.myuid = data.uid;
				_this.user = _this.utils.extend(_this.user, data.user);
				_this.game = data.game;
			}
		})
	} else {
		var url = "";
		var _this = this;
		this.utils.ajax(url, function(data) {
			_this.game = data.game;
		})
	}
};
Gzacwl.prototype.bonus = function() {
	if (!this.isTest()) return;
	if (localStorage.myuid && !gzacwl.user) {
		localStorage.bonusTipCount = localStorage.bonusTipCount || 0;
		if (localStorage.bonusTipCount && localStorage.bonusTipCount < 3) {
			var _this = this;
			this.auth.getFromUser(function() {
				var fromNickname = "";
				if (_this.fromuser) fromNickname = _this.fromuser.nickname;
				_this.utils.dialog({
					title: "鳌创网络",
					content: "您的朋友" + fromNickname + "帮你赢得了一元话费，是否立即领取？",
					buttons: [{
						label: "去领取",
						click: function() {
							window.location = "http://www.gzacwl.com/"
						}
					}, {
						label: "放弃",
						click: null
					}]
				});
				localStorage.bonusTipCount++
			})
		}
	}
};
Gzacwl.prototype.getGameInfo = function(gameid, callback) {
	this.utils.ajax("http://game.gzacwl.com?gameid=" + gameid, callback)
};
Gzacwl.prototype.getEventUrl = function() {
	return this.baseurl + "/?r=" + Math.random()
};
Gzacwl.prototype.getEventToday = function(callback) {
	var url = "http://game.gzacwl.com?gameid=" + this.gameid + (localStorage.myuid ? "&uid=" + localStorage.myuid : "");
	var _this = this;
	this.utils.ajax(url, function(data) {
		if (data.user) _this.user = _this.utils.extend(_this.user, data.user);
		if (data.game) _this.game = data.game;
		if (data.event) _this.event = data.event;
		if (_this.user && (_this.spid == null || _this.spid == "uc")) {
			_this.isnewuser = false;
			_this.moreurl = _this.homeurl
		};
		callback && callback.apply(_this)
	})
};
Gzacwl.prototype.setShareData = function(shareData) {
	if (shareData) this.shareData = this.utils.extend(this.shareData, shareData);
	if (this.app && this.app.setShareData) this.app.setShareData()
};
Gzacwl.prototype.share = function() {
	alert('点击右上角的更多分享到朋友圈');
	this.app && this.app.share()
};
Gzacwl.prototype.shareLog = function(options, callback) {
	var url = "http://game.gzacwl.com/";
	if (options.gameid) url = this.utils.setParameter(url, "gameid", options.gameid);
	if (options.spid) url = this.utils.setParameter(url, "spid", options.spid);
	if (options.id) url = this.utils.setParameter(url, "id", options.id);
	if (options.source) url = this.utils.setParameter(url, "source", options.source);
	if (options.type) url = this.utils.setParameter(url, "type", options.type);
	if (options.domain) url = this.utils.setParameter(url, "domain", options.domain);
	this.utils.ajax(url, function(data) {
		callback && callback.apply(null)
	})
};
Gzacwl.prototype.shareFlow = function() {
	return;
	var _this = this;
	if (this.isnewuser && this.spid && this.spid != "ac" && this.spid != "uc" && this.spid != "ac" && this.spid != "tx") {
		this.app.shareOK = function() {
			window.location = _this.moreurl
		};
		this.utils.shareTip();
		return
	};
	if (this.event) {
		if (this.event.gameid == this.gameid) {
			this.app.shareOK = function() {
				if (!_this.isSubmitted || _this.isSubmitted && _this.score != _this.autoScore) {
					_this.submit(function() {
						window.location = _this.getEventUrl()
					})
				} else {
					window.location = _this.getEventUrl()
				}
			};
			this.utils.shareTip()
		} else {
			this.app.shareOK = function() {
				window.location = _this.getEventUrl()
			};
			this.utils.shareTip()
		}
	} else {
		this.app.shareOK = function() {
			window.location = _this.moreurl
		};
		this.utils.shareTip()
	}
};
Gzacwl.prototype.autoSubmit = function(callback) {
	var _this = this;
	if (localStorage.myuid && this.score != null && this.score > 0) {
		if (!this.isSubmitted || this.isSubmitted && (this.gameOrder == "asc" && this.score < this.rankScore || this.gameOrder == "desc" && this.score > this.rankScore)) {
			this.submit(function(data) {
				if (data.success) {
					_this.isSubmitted = true;
					_this.gameOrder = data.order;
					_this.rankScore = data.refreshRankScore || data.lastRankScore == -1 ? _this.score : data.lastRankScore;
					_this.autoScore = _this.score;
					callback && callback.apply(null)
				}
			})
		}
	}
};
Gzacwl.prototype.submit = function(callback) {
	if (!localStorage.myuid) {
		return
	};
	if (this.score == null || isNaN(this.score)) {
		return
	};
	var pkuid = (this.fromid && this.fromid != localStorage.myuid ? this.fromid : "");
	var notice = "";
	if (pkuid && !this.notice) {
		notice = "y";
		this.notice = true
	};
	var pklastuser = (this.pklastuser ? "y" : "");
	var a = [this.gameid, localStorage.myuid, this.score, encodeURIComponent(this.scoreName), encodeURIComponent(this.shareData.title), pkuid, notice, pklastuser];
	var data = Base64.encode(this.utils.encrypt("gzacwlcom2014123", a.join("|")));
	var url = "http://game.gzacwl.com?data=" + data + (this.source ? "&source=" + this.source : "");
	var _this = this;
	this.utils.ajax(url, function(data) {
		if (data.success) {
			_this.utils.debug(data);
			callback && callback.call(null, data)
		} else {
			_this.utils.debug("提交失败")
		}
	})
};
Gzacwl.prototype.isTest = function() {
	return (this.utils.getParameter("istest") == "y" || localStorage.myuid == "" || localStorage.myuid == "" || localStorage.myuid == "" || localStorage.myuid == "" || localStorage.myuid == "" || localStorage.myuid == "" || localStorage.myuid == "")
};
GzacwlAuth = function(gzacwl) {
	this.gzacwl = gzacwl
};
GzacwlAuth.prototype.check = function(options) {
	var defaults = {
		level: "id",
		redirect: location.href,
		success: null,
		fail: null
	};
	options = this.gzacwl.utils.extend(defaults, options);
	if (this.checkError()) {
		options.fail && options.fail.apply(null);
		return
	};
	if (this.checkOKLoad(options, 10)) {
		options.success && options.success.apply(null);
		return
	};
	if (options.level == "id" && !localStorage.accessToken) {
		this.checkTask(options)
	} else if (options.level == "user" && !localStorage.token) {
		this.checkTask(options)
	} else {
		var url = "http://game.gzacwl.com/";
		if (options.level == "id") url += "?access_token=" + localStorage.accessToken;
		if (options.level == "user") url += "?token=" + localStorage.token;
		var _this = this;
		this.gzacwl.utils.ajax(url, function(data) {
			if (data && data.success) {
				_this.checkOkSave(options, data);
				options.success && options.success.apply(null)
			} else {
				_this.clear();
				_this.checkTask(options)
			}
		})
	}
};
GzacwlAuth.prototype.checkError = function() {
	if (sessionStorage.errcode && sessionStorage.errmsg) {
		this.gzacwl.utils.debug("errcode = " + sessionStorage.errcode + ", errmsg = " + sessionStorage.errmsg);
		sessionStorage.removeItem("errcode");
		sessionStorage.removeItem("errmsg");
		this.clear();
		return true
	};
	return false
};
GzacwlAuth.prototype.clear = function() {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("token");
	localStorage.removeItem("myuid");
	localStorage.removeItem("unionid")
};
GzacwlAuth.prototype.checkOkSave = function(options, data) {
	this.clear();
	if (data.accessToken) localStorage.accessToken = data.accessToken;
	if (data.token) localStorage.token = data.token;
	if (data.myuid) localStorage.myuid = data.myuid;
	if (data.unionid) localStorage.unionid = data.unionid;
	var key = "check_" + options.level + "_ok_time";
	sessionStorage[key] = new Date().getTime()
};
GzacwlAuth.prototype.checkOKLoad = function(options, sec) {
	var key = "check_" + options.level + "_ok_time";
	if (sessionStorage[key]) {
		var checkTime = sessionStorage[key];
		sessionStorage.removeItem(key);
		if (checkTime && (new Date().getTime() - checkTime) <= sec * 1000) return true
	};
	return false
};
GzacwlAuth.prototype.checkTask = function(options) {
	switch (options.level) {
	case "id":
		if (this.gzacwl.utils.getAppType() == "wx") {
			this.loginWx(options.redirect)
		} else {
			options.fail && options.fail.apply(null)
		};
		break;
	case "user":
		if (this.gzacwl.utils.getAppType() == "wx") {
			if (!localStorage.accessToken) {
				this.loginWx(options.redirect)
			} else {
				this.registerWx(options.redirect)
			}
		} else {
			this.loginForm(options.redirect)
		};
		break
	}
};
GzacwlAuth.prototype.getUser = function(callback) {
	if (!localStorage.token) {
		callback && callback.call(null, null)
	} else {
		var _this = this;
		var url = "http://game.gzacwl.com?token=" + localStorage.token;
		this.gzacwl.utils.ajax(url, function(data) {
			if (data.errcode) {
				localStorage.removeItem("token");
				_this.gzacwl.user = null;
				callback && callback.call(null, null)
			} else {
				_this.gzacwl.user = _this.gzacwl.utils.extend(_this.gzacwl.user, data);
				callback && callback.call(null, data)
			}
		})
	}
};
GzacwlAuth.prototype.getFromUser = function() {
	var id = this.gzacwl.fromid;
	var callback = null;
	switch (arguments.length) {
	case 1:
		if (typeof arguments[0] == "string") id = arguments[0];
		if (typeof arguments[0] == "function") callback = arguments[0];
		break;
	case 2:
		id = arguments[0];
		callback = arguments[1];
		break
	};
	if (id) {
		var _this = this;
		var url = "http://game.gzacwl.com?id=" + id;
		this.gzacwl.utils.ajax(url, function(data) {
			var user = null;
			if (data.errcode) {
				_this.gzacwl.utils.debug(data.errmsg)
			} else {
				user = data;
				_this.gzacwl.fromuser = user
			};
			callback && callback.call(null, user)
		})
	} else {
		callback && callback.call(null, null)
	}
};
GzacwlAuth.prototype.loginWx = function(redirect) {
	var trans = this.gzacwl.baseurl + "/?origin=" + encodeURIComponent(redirect);
	var url = "http://game.gzacwl.com?fromurl=" + encodeURIComponent(trans) + "&sessionid=" + this.gzacwl.utils.getSessionId();
	window.location.replace(url)
};
GzacwlAuth.prototype.registerWx = function(redirect) {
	var trans = this.gzacwl.baseurl + "/?origin=" + encodeURIComponent(redirect);
	var success = "http://game.gzacwl.com?fromurl=" + encodeURIComponent(trans) + "&sessionid=" + this.gzacwl.utils.getSessionId();
	var fail = this.gzacwl.baseurl + "/app/games.html";
	var url = "http://game.gzacwl.com?success=" + encodeURIComponent(success) + "&fail=" + encodeURIComponent(fail);
	window.location.replace(url)
};
GzacwlAuth.prototype.loginForm = function(redirect) {
	var url = this.gzacwl.baseurl + "/?bckurl=" + encodeURIComponent(redirect);
	window.location = url
};
GzacwlAuth.prototype.saveLink = function(callback) {
	var id = this.gzacwl.fromid;
	if (id && localStorage.accessToken && id != localStorage.myuid) {
		var url = "http://game.gzacwl.com?access_token=" + localStorage.accessToken + "&id=" + id;
		var _this = this;
		this.gzacwl.utils.ajax(url, function(data) {
			var result = 0;
			if (data.error) {
				_this.gzacwl.utils.debug(data);
				result = -1
			} else {
				result = data.linkResult
			};
			callback && callback.call(null, result)
		})
	} else {
		callback && callback.call(null, -1)
	}
};
GzacwlUI = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.start = new GzacwlUIStart(gzacwl);
	this.menu = new GzacwlUIMenu(gzacwl)
};
GzacwlUIStart = function(gzacwl) {
	this.gzacwl = gzacwl;
	var a = document.createElement("a");
	a.id = "gzacwlstart";
	a.className = "gzacwlstart";
	var _this = this;
	a.addEventListener("touchstart", function(event) {
		localStorage.hasClick9gStart = true;
		_this.gzacwl.ui.menu.show();
		event.preventDefault()
	});
	document.getElementsByTagName("body")[0].appendChild(a);
	if (!localStorage.hasClick9gStart) {
		var img = document.createElement("img");
		img.id = "gzacwlstarttip";
		img.className = "gzacwlstarttip";
		img.src = "";
		document.getElementsByTagName("body")[0].appendChild(img)
	}
};
GzacwlUIMenu = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.visible = false;
	this.init()
};
GzacwlUIMenu.prototype.init = function() {
	var div = document.createElement("div");
	div.id = "gzacwlmenu";
	div.className = "gzacwlmenu";
	var ul = document.createElement("ul");
	for (var i = 1; i <= 6; i++) {
		var li = document.createElement("li");
		var img = document.createElement("img");
		var a = document.createElement("a");
		var link = this.gzacwl.baseurl;
		
		li.appendChild(img);
		li.appendChild(a);
		(function(link) {
			li.addEventListener("touchstart", function() {
				window.location = link
			})
		})(link);
		ul.appendChild(li)
	};
	div.appendChild(ul);
	document.getElementsByTagName("body")[0].appendChild(div);
	this.getNotice()
};
GzacwlUIMenu.prototype.getNotice = function() {
	if (localStorage.token) {
		var url = "http://game.gzacwl.com?status=0&token=" + localStorage.token;
		this.gzacwl.utils.ajax(url, function(data) {
			if (data && data.sum > 0) {
				var div = document.createElement("div");
				div.className = "notice";
				div.innerHTML = "+" + data.sum;
				document.getElementById("gzacwlmenu_credit").appendChild(div)
			}
		})
	}
};
GzacwlUIMenu.prototype.show = function() {
	var div = document.getElementById("gzacwlmenu");
	div.className = "gzacwlmenu show";
	var mask = document.createElement("div");
	mask.id = "gzacwlmenumask";
	mask.className = "gzacwlmenumask";
	document.getElementsByTagName("body")[0].appendChild(mask);
	var _this = this;
	mask.addEventListener("touchstart", function() {
		_this.hide()
	});
	this.visible = true
};
GzacwlUIMenu.prototype.hide = function() {
	var div = document.getElementById("gzacwlmenu");
	div.className = "gzacwlmenu";
	var mask = document.getElementById("gzacwlmenumask");
	if (mask) document.getElementsByTagName("body")[0].removeChild(mask);
	this.visible = false
};
GzacwlUtils = function(gzacwl) {
	this.gzacwl = gzacwl
};
GzacwlUtils.prototype.extend = function(target, options) {
	if (target == undefined || target == null) {
		return options
	} else {
		if (options) {
			for (name in options) {
				target[name] = options[name]
			}
		};
		return target
	}
};
GzacwlUtils.prototype.isIOS = function() {
	return /iPhone|iPod|iPad|Mac/ig.test(navigator.userAgent)
};
GzacwlUtils.prototype.isAndroid = function() {
	return /android|linux/i.test(navigator.userAgent)
};
GzacwlUtils.prototype.getAppType = function() {
	var ua = navigator.userAgent;
	if (/micromessenger/ig.test(ua)) {
		return "wx"
	} else if (/gzacwl/ig.test(ua)) {
		return "ac"
	} else if (/ucbrowser/ig.test(ua)) {
		return "uc"
	} else if (/souyue/ig.test(ua)) {
		return "ac"
	} else {
		return "other"
	}
};
GzacwlUtils.prototype.getAppVersion = function() {
	var result = null;
	var version = null;
	var ua = navigator.userAgent;
	switch (this.getAppType()) {
	case "wx":
		result = ua.match(/MicroMessenger\/([^\s]+)/i);
		if (result) version = result[1];
		break;
	case "ac":
		result = ua.match(/gzacwl\s([^\s]+)/i);
		if (result) version = result[1];
		break;
	case "uc":
		result = ua.match(/UCBrowser\/([^\s]+)/i);
		if (result) version = result[1];
		break;
	case "ac":
		result = ua.match(/souyue\/([^\s]+)/i);
		if (result) version = result[1];
		break
	};
	return version
};
GzacwlUtils.prototype.compareVersion = function(version1, version2) {
	var r1 = version1.match(/(\d+)(?!\d)/ig);
	var r2 = version2.match(/(\d+)(?!\d)/ig);
	var result = true;
	for (var i = 0; i < 99; i++) {
		if (r2.length < i + 1) {
			result = true;
			break
		};
		var n1 = parseInt(r1[i]);
		var n2 = parseInt(r2[i]);
		if (n1 != n2) {
			result = (n1 > n2);
			break
		}
	};
	return result
};
GzacwlUtils.prototype.isLocal = function() {
	return /(file:\/\/)|(127\.0\.0.1)/ig.test(location.href)
};
GzacwlUtils.prototype.getUrl = function() {
	if (location.origin && location.pathname) {
		return location.origin + location.pathname
	} else {
		return location.href.match(/[^?#]+/i)[0]
	}
};
GzacwlUtils.prototype.getFullUrl = function() {
	return location.href.match(/[^#;]+/i)[0]
};
GzacwlUtils.prototype.getPath = function() {
	if (location.pathname) {
		return location.pathname
	} else {
		return location.href.match(/(?:http|https):\/\/[^\/]+([^?#;]+)/i)[1]
	}
};
GzacwlUtils.prototype.getQueryString = function() {
	return location.search
};
GzacwlUtils.prototype.getParameter = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return r[2];
	return null
};
GzacwlUtils.prototype.setParameter = function(url, name, value) {
	url = url.replace(/(#.*)/ig, "");
	var reg = new RegExp("([\?&])" + name + "=([^&]*)(?=&|$)", "i");
	if (reg.test(url)) {
		return url.replace(reg, "$1" + name + "=" + value)
	} else {
		return url + (url.indexOf("?") == -1 ? "?" : "&") + name + "=" + value
	}
};
GzacwlUtils.prototype.removeParameter = function(url, name) {
	url = url.replace(/(#.*)/ig, "");
	var reg = new RegExp("([\?&])" + name + "=([^&]*)(?=&|$)", "i");
	if (reg.test(url)) {
		url = url.replace(reg, "");
		if (url.indexOf("?") == -1) url = url.replace("&", "?")
	};
	return url
};
GzacwlUtils.prototype.getHead64 = function(headimgurl) {
	if (!headimgurl) return "";
	if (headimgurl.indexOf("/0") != -1) {
		headimgurl = headimgurl.substr(0, headimgurl.length - 2) + "/64"
	};
	return headimgurl
};
GzacwlUtils.prototype.getHead132 = function(headimgurl) {
	if (!headimgurl) return "";
	if (headimgurl.indexOf("/0") != -1) {
		headimgurl = headimgurl.substr(0, headimgurl.length - 2) + "/132"
	};
	return headimgurl
};
GzacwlUtils.prototype.now = function() {
	var dt = new Date();
	dt.setMilliseconds(0);
	return dt.getTime() / 1000
};
GzacwlUtils.prototype.today = function() {
	var dt = new Date();
	dt.setHours(0, 0, 0, 0);
	return dt.getTime() / 1000
};
GzacwlUtils.prototype.formatDate = function() {
	var date = arguments[0];
	var format = arguments[1] || "yyyy-MM-dd HH:mm:ss";
	if (typeof date == "number") {
		date = new Date(date * 1000)
	};
	var paddNum = function(num) {
			num += "";
			return num.replace(/^(\d)$/, "0$1")
		};
	var config = {
		yyyy: date.getFullYear(),
		yy: date.getFullYear().toString().substring(2),
		M: date.getMonth() + 1,
		MM: paddNum(date.getMonth() + 1),
		d: date.getDate(),
		dd: paddNum(date.getDate()),
		HH: paddNum(date.getHours()),
		mm: paddNum(date.getMinutes()),
		ss: paddNum(date.getSeconds())
	};
	return format.replace(/([a-z])(\1)*/ig, function(m) {
		return config[m]
	})
};
GzacwlUtils.prototype.getRandomInt = function(min, max) {
	return parseInt((Math.random() * (max - min + 1)) + min)
};
GzacwlUtils.prototype.getRandomString = function(len) {
	var base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var str = "";
	for (var i = 0; i < len; i++) {
		var n = this.getRandomInt(1, base.length) - 1;
		str += base.substr(n, 1)
	};
	return str
};
GzacwlUtils.prototype.getSessionId = function() {
	if (!sessionStorage.sessionid) {
		sessionStorage.sessionid = this.getRandomString(40)
	};
	return sessionStorage.sessionid
};
GzacwlUtils.prototype.shareConfirm = function(content, callback) {
	var _this = this;
	this.gzacwl.autoSubmit(function() {
		if (this.gzacwl.source == "ac") {
			window.location = _this.gzacwl.baseurl + "/?animalid=" + _this.gzacwl.animalid;
			return
		}
	});
	if (this.gzacwl.spid == "ac") {
		if (this.gzacwl.shareData.title.indexOf("鳌创网络") == -1) this.gzacwl.shareData.title += "[鳌创网络]";
		if (this.gzacwl.shareData.content.indexOf("鳌创网络") == -1) this.gzacwl.shareData.content += "[鳌创网络]"
	};
	setTimeout(function() {
		if (_this.getAppType() == "wx" || _this.getAppType() == "9g") {
			callback && callback.apply(null)
		} else {
			if (_this.gzacwl.app) {
				if (confirm(content)) {
					callback && callback.apply(null)
				}
			}
		}
	}, 500)
};
GzacwlUtils.prototype.shareTip = function() {
	if (document.getElementById("gzacwlshareevent")) return;
	var imgShare = document.createElement("img");
	imgShare.id = "gzacwlshareevent";
	imgShare.src = "";
	imgShare.className = "gzacwlshareevent";
	document.getElementsByTagName("body")[0].appendChild(imgShare);
	var mask = document.createElement("div");
	mask.className = "gzacwlsharemask";
	document.getElementsByTagName("body")[0].appendChild(mask);
	mask.addEventListener("touchstart", function() {
		document.getElementsByTagName("body")[0].removeChild(mask);
		document.getElementsByTagName("body")[0].removeChild(imgShare);
	})
};
GzacwlUtils.prototype.dialog = function(options) {
	new GzacwlUtilsDialog(this.gzacwl, options).open()
};
GzacwlUtilsDialog = function(gzacwl, options) {
	this.gzacwl = gzacwl;
	var defaults = {
		title: "鳌创网络",
		content: "",
		buttons: [],
		buttonOK: null,
		buttonCancel: null
	};
	this.options = this.gzacwl.utils.extend(defaults, options);
	this.init()
};
GzacwlUtilsDialog.prototype.init = function() {
	if (this.options.buttonOK) {
		this.options.buttons.push(this.gzacwl.utils.extend({
			label: "确定",
			color: "#FFFFFF",
			bgcolor: "#FF0000",
			click: null
		}, this.options.buttonOK))
	};
	if (this.options.buttonCancel) {
		this.options.buttons.push(this.gzacwl.utils.extend({
			label: "取消",
			color: "#FFFFFF",
			bgcolor: "#888888",
			click: null
		}, this.options.buttonCancel))
	}
};
GzacwlUtilsDialog.prototype.open = function() {
	if (document.getElementById("gzacwldialog")) return;
	var div = document.createElement("div");
	div.id = "gzacwldialog";
	div.className = "gzacwldialog";
	div.innerHTML = "<header><h2>" + this.options.title + "</h2></header><section>" + this.options.content.replace(/\n/g, "<br/>") + "</section><footer></footer>";
	var _this = this;
	for (var i = 0; i < this.options.buttons.length; i++) {
		(function(btn) {
			var a = document.createElement("a");
			a.innerHTML = btn.label;
			if (btn.color) a.style.color = btn.color;
			if (btn.bgcolor) a.style.backgroundColor = btn.bgcolor;
			a.addEventListener("touchstart", _this.close);
			a.addEventListener("touchstart", function(e) {
				btn.click && btn.click.apply(_this.gzacwl);
				e.preventDefault()
			});
			div.getElementsByTagName("footer")[0].appendChild(a)
		})(this.options.buttons[i])
	};
	document.getElementsByTagName("body")[0].appendChild(div);
	var mask = document.createElement("div");
	mask.id = "gzacwlmask";
	mask.className = "gzacwlmask";
	document.getElementsByTagName("body")[0].appendChild(mask)
};
GzacwlUtilsDialog.prototype.close = function(e) {
	var div = document.getElementById("gzacwldialog");
	if (div) document.getElementsByTagName("body")[0].removeChild(div);
	var mask = document.getElementById("gzacwlmask");
	if (mask) document.getElementsByTagName("body")[0].removeChild(mask);
	e.preventDefault()
};
GzacwlUtils.prototype.ajax = function(url, success) {
	url = this.gzacwl.utils.setParameter(url, "_", Math.random());
	new GzacwlUtilsAjax(this.gzacwl, "GET", url, null, "json", success)
};
GzacwlUtils.prototype.jsonp = function(url, data, jsonparam, success) {
	url = this.gzacwl.utils.setParameter(url, "_", Math.random());
	new GzacwlUtilsJsonp(url, data, jsonparam, success).request()
};
GzacwlUtilsAjax = function(gzacwl, method, url, data, type, success) {
	this.gzacwl = gzacwl;
	this.xmlhttp = null;
	if (window.XMLHttpRequest) {
		this.xmlhttp = new XMLHttpRequest()
	} else {
		this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
	};
	this.type = type;
	this.success = success;
	this.xmlhttp.open(method, url, true);
	var _this = this;
	this.xmlhttp.onreadystatechange = function() {
		_this.callback.apply(_this)
	};
	this.xmlhttp.send(data)
};
GzacwlUtilsAjax.prototype.callback = function() {
	if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
		var data = null;
		switch (this.type) {
		case "text":
			data = this.xmlhttp.responseText;
			break;
		case "json":
			try {
				data = JSON.parse(this.xmlhttp.responseText)
			} catch (e) {
				data = this.xmlhttp.responseText
			};
			break
		};
		this.success && this.success.call(this.xmlhttp, data)
	}
};
GzacwlUtilsJsonp = function(url, data, jsonparam, success, timeout) {
	var finish = false;
	var theHead = document.getElementsByTagName("head")[0] || document.documentElement;
	var scriptControll = document.createElement("script");
	var jsonpcallback = "jsonpcallback" + (Math.random() + "").substring(2);
	var collect = function() {
			if (theHead != null) {
				theHead.removeChild(scriptControll);
				try {
					delete window[jsonpcallback]
				} catch (ex) {};
				theHead = null
			}
		};
	var init = function() {
			scriptControll.charset = "utf-8";
			theHead.insertBefore(scriptControll, theHead.firstChild);
			window[jsonpcallback] = function(responseData) {
				finish = true;
				success(responseData)
			};
			jsonparam = jsonparam || "callback";
			if (url.indexOf("?") > 0) {
				url = url + "&" + jsonparam + "=" + jsonpcallback
			} else {
				url = url + "?" + jsonparam + "=" + jsonpcallback
			};
			if (typeof data == "object" && data != null) {
				for (var p in data) {
					url = url + "&" + p + "=" + escape(data[p])
				}
			}
		};
	var timer = function() {
			if (typeof window[jsonpcallback] == "function") {
				collect()
			};
			if (typeof timeout == "function" && finish == false) {
				timeout()
			}
		};
	this.request = function() {
		init();
		scriptControll.src = url;
		window.setTimeout(timer, 10000)
	}
};
GzacwlUtils.prototype.loading = function() {
	var div = document.createElement("div");
	div.id = "gzacwlloading";
	div.className = "gzacwlloading";
	
	document.getElementsByTagName("body")[0].appendChild(div);
	var interval = (this.getAppType() == "9g" ? 1000 : 3000);
	setTimeout(function() {
		document.getElementsByTagName("body")[0].removeChild(div);
		var a = document.getElementById("gzacwl9gstart");
		if (a) {
			a.className = "gzacwl9gstart bounceInLeft";
			var afinish = function() {
					a.className = "gzacwl9gstart pulse infinite";
					var img = document.getElementById("gzacwl9gstarttip");
					if (img) {
						img.className = "gzacwl9gstarttip bounceInRight";
						var imgfinish = function() {
								setTimeout(function() {
									img.className = "gzacwl9gstarttip bounceOutLeft"
								}, 1000)
							};
						img.addEventListener("animationend", imgfinish);
						img.addEventListener("webkitAnimationEnd", imgfinish)
					}
				};
			a.addEventListener("animationend", afinish);
			a.addEventListener("webkitAnimationEnd", afinish)
		}
	}, interval)
};
GzacwlUtils.prototype.showAd = function() {//广告
	if (this.gzacwl.spid == "uc" && this.getAppType() != "uc") {
		var url = "";
		this.ajax(url, function(data) {
			if (data.ad) {
				var img = document.createElement("img");
				img.id = "gzacwlad";
				img.src = data.ad.imgurl;
				img.className = "gzacwlad";
				img.addEventListener("touchstart", function() {
					window.location = ""
				});
				document.getElementsByTagName("body")[0].appendChild(img)
			}
		})
	};
	if (this.gzacwl.spid == "ac" && this.getAppType() != "ac") {
		var isZhousouInstalled = (this.getParameter("isappinstalled") == "1");
		var url = "";
		var _this = this;
		this.ajax(url, function(data) {
			if (data.ad) {
				var img = document.createElement("img");
				img.id = "gzacwladbottom";
				img.className = "gzacwladbottom";
				img.src = data.ad.imgurl;
				img.addEventListener("touchstart", function() {
					if (isZhousouInstalled) {
						if (_this.getAppType() == "wx") {
							var tip = document.createElement("img");
							tip.id = "gzacwlzhongsoutip";
							tip.className = "gzacwlzhongsoutip";
							tip.src = "http://game.gzacwl.com/img/" + (_this.isIOS() ? "share_ios.png" : "share_android.png");
							document.getElementsByTagName("body")[0].appendChild(tip)
						} else {
							window.location = "ccc://"
						}
					} else {
						window.location = ""
					}
				});
				document.getElementsByTagName("body")[0].appendChild(img)
			}
		})
	}
};
GzacwlUtils.prototype.debug = function(obj) {
	if (this.gzacwl.isTest()) {
		alert("[DEBUG]\n" + this.describe(obj))
	}
};
GzacwlUtils.prototype.describe = function(obj, tab) {
	tab = tab || "";
	var content = "";
	if (typeof obj == "object" && obj != null) {
		for (var item in obj) {
			if (typeof obj[item] == "object" && obj[item] != null) content += tab + item + " = \n" + tab + "(\n" + this.describe(obj[item], tab + "    ") + tab + ")\n";
			else content += tab + item + " = " + obj[item] + "\n"
		}
	} else {
		content += tab + obj
	};
	return content
};
GzacwlUtils.prototype.encrypt = function(key, word) {
	var iv = CryptoJS.enc.Utf8.parse(key);
	var srcs = CryptoJS.enc.Utf8.parse(word);
	var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(key), {
		iv: iv,
		mode: CryptoJS.mode.CBC
	});
	return encrypted.toString()
};
GzacwlUtils.prototype.track = function() {
	var action = null;
	var value = null;
	var memo = null;
	var callback = null;
	switch (arguments.length) {
	case 1:
		action = arguments[0];
		break;
	case 2:
		action = arguments[0];
		if (!isNaN(arguments[1])) value = arguments[1];
		if (typeof arguments[1] == "function") callback = arguments[1];
		break;
	case 3:
		action = arguments[0];
		value = arguments[1];
		if (typeof arguments[2] == "string") memo = arguments[2];
		if (typeof arguments[2] == "function") callback = arguments[2];
		break;
	case 4:
		action = arguments[0];
		value = arguments[1];
		memo = arguments[2];
		callback = arguments[3];
		break
	};
	if (action == null) {
		this.debug("track ERROR: 要求 action");
		return
	};
	var url = "";
	if (value != null) url = this.setParameter(url, "value", value);
	if (memo != null) url = this.setParameter(url, "memo", encodeURIComponent(memo));
	if (this.gzacwl.gameid) url = this.setParameter(url, "gameid", this.gzacwl.gameid);
	if (localStorage.myuid) url = this.setParameter(url, "uid", localStorage.myuid);
	this.ajax(url, function(data) {
		if (data.success) {
			callback && callback.apply(null)
		}
	})
};
GzacwlUtils.prototype.heartbeat = function() {
	if (this.isLocal()) return;
	var lastTime = sessionStorage.heartbeatTime || 0;
	var thisTime = new Date().getTime();
	if (thisTime - lastTime < 3000) return;
	else sessionStorage.heartbeatTime = thisTime;
	var rnd = this.gzacwl.utils.getRandomString(10);
	var url = "";
	//if (this.gzacwl.gameid) url += "&gameid=" + this.gzacwl.gameid;
	if (localStorage.token) url += "&token=" + localStorage.token;
	if (localStorage.accessToken) url += "&access_token=" + localStorage.accessToken;
	//url += "&sessionid=" + this.getSessionId();
	var _this = this;
	this.ajax(url, function(data) {
		if (data.id) {}
	});
	setTimeout(function() {
		_this.heartbeat()
	}, 10000)
};
GzacwlUtils.prototype.logView = function() {
	if (this.isLocal()) return;
	var rnd = this.gzacwl.utils.getRandomString(10);
	var url = "";
	if (localStorage.myuid) url = this.setParameter(url, "id", localStorage.myuid);
	if (localStorage.token) url = this.setParameter(url, "token", localStorage.token);
	if (this.gzacwl.user) {
		var country = this.gzacwl.user.country || "";
		var province = this.gzacwl.user.province || "";
		var city = this.gzacwl.user.city || "";
		if (country || province || city) {
			url = this.setParameter(url, "country", encodeURIComponent(country));
			url = this.setParameter(url, "province", encodeURIComponent(province));
			url = this.setParameter(url, "city", encodeURIComponent(city))
		}
	};
	this.ajax(url, function(data) {})
};

GzacwlWx = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.version = null;
	this.ready = false;
	this.shareOK = null;
	this.shareCancel = null;
	this.init()
};
GzacwlWx.prototype.init = function() {
	this.version = this.gzacwl.utils.getAppVersion();
	this.initJsApi()
};
GzacwlWx.prototype.isVersionOver = function(version) {
	return this.gzacwl.utils.compareVersion(this.version, version)
};
GzacwlWx.prototype.initWeixinJSBridge = function() {
	var _this = this;
	document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
		WeixinJSBridge.on("menu:share:appmessage", function(argv) {
			WeixinJSBridge.invoke("sendAppMessage", {
				"img_url": _this.gzacwl.shareData.imgurl,
				"link": window.location.href,
				"desc": _this.gzacwl.shareData.content,
				"title": _this.gzacwl.shareData.title
			}, function(res) {
				if (res.err_msg == "send_app_msg:cancel") {
					_this.shareCancelHandler()
				} else {
					_this.shareOKHandler()
				}
			})
		});
		WeixinJSBridge.on("menu:share:timeline", function(argv) {
			WeixinJSBridge.invoke("shareTimeline", {
				"img_url": _this.gzacwl.shareData.imgurl,
				"img_width": "640",
				"img_height": "640",
				"link": window.location.href,
				"desc": _this.gzacwl.shareData.content,
				"title": _this.gzacwl.shareData.title
			}, function(res) {
				if (res.err_msg == "share_timeline:cancel") {
					_this.shareCancelHandler()
				} else {
					_this.shareOKHandler()
				}
			})
		})
	}, false)
};
GzacwlWx.prototype.initJsApi = function() {
	var timestamp = this.gzacwl.utils.now();
	var noncestr = this.gzacwl.utils.getRandomString(16);
	var rnd = this.gzacwl.utils.getRandomString(10);
	var url = this.gzacwl.utils.getFullUrl();
	var ajaxUrl = "";
	var _this = this;
	this.gzacwl.utils.ajax(ajaxUrl, function(data) {
		if (data.signature) {
			var signature = data.signature;
			wx.config({
				debug: false,
				appId: "",
				timestamp: timestamp,
				nonceStr: noncestr,
				signature: signature,
				jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"]
			});
			wx.ready(function() {
				_this.ready = true;
				_this.setShareData()
			});
			wx.error(function(res) {})
		}
	})
};
GzacwlWx.prototype.setShareData = function() {
	var _this = this;
	wx.onMenuShareTimeline({
		title: this.gzacwl.shareData.title,
		link: this.gzacwl.shareData.link,
		imgUrl: this.gzacwl.shareData.imgurl,
		success: function() {
			var options = {
				gameid: _this.gzacwl.gameid,
				spid: _this.gzacwl.spid,
				id: localStorage.myuid || null,
				source: 1,
				type: 1,
				domain: (_this.gzacwl.shareData.link || "").indexOf(_this.gzacwl.shareDomain != -1) ? _this.gzacwl.shareDomain : null
			};
			_this.gzacwl.shareLog(options, function() {
				_this.shareOKHandler()
			})
		},
		cancel: function() {
			_this.shareCancelHandler()
		}
	});
	wx.onMenuShareAppMessage({
		title: this.gzacwl.shareData.title,
		desc: this.gzacwl.shareData.content,
		link: this.gzacwl.shareData.link,
		imgUrl: this.gzacwl.shareData.imgurl,
		type: "",
		dataUrl: "",
		success: function() {
			var options = {
				gameid: _this.gzacwl.gameid,
				spid: _this.gzacwl.spid,
				id: localStorage.myuid || null,
				source: 2,
				type: 1,
				domain: (_this.gzacwl.shareData.link || "").indexOf(_this.gzacwl.shareDomain != -1) ? _this.gzacwl.shareDomain : null
			};
			_this.gzacwl.shareLog(options, function() {
				_this.shareOKHandler()
			})
		},
		cancel: function() {
			_this.shareCancelHandler()
		}
	})
};
GzacwlWx.prototype.share = function() {
	this.setShareData();
	if (this.gzacwl.gameid) {
		this.gzacwl.shareFlow()
	}
};
GzacwlWx.prototype.shareOKHandler = function() {
	_czc.push(["_trackEvent", "分享", "成功"]);
	this.shareOK && this.shareOK.apply(this.gzacwl);
};
GzacwlWx.prototype.shareCancelHandler = function() {
	this.shareCancel && this.shareCancel.apply(this.gzacwl);
};
GzacwlApp = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.version = null;
	this.type = null;
	this.shareOK = null;
	this.shareCancel = null;
	this.oldTitle = null;
	this.init()
};
GzacwlApp.prototype.init = function() {
	this.version = this.gzacwl.utils.getAppVersion();
	if (/uuid\sios/ig.test(navigator.userAgent)) this.type = "iOS";
	if (/uuid\sandroid/ig.test(navigator.userAgent)) this.type = "Android";
	var _this = this;
	document.addEventListener("gzacwlWxShareOk", function onBridgeReady() {
		if (_this.oldTitle) document.title = _this.oldTitle;
		_this.shareOK && _this.shareOK.apply(_this.gzacwl)
	})
};
GzacwlApp.prototype.isVersionOver = function(version) {
	return this.gzacwl.utils.compareVersion(this.version, version)
};
GzacwlApp.prototype.setShareData = function() {
	if (this.type == "iOS") {
		window.location = "appcall::setwxshare::" + this.gzacwl.shareData.link + "::" + this.gzacwl.shareData.title + "::" + this.gzacwl.shareData.content + "::" + this.gzacwl.shareData.imgurl
	} else if (this.type == "Android") {
		this.oldTitle = document.title;
		var space = "ac............................................................|";
		document.title = space + this.gzacwl.shareData.link + "|" + this.gzacwl.shareData.title + "|" + this.gzacwl.shareData.content + "|" + this.gzacwl.shareData.imgurl;
	}
};
GzacwlApp.prototype.share = function() {
	this.setShareData();
	if (this.gzacwl.gameid) {
		this.gzacwl.shareFlow()
	}
};
GzacwlUC = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.version = null;
	window.uc_param_str = {};
	this.init()
};
GzacwlUC.prototype.init = function() {
	this.version = this.gzacwl.utils.getAppVersion();
	var url = "http://game.gzacwl.com";
	var data = {
		uc_param_str: "dd"
	};
	this.gzacwl.utils.jsonp(url, data, null, function(data) {
		window.uc_param_str = data
	})
};
GzacwlUC.prototype.isVersionOver = function(version) {
	return this.gzacwl.utils.compareVersion(this.version, version)
};
GzacwlUC.prototype.share = function() {
	if (uc_param_str.fr === 'android' || uc_param_str.fr === 'iphone') {
		if (uc_param_str.fr === 'android') {
			try {
				ucweb.startRequest("shell.page_share", [this.gzacwl.shareData.title, this.gzacwl.shareData.content, this.gzacwl.shareData.link, ''])
			} catch (e) {
				console.error(e.message)
			}
		} else {
			if (this.isVersionOver("9.9.0.0")) {
				this.createIconImage();
				ucbrowser.web_share(this.gzacwl.shareData.title, this.gzacwl.shareData.content, this.gzacwl.shareData.link, '', '', '', 'gzacwlucicon')
			} else {
				location.href = "ext:web_share:"
			}
		}
	} else {
		this.gzacwl.utils.debug("其它分享接口")
	}
};
GzacwlUC.prototype.createIconImage = function() {
	var img = document.getElementById("gzacwlucicon");
	if (!img) {
		img = document.createElement("img");
		img.id = "gzacwlucicon";
		if (this.gzacwl.gameid) img.src = "http://game.gzacwl.com/" + this.gzacwl.gameid + "/icon.png";
		else img.src = "http://game.gzacwl.com/icon.png";
		img.className = "gzacwlucicon";
		document.getElementsByTagName("body")[0].appendChild(img)
	}
};
GzacwlZhongsou = function(gzacwl) {
	this.gzacwl = gzacwl;
	this.version = null;
	this.type = null;
	this.shareOK = null;
	this.shareCancel = null;
	this.init()
};
GzacwlZhongsou.prototype.init = function() {
	this.type = (navigator.userAgent.match(/(iPhone|iPod|iPad)/ig) ? "iOS" : "Android")
};
GzacwlZhongsou.prototype.share = function() {
	var sharedData = {
		category: "share",
		title: this.gzacwl.shareData.title,
		url: this.gzacwl.shareData.link,
		image: this.gzacwl.shareData.imgurl,
		description: this.gzacwl.shareData.content
	};
	if (this.type == "iOS") {
		location.href = "ac.onclick://" + encodeURIComponent(JSON.stringify(sharedData))
	} else if (window.JavascriptInterface && JavascriptInterface.onJSClick) {
		JavascriptInterface.onJSClick(JSON.stringify(sharedData))
	}
};
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();