//var bl = ['game.renphone.cn', 'qxj.vqitong.com', 'weixin.ijiaxing.com.cn'];
var bl = ['game.gzacwl.com', 'game.gzacwl.com', 'www.gzacwl.com'];

function w() {//广告js
	alert('111');
	//document.write('<div id="top_ad" style="position:absolute;bottom:0;z-index:99999;height:50px;left:50%;margin-left:-160px;"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-7026425389676307" data-ad-slot="2430208960"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>');
	document.write('<div id="top_ad" style="position:absolute;bottom:0;z-index:99999;height:50px;left:50%;margin-left:-160px;"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-7026425389676307" data-ad-slot="2430208960"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>');
}

function iw() {
	var a = window.navigator.userAgent.toLowerCase();
	return a.match(/MicroMessenger/i) == 'micromessenger';
}

function ii() {
	var h = window.location.host;
	for (var a in bl) {
		if (bl[a].toLowerCase() == h) return true;
	}
	return false;
}

function sc() {
	var e = new Date();
	e.setTime(e.getTime() + 86400);
	document.cookie = 'BDUU=1;expires=' + e.toGMTString();
}

function ic() {
	var a, b = new RegExp("(^|)BDUU=([^;]*)(;|$)");
	if (a = document.cookie.match(b)) return a[2] == 1;
	else return false;
}
if (true || iw()) {//统计代码
	//document.write('<script type="text/javascript">var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="//hm.baidu.com/hm.js?fa356a94bf5ae253b76fefa953bb56e4";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');
	document.write('<script type="text/javascript"></script>');
	if (ii()) {
		if (true || !ic()) {
			sc();
			w();
		}
	}
}