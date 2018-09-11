<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>布拉达克-video</title>
	<link href="__PUBLIC__/video/css/video-js.min.css" rel="stylesheet">	
	<style>
		body{background-color: #191919}
		.m{ width: 740px; height: 400px; margin-left: auto; margin-right: auto; margin-top: 100px; }
	</style>
</head>

<body>
	<div class="m">
		<video id="my-video" class="video-js" controls preload="auto" width="740" height="400"
		  poster="__PUBLIC__/video/m.png" data-setup="{}">
			<source src="look_video?mid=<?php echo ($_GET['mid']); ?>&imgid=<?php echo ($_GET['imgid']); ?>" type="video/mp4">http://jq22com.qiniudn.com/jq22-sp.mp4
			<p class="vjs-no-js">
			  To view this video please enable JavaScript, and consider upgrading to a web browser that
			  <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
			</p>
		</video>
		<script src="__PUBLIC__/video/js/video.min.js"></script>	
		<script type="text/javascript">
			var myPlayer = videojs('my-video');
			videojs("my-video").ready(function(){
				var myPlayer = this;
				myPlayer.play();
				myPlayer.contextmenu = function(){return false;};
			});
		</script>
	</div>

</body>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script type="text/javascript" src='__PUBLIC__/jsapi/zepto.min.js'></script>
<script type="text/javascript" src='__PUBLIC__/jsapi/jsapi.js?ee=33'></script>
</html>