window.addEventListener("load", function() {
	setTimeout(function() {
		window.scrollTo(0, 1)
	}, 0)
});

function qike_h5_v1_refer() {
	if (navigator.userAgent.indexOf("qikegameplayer") != -1) {
		qike_h5_v1_show = false;
		return false
	}
	if (qike_h5_v1_checkmobile() != "android" && qike_h5_v1_checkmobile() != "iphone" && qike_h5_v1_checkmobile() != "ipad") {
		qike_h5_v1_show = false;
		return false
	}
	var refer = document.referrer;
	if (refer.indexOf('iwan.baidu.com') > 0) {
		qike_h5_v1_logo = "http://i5.7k7kimg.cn/cms/cms10/20150825/165502_2605.png";
		qike_h5_v1_oursite = false
	}
	if (navigator.userAgent.indexOf("onewayer.com") != -1) {
		qike_h5_v1_ad = {
			"content": "<a style=\"display:block;width:320px;height:320px\" href=\"http:\/\/www.zeze.com\/app\/zeze_h5.html\" target=\"_15\"><img src=\"http:\/\/i2.7k7kimg.cn\/cms\/cms10\/20150901\/170211_4264.png\" width=\"320\" height=\"320\"\/><\/a>"
		};
		qike_h5_v1_oursite = false
	}
	if (location.href.indexOf('?kuaizhan') > 0) {
		qike_h5_v1_logo = "http://i5.7k7kimg.cn/cms/cms10/20150916/124352_8225.png";
		qike_h5_v1_oursite = false
	}
};

function qike_h5_v1_checkmobile() {
	var ua = navigator.userAgent;
	ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
	if (ua.match(/(Android)/i)) {
		return "android"
	}
	if (ua.match(/(iPhone|iPod)/i)) {
		return "iphone"
	}
	if (ua.match(/(iPad)/i)) {
		return "ipad"
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(Adr)/i)) {
			return "android"
		}
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(iPh)/i)) {
			return "iphone"
		}
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(iPd)/i)) {
			return "ipad"
		}
	}
};

function qike_h5_v1_init() {
	if (qike_h5_v1_show == false) {
		return false
	}
	var _0 = [];
	_0.push('<div id="J-qike-h5-v1-logo"><img src="' + qike_h5_v1_logo + '" height="80"/></div>');
	_0.push('<div id="J-qike-h5-v1-progress">...游戏马上开始...</div>');
	_0.push('<div id="J-qike-h5-v1-adbox">');
	_0.push('<a id="J-qike-h5-v1-close">×</a>');
	_0.push('<div id="J-qike-h5-v1-addefault" style="display:none;"></div>');
	_0.push('<div id="J-qike-h5-v1-ad">');
	_0.push('<iframe id="ad_1" src="about:blank" width="320" height="320" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border:0px;"></iframe>');
	_0.push('</div>');
	_0.push('</div>');
	var _1 = document.createElement("div");
	_1.id = "J-qike-h5-v1-mask";
	_1.style = "display:none;";
	document.body.appendChild(_1);
	var _1 = document.createElement("div");
	_1.id = "J-qike-h5-v1-load";
	_1.style = "display:none;";
	document.body.appendChild(_1);
	_1.innerHTML = _0.join("");
	var iframe = document.getElementById("ad_1");
	var doc = iframe.contentWindow.document;
	var ad = qike_h5_v1_ad;
	var html = ad.content;
	if (!/<body>/.test(html)) {
		html = '<!DOCTYPE html><body>' + html + '</body>'
	}
	doc.open();
	doc.write(html);
	doc.close()
};

function qike_h5_v1_ui() {
	if (qike_h5_v1_show == false) {
		return false
	}
	var _3 = 0,
		_4 = 0,
		_2 = 1;
	if (window.innerWidth) {
		_3 = window.innerWidth
	} else if ((document.body) && (document.body.clientWidth)) {
		_3 = document.body.clientWidth
	}
	if (document.documentElement && document.documentElement.clientWidth) {
		_3 = document.documentElement.clientWidth
	}
	if (window.innerHeight) {
		_4 = window.innerHeight
	} else if ((document.body) && (document.body.clientHeight)) {
		_4 = document.body.clientHeight
	}
	if (document.documentElement && document.documentElement.clientHeight) {
		_4 = document.documentElement.clientHeight
	}
	if (_3 <= _4) {
		_2 = (_3 / 350)
	} else {
		_2 = (_4 / 461)
	}
	var _6 = document.getElementById("J-qike-h5-v1-mask");
	_6.style.cssText = "z-index:90000002;position:fixed;width:100%;height:100%;top:0;left:0;background: #01a8fe;background: -moz-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#46afff),color-stop(100%,#ffffff));background: -webkit-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -o-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -ms-linear-gradient(top,#46afff 0%,#ffffff 100%);background: linear-gradient(to bottom,#46afff 0%,#ffffff 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#46afff',endColorstr='#ffffff',GradientType=0 );";
	var _7 = document.getElementById("J-qike-h5-v1-load");
	_7.style.cssText = "transform:scale(" + _2 + ");-webkit-transform:scale(" + _2 + ");-o-transform:scale(" + _2 + ");-moz-transform:scale(" + _2 + ");z-index:90000003;position:fixed;width:350px;top:50%;left:50%;margin-left:-175px;margin-top:-256px;text-align:center;color:#000;font-family: 'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;font-size:16px;";
	var _13 = document.getElementById("J-qike-h5-v1-logo");
	_13.style.cssText = "position:relative;width:100%;text-align:center;margin:40px auto 0;";
	var _14 = document.getElementById("J-qike-h5-v1-progress");
	_14.style.cssText = "position:relative;width:100%;text-align:center;line-height:30px;";
	var _12 = document.getElementById("J-qike-h5-v1-adbox");
	_12.style.cssText = "position:relative;width:320px;height:320px;text-align:center;border:#fff solid 10px;border-radius:5px;background:#fff;margin:20px auto 0;";
	if (navigator.userAgent.toLowerCase().indexOf("android") != -1) {
		var _9 = document.getElementById("J-qike-h5-v1-addefault");
		_9.style.cssText = "position:absolute;width:320px;height:320px;z-index:1;";
		_9.innerHTML = '<a href="http://um0.cn/pV3YE/"><img src="http://i5.7k7kimg.cn/cms/cms10/20150119/192739_1277.png"/></a>'
	}
	var _10 = document.getElementById("J-qike-h5-v1-ad");
	_10.style.cssText = "position:absolute;width:320px;height:320px;z-index:90000004;overflow:hidden;";
	var _8 = document.getElementById("J-qike-h5-v1-close");
	_8.onclick = qike_h5_v1_close;
	_8.style.cssText = "position:absolute;display:block;width:28px;height:28px;line-height:28px;text-align:center;background:#007cff;color:#fff;border:#fff solid 1px;border-radius:15px;top:-30px;left:50%;margin-left:-15px;font-weight:bold;cursor:pointer;"
};

function qike_h5_v1_close() {
	var _6 = document.getElementById("J-qike-h5-v1-mask");
	_6.style.cssText = "";
	_6.style.display = "none";
	_6.innerHTML = "";
	var _7 = document.getElementById("J-qike-h5-v1-load");
	_7.style.cssText = "";
	_7.style.display = "none";
	_7.innerHTML = "";
	clearTimeout(qike_h5_v1_nid);
	qike_h5_v1_show = false
};

function qike_h5_v1_progress() {
	if (qike_h5_v1_show == false) {
		clearTimeout(qike_h5_v1_nid);
		return false
	}
	if (qike_h5_v1_time >= qike_h5_v1_totaltime) {
		qike_h5_v1_close()
	} else {
		var _5 = qike_h5_v1_totaltime - qike_h5_v1_time;
		_5 = Math.ceil(_5 / 1000);
		if (_5 <= 0) {
			_5 = 1
		}
		document.getElementById("J-qike-h5-v1-progress").innerHTML = '...游戏 <span style="color:#f00">' + _5 + '</span> 秒后开始...';
		qike_h5_v1_nid = setTimeout('qike_h5_v1_progress()', 500)
	}
	qike_h5_v1_time = qike_h5_v1_time + 500
};
var qike_h5_v1_logo = "http://i5.7k7kimg.cn/cms/cms10/20141226/191605_9067.png";
var qike_h5_v1_ad = {
	"content": "<script type=\"text\/javascript\">var cpro_id=\"u1466908\";(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",hn:\"0\",wn:\"0\",imgRatio:\"1.7\",scale:\"20.20\",pat:\"6\",tn:\"template_inlay_all_mobile_lu_native\",rss1:\"#FFFFFF\",adp:\"1\",ptt:\"0\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\",ptbg:\"70\",ptp:\"1\"}<\/script><script src=\"http:\/\/cpro.baidustatic.com\/cpro\/ui\/cm.js\" type=\"text\/javascript\"><\/script>"
};
var qike_h5_v1_oursite = true;
var qike_h5_v1_totaltime = 5000;
var qike_h5_v1_time = 0;
var qike_h5_v1_show = true;
qike_h5_v1_refer();
qike_h5_v1_init();
qike_h5_v1_ui();
var qike_h5_v1_nid = setTimeout('qike_h5_v1_progress()', 500);
window.onresize = function() {
	qike_h5_v1_ui()
};
if (qike_h5_v1_oursite == true) {
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : "   http://");
	document.write(unescape("%3Cspan id='cnzz_stat_icon_30098529'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "w.cnzz.com/c.php%3Fid%3D30098529' type='text/javascript'%3E%3C/script%3E"));
	var _11 = (("https:" == document.location.protocol) ? " https://" : "   http://");
	document.write(unescape("%3Cscript src='" + _11 + "hm.baidu.com/h.js%3F2330ee0a702a2807b28bfe00eaeb5bbf' type='text/javascript'%3E%3C/script%3E"))
} else {
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cspan id='cnzz_stat_icon_1253200421'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "w.cnzz.com/c.php%3Fid%3D1253200421' type='text/javascript'%3E%3C/script%3E"))
}