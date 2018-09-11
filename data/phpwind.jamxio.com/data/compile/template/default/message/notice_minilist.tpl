<!--信息流-->
			<div id="J_hm_home">
	<?php 
	//主题分类
	if ($noticeList){?>
				<ul class="goin J_hm_list">
	<?php 
		foreach($noticeList as $v){
			list($v['type']) = explode('_',$v['type']);
			$typeTpl = 'notice_segment_' . $v['type'];
			$class = $v['message_extend_params']['unread_count'] || !$v['is_read'] ? ' unread' : '';
	?>
					<li data-url="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=detail&id=', rawurlencode($v['id']); ?>" class="li<?php echo htmlspecialchars($class, ENT_QUOTES, 'UTF-8');?>"><i></i>
						<?php PwHook::segment("$typeTpl", array($v), "minilist", "notice_minilist", $__viewer); ?>
					</li>
	<?php  }?>
				</ul>
	<?php  
	} else {
	 ?>
	 			<div class="not_content_mini"><i></i>暂没有消息</div>
	<?php  } ?>
			<div class="my_message_bottom tac">
				<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=message'; ?>">查看所有消息&nbsp;&gt;&gt;</a>
			</div>
		</div>
