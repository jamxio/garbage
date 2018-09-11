	<div class="ct">
		<dl class="cc">
			<dt><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&uid=', rawurlencode($uid); ?>"><img src="<?php echo htmlspecialchars(Pw::getAvatar($uid, 'small'), ENT_QUOTES, 'UTF-8');?>" onerror="this.onerror=null;this.src='<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','images'), ENT_QUOTES, 'UTF-8');?>/face/face_small.jpg'" width="50" height="50"></a></dt>
			<dd>
				<p class="title">
					<span class="level"><?php echo htmlspecialchars($user->getGroupInfo('name'), ENT_QUOTES, 'UTF-8');?></span>
					<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&uid=', rawurlencode($uid); ?>" class="name"><?php echo htmlspecialchars($user->info['username'], ENT_QUOTES, 'UTF-8');?></a><span class="<?php echo htmlspecialchars($female ? 'women' : 'man', ENT_QUOTES, 'UTF-8');?>_<?php echo htmlspecialchars($isol ? 'ol' : 'unol', ENT_QUOTES, 'UTF-8');?>" title="<?php echo htmlspecialchars($isol ? '在线' : '离线', ENT_QUOTES, 'UTF-8');?>"></span>
				</p>
				<p class="num">
					关注 <a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&c=follows&uid=', rawurlencode($uid); ?>"><?php echo htmlspecialchars($user->info['follows'], ENT_QUOTES, 'UTF-8');?></a><span>|</span>粉丝 <a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&c=fans&uid=', rawurlencode($uid); ?>"><?php echo htmlspecialchars($user->info['fans'], ENT_QUOTES, 'UTF-8');?></a><span>|</span>帖子 <a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&c=thread&uid=', rawurlencode($uid); ?>"><?php echo htmlspecialchars($user->info['postnum'], ENT_QUOTES, 'UTF-8');?></a>
				</p>
			</dd>
		</dl>
		<?php  if ($follow2num > 0 && !$isFollowed) { ?>
		<div class="card_common_follow">您关注的人中：
		<?php  $num=0; 
			foreach ($usernames as $key => $value) { 
				if ($num++ > 0) { ?>、<?php  } ?>
				<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&uid=', rawurlencode($value['uid']); ?>"><?php echo htmlspecialchars($value['username'], ENT_QUOTES, 'UTF-8');?></a>
		<?php  } if ($follow2num > 2) { ?>等<?php if ($follow2num > 99) {?>99+<?php }else{
 echo htmlspecialchars($follow2num, ENT_QUOTES, 'UTF-8');?>人<?php }} ?>
			也关注了<span class="w">Ta</span></div>
		<?php  } ?>
		
		<!-- <div class="card_fresh"><span>3分钟前</span>新鲜事：<a href="">猫狗大作战，猫猫必胜！！！必胜...</a></div> -->
		<?php  if ($medalNum) { ?>
		<div class="card_medal">
			<h6><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><?php echo htmlspecialchars($medalNum, ENT_QUOTES, 'UTF-8');?>枚</a></h6>
			<ul class="cc">
				<?php  $i = 0; 
  foreach ($medals as $key => $value) { ?>
				<li><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=medal'; ?>"><img src="<?php echo htmlspecialchars($value['icon'], ENT_QUOTES, 'UTF-8');?>"width="30" height="30" title="<?php echo htmlspecialchars($value['descrip'], ENT_QUOTES, 'UTF-8');?>"/></a></li>
					<?php  if (++$i >= 7) break; 
  } ?>
			</ul>
		</div>
		<?php  } ?>
	</div>
	<?php  if ($uid && $loginUser->isExists() && $uid != $loginUser->uid) { ?>
	<div class="ft">
	<?php  
		if ($isFollowed) {
			$style_f = '';
			$style_unf = 'display:none;';
		} else {
			$style_f = 'display:none;';
			$style_unf = '';
		}
		$userurlencode = urlencode($user->info['username']);
	?>
		<div class="J_follow_wrap" style="<?php echo htmlspecialchars($style_f, ENT_QUOTES, 'UTF-8');?>"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=my&c=follow&a=delete'; ?>" class="J_card_follow core_unfollow" data-uid="<?php echo htmlspecialchars($uid, ENT_QUOTES, 'UTF-8');?>">取消关注</a></div>
		<div class="J_follow_wrap" style="<?php echo htmlspecialchars($style_unf, ENT_QUOTES, 'UTF-8');?>"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=my&c=follow&a=add'; ?>" class="core_follow J_card_follow" data-uid="<?php echo htmlspecialchars($uid, ENT_QUOTES, 'UTF-8');?>">关注</a></div>
		<a class="message J_send_msg_pop" data-name="<?php echo htmlspecialchars($user->info['username'], ENT_QUOTES, 'UTF-8');?>" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=message&a=pop&uid=', rawurlencode($uid); ?>">写私信</a><?php  if (!$isFans && $isFollowed) { ?><span>|</span><a class="J_send_msg_pop" data-name="<?php echo htmlspecialchars($user->info['username'], ENT_QUOTES, 'UTF-8');?>" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=message&a=pop&username=', rawurlencode($user->info['username']); ?>">求关注</a><?php  } ?>
	</div>
	<?php  } ?>