<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>demo应用</title>
</head>
<body>
<h1>Hello World!</h1>
<p>
调用包内图片：<img alt="hello" src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','extres'), ENT_QUOTES, 'UTF-8');?>/demo/images/logo.jpg"><br>
</p>
<p>
调用代码：<?php echo htmlspecialchars('<img alt="hello" src="{@G:url.extres}/demo/images/logo.jpg">'); ?>
</p>
</body>
</html>