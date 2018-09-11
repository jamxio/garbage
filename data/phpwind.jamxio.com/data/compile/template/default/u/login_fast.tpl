<style>
.pop_cont dt{
	width:50px;
}
</style>
<div style="width:350px;">
	<div class="pop_top J_drag_handle">
		<a href="#" class="pop_close" id="J_qlogin_close">关闭</a>
		<strong>请登录后再继续</strong>
	</div>
	<form id="J_qlogin_form" action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login&a=dorun'; ?>" method="post">
	<div class="pop_cont">
		<div id="J_qlogin_tip" style="display:none;"><span class="tips"></span></div>
		<dl class="cc">
			<dt>帐号：</dt>
			<dd><input id="J_qlogin_username" data-id="username" required="true" placeholder="<?php echo htmlspecialchars($loginWay, ENT_QUOTES, 'UTF-8');?>" name="username" type="text" class="input length_4" value="" data-check="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login&a=checkname'; ?>"></dd>
		</dl>
		<dl class="cc">
			<dt>密码：</dt>
			<dd><input data-id="password" name="password" required="true" placeholder="密码" type="password" class="input length_4" value=""></dd>
		</dl>
		<div style="display:none;" id="J_qlogin_qa"></div>
<?php if ($verify) {?>
		<dl class="cc dl_cd">
			<dt>验证码：</dt>
			<dd>
				<input id="J_head_login_code" type="text" class="input length_4 mb5" name="code">
				<div id="J_verify_code"></div>
			</dd>
		</dl>
<?php }?>
		<dl class="cc">
			<dt>&nbsp;</dt>
			<dd style="width:240px;"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=findPwd'; ?>" class="fr">找回密码</a><input name="rememberme" style="margin:0 4px 0 0;" type="checkbox" class="checkbox" id="cktime"><label for="cktime">自动登录</label></dd>
		</dl>
	</div>
	<div class="pop_bottom">
		<button type="submit" class="btn btn_submit" id="J_qlogin_login">登录</button><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=register'; ?>" class="btn">注册</a>
	</div>
	<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
</div>