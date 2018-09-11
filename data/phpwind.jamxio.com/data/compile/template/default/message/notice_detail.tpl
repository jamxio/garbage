<?php  if($notice['typeid']){
	list($typeName) = explode('_',$typeName);
	$typeTpl = 'notice_segment_' . $typeName;
 
 PwHook::segment("$typeTpl", array($detailList,$notice,$prevNotice,$nextNotice), "detail", "notice_list", $__viewer); 
  } ?>