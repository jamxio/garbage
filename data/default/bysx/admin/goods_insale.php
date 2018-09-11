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
//include("myeditor/fckeditor.php");
$realname = $_SESSION['realname'];  //真实姓名
$logname = $_SESSION['admin'];      //管理员登录名
$admin_id = $_SESSION['admin_id'];  //管理员ID
$done_ip = return_user_ip();        //管理员IP



$action = get_param("action");
$status = get_param("status") == 2? 2 : 1;

#确定页面位置
if($action == "add"){
	$str = '?action=add">发布产品';
	$goods_insale = "goods_add";
}else if($status == 2){
	$str = '?status=2">产品仓库';
	$goods_insale = "goods_lib";
}else{
	$str = '">线上产品';
	$goods_insale = "goods_insale";
}

$smarty->assign('isactive','goods');
$smarty->assign('isactive_li',$goods_insale);
$smarty->assign('breadcrumb','<li><i class="icon-home"></i><a href="javascript:;">产品管理</a> <i class="icon-angle-right"></i></li><li><a href="goods_insale.php'.$str.'</a></li>');
$smarty->assign('status',$status);

switch($action){

	case(backorup)://上架或下架
		$g_id = intval(get_param('id'));
		if(!empty($g_id)){
			$sql = "SELECT g_status FROM ".get_table("goods")." where g_id = ".$g_id;
			$query = $GLOBALS["conn"]->Query($sql);
			$value = $GLOBALS["conn"] -> FetchArray($query);
			if($value['g_status'] == 1){
				$status = 2;
			}elseif($value['g_status'] == 2){
				$status = 1;
			}
			$sql = "UPDATE ".get_table("goods")." SET g_status = ".$status." where g_id = ".$g_id;
			$query = $GLOBALS["conn"]->Query($sql);
			echo "<script language='javascript'>alert('操作成功');location.href='goods_insale.php?status=".$value['g_status']."';</script>";
			exit;
		}

	break;

	case('del'):
		$g_id = intval(get_param('id'));
		if(!empty($g_id)){
			$sql = "SELECT g_status FROM ".get_table("goods")." where g_id = ".$g_id;
			$query = $GLOBALS["conn"]->Query($sql);
			$value = $GLOBALS["conn"] -> FetchArray($query);
			$sql = "DELETE FROM ".get_table("goods")." where g_id = ".$g_id;
			$query = $GLOBALS["conn"]->Query($sql);
			echo "<script language='javascript'>alert('操作成功');location.href='goods_insale.php?status=".$value['g_status']."';</script>";
			exit;
		}

	break;

	case('add'):
		$g_id = intval(get_param('id'));
		
		$sql = "SELECT g_type FROM ".get_table("goods")." group by g_type";//产品类别表
		$query = $GLOBALS["conn"]->Query($sql);
		while($value = $GLOBALS["conn"] -> FetchArray($query)) {
			$goods_type_list[] = $value;
		}
		if(!empty($g_id)){
			$sql = "SELECT * FROM ".get_table("goods")." where g_id = ".$g_id;
			$query = $GLOBALS["conn"]->Query($sql);
			$value = $GLOBALS["conn"] -> FetchArray($query);
		}
		$smarty->assign("method","edit");
		$smarty->assign('goods_info',$value);


	break;

	case('add_save'):
		foreach($_POST as $key => $value){
		$$key = trim($value);
		}
		if($goods_name==null|$goods_price==null){
			echo "<script>alert('名称和价格都不能为空');history.go(-1);</script>";
			exit;
		}
		$g_info = array(
			'g_name' => $goods_name,
			'g_price' => $goods_price,
			'g_introduce' => $goods_introduce,
			'g_status' => $goods_status,
		);

		$g_id = $goods_id;

		if($goods_type){
			$g_info['g_type'] = $goods_type;
		}elseif($goods_type_mix == null){
			$g_info['g_type'] = "其他";
		}else{
			$g_info['g_type'] = $goods_type_mix; 
		}
		unset($g_info['g_type_mix']);
		$g_info['g_time'] = date('Y-m-d H:i:s');
		#unset($goods_type);


		if($g_id){
			$where = " and g_id=$g_id";
			$info = update_record($GLOBALS["conn"],'goods',$g_info,array(),$where);
			if($info){
				$msg = "管理员：".$logname." 成功修改产品,ID：".$goods_id;
				admin_log($admin_id,$logname,$msg,THIS_DATETIME,$done_ip);
				
				echo "<script>alert('修改成功');location.href='goods_insale.php?status=".$goods_status."';</script>";
			}else{
				echo "<script>alert('修改失败');history.go(-1);</script>";
			}

		}else{
			$info = add_record($GLOBALS['conn'],'goods',$g_info);
			if($info){
				//写入管理员日志
				$msg = "管理员：".$logname." 成功添加产品";
				admin_log($admin_id,$logname,$msg,THIS_DATETIME,$done_ip);
				
				echo "<script>alert('添加成功');location.href='goods_insale.php?action=add';</script>";
			}else{
				echo "<script>alert('添加失败');history.go(-1);</script>";
			}
		}
	break;

	default:
		$condition = ' g_status ='.$status;
		$goods_type=get_param('goods_type');
		if($goods_type != '所有' && !empty($goods_type)){
			$condition .= " and g_type = '$goods_type' ";
		}
		$name = trim(get_param('goods_key'));
		if(!empty($name)) $condition .= " and g_name like '%$name%'";
		$condition .= ' order by g_time desc';
		$pagesize = 20;
		$page = empty($_GET['page'])?1:intval($_GET['page']);
		if($page<1) $page=1;
		$start = ($page-1)*$pagesize;
		
		//产品列表
		$url = $_SERVER['PHP_SELF'];

		$totalrecord = $GLOBALS["conn"]->NumRows($GLOBALS["conn"]->Query("SELECT * FROM ".get_table("goods")." where $condition"));
		
		$sql = "SELECT * FROM ".get_table("goods")." where ".$condition." LIMIT $start, $pagesize";
		$url .= "?action=$action&status=$status";

		$query = $GLOBALS["conn"]->Query($sql);
		while($value = $GLOBALS["conn"] -> FetchArray($query)) {
			$value['g_id'] = $value['g_id'];
			$value['g_name'] = $value['g_name'];
			$value['g_type'] = $value['g_type'];
			#if($value['g_time']) $value['g_time'] = date('Y-m-d H:i',$value['g_time']);
			$goods_list[] = $value;
		}
		
		$sql = "SELECT g_type FROM ".get_table("goods")." group by g_type";//产品类别表
		$query = $GLOBALS["conn"]->Query($sql);
		while($value = $GLOBALS["conn"] -> FetchArray($query)) {
			$goods_type_list[] = $value;
		}

		$multi = multitwo($totalrecord, $pagesize, $page, $url);

		$pageinfo = array(
			'page' => $page,
			'totalrecord' => $totalrecord,
			'pagesize' => $pagesize,
			'totalpage' => ceil($totalrecord/$pagesize),
			'multi' => $multi
		);
		
		$smarty->assign('pageinfo', $pageinfo);//分页信息
		$smarty->assign('goods_list', $goods_list);//产品列表
		$smarty->assign('total',$totalrecord);
		$smarty->assign('web_dir',WEBPATH_MAIN_DIR_INC);
		$smarty->assign('goods_type',$goods_type);//当前选择类别
		$smarty->assign('goods_key',$name);//当前选择类别
		$smarty->assign('method','list');//当前需要显示界面的参数
	break;
}
		
$smarty->assign('goods_type_list',$goods_type_list);//类别列表
$smarty->display("goods_insale.html");

//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>