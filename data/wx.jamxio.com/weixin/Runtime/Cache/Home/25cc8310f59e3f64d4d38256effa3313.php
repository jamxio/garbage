<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head lang="en"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="HandheldFriendly" content="true">
    <meta name="MobileOptimized" content="640">
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">
    <meta name="browsermode" content="application">
    <meta name="x5-page-mode" content="app">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="width=640,target-densitydpi=device-dpi,maximum-scale=1.0, user-scalable=no">
    <script>
        function setWidth(a){if(/Andriod/i.test(navigator.userAgent)){var c,b=window.innerWidth;(b!=a)&&(c=b/a),document.addEventListener("DOMContentLoaded",function(){var d = document.getElementsByTagName("body")[0];d.style.webkitTransformOrigin = "left top";d.style.webkitTransform="scale("+c+")"},!1)}}setWidth(640);
    </script>
    <title>自助购货-选择商品</title>
    <link rel="stylesheet" href="__PUBLIC__/smao/Buy/goods/css/index.css">
    <style>
.black_overlay{display:none;position:fixed;top: 0%;left: 0%;width:100%;height:100%;background-color: black;-moz-opacity: 0.8;opacity:.80;filter: alpha(opacity=80);}
.white_content {display: none; position:fixed; top:50%;left: 50%; margin-left:-130px; margin-top:-70px; width:260px;height:140px;background-color: white;overflow: auto;moz-border-radius: 4px;border-radius: 4px; }

</style>
    <script src="__PUBLIC__/smao/Buy/goods/js/jquery.js"></script>
    <script>
        	$(function () {
	            //初始化div，并注册事件
	            var initDiv = function () {
	                $(".box_2 div").css("background", "");
	                $(".box_2 div").css("color", "");
	            };
	            initDiv();
	            $(".box_2 div").click(function () {
	                   initDiv();
	                   //当前被点击的div改变背景色
	                   $(this).css("background", "#666666");
	                   $(this).css("color","#ffffff");
	                   var t = $(this).children("input").val();
		 		$("#code_type").val(t);
                   });
        	});

        	function buy(){
			var device_no = $("#device_no").val(),
			code_type = $("#code_type").val();
			if(code_type==0){
				alert('请选择商品');
				return;
			}
			ShowDiv("YouDiv","weixin");
			location.href = "{:U('smao/Buy/topay/')}?device_no="+device_no+"&good_type="+code_type;
		}
		//弹出隐藏层
		function ShowDiv(show_div,bg_div){
			document.getElementById(show_div).style.display='block';
			document.getElementById(bg_div).style.display='block' ;
			var bgdiv = document.getElementById(bg_div);
			bgdiv.style.width = document.body.scrollWidth;
			// bgdiv.style.height = $(document).height();
			$("#"+bg_div).height($(document).height());
		};
		//关闭弹出层
		function CloseDiv(show_div,bg_div)
		{
			document.getElementById(show_div).style.display='none';
			document.getElementById(bg_div).style.display='none';
		};


    </script>
</head>
<body style="background-color:#3fac83">
<div class="box_1">
    <p>设备编号：{$info.robot}</p>
    <p class="p1">
        <span style="background: url('__PUBLIC__/smao/Buy/goods/img/1.png')"></span>
        <span style="background: url('__PUBLIC__/smao/Buy/goods/img/2.png')"></span>
        <span style="background: url('__PUBLIC__/smao/Buy/goods/img/3.png')"></span>
        <span style="background: url('__PUBLIC__/smao/Buy/goods/img/4.png')"></span>
    </p>
</div>
<div class="box_2">
<if condition="$info.num1 gt 0">
   <div class="box_2_1">
       <span style="text-align: left;width: 40%;height: 100%;margin-left: 20px">{$info.goods1}</span>
       <span style="text-align: right;width:40%; float: right;margin-right: 20px">{$info.price1}元</span>
       <input type="hidden" value="1"/>
   </div>
   </if>
<if condition="$info.num2 gt 0">
    <div class="box_2_2">
        <span style="text-align: left;width: 40%;height: 100%;margin-left: 20px">{$info.goods2}</span>
        <span style="text-align: right;width:40%; float: right;margin-right: 20px">{$info.price2}元</span>
       <input type="hidden" value="2"/>
    </div>
   </if>
<if condition="$info.num3 gt 0">
    <div class="box_2_3">
        <span style="text-align: left;width: 40%;height: 100%;margin-left: 20px">{$info.goods3}</span>
        <span style="text-align: right;width:40%; float: right;margin-right: 20px">{$info.price3}元</span>
       <input type="hidden" value="3"/>
    </div>
</div>
</if>

        <input type="hidden" name="code_type" id="code_type" value="0">
	<input type="hidden" name="device_no" id="device_no" value="{$info.robot}">


<div class="box_3">
    <a href="javascript:void(0);" onclick="buy();">立即购买</a>
</div>

<div id="weixin" class="black_overlay" style="z-index:999" ></div>
<div id="YouDiv" style="height:120px;z-index:9999" class="white_content" aria-hidden="true" data-width="260" data-height="280">
	<div class="hbrh" style="font-size:18px"><center>
		<p></p><p></p>
		<p id="message">预付单生成中...</p>
		<p></p>
		<p>请耐心等候</p></center>
	</div>
</div>
</body>
</html>