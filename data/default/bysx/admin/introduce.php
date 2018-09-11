<?php
/**************
	@后台产品管理
	@CopyRight teamtop 
	@file:goods_insale.php
	@author Jamxio
	@2017-02-14
***************/	
include_once("config.admin.php");
include_once("check_login.php");
$realname = $_SESSION['realname'];  //真实姓名
$logname = $_SESSION['admin'];      //管理员登录名
$done_ip = return_user_ip();        //管理员IP

$action = get_param("action");

$smarty->assign('isactive','introduce');
$smarty->assign('breadcrumb','<li><i class="icon-home"></i><a>个人介绍</a> </li>');

switch($action){
	default:
		$content = get_param('editorValue');
		if(!empty($content))
		file_put_contents(WEBPATH_DIR.'comn/introduce.txt',$content);//正确写入文件代表发表成功
		//echo file_get_contents(WEBPATH_DIR.'comn/'.index.'.txt');exit;
		$smarty->assign('index_content',file_get_contents(WEBPATH_DIR.'comn/introduce.txt'));
	break;
}		
$smarty->display("introduce.html");

//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>