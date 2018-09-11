<?php
//公共函数文件
function name_function(){
	return "
	类库、函数（function，单独的对象），统一以.php后缀；<br>
	在《common.php::name_function()》<hr>";
}
//函数命名规则
function name_rule(){
	return "函数的命名使用小写字母和下划线（小写字母开头）的方式，例如 get_client_ip；<br>
	在《common.php::name_rule》
	<hr>";
}
//类自动加载
//函数:  __autoload()
//未来将会被废弃( spl_autoload_register() 替代)
function __autoload($classname){
	echo "你的类{$classname}不存在，__autoload — 尝试加载未定义的类，<br>在《common.php::__autoload()》，在tp应该应用于Empty控制器<p>";
	$classArr = explode('\\',$classname);
	$trueClassName = end($classArr);
	if($trueClassName != 'Null')
		eval("class ".$trueClassName."{public function __construct(){echo '这是空类$trueClassName<hr/>';}}");
}