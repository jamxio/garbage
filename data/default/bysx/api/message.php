<?php
/**************

***************/	
include_once("config.api.php");

$action =get_param('action');
switch($action){
	case 'info':
		$a=get_table('user');$b=get_table('message');
		$sql = "SELECT * FROM ".$a.",".$b." where ".$a.".id= ".$b.".userid and ".$a.".is_admin != 1 order by datetime desc";
		$query = $GLOBALS["conn"]->Query($sql);
		$htmlstr = "<div style='width:650px;border:solid 5px #888;padding:5px;'>";		
		while($value = $GLOBALS["conn"] -> FetchArray($query)) {
			$htmlstr.="<div style='margin:3px 0;padding:3px;background:#efb;'><h2>".$value['name']."(".$value['username'].")：";
			$shch = '';
			if(!empty($_SESSION['userid'])&&$_SESSION['userid']==$value['userid']){
				$shch = "<a href='javascript:;' onclick='del(".$value['messid'].");' style='display:inline;'>删除</a>";
			}
			$htmlstr.="</h2><p>发表于<span>".$value['datetime']."</span>".$shch."<br>--------</p><div><p>";
			$htmlstr.= $value['content']."</p></div><br/></div><hr/>";
		}
		echo $htmlstr."<br/></div>";exit;
	break;

	case 'add':
		if(empty($_SESSION['userid'])){
			echo '请登录';exit;
		}else{
			$userid =$_SESSION['userid'];
			$content = trim($_POST['content']);
			if(empty($content)){
				echo '留言不能为空';exit;
			}
			#die(date("Y-m-d H:i:s",time()));
			$arr = array(
				'userid'=> $userid,
				'content'=> $content,
				'datetime'=> date("Y-m-d H:i:s",time()),
			);
			$info = add_record($GLOBALS['conn'],'message',$arr);
			if($info){
				echo '发表成功';exit;
			}else{
				echo "发表失败";exit;
			}
			exit;
		}
	break;

	case 'del':
		if(empty($_SESSION['userid'])){
			echo '请登录';exit;
		}else{
			$messid = get_param('messid');
			$sql = "DELETE FROM ".get_table("message")." where messid = ".$messid;
			$query = $GLOBALS["conn"]->Query($sql);
			if($query){
				echo '删除成功';exit;
			}else{
				echo "删除失败";exit;
			}
			exit;
		}
	break;

	case 'check':
		if(!empty($_SESSION['userid'])){
			$sql = "SELECT * FROM ".get_table('user')." where id = '".$_SESSION['userid']."'";
			$query = $GLOBALS["conn"]->Query($sql);
			$value = $GLOBALS["conn"] -> FetchArray($query);
			$htmlstr = $value['username'];
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