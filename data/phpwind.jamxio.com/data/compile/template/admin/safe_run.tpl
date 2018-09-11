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

		<div class="h_a">后台安全</div>
		<form class="J_ajaxForm" action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?c=safe&a=add'; ?>" method="post">
			<div class="table_full">
				<table width="100%">
					<colgroup>
						<col class="th">
						<col width="400">
					</colgroup>
					<!-- <tr>
				<th>安全问题功能</th>
				<td>
					<ul class="switch_list cc">
						<li><label><input type="radio" value="1" name="question" <?php echo htmlspecialchars(Pw::ifcheck($conf['question.isopen'] == 1), ENT_QUOTES, 'UTF-8');?>><span>开启</span></label></li>
						<li><label><input type="radio" value="0" name="question" <?php echo htmlspecialchars(Pw::ifcheck($conf['question.isopen'] == 0), ENT_QUOTES, 'UTF-8');?>><span>关闭</span></label></li>
					</ul>
				</td>
				<td><div class="fun_tips">开启后需要设置安全问题才能登录后台</div></td>
		</tr> -->
					<tr>
						<th>后台登录IP限制</th>
						<td><textarea name="ips" class="length_6"><?php echo htmlspecialchars($ips, ENT_QUOTES, 'UTF-8');?></textarea></td>
						<td>
							<div class="fun_tips">
								此功能可绑定登录后台的 IP，只有在列表内的 IP 才能登录站点，创始人不受限制。<br>
								可以绑定单个IP地址格式如:192.0.0.1，也可以绑定一段IP格式如:192.0.0，多个IP "," 分隔。<br>
								<span class="red">当前登录ip:<?php echo htmlspecialchars($clientIp, ENT_QUOTES, 'UTF-8');?></span>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div class="btn_wrap">
				<div class="btn_wrap_pd">
					<button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">提交</button>
				</div>
			</div>
		<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
	</div>
	<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/pages/admin/common/common.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
</body>
</html>