<?php /* Smarty version 2.6.20, created on 2017-04-29 13:41:23
         compiled from comm/setting.html */ ?>
<div class="row-fluid">
	<div class="span12">
		<div class="color-panel hidden-phone">
			<div class="color-mode-icons icon-color" title="主题设置"></div>
			<div class="color-mode-icons icon-color-close"></div>
			<div class="color-mode">
				<p>主题颜色</p>
				<ul class="inline">
					<li class="color-black current color-default" data-style="default" title="默认"></li>
					<li class="color-blue" data-style="blue" title="蓝色"></li>
					<li class="color-brown" data-style="brown" title="棕色"></li>
					<li class="color-purple" data-style="purple" title="紫色"></li>
					<li class="color-grey" data-style="grey" title="灰色"></li>
					<li class="color-white color-light" data-style="light" title="亮色"></li>
				</ul>
				<label>
					<span>布局</span>
					<select class="layout-option m-wrap small">
						<option value="fluid" selected>全屏</option>
						<option value="boxed">窄屏</option>
					</select>
				</label>
				<label>
					<span>头部</span>
					<select class="header-option m-wrap small">
						<option value="fixed" selected>固定</option>
						<option value="default">默认</option>
					</select>
				</label>
				<label>
					<span>菜单栏</span>
					<select class="sidebar-option m-wrap small">
						<option value="fixed">固定</option>
						<option value="default" selected>默认</option>
					</select>
				</label>
				<label>
					<span>底部</span>
					<select class="footer-option m-wrap small">
						<option value="fixed">固定</option>
						<option value="default" selected>默认</option>
					</select>
				</label>
			</div>
		</div>
		<h3 class="page-title">个人网站 <small>管理后台</small></h3>
		<ul class="breadcrumb">
			<?php echo $this->_tpl_vars['breadcrumb']; ?>

		</ul>
	</div>
</div>