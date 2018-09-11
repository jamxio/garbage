<?php
/*
	[zde] (C) 2009 Inc.
	Auth: 2009-12 ddcai $
	E-Mail ddcai#21cn.com
	$Action: 公共函数
*/

function toHtml($txt){
	$txt = str_replace("  ","　",$txt);
	$txt = str_replace("<","&lt;",$txt);
	$txt = str_replace(">","&gt;",$txt);
	$txt = preg_replace("/[\r\n]{1,}/is","<br/>",$txt);
	return $txt;
}

//把字符串转化为可以在JS数组里输出的字符串
function jsToHtml($mystr){
	if(empty($mystr)){	return "";	}
	$mystr = str_replace("\r\n","",$mystr);
	$mystr = str_replace("'","\\'",$mystr);
	return $mystr;
}

/*
功能:按长度截取字符串
$string, $length, $dot,$charset
字符串,要取长度,截断符,编码
*/
function cutstr($string, $length, $dot = ' ...',$charset='utf-8') {
	if(strlen($string) <= $length) {	return $string;		}

	$string = str_replace(array('&amp;', '&quot;', '&lt;', '&gt;'), array('&', '"', '<', '>'), $string);
	$strcut = '';
	if(strtolower($charset) == 'utf-8') {
		$n = $tn = $noc = 0;
		while($n < strlen($string)) {
			$t = ord($string[$n]);
			if($t == 9 || $t == 10 || (32 <= $t && $t <= 126)) {
				$tn = 1; $n++; $noc++;
			} elseif(194 <= $t && $t <= 223) {
				$tn = 2; $n += 2; $noc += 2;
			} elseif(224 <= $t && $t <= 239) {
				$tn = 3; $n += 3; $noc += 2;
			} elseif(240 <= $t && $t <= 247) {
				$tn = 4; $n += 4; $noc += 2;
			} elseif(248 <= $t && $t <= 251) {
				$tn = 5; $n += 5; $noc += 2;
			} elseif($t == 252 || $t == 253) {
				$tn = 6; $n += 6; $noc += 2;
			} else {
				$n++;
			}

			if($noc >= $length) {
				break;
			}
		}
		if($noc > $length) {
			$n -= $tn;
		}
		$strcut = substr($string, 0, $n);

	} else {
		for($i = 0; $i < $length; $i++) {
			$strcut .= ord($string[$i]) > 127 ? $string[$i].$string[++$i] : $string[$i];
		}
	}
	$strcut = str_replace(array('&', '"', '<', '>'), array('&amp;', '&quot;', '&lt;', '&gt;'), $strcut);

	return $strcut.$dot;
}

/*
功能:邮箱地址
$email,
字符串
*/
function isemail($email) {
	return strlen($email) > 6 && preg_match("/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/", $email);
}

//=========================begin 时间处理
/**
 * 功能:检查是否为一个合法的时间格式
 * @param   string  $time
 * @return  void
 */
function is_time($time){
    $pattern = '/[\d]{4}-[\d]{1,2}-[\d]{1,2}\s[\d]{1,2}:[\d]{1,2}:[\d]{1,2}/';
    return preg_match($pattern, $time);
}

/**
 * 功能:检查是否为一个合法的日期格式
 * @param   string  $date
 */
function is_date($date){
	$pattern = '/^[\d]{4}-[\d]{1,2}-[\d]{1,2}$/';
	return preg_match($pattern, $date);
}

/**
*功能:返回两个时间差
*参数:$time,$time2 时间1,时间2
*参数:$myformat 返回的时间差格式
*/
function change_format($time,$time2,$myformat="d"){
	$sY = 31536000;//年
	$sM = 2592000;//月(三十天计算)
	$sW = 604800;//星期
	$sD = 86400;//天
	$sH = 3600;//小时
	$sI = 60;//分钟
	$sS = 1;//秒

	$tmp_time = strtotime($time)-strtotime($time2);
	switch($myformat){
		case "y"://年
			$tmp_time = $tmp_time/$sY;
			break;
		case "w"://星期
			$tmp_time = $tmp_time/$sW;
			break;
		case "d"://天
			$tmp_time = $tmp_time/$sD;
			break;
		case "h"://小时
			$tmp_time = $tmp_time/$sH;
			break;
		case "i"://分钟
			$tmp_time = $tmp_time/$sI;
			break;
		case "s"://秒
			$tmp_time = $tmp_time;
			break;
		default://默认返回天
			$tmp_time = $tmp_time/$sD;
			break;
	}
	return $tmp_time;
}

function get_param($param_name){
	$param_value = "";
	if(isset($_POST[$param_name])){
		$param_value = $_POST[$param_name];
	}else if(isset($_GET[$param_name])){
		$param_value = $_GET[$param_name];
	}
	if(!get_magic_quotes_gpc()){//加上检查数据防sql注入
		$param_value = sql_addslashes($param_value);
	}
	return $param_value;
}

function sql_addslashes($value){
    if (empty($value)){
        return $value;
    }else{
        return is_array($value) ? array_map('sql_addslashes', $value) : addslashes($value);
    }
}

/* *
 * 获取$_POST $_GET 数组
 * $delim  不为空，则以其为间隔符号合并成字符串
 * $unique 检查是否唯一
 * $convert 类型转换,int,目前只对数字类型转换
*/
function get_array($array_name,$delim='',$unique=FALSE,$convert=''){
	$param_value = array();
	if(isset($_POST[$array_name])){
		$param_value = $_POST[$array_name];
	}else if(isset($_GET[$array_name])){
		$param_value = $_GET[$array_name];
	}
	$array = array();
	foreach ($param_value as $key=>$val) {
		$array[$key] = trim($val);
		if ('int' == $convert){
			if (strlen($param_value)>10){
				$param_value = preg_replace('/[^\d]/is','',$param_value);
			}
			else $param_value = intval($param_value);
		}
	}
	if ($unique)$array = array_flip(array_flip($array));//消除重复值，效率比array_unique()高很多
	if(!get_magic_quotes_gpc()){//加上检查数据防sql注入
		$array = sql_addslashes($array);
	}
	if(!empty($delim))return implode($delim, $array);
	return $array;
}

//返回随机密码
//密码长度:$mylen
function cai_get_pwd($mylen=8){
	if(empty($mylen)){	$mylen = 8;		}
	$array="0123456789";
	for($i=0;$i<$mylen;$i++){
		$authnum .=substr($array,rand(0,9),1);
	}
	return 	$authnum;
}

//返回访问者的IP
function return_user_ip(){
	$onlineip="127.0.0.1";
	if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
		$onlineip = getenv('HTTP_CLIENT_IP');
	} elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
		$onlineip = getenv('HTTP_X_FORWARDED_FOR');
	} elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
		$onlineip = getenv('REMOTE_ADDR');
	} elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
		$onlineip = $_SERVER['REMOTE_ADDR'];
	}
	return $onlineip;
}

/**
*功能：设置cookie
*@param string $var cookie名字
*@param string $value cookie的值
*@param int $life cookie有效时间（秒）
*/
function isetcookie($var, $value, $life=0) {
	global $cookiedomain, $cookiepath;
	if(!empty($life)){
		$life = time() + $life;
	}
	header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
	if($cookiedomain!=""){
		setcookie($var, $value, $life,$cookiepath,$cookiedomain,$_SERVER['SERVER_PORT']==443?1:0);
	}else{
		setcookie($var, $value, $life,$cookiepath);
		
	}
}

/**
*功能：加密解密函数
*@param string $string 要加密字符串
*@param string $operation 动作 DECODE 解密， ENCODE 加密
*@param string $key 加密key
*@param int expiry 
*@return string 加密或解密的字符串
*/
function uc_authcode($string, $operation = 'DECODE', $key = '', $expiry = 0) {
	$ckey_length = 4;
	$key = md5($key ? $key : ADMIN_KEY);
	$keya = md5(substr($key, 0, 16));
	$keyb = md5(substr($key, 16, 16));
	$keyc = $ckey_length ? ($operation == 'DECODE' ? substr($string, 0, $ckey_length): substr(md5(microtime()), -$ckey_length)) : '';
	$cryptkey = $keya.md5($keya.$keyc);
	$key_length = strlen($cryptkey);

	$string = $operation == 'DECODE' ? base64_decode(substr($string, $ckey_length)) : sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
	$string_length = strlen($string);
	$result = '';
	$box = range(0, 255);

	$rndkey = array();
	for($i = 0; $i <= 255; $i++) {
		$rndkey[$i] = ord($cryptkey[$i % $key_length]);
	}

	for($j = $i = 0; $i < 256; $i++) {
		$j = ($j + $box[$i] + $rndkey[$i]) % 256;
		$tmp = $box[$i];
		$box[$i] = $box[$j];
		$box[$j] = $tmp;
	}

	for($a = $j = $i = 0; $i < $string_length; $i++) {
		$a = ($a + 1) % 256;
		$j = ($j + $box[$a]) % 256;
		$tmp = $box[$a];
		$box[$a] = $box[$j];
		$box[$j] = $tmp;
		$result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
	}

	if($operation == 'DECODE') {
		if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) && substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
			return substr($result, 26);
		} else {
			return '';
		}
	} else {
		return $keyc.str_replace('=', '', base64_encode($result));
	}
}

/* *
*	提示并跳转
*
*	$mssage 数据库表名
*	$url 跳转URL
*	$target 跳转方式1，2，3，4
* */
function showinfo($mssage,$url='',$target=2){
	if($target=="1"){//只传向，不提示
		echo("<script>location.href='".$url."';</script>");
		exit;
	}
	if($target=="2"){//只提示，不传向
		echo("<script>alert('".$mssage."');</script>");
		exit;
	}
	if($target=="3"){//提示，并返回上一页
		echo("<script>alert('".$mssage."');".chr(10));
		echo("history.back();</script>");
		exit;
	}
	if($target=="4"){//提示并跳转到指定页
		echo("<script>alert('".$mssage."');".chr(10));
		echo("location.href='".$url."';</script>");
		exit;
	}

}

/*
 * 生成静态文件
 * $url:生成静态文件的模版地址
 * $timeout:响应时间
 */ 
 
function my_file_get_contents($url, $timeout=30)	{
	if ( function_exists('curl_init') )	{
		$ch = curl_init();
		curl_setopt ($ch, CURLOPT_URL, $url);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$file_contents = curl_exec($ch);
		curl_close($ch);
	} else if ( ini_get('allow_url_fopen') == 1 || strtolower(ini_get('allow_url_fopen')) == 'on' )	{
		$file_contents = @file_get_contents($url);
	} else {
		$file_contents = '';
	}
	return $file_contents;
}

/**
*分页函数
*参数：$num，$perpage,$curr_page,$mpurl,$showtype=1
*说明：总数量,每页条数,当前页号,连接的URL,显示多页方式(1选择多页，2输入多页)
*
**/
function multi($num, $perpage, $curr_page, $mpurl,$showtype=1) {
	$multipage = '';
	if($num > $perpage) {
		$pages = ceil($num / $perpage);//求总页数
		$multipage .= "<a href=\"$mpurl&page=1\">首页</a>&nbsp<a href=\"$mpurl&page=".(($curr_page>0?$curr_page:1)-1)."\">上一页</a>&nbsp;";
		
		$multipage .= "<a href=\"$mpurl&page=".($curr_page>=$pages?$pages:$curr_page+1)."\">下一页</a>&nbsp<a href=\"$mpurl&page=$pages\" >最后页</a>";
		if($showtype==2){
			$multipage .='<input name="mynumpage" type="text" id="mynumpage" value="'.$curr_page.'" size="5" /><input onclick="location.href=\''.$mpurl.'&page=\'+document.getElementById(\'mynumpage\').value;" type="button" name="Submit" value="Go" />';
		}else{
			$multipage .= "<select name='showpage' id='showpage' onchange='location.href=\"".$mpurl."&page=\"+this.options[this.selectedIndex].value;'>";
			for($i=1;$i<=$pages;$i++){
				if($i==$curr_page){
					$multipage .= '<option value="'.$i.'" selected="selected">'.$i.'/'.$pages.'</option>';
				}else{
					$multipage .= '<option value="'.$i.'">'.$i.'/'.$pages.'</option>';
				}
			}
			$multipage .= "</select>";
		}
	}
	return $multipage;
}

/**
*分页函数  （中间分页）
*参数：$num，$perpage,$curr_page,$mpurl,$pagenum=3
*说明：总数量,每页条数,当前页号,连接的URL,中间N页
*
**/
function multitwo($num, $perpage, $curr_page, $mpurl, $pagenum=3){
	$multipage = '';
	if($num > $perpage) {
		$pages = ceil($num / $perpage);//求总页数
		$f_page = $mpurl.'&page=1';
		$p_page = $mpurl.'&page='.($curr_page>1?$curr_page-1:1);
		$multipage .= '<li class="prev '.($curr_page==1?'disabled':'').'"><a href="'.($curr_page==1?'javascript:;':$f_page).'"><span class="hidden-480">首页</span></a></li>';
		$multipage .= '<li class="prev '.($curr_page==1?'disabled':'').'"><a href="'.($curr_page==1?'javascript:;':$p_page).'"><span class="hidden-480">上一页</span></a></li>';
		
		$startpage = $curr_page <= 5 ? 1 : $curr_page-$pagenum;
		$endpage = $pages<=$curr_page+$pagenum ? $pages : $curr_page+$pagenum;
		for($i = $startpage; $i <= $endpage; $i++){
			$multipage .= '<li '.($i == $curr_page?'class="active"':'').'><a href="'.$mpurl.'&page='.$i.'">'.$i.'</a></li>';
		}
		$l_page = $mpurl.'&page='.($curr_page>=$pages?$pages:$curr_page+1);
		$n_page = $mpurl.'&page='.$pages;
		$multipage .= '<li class="next '.($curr_page==$pages?'disabled':'').'"><a href="'.($curr_page==$pages?'javascript:;':$l_page).'"><span class="hidden-480">下一页</span></a></a></li>';
		$multipage .= '<li class="next '.($curr_page==$pages?'disabled':'').'"><a href="'.($curr_page==$pages?'javascript:;':$n_page).'" ><span class="hidden-480">尾页</span></a></li>';
	}
	return $multipage;
}

//=========begin 操作数据库通用
/* *
*	检查相关记录是否存在
*
*	$table 数据库表名
*	$value 与$fields对应的值
*       $table_inc 表前缀 
* */
function exist_check($conn,$table,$value = array(),$where = '',$table_inc=""){
	if(!empty($value)){
		foreach($value as $key=>$val){
			if($key!=""){
				$where .= " AND `".$key."`='".$val."' ";
			}
		}
	}
	$exist= "SELECT 1 FROM ".get_table($table,$table_inc)." WHERE 1 ".$where;
	$res = $conn->Query($exist);
	if($conn->NumRows($res)>0){
		return true;
	}else{
		return false;
	}
}


/* *
*	在数据库表$table中增加一条记录
*
*	$table 数据库表名
*	$value 与$field对应的值
*       $table_inc 表前缀 
* */
function add_record($conn,$table,$value = array(),$table_inc=""){	
	$field_str = '';
	$value_str = '';
	foreach($value as $key=>$val){
		if($key!=""){
			$field_str .= '`'.$key.'`,';	
			$value_str .= "'".$val."',";
		}
	}
	
	$field_str = substr($field_str,0,-1);
	$value_str = substr($value_str,0,-1);
	$insert_sql = "INSERT INTO ".get_table($table,$table_inc)." ($field_str) VALUES($value_str);";
	//echo $insert_sql;exit();
	$conn->Query($insert_sql);
	
	$result = array();
	$result['rows'] = $conn->AffectedRows();
	$result['id'] = $conn->InsertID();
	return $result;
}

/* *
*	在数据库表$table中更新一条记录
*	$table 	数据库表名
*	$value 	与$field对应的值
*	$where_ 条件字段与值
*       $table_inc 表前缀 
* */
function update_record($conn,$table,$value = array(),$where_value = array(),$where='',$table_inc=""){	
	$update_str = '';
	foreach($value as $key=>$val){
		if($key!=""){
			if(strstr($val,$key.'+')!=false){
				$update_str .= "`".$key."`=".$val.",";
			}elseif(strstr($val,$key.'-')!=false){
				$update_str .= "`".$key."`=".$val.",";
			}else{
				$update_str .= "`".$key."`='".$val."',";
			}
		}
	}
	if(empty($where)){
		foreach($where_value as $key=>$val){
			if($key!=""){
				$where .= " AND `".$key."`='".$val."' ";
			}
		}
	}
        
	$update_str = substr($update_str,0,-1);	
	$sql = "UPDATE ".get_table($table,$table_inc)." SET $update_str WHERE 1 $where;";
//	echo $sql;	die();
	$conn->Query($sql);
	return $conn->AffectedRows();
}

/* *
*	在数据库表$table中删除(物理删除)或更新(逻辑删除)一条记录
*
*	$table 	数据库表名
*	$where_ 条件字段与值
*	$value 	与$field对应的值
* */
function delete_record($conn,$table,$where_value = array(),$value = array()){	
	$update_str = '';
	$where = '';
	foreach($where_value as $key=>$val){
		if($key!=""){
			$where .= " AND `".$key."`='".$val."' ";
		}
	}
	
	if(count($value)>0){
		foreach($value as $key=>$val){
			if($key!=""){
				$update_str .= "`".$key."`='".$val."',";
			}		
		}
		
		$update_str = substr($update_str,0,-1);
		$sql = "UPDATE ".get_table($table)." SET $update_str WHERE 1 $where;";
	}else{
		$sql = "DELETE FROM ".get_table($table)." WHERE 1 $where;";
	}
	$conn->Query($sql);
	return $conn->AffectedRows();
}

/**
*	获取数据库表$table中字段$info的信息
*
*	$table 数据库表名
*	$fields 条件字段名
*	$value 字段($fields)对应值
*	$info 返回信息字段名
*	$all 是否返回所有记录
**/
function get_info($conn,$table,$info = array(),$where='',$OrderBy='',$all = false){
	$str = !empty($info)?implode(',',$info):'*';
	if ($OrderBy != ""){
        $where .= $OrderBy;
	}
	$sql= "SELECT $str FROM ".get_table($table)." WHERE 1 ".$where.'';
	$res = $conn->Query($sql);
	//echo $sql;echo '<br/>';
	if($conn->NumRows($res)>0){
		if(!$all){
			$arr = $conn->FetchArray($res);
			return $arr;
		}else{
			$all_record = array();
			//$all_record[] = $arr;
			while($arr = $conn->FetchArray($res)){
				$all_record[] = $arr;
			}
			return $all_record;
		}
	}else{
		return array();
	}
}

//function get_table($myname){
//	global $TABLE_NAME_INC,$MYSQL_DB;
//	return $MYSQL_DB.".`".$TABLE_NAME_INC.$myname."`";
//}

/*
功能：获取完整表名
@param $myname 表名
@param $inc 前缀类型
*/
function get_table($myname, $inc = 'game'){
	global $TABLE_NAME_INC, $COUNTTABLE_NAME_INC, $UNIONTABLE_NAME_INC, $MYSQL_DB;
	switch($inc){
		default:
                case 'game':
			return $MYSQL_DB.".`".$TABLE_NAME_INC.$myname."`";
		break;
		case 'count':
			return $MYSQL_DB.".`".$COUNTTABLE_NAME_INC.$myname."`";
		break;
		case 'union';
			return $MYSQL_DB.".`".$UNIONTABLE_NAME_INC.$myname."`";
		break;
	}
	
}

//=========end 操作数据库通用


//统计满足条件的记录数
function countnum($conn,$table,$where='1=1'){
	$rs = $conn->Query("SELECT count(*) as total FROM ".get_table($table)." WHERE $where");
	$row = $conn->FetchArray($rs);
	return $row['total'];
	
}

/*************
*功能：通过身份证获取用户年龄
*@param int $cardno 用户身份证号
*return array $years_old 用户年龄
************/
function get_user_age($cardno){
	$this_year = date('Y',THIS_DATETIME);
	if(strlen($cardno)==15){
		$birth_year = intval("19".substr($cardno,6,2));
	}else{
		$birth_year = intval(substr($cardno,6,4));
	}
	if($birth_year==0){
		$years_old = "--";
	}else{
		$years_old = $this_year-$birth_year;
	}
	return $years_old;
}

/*
功能：二维数组根据二维关键字的值排序
$arr 二维数组,
$mykey 二维关键字名称,
$mytype=1(1从大到小，2从小到大)
*/
function sort_array_to_max($arr,$mykey,$mytype=1){
	$num = count($arr);
	if($num<2){		return $arr;	}
	$tmp_arr = "";
	$tmp_arr2 = "";
	for($j=0;$j<$num;$j++){
		for($i=0;$i<$num;$i++){
			if($mytype==1){
				if($arr[$j][$mykey]>$arr[$i][$mykey]){
					$tmp_arr = $arr[$i];
					$arr[$i] = $arr[$j];
					$arr[$j] = $tmp_arr;
				}
			}else{
				if($arr[$j][$mykey]<$arr[$i][$mykey]){
					$tmp_arr = $arr[$i];
					$arr[$i] = $arr[$j];
					$arr[$j] = $tmp_arr;
				}
			}
		}
	}
	return $arr;
}


/**
*	判断身份证号码的正确性
*
*	$cardnum 身份证号码
*	$flag 2格式错误 3地区错误 4 校验码错误 5生日错误 6格式正确成年人 7格式正确未成年人
**/
function checkcardnum($cardnum){
	$aCity = array( 11=>"北京", 12=>"天津", 13=>"河北", 14=>"山西", 15=>"内蒙古", 21=>"辽宁", 22=>"吉林", 23=>"黑龙江", 31=>"上海", 32=>"江苏", 33=>"浙江", 34=>"安徽", 35=>"福建", 36=>"江西", 37=>"山东", 41=>"河南", 42=>"湖北", 43=>"湖南", 44=>"广东", 45=>"广西", 46=>"海南", 50=>"重庆", 51=>"四川", 52=>"贵州", 53=>"云南", 54=>"西藏", 61=>"陕西", 62=>"甘肃", 63=>"青海", 64=>"宁夏", 65=>"新疆", 71=>"台湾", 81=>"香港", 82=>"澳门", 91=>"国外" );
	 //先对格式验证
	 if(!preg_match('/^([\d]{15}|[\d]{18}|[\d]{17}x)$/i',$cardnum)){
	 	$flag = 2; //格式错误
		return $flag;
	 }else{
	 	//把15位的转化成18位
		if(strlen($cardnum)==15){
			$cardnum = idcard_15to18($cardnum);
		}
		
		//验证地区
		if(!array_key_exists(substr($cardnum,0,2),$aCity)){
			$flag = 3; //地区错误
			return $flag;
		}
		//校验码有效性检查
		if (idcard_verify_number($cardnum) != strtoupper(substr($cardnum, 17, 1))){
			$flag = 4; //校验码错误
			return $flag;
		}
		//验证生日 18岁以下未成年人
		if(!checkdate(substr($cardnum,10,2),substr($cardnum,12,2),substr($cardnum,6,4))){ 
			$flag = 5; //生日错误
			return $flag;
		}
		//判断是否是成年人
		if(checkadult($cardnum)){
			$flag = 6;//格式正确成年人
			return $flag;
		}else{
			$flag = 7;//格式正确未成年人
			return $flag;
		}
			
	 }

}
/***************
*	简单判断用户是否是成年人
*
*	$cardnum 身份证号码(必须保证是18位的，15位的要先转换成18位)
*	$flag 返回值 1成年人 0未成年人
****************/
function checkadult($cardnum){
	$tyear=intval(substr($cardnum,6,4));
	$tmonth=intval(substr($cardnum,10,2));
	$tday=intval(substr($cardnum,12,2));
	$yeardiff = intval(date("Y",THIS_DATETIME))-$tyear;
	if($yeardiff == 18){//年满18
		$monthdiff = intval(date("m",THIS_DATETIME))-$tmonth;
		if($monthdiff > 0){//月份已满18
			return 1;
		}else if($monthdiff == 0){//如果月份刚好满18岁
			$daydiff = intval(date("d",THIS_DATETIME))-$tday;
			if($daydiff > -1){//日已满18
				return 1;
			}else{//日未满18
				return 0;
			}
		}else{//月份未满18
			return 0;
		}
	}else if($yeardiff > 18){//大于18
		return 1;
	}else{//未满18
		return 0;
	}
	/*$tmp_len = strlen($cardnum);
	if($tmp_len>14){
		//看看满 18 岁没有
		if($tmp_len==18){//如果是18位号
			$tmp_str = date("Y",THIS_DATETIME)-substr($cardnum,6,4);
		}else{//如果是15位号//,
			$tmp_str = date("Y",THIS_DATETIME)-intval("19".substr($cardnum,6,2));
		}
		if($tmp_str==18){//年满18
			if($tmp_len==18){//如果是18位号
				$tmp_str = intval(date("m",THIS_DATETIME))-intval(substr($cardnum,10,2));
			}else{//如果是15位号
				$tmp_str = intval(date("m",THIS_DATETIME))-intval(substr($cardnum,8,2));
			}
			if($tmp_str>0){//月份已满18
				return 1;
			}else if($tmp_str==0){//如果月份刚好满18岁
				if($tmp_len==18){//如果是18位号
					$tmp_str = intval(date("d",THIS_DATETIME))-intval(substr($cardnum,12,2));
				}else{//如果是15位号
					$tmp_str = intval(date("d",THIS_DATETIME))-intval(substr($cardnum,10,2));
				}
				if($tmp_str>-1){//日已满18
					return 1;
				}else{//日未满18
					return 0;
				}
			}else{//月份未满18
				return 1;
			}
		}else if($tmp_str>18){//大于18
			return 1;
		}else{//未满18
			return 0;
		}
	}else {
		return 0;
	}	*/
}



// 计算身份证校验码，根据国家标准GB 11643-1999 
function idcard_verify_number($idcard_base){ 
	//加权因子 
	$factor=array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2); 
	//校验码对应值 
	$verify_number_list=array('1','0','X','9','8','7','6','5','4','3','2'); 
	$checksum=0; 
	for($i=0;$i<strlen($idcard_base);$i++){ 
	$checksum += substr($idcard_base,$i,1)*$factor[$i];
	} 
	$mod=strtoupper($checksum % 11); 
	$verify_number=$verify_number_list[$mod];
	
	return $verify_number;
} 
//将15位身份证升级到18位 
function idcard_15to18($idcard){ 
	if(strlen($idcard)!=15){
		return false;
	}else{ 
		//如果身份证顺序码是996 997 998 999,这些是为百岁以上老人的特殊编码 
		if(array_search(substr($idcard,12,3),array('996','997','998','999'))!=false){ 
			$idcard=substr($idcard,0,6).'18'.substr($idcard,6,9);
		}else{
			$idcard=substr($idcard,0,6).'19'.substr($idcard,6,9);
		} 
	} 
	$idcard=$idcard.idcard_verify_number($idcard);
	return $idcard;
}

/**
 * 判断管理员是否有权限操作
 *
 * @param int $rightid 权限id
 * @param int $ischecklogin 是否判断登录标识
 * @param int $ischecklock 是否判断用户锁定状态标识
 * @return 状态 1：正确 -1参数错误 -2：没登录 -3：管理员锁定状态 -4：没权限操作
 */
function check_user_login_right($right_id ,$ischecklogin=false, $ischecklock=false){
	if (!is_numeric($right_id)) {
		return -1;
		//die('参数错误');
	}
	//首先判断登录情况
	if ($ischecklogin && empty($_SESSION['admin'])) {
		return -2;
		//header("location:login.php");
	}
	//判断当前用户是否有权限操作
	$ssql = "select a_islock,a_right from ".get_table("admin")." where sysid=".$_SESSION['admin_id'];
	$rss = $GLOBALS["conn"]->query($ssql);
	$rows = $GLOBALS["conn"]->FetchArray($rss);
	$_SESSION['islock'] = $rows['a_islock'];
	if($ischecklock && $rows["a_islock"]==1){
		return -3;
		//die("你没有权限操作,请联系管理员");
	}

	$_SESSION['rights'] = $rows["a_right"];
	$tmp_arr = unserialize($rows["a_right"]);
	if(!array_key_exists($right_id,$tmp_arr)){
		return -4;
		//die("你没有权限操作,请联系管理员");
	}
	return 1;
}

/**
 *显示管理员没权限错误状态下的动作
 *
 * @param int $status
 */
function showcheckuser_loginright($status){
	switch ($status){
		case -1:
			die('参数错误');
		break;
		case -2:
			header("location:login.php");
		break;
		case -3:
			die("你没有权限操作,请联系管理员");
		break;
		case -4:
			die("你没有权限操作,请联系管理员");
		break;
		case 1:
		break;
	}
}


//写入日志
function admin_log($userid,$uname,$msg,$do_time,$lip){
	$sql = "insert into ".get_table("admin_log")."(al_userid,al_logname,al_content,al_inserttime,al_ip) values(".$userid.",'".$uname."','".$msg."',".$do_time.",'".$lip."')";
	$rs = $GLOBALS["conn"]->query($sql);
	if($rs){
		return true;
	}else{
		return false;
	}
}


//curl 的https请求
function https_request($url,$data = null){
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	if (!empty($data)){
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	}
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($curl);
	curl_close($curl);
	return $output;
}


//模版发送微信消息
function send_tmpinfo( $openid , $data , $appid , $secret, $url, $tmplmsg){ //用户id  发送的数据 appid  secretid
	$token_url	= "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret;
	$json		= https_request( $token_url );
	$result		= json_decode( $json );
	$acc_token	= $result -> access_token;
	$send_url 	= "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=".$acc_token;
	if($url){
		$template_msg  = array( 'touser' => $openid , 'template_id' => $tmplmsg , 'url'=>$url , 'topcolor' => '#000000' , 'data'=> $data );
	}else{
		$template_msg  = array( 'touser' => $openid , 'template_id' => $tmplmsg , 'topcolor' => '#000000' , 'data'=> $data );
	}
	$template_data = urldecode( json_encode( $template_msg ) );
	$temp_resutl   = https_request( $send_url , $template_data );
	$temp_data 	   = json_decode($temp_resutl);
	return $temp_data;
}

//连接game库
function get_game_conn(){
    require(WEBPATH_DIR."include/db.config.inc.php");
    $GLOBALS["conn"] = new DB_ZDE();
}

//连接new_union库
function get_union_conn(){
    require(WEBPATH_DIR."include/db.config.inc2.php");
    $GLOBALS["conn"] = new DB_ZDE();
}
