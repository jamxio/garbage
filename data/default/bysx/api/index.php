<?php
/**************

***************/	
include_once("config.api.php");


switch($action){
	default:
		echo file_get_contents(WEBPATH_DIR.'comn/index.txt');
	break;

}
		
//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>