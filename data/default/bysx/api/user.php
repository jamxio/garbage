<?php
/**************

***************/	
include_once("config.api.php");

$action =get_param('action');
switch($action){
	case 'reg':
		extract($_POST);
		$sql = "SELECT id FROM ".get_table('user')." where username = '".$username."'";
		$query = $GLOBALS["conn"]->Query($sql);
		$value = $GLOBALS["conn"] -> FetchArray($query);
		if($value){
			echo "用户名已存在";exit;
		}
		$arr=array(
			'username'=>$username,
			'password'=>md5($password),
			'name'=>$name==''?"本站用户":$name,
			'sex'=>$sex==''?"男":$sex,
			'age'=>$age==''?20:$age,
		);
		$info = add_record($GLOBALS['conn'],'user',$arr);
		if($info){
			echo '1';exit;
		}else{
			echo "注册失败";exit;
		}
		exit;
	break;

	case 'login':
		extract($_POST);
		$sql = "SELECT id FROM ".get_table('user')." where username = '".$username."' and password = '".md5($password)."'";
		die($sql);
		$query = $GLOBALS["conn"]->Query($sql);
		$value = $GLOBALS["conn"] -> FetchArray($query);
		if($value){
			$_SESSION['userid'] = $value['id'];
			echo "1";exit;
		}else{
			echo "登录失败，检查账号密码";exit;	
		}
	break;

	case 'logout':
		unset($_SESSION['userid']);
		echo '退出成功';
		exit;
	break;

	case 'info':
		if(!empty($_SESSION['userid'])){
			$sql = "SELECT * FROM ".get_table('user')." where id = '".$_SESSION['userid']."'";
			$query = $GLOBALS["conn"]->Query($sql);
			$value = $GLOBALS["conn"] -> FetchArray($query);
			$usertype = $value['is_admin']=='1'?'公告员':'普通用户';
			$htmlstr = "<br/>
                 <h3>资料</h3><br/> 
				 <p>
                 当前用户：<span id='i_name'>".$value['username']."</span>
                 </p><br/>
                 <p>
                 网名：<span id='i_name'>".$value['name']."</span>
                 </p><br/>
                 <p>
                 性别：<span id='i_sex'>".$value['sex']."</span>
                 </p><br/>
                 <p>
                 年龄：<span id='i_age'>".$value['age']."</span>
                 </p><br/>
				 <p>
                 用户类型：<span id='i_gonggao'>".$usertype."</span>
                 </p><br/>";
			echo $htmlstr;exit;
		}else{
			echo 0;
			exit;
		}
	break;

	default:
		echo "未知类型的请求！";
	break;
}
		
//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>