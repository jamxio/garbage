<?php
/**************
	@后台登录文件
***************/
include_once("config.admin.php");
$action =get_param("action");

$done_ip = return_user_ip();       //登录IP

die('eee');
switch($action){
	case 'login':
		if(!empty($_SESSION['user'])){
			echo "<script>alert('你已经登录，无需重复登录！');location.href='index.php';</script>";
			exit();
		}
		$check_code = get_param("CheckCode");
		// if($check_code!=$_SESSION['authnum']){
		// 	echo "<script>alert('验证码错误');location.href='login.php';</script>";
		// 	exit();
		// }
		
		$username = get_param("username");
		$password = md5(get_param("password"));
		$sql = "select * from ".get_table("user")." where username='$username' and is_admin = 1";
		#die($sql);
		$rs = $GLOBALS["conn"]->query($sql);
		$row = $GLOBALS["conn"]->FetchArray($rs);
		#die(var_dump($row));
		if($row["username"]!=''){//用户名存在
			if($row['password']==$password){//密码正确
				$_SESSION['id'] = $row['id'];
				$_SESSION['admin'] = $row['username'];
				$_SESSION['realname'] = $row['name'];
				$_SESSION['is_admin'] = $row['is_admin'];
									
				echo "<script>location.href='index.php';</script>";
				exit();			
			}else{//密码错误					
				echo "<script>alert('账号密码错误');location.href='login.php';</script>";
				exit();								
			}			
		}else{//用户名不存在			
			echo "<script>alert('用户名错误,请重新登录');location.href='login.php';</script>";
			exit();			
		}
		
	break;
	
	case 'logout':
		session_unset();
		session_destroy();
		echo "<script>alert('你已成功退出');location.href='login.php';</script>";
		exit();
	
	break;
	
	default:
		if(!empty($_SESSION['admin'])){
			echo "<script>alert('你已经登录，无需重复登录！');location.href='index.php';</script>";
			exit();
		}
		$smarty->display("login.html");
	break;
}
//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}
?>