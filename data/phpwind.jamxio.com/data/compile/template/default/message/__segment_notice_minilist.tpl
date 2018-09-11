<?php if (!function_exists("NOTICE_SEGMENT_TASK_MINILIST")) {function NOTICE_SEGMENT_TASK_MINILIST($v){?>
<!--任务-->

<!--弹窗列表-->
	<dl class="notice_segment_list cc">
		<dt class="notice_tip_icon">
			<?php  if (!$v['is_read']) { ?>
			<span class="icon_task_new J_unread_icon" title="未读">[未读]</span>
			<?php  } else { ?>
			<span class="icon_task" title="已读">[已读]</span>
			<?php  } ?>
		</dt>
		<dd class="notice_segment_cont">
			<div class="summary">
		<?php if ($v['extend_params']['complete']) {?>
				恭喜！您有新的任务奖励可领取《<?php echo htmlspecialchars(Pw::substrs($v['extend_params']['title'],16), ENT_QUOTES, 'UTF-8');?>》 ，马上前往<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>领取奖励。
		<?php }else{?>
				恭喜您成功领取任务《<?php echo htmlspecialchars(Pw::substrs($v['extend_params']['title'],16), ENT_QUOTES, 'UTF-8');?>》 ，现在就去<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>做任务！
		<?php }?>
			</div>
			<div class="time"><?php echo htmlspecialchars(Pw::time2str($v['modified_time'],'auto'), ENT_QUOTES, 'UTF-8');?></div>
		</dd>
	</dl>

<?php }}?>
<?php if (!function_exists("NOTICE_SEGMENT_TASK_DETAIL")) {function NOTICE_SEGMENT_TASK_DETAIL($detailList,$notice,$prevNotice,$nextNotice){?>



<!--弹窗详情-->
	<div class="my_message_top" id="J_hm_top">
	<span class="fr">
		<span>
		<?php  if ($prevNotice) { ?>
		<a class="J_hm_page" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=detail&id=', rawurlencode($prevNotice['id']); ?>">&lt;&nbsp;前一条</a>
		<?php  } else { ?>
		&lt;&nbsp;前一条
		<?php  } ?>
		</span><i>|</i>
		<?php  if ($nextNotice) { ?>
		<a class="J_hm_page" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=detail&id=', rawurlencode($nextNotice['id']); ?>">后一条&nbsp;&gt;</a>
		<?php  } else { ?>
		后一条&nbsp;&gt;
		<?php  } ?>
		</span>
	<a class="J_hm_back" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=minilist'; ?>">&lt;&lt;&nbsp;返回</a>
</div>
	<div class="notice_segment_wrap">
		<dl class="notice_segment_list cc">
			<dt class="notice_tip_icon">
				<span class="icon_task" title="已读">[已读]</span>
			</dt>
			<dd class="notice_segment_cont">
				<div class="summary">
	<?php 
	$item = $detailList['extend_params'];
	//$ignoreString = $detailList['is_ignore'] ? '取消忽略' : '忽略';
	//$doIgnore = $detailList['is_ignore'] ? 0 : 1;
	//$tips = $detailList['is_ignore'] ? '<div class="tips">您不会再收到 任务 通知</div>' : '';
	
 if ($item['complete']) {?>
				恭喜！您有新的任务奖励可领取《<?php echo htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8');?>》 ，马上前往<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>领取奖励。
	<?php }else{?>
				恭喜您成功领取任务《<?php echo htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8');?>》 ，现在就去<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>做任务！
	<?php }?>
				</div>
				<div class="time"><?php  echo Pw::time2str($notice['modified_time'],'auto');?></div>
			</dd>
		</dl>
	</div>
	<div class="my_message_bottom">
		<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&type=', rawurlencode($notice['typeid']); ?>">查看全部任务通知&nbsp;&gt;&gt;</a>
	</div>

<?php }}?>
<?php if (!function_exists("NOTICE_SEGMENT_TASK_LIST")) {function NOTICE_SEGMENT_TASK_LIST($v){?>



<!--页列表-->
<?php 
	//	$ignoreString = $v['is_ignore'] ? '取消忽略' : '忽略';
	//	$doIgnore = $v['is_ignore'] ? 0 : 1;
?>
	<div class="ct cc J_notice_item">
		<div class="check"><input name="ids[]" class="J_check" type="checkbox" value="<?php echo htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8');?>" style="display:none;"></div>
		<div class="content">
			<div class="title">
				<span class="notice_tip_icon">
				<?php  if (!$v['is_read']) { ?>
				<span class="icon_task_new" title="未读"></span>
				<?php  } else { ?>
				<span class="icon_task" title="已读"></span>
				<?php  } ?>
				</span>
		<?php if ($v['extend_params']['complete']) {?>
				恭喜！您有新的任务奖励可领取《<?php echo htmlspecialchars($v['extend_params']['title'], ENT_QUOTES, 'UTF-8');?>》 ，马上前往<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>领取奖励。
		<?php }else{?>
				恭喜您成功领取任务《<?php echo htmlspecialchars($v['extend_params']['title'], ENT_QUOTES, 'UTF-8');?>》 ，现在就去<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=task'; ?>" style="margin-right:0px">任务中心</a>做任务！
		<?php }?>
			</div>
			<div class="info"><span class="time"><?php echo htmlspecialchars(Pw::time2str($v['modified_time'],'auto'), ENT_QUOTES, 'UTF-8');?></span><span class="operating"><span class="line">|</span><a class="J_msg_del" data-uri="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=delete'; ?>" data-pdata="{'id':'<?php echo htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8');?>'}" href="#">删除</a></span></div>
		</div>
	</div>

<?php }}?><?php if (!function_exists("NOTICE_SEGMENT_MEDAL_MINILIST")) {function NOTICE_SEGMENT_MEDAL_MINILIST($v){?>
<!--勋章消息-->

<!--弹窗列表-->
	<?php  
	$medal = Wekit::load('medal.PwMedalInfo')->getMedalInfo($v['extend_params']['medelId']);
	//$medal['icon'] = Wekit::load('medal.srv.PwMedalService')->getMedalImage($medal['path'], $medal['icon']);
	?>
	<dl class="notice_segment_list cc">
		<dt class="notice_tip_icon">
			<?php  if (!$v['is_read']) { ?>
			<span class="icon_medal_new J_unread_icon" title="未读">[未读]</span>
			<?php  } else { ?>
			<span class="icon_medal" title="已读">[已读]</span>
			<?php  } ?>
		</dt>
		<dd class="notice_segment_cont">
			<div class="summary">
		<?php  if ($v['extend_params']['type'] == 1){ ?>
			恭喜！您已达到领取《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章的要求，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
		<?php  }elseif($v['extend_params']['type'] == 2){ ?>
			恭喜！管理员颁发给您《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
		<?php  }elseif($v['extend_params']['type'] == 3){ ?>
			恭喜！您申请的《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章已通过审核，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
		<?php  }elseif($v['extend_params']['type'] == 4){ ?>
			抱歉，您申请的《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章因不符合要求，未通过管理员审核，请谅解。如有问题请联系管理员。
		<?php  }elseif($v['extend_params']['type'] == 5){ ?>
			抱歉，您的《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章被收回。
		<?php  }elseif($v['extend_params']['type'] == 7){ ?>
			抱歉，您的《<?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章被收回。
		<?php  } ?>
			</div>
			<div class="time"><?php echo htmlspecialchars(Pw::time2str($v['modified_time'],'auto'), ENT_QUOTES, 'UTF-8');?></div>
		</dd>
	</dl>

<?php }}?>
<?php if (!function_exists("NOTICE_SEGMENT_MEDAL_DETAIL")) {function NOTICE_SEGMENT_MEDAL_DETAIL($detailList,$notice,$prevNotice,$nextNotice){?>



<!--弹窗详情-->
	<div class="my_message_top" id="J_hm_top">
	<span class="fr">
		<span>
		<?php  if ($prevNotice) { ?>
		<a class="J_hm_page" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=detail&id=', rawurlencode($prevNotice['id']); ?>">&lt;&nbsp;前一条</a>
		<?php  } else { ?>
		&lt;&nbsp;前一条
		<?php  } ?>
		</span><i>|</i>
		<?php  if ($nextNotice) { ?>
		<a class="J_hm_page" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=detail&id=', rawurlencode($nextNotice['id']); ?>">后一条&nbsp;&gt;</a>
		<?php  } else { ?>
		后一条&nbsp;&gt;
		<?php  } ?>
		</span>
	<a class="J_hm_back" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=minilist'; ?>">&lt;&lt;&nbsp;返回</a>
</div>
	<div class="notice_segment_wrap">
		<dl class="notice_segment_list cc">
			<dt class="notice_tip_icon">
				<span class="icon_medal" title="已读">[已读]</span>
			</dt>
			<dd class="notice_segment_cont">
				<div class="summary">
	<?php  
		if ($detailList['medalInfo'] ){
	
  if ($detailList['extend_params']['type'] == 1){ ?>
				恭喜！您已达到领取《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章的要求，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
			<?php  }elseif($detailList['extend_params']['type'] == 2){ ?>
				恭喜！管理员颁发给您《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
			<?php  }elseif($detailList['extend_params']['type'] == 3){ ?>
				恭喜！您申请的《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章已通过审核，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
			<?php  }elseif($detailList['extend_params']['type'] == 4){ ?>
				抱歉，您申请的《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章因不符合要求，未通过管理员审核，请谅解。如有问题请联系管理员。
			<?php  }elseif($detailList['extend_params']['type'] == 5){ ?>
				抱歉，您的《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章被收回。
			<?php  }elseif($detailList['extend_params']['type'] == 7){ ?>
				抱歉，您的《<?php echo htmlspecialchars($detailList['extend_params']['name'], ENT_QUOTES, 'UTF-8');?>》勋章被收回。收回原因：管理员手动收回
			<?php  } 
  } ?>
				</div>
				<div class="time"><?php  echo Pw::time2str($notice['modified_time'],'auto');?></div>
			</dd>
		</dl>
	</div>
	<div class="my_message_bottom">
		<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&type=', rawurlencode($notice['typeid']); ?>">查看全部勋章通知&nbsp;&gt;&gt;</a>
	</div>

<?php }}?>
<?php if (!function_exists("NOTICE_SEGMENT_MEDAL_LIST")) {function NOTICE_SEGMENT_MEDAL_LIST($v){?>



<!--页列表-->
<?php  
	$medal = Wekit::load('medal.PwMedalInfo')->getMedalInfo($v['extend_params']['medelId']);
	//$medal['icon'] = Wekit::load('medal.srv.PwMedalService')->getMedalImage($medal['path'], $medal['icon']);
	//$ignoreString = $v['is_ignore'] ? '取消忽略' : '忽略';
	//$doIgnore = $v['is_ignore'] ? 0 : 1;
	//$type = $v['is_ignore'] ? false : true;
	?>
	<div class="ct cc J_notice_item">
		<div class="check"><input name="ids[]" class="J_check" type="checkbox" value="<?php echo htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8');?>" style="display:none;"></div>
		<div class="content">
			<div class="title">
				<span class="notice_tip_icon">
				<?php  if (!$v['is_read']) { ?>
				<span class="icon_medal_new" title="未读"></span>
				<?php  } else { ?>
				<span class="icon_medal" title="已读"></span>
				<?php  } ?>
				</span>
				<?php  if ($v['extend_params']['type'] == 1){ ?>
					恭喜！您已达到领取《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章的要求，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
				<?php  }elseif($v['extend_params']['type'] == 2){ ?>
					恭喜！管理员颁发给您《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
				<?php  }elseif($v['extend_params']['type'] == 3){ ?>
					恭喜！您申请的《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章已通过审核，请到<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>">我的勋章</a>页面领取。
				<?php  }elseif($v['extend_params']['type'] == 4){ ?>
					抱歉，您申请的《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章因不符合要求，未通过管理员审核，请谅解。如有问题请联系管理员。
				<?php  }elseif($v['extend_params']['type'] == 5){ ?>
					抱歉，您的《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章被收回。
				<?php  }elseif($v['extend_params']['type'] == 7){ ?>
					抱歉，您的《<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($v['extend_params']['name'], ENT_QUOTES, 'UTF-8');?></a>》勋章被收回。
				<?php  } ?>
			</div>
			<div class="info">
				<span class="time"><?php echo htmlspecialchars(Pw::time2str($v['modified_time'],'auto'), ENT_QUOTES, 'UTF-8');?></span>
				<span class="operating"><span class="line">|</span><a class="J_msg_del" href="#" data-uri="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=delete'; ?>" data-pdata="{'id':'<?php echo htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8');?>'}">删除</a></span>
			</div>
		</div>
	</div>

<?php }}?>