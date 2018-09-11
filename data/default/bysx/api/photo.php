<?php
/**************

***************/	
include_once("config.api.php");


switch($action){
	default:
		$htmlstr="<script language='JavaScript' type='text/javascript'>
	var now_img=this;
	function show(a){
		document.getElementById('kantu').style.display='block';
		now_img=a;
		document.getElementById('datu').src=a.src;
	}
	
	function show_prev(){
		if(now_img.previousSibling){
		 
		show(now_img.previousSibling);
		}else 
			layer.msg('已经是第一张牌了',{time:500});
	}
	function show_next(){
		if(now_img.nextSibling){
		show(now_img.nextSibling);
		}else 
			layer.msg('这是最后一张牌啊',{time:500});
	}
	</script>
	<div id='kantu' style='display:none;position:relative;margin-top:0;' >
  <input type='button' value='关闭' onclick='this.parentNode.style.display=\"none\";'/>
	<input type='button' value='上一张' onclick='show_prev();' style='margin-left:100px;'/>
	<input type='button' value='下一张' onclick='show_next();' style='margin-left:100px;'/><br/>
     <img id='datu' width='500' height='500'/><br/> </div><div>";
		$dir=WEBPATH_DIR."/home/photo/";
		$file=scandir($dir);
		//var_dump($file);
		//var_dump(count($file));
		if(count($file)>2){
			for($i=2,$num=count($file);$i<$num;$i++){
				$htmlstr .= "<img src=\"photo/" . $file[$i] . "\" style=\"width:80px;height:80px;padding:10px;\" onclick=\"show(this)\" onmouseover=\"this.style.background='blue';\" onmouseout=\"this.style.background='';\"/>" ;
			}
			echo $htmlstr."</div>";
		}else{
			echo "相册为空！";
		}
	break;

}
		
//关闭MYSQL链接
if($GLOBALS["conn"]){
$GLOBALS["conn"]->Close();
}

?>