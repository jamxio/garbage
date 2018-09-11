<?php
/**************

***************/	
include_once("config.api.php");


switch($action){
	default:
		$htmlstr="<h3>以下游戏全部由鳌创网络出品<h3><br/><br/>";
		$dir=WEBPATH_DIR."/home/game/";
		$file=scandir($dir);
		//var_dump($file);
		//var_dump(count($file));
		if(count($file)>2){
			for($i=2,$num=count($file);$i<$num;$i++){
				$htmlstr .= "<a style='display:inline;margin-left:20px;' href='./game/".$file[$i]."' alt='".$file[$i]."' target='_blank'><img src='game/".$file[$i]."/".$file[$i].".png' style='width:80px;height:80px;padding:10px;'  onmouseover=\"this.style.background='blue';\" onmouseout=\"this.style.background='';\" /></a>" ; 
			}
			echo $htmlstr;
		}else{
			echo "游戏功能未出品！";
		}
	break;

}
		
//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>