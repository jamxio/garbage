<?php if (!function_exists("TPL_SPACE_PROFILE_EXTEND_EDUCATION")) {function TPL_SPACE_PROFILE_EXTEND_EDUCATION($space){?>


				<div class="space_profile">
					<h3>
						<?php  if ($space->tome == 2){ ?>
						<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=profile&c=education&_tab=education'; ?>" class="edit">编辑</a>
						<?php  } ?>
						<strong>教育经历</strong>
					</h3>
			<?php  foreach($space->spaceUser['education'] AS $education){ ?>
					<dl class="cc">
						<dt><?php echo htmlspecialchars($education['degree'], ENT_QUOTES, 'UTF-8');?></dt>
						<dd><span class="school"><?php echo htmlspecialchars($education['school'], ENT_QUOTES, 'UTF-8');?></span><?php echo htmlspecialchars($education['start_time'], ENT_QUOTES, 'UTF-8');?></dd>
					</dl>
			<?php  } ?>
				</div>

<?php }}?>
<?php if (!function_exists("TPL_SPACE_PROFILE_EXTEND_WORK")) {function TPL_SPACE_PROFILE_EXTEND_WORK($space){?>



				<div class="space_profile">
					<h3>
						<?php  if ($space->tome == 2){ ?>
						<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=profile&c=work&_tab=work'; ?>" class="edit">编辑</a>
						<?php  } ?>
						<strong>工作经历</strong>
					</h3>
			<?php  foreach($space->spaceUser['work'] AS $work){ ?>
					<dl class="cc">
						<dt style="width:auto;" class="mr20"><?php echo htmlspecialchars($work['company'], ENT_QUOTES, 'UTF-8');?></dt>
						<dd style="width:auto;padding-top:3px;" class="f12 gray w">
							于<?php echo htmlspecialchars($work['starty'], ENT_QUOTES, 'UTF-8');?>年<?php echo htmlspecialchars($work['startm'], ENT_QUOTES, 'UTF-8');?>月入职&nbsp;至&nbsp;<?php if (!$work['endy']) {?>今<?php }else{
 echo htmlspecialchars($work['endy'], ENT_QUOTES, 'UTF-8');?>年<?php echo htmlspecialchars($work['endm'], ENT_QUOTES, 'UTF-8');?>月<?php }?>
						</dd>
					</dl>
			<?php  } ?>
				</div>

<?php }}?>