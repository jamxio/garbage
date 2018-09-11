<!doctype html>
<html>
<head>
<meta charset="<?php echo htmlspecialchars(Wekit::V('charset'), ENT_QUOTES, 'UTF-8');?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title><?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','c','name'), ENT_QUOTES, 'UTF-8');?></title>
<link href="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','css'), ENT_QUOTES, 'UTF-8');?>/admin_style.css?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>" rel="stylesheet" />
<script>
//全局变量，是Global Variables不是Gay Video喔
var GV = {
	JS_ROOT : "<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','res'), ENT_QUOTES, 'UTF-8');?>/js/dev/",																									//js目录
	JS_VERSION : "<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>",																										//js版本号
	TOKEN : '<?php echo htmlspecialchars(Wind::getComponent('windToken')->saveToken('csrf_token'), ENT_QUOTES, 'UTF-8');?>',	//token ajax全局
	REGION_CONFIG : {},
	SCHOOL_CONFIG : {},
	URL : {
		LOGIN : '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','loginUrl'), ENT_QUOTES, 'UTF-8');?>',																													//后台登录地址
		IMAGE_RES: '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','images'), ENT_QUOTES, 'UTF-8');?>',																										//图片目录
		REGION : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=area'; ?>',					//地区
		SCHOOL : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=school'; ?>'				//学校
	}
};
</script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/wind.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/jquery.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>

</head>
<body>
<div class="wrap">
	<div class="h_a">常用菜单</div>
	<form class="J_ajaxForm" action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?c=custom&a=doRun'; ?>" method="post">
	<div class="table_full J_check_wrap">
		<table width="100%">
			<col class="th" />
			<col width="400" />
			<col />
			<?php  foreach($menus as $menu){ 
			$disabled = $menu['id'] == 'custom' ? 'disabled="true" checked' : '';
			?>
			<tr>
				<th><label><input <?php echo htmlspecialchars($disabled, ENT_QUOTES, 'UTF-8');?> id="J_role_<?php echo htmlspecialchars($menu['id'], ENT_QUOTES, 'UTF-8');?>" class="J_check_all" data-direction="y" data-checklist="J_check_<?php echo htmlspecialchars($menu['id'], ENT_QUOTES, 'UTF-8');?>" type="checkbox"><span><?php echo htmlspecialchars($menu['name'], ENT_QUOTES, 'UTF-8');?></span></label></th>
				<td>
					<ul data-name="<?php echo htmlspecialchars($menu['id'], ENT_QUOTES, 'UTF-8');?>" class="three_list cc J_ul_check">
						<?php  foreach($menu['items'] as $item){ ?>
						<li><label><input <?php echo htmlspecialchars($disabled, ENT_QUOTES, 'UTF-8');?> name="customs[]" data-yid="J_check_<?php echo htmlspecialchars($menu['id'], ENT_QUOTES, 'UTF-8');?>" class="J_check" type="checkbox" value="<?php echo htmlspecialchars($item['id'], ENT_QUOTES, 'UTF-8');?>"><span><?php echo htmlspecialchars($item['name'], ENT_QUOTES, 'UTF-8');?></span></label></li>
						<?php  } ?>
					</ul>
				</td>
				<td><div class="fun_tips"></div></td>
			</tr>
			<?php  } ?>
		</table>
	</div>
	<div class="btn_wrap">
		<div class="btn_wrap_pd">
			<button class="J_ajax_submit_btn btn btn_submit" type="submit">提交</button>
		</div>
	</div>
	<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
</div>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/pages/admin/common/common.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
<script>
var ROLE_AUTH_CONFIG = <?php echo WindSecurity::escapeEncodeJson($myMenu, 'UTF-8');?>; //当前角色的已有权限集合
Wind.js(GV.JS_ROOT+ 'pages/admin/role_manage.js?v=' +GV.JS_VERSION);
</script>
</body>
</html>