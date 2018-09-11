<?php
/**************
	@后台数据公共函数
	@CopyRight gzacwl
	@file:game.php
	@author bo 595501464@qq.com
	@2016-10-22
***************/

//游戏分类
function get_game_typearr($where=''){
	$sql = "select sysid,gt_name from ".get_table("game_type")."where 1 $where";
	$result = $GLOBALS["conn"]->Query($sql);
	$rs = $GLOBALS["conn"]->getAll($result);
	$type_list = array();
	foreach($rs as $k=>$v){
		$type_list[]= $v;
	}
	return $type_list;
}


function get_logname($user_id){//获取用户登录名
	$where = " and sysid=$user_id";
	$user_info = get_info($GLOBALS["conn"],'admin',array('a_name'),$where);
	if($user_info){
		return $user_info['a_name'];
	}else{
		return false;
	}
}

function get_realname($user_id){//获取用户真实姓名
	$where = " and sysid=$user_id";
	$info  = get_info($GLOBALS["conn"],'admin',array('a_truename'),$where);
	if($info){
		return $info['a_truename'];
	}else{
		return false;
	}
}

function get_right_name($right_id){//获取权限名称
	$where = " and ar_id=$right_id";
	$info  = get_info($GLOBALS["conn"],'admin_right',array('ar_name'),$where);
	if($info){
		return $info['ar_name'];
	}else{
		return false;
	}
}
//获取活动名称
function get_active_name($id){
	$sql = "SELECT a_name FROM ".get_table('active_info')." WHERE sysid=$id";
	$tmp = $GLOBALS['conn'] -> Query($sql);
	$tmp = $GLOBALS['conn'] -> FetchArray($tmp);
	return $tmp['a_name'];
	
}
function get_name_newstype($typeid){//获取新闻分类名称
	$where = " and sysid=$typeid";
	$info  = get_info($GLOBALS["conn"],'news_type',array('nt_name'),$where);
	if($info){
		return $info['nt_name'];
	}else{
		return false;
	}
}

function get_name_gametype($typeid){//获取游戏分类名称
	$where = " and sysid=$typeid";
	$info  = get_info($GLOBALS["conn"],'game_type',array('gt_name'),$where);
	if($info){
		return $info['gt_name'];
	}else{
		return false;
	}
}
//获取游戏名称
function get_game_title($id){
	$tmp = get_info($GLOBALS['conn'],'game',array('g_name')," and sysid=$id");
	$tmp['title_str'] = $tmp['g_name'];
	if(strlen($tmp['title_str'])>30){
			$tmp['title'] = substr($tmp['title_str'],0,30)."...";
	}else{
		$tmp['title'] = $tmp['title_str'];
	}
	return $tmp;
}
//获取资讯名称
function get_news_title($id){
	
	$tmp = get_info($GLOBALS['conn'],'news',array('n_title')," and sysid=$id");
	$tmp['title_str'] = $tmp['n_title'];
	if(strlen($tmp['title_str'])>30){
			$tmp['title'] = substr($tmp['n_title'],0,30)."...";
	}else{
		$tmp['title'] = $tmp['title_str'];
	}
	return $tmp;
}
function get_game_name($game_id=""){//获取游戏名称
	$game_list = array();
	if($game_id>0){
		$where = " sysid=$game_id";
	}elseif($game_id===0){//当游戏ID为0
		$game_list[$game_id] = 'hihigame平台';
		$where = " sysid=$game_id";
	}else{
		$where = " 1=1";
	}

	$sql = "select sysid,g_name from ".get_table("game")." where $where";
	
	$result = $GLOBALS["conn"]->query($sql);
	if($result){
		while($rs = $GLOBALS["conn"]->FetchArray($result)){
			$game_list[$rs['sysid']] = $rs['g_name'];
		}
		return $game_list;	
	}else{
		return false;
	}
}


function get_btype_name($type_id){//获取问题分类名称
	if(!empty($type_id)){
		$where = " sysid=$type_id";
	}else{
		$where = "1=1";
	}
	$type_list = array();
	$sql ="select sysid,bt_name from ".get_table("bug_type")." where $where";
	$result = $GLOBALS["conn"]->query($sql);
	if($result){
		while($rs=$GLOBALS["conn"]->FetchArray($result)){
			$type_list[$rs['sysid']] = $rs['bt_name'];
		}
		return $type_list;
	}else{
		return false;
	}

}

function get_status_name($status_id){//获取状态名称
	switch($status_id){
		case '1':
			$s_name ="开启";
		break;
		case '2':
			$s_name ="关闭";
		break;
		case '3':
			$s_name ="关闭不显示";
		break;
		case '4':
			$s_name ="删档测试";
		break;
		case '5':
			$s_name ="不删档测试";
		break;
		default:
			$s_name = "";
		break;
	}
	return $s_name;
}

//获取图片分类名称
function get_ad_type($type_id){
	$where = " and sysid=$type_id";
	$right_info = get_info($GLOBALS["conn"],'ad_type',array('at_name'),$where);
	if($right_info){
		return $right_info['at_name'];
	}else{
		return false;
	}
}

//获取小游戏分类
function get_ftype_name($type_id){
	$where = " and sysid=$type_id";
	$right_info = get_info($GLOBALS["conn"],'faq_type',array('fa_name'),$where);
	if($right_info){
		return $right_info['fa_name'];
	}else{
		return false;
	}
}


//获取广告类型名称_返回ID
function get_ad_type_name_id($adtypename){
	if(empty($adtypename)){
		$web_list=0;
		return $web_list;
	}else{
		$condition = " at_name='".trim($adtypename)."' ";
	}
	$sql = "select sysid,at_name from ".get_table("ad_type")." where $condition";
	$rs = $GLOBALS["conn"]->query($sql);
	if($rs){
		if($GLOBALS["conn"]->NumRows($rs)>0){
			$row = $GLOBALS["conn"]->FetchArray($rs);
			$web_list = intval($row['sysid']);
		}else{
			$web_list=0;
		}
	}else{
		$web_list=0;
	}
	return $web_list;
}


/***********
*功能：获取用户信息
*@param int $uid 用户id
*return array $row
*/
function get_user_info($uid){
	$sql = "select * from ".get_table("members")." where m_userid=$uid";
	$rs = $GLOBALS["conn"]->Query($sql);
	if($rs){
		$row=$GLOBALS["conn"]->FetchArray($rs);
		return $row;
	}else{
		return false;
	}
}

/***********
*功能：获取用户信息
*@param int $uname 用户登陆名
*return array $row
*/
function get_user_info_byname($uname){
	$sql = "select m_userid,m_regtime,m_cardnum,m_username from ".get_table("members")." where m_username='".$uname."'";
	$rs = $GLOBALS["conn"]->Query($sql);
	if($rs){
		$row=$GLOBALS["conn"]->FetchArray($rs);
		return $row;
	}else{
		return false;
	}
}
//获取某个表所有信息
function active($str='*',$table,$where=''){
	$sql = "SELECT $str FROM ".get_table($table)." WHERE 1 $where";
	$result = $GLOBALS['conn'] -> Query($sql);
	$tmp = $GLOBALS['conn'] -> getAll($result);
	return $tmp;
}
//获取会员名称
function member_name($userid){
	$sql = "SELECT m_username FROM ".get_table('members')." WHERE m_userid=$userid";
	$result = $GLOBALS['conn'] -> Query($sql);
	$tmpinfo = $GLOBALS['conn'] -> FetchArray($result);
	return $tmpinfo['m_username'];
}
//根据ID获取微信号
function wechat_info($str,$where=''){
	$sql = "SELECT $str FROM ".get_table('wechat_design')." where 1 $where";
	$result = $GLOBALS['conn'] -> Query($sql);
	return $temp_array = $GLOBALS['conn'] -> getAll($result);
} 

//获取问题追加内容
function get_bug_addcontent($bug_id){
	$where = "and ab_bugid=$bug_id";
	$addcontent = get_info($GLOBALS["conn"],'bug_add',array(),$where,'',true);
	$addcontentarr = array();
	foreach($addcontent as $key=>$value){
		$addcontentarr[] = array(
			"ab_inserttime"=>date('Y-m-d H:i:s',$value['ab_inserttime']),
			"ab_addcontent"=>htmlspecialchars($value['ab_addcontent']),
			"ab_addpic"=>$value['ab_addpic'],
			"ab_bugid"=>$value['ab_bugid'],
			"sysid"=>$value['sysid']
		);
		
	}
	return $addcontentarr;
}

//检查是否已存在此微信号信息
function check_wechat($table,$where,$url,$msg){
	$sql = 'SELECT * FROM '.get_table($table).' where 1 '.$where;
	$result = $GLOBALS['conn'] -> Query($sql);
	$info = $GLOBALS['conn'] -> FetchArray($result);
	$num = $GLOBALS['conn'] -> NumRows($result);
	if($num){
		echo "<script>if(window.confirm('$msg')){location.href='".$url."?action=edit&id=".$info['sysid']."';}else{location.href='".$url."';};</script>";
		exit();
	}
}

//发送微信消息给用户
//$data 数组 
//$type 0:用户 
function send_wx_msg($data=array(),$type=0){
	$ip    = return_user_ip();
	$user_openid = get_user_info($data['uid']);
	$wx_tmpinfo = array(
		'first' => array(
			'value' => $data['umsg'],
			'color' => '#000'
		),
		'keyword1' => array(
			'value' => $data['order'],
			'color' => '#000'
		),
		'keyword2' => array(
			'value' => $data['static'],
			'color' => '#000'
		),
		'remark' => array(
			'value' => urlencode($data['wxstr']),
			'color' => '#000'
		)
	);
	if($user_openid['m_wxopenid']){
		$send_info = send_tmpinfo( $user_openid['m_wxopenid'], $wx_tmpinfo, $GLOBALS["appid"], $GLOBALS["secret"], $data['url'], $GLOBALS["tmplmsg"]  );
		$reinfo = $send_info -> errmsg;
		if($reinfo == 'ok'){
			admin_log(0,'系统发送',"给用户 ".$data['uid']." 发送微信订单消息成功",THIS_DATETIME,$ip);
		}else{
			admin_log(0,'系统发送',"给用户 ".$data['uid']." 发送微信订单消息失败，原因：参数错误错，错误代码为：".$send_info -> errcode,THIS_DATETIME,$ip);
		}
	}
}

//发送微信消息给用户 的上级
//$data 数组 
//$type 0:用户 
function send_rem_msg($data=array(),$type=0){
	$ip    = return_user_ip();
	$user_openid = get_user_info($data['uid']);
	$wx_tmpinfo = array(
		'first' => array(
			'value' => $data['umsg'],
			'color' => '#000'
		),
		'Good' => array(
			'value' => $data['order'],
			'color' => '#000'
		),
		'contentType' => array(
			'value' => $data['static'],
			'color' => '#000'
		),
		'remark' => array(
			'value' => urlencode($data['wxstr']),
			'color' => '#000'
		)
	);
	if( $user_openid['m_wxopenid'] ){
		$send_info = send_tmpinfo( $user_openid['m_wxopenid'], $wx_tmpinfo, $GLOBALS["appid"], $GLOBALS["secret"], $data['url'], $GLOBALS["tmplmsg2"]  );
		$reinfo = $send_info -> errmsg;
		if($reinfo == 'ok'){
			admin_log(0,'系统发送',"给用户 ".$data['uid']." 发送微信服务消息成功",THIS_DATETIME,$ip);
		}else{
			admin_log(0,'系统发送',"给用户 ".$data['uid']." 发送微信服务消息失败，原因：参数错误错，错误代码为：".$send_info -> errcode,THIS_DATETIME,$ip);
		}
	}
}




