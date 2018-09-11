<?php /* Smarty version 2.6.20, created on 2017-04-29 13:35:54
         compiled from login.html */ ?>
<!DOCTYPE html>
<html>	
<head>
<title>个人网站后台登录</title>
<link href="./templates/login/css/login.css" rel='stylesheet' type='text/css' />
<link href="./templates/media/image/favicon.ico" rel="shortcut icon" />
</head>
<body>
<h1><img src="./templates/login/images/jam.gif" alt="网站logo" title="网站logo" width='200' /></h1>
<div class="login-form">
	<!---<div class="close"> </div>-->
	<div class="head-info">
		管理后台
	</div>
	<div class="clear"></div>
	<form action="?action=login" method="post" name="myform">
		<p><input type="text" id="username" name="username" class="text" placeholder="用户名" autofocus /></p>
		<p><input type="password"  name="password" id="password" placeholder="密码" /></p>
		<p><input name="CheckCode" type="text" class="input_val"  value="验证码" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '验证码';}"  size="14" maxlength="4"><img id="code_img" src="../comn/getcode.php" onclick="reflash_image();"></p>
		<div class="signin"><input type="submit" value="登录"  onClick="return doSubmit()"  ></div>
	</form>
</div>
<div class="copy-rights"><p>Copyright &copy; 2017-2018.Personal Jamxio All rights reserved. <a target="_blank" href="<?php echo $this->_tpl_vars['indexurl']; ?>
">江晓个人网站</a></p></div>

<script type="text/javascript">
	function doSubmit(){
		if (document.myform.username.value=="" || document.myform.username.value=='用户名'){
			alert("请输入用户名！");
			document.myform.username.focus();
			return false;
		}
		
		if (document.myform.password.value=="" || document.myform.password.value=='password'){
			alert("请输入密码！");
			document.myform.password.focus();
			return false;
		}
		if (document.myform.CheckCode.value==""){
			alert("请输入验证码！");
			document.myform.password.focus();
			return false;
		}
		return true;
		//document.myform.submit();
	}
	
	function reflash_image(){
		var el = document.getElementById("code_img");
		el.src=WEBPATH_DIR."comn/getcode.php";
	}
	</Script>
<script type="text/javascript" language="javaScript">
<!--
if (window.top != window) {
	window.top.location.href = document.location.href;
}
-->
</script>
</body>
</html>