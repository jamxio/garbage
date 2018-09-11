<?php
/**************
	@验证是否登录
***************/
if($_SESSION['admin']==''){
	header("location:login.php");
	exit;
}

?>