<?php /* Smarty version 2.6.20, created on 2017-04-29 13:41:23
         compiled from comm/left.html */ ?>

<div class="page-sidebar nav-collapse collapse">
	<ul class="page-sidebar-menu">
		<li class="start" style="padding-bottom:15px;"><div class="sidebar-toggler hidden-phone"></div></li>
		
		<!-- 主页内容 -->
		<li class="start <?php if ($this->_tpl_vars['isactive'] == 'index'): ?>active<?php endif; ?>">
			<a href="index.php"><i class="icon-home"></i><span class="title">主页内容</span>
			<span class="selected"></span></a></li>
		
		<!-- 个人介绍 -->
		<li class="<?php if ($this->_tpl_vars['isactive'] == 'introduce'): ?>active<?php endif; ?>">
			<a href="introduce.php"><i class="icon-file-text"></i> <span class="title">个人介绍</span>
			<span class="selected"></span></a></li>

		<!-- 留言管理 -->
		
		<li class="<?php if ($this->_tpl_vars['isactive'] == 'mess'): ?>active<?php endif; ?>">
			<a href="javascript:;"><i class="icon-comments"></i>  <span class="title">留言管理</span><span class="arrow <?php if ($this->_tpl_vars['isactive'] == 'ads'): ?>open<?php endif; ?>"></span><span class="selected"></span></a>
			<ul class="sub-menu">
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'mess'): ?> class="active"<?php endif; ?>><a href="mess.php" title="短信模版">短信模版</a></li>
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'mess_settings'): ?> class="active"<?php endif; ?>><a href="mess_settings.php" title="短信设置">短信设置</a></li>
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'mess_log'): ?> class="active"<?php endif; ?>><a href="mess_log.php" title="短信设置">短信记录日志</a></li>
			</ul>
		</li>

		<!-- 公告管理 -->
		
		<li class="<?php if ($this->_tpl_vars['isactive'] == 'ads'): ?>active<?php endif; ?>">
			<a href="javascript:;"><i class="icon-bullhorn"></i> <span class="title">公告管理</span><span class="arrow <?php if ($this->_tpl_vars['isactive'] == 'ads'): ?>open<?php endif; ?>"></span><span class="selected"></span></a>
			<ul class="sub-menu">
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'goods_category'): ?> class="active"<?php endif; ?>><a href="goods_category.php" title="商品分类列表">广告分类列表</a></li>
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'goods'): ?> class="active"<?php endif; ?>><a href="goods.php" title="求购列表">广告信息列表</a></li>
			</ul>
		</li>

		<!-- 用户管理 -->
		
		<li class="<?php if ($this->_tpl_vars['isactive'] == 'sys'): ?>active<?php endif; ?>">
			<a href="javascript:;"><i class="icon-user"></i> <span class="title">用户管理</span><span class="arrow <?php if ($this->_tpl_vars['isactive'] == 'sys'): ?>open<?php endif; ?>"></span><span class="selected"></span></a>
			<ul class="sub-menu">
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'link_type'): ?> class="active"<?php endif; ?>><a href="link_type.php" title="链接分类管理">链接分类管理</a></li>
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'flink'): ?> class="active"<?php endif; ?>><a href="flink.php" title="友情链接管理">友情链接管理</a></li>
			</ul>
		</li>

		<!-- 站长信息 -->

		<li class="<?php if ($this->_tpl_vars['isactive'] == 'games'): ?>active<?php endif; ?>">
			<a href="javascript:;"><i class="icon-table"></i> <span class="title">站长中心</span><span class="arrow <?php if ($this->_tpl_vars['isactive'] == 'games'): ?>open<?php endif; ?>"></span><span class="selected"></span></a>
			<ul class="sub-menu">
				<li<?php if ($this->_tpl_vars['isactive_li'] == 'game_type'): ?> class="active"<?php endif; ?>><a href="game_type.php" title="游戏分类管理" >游戏分类</a></li>
                <li<?php if ($this->_tpl_vars['isactive_li'] == 'game'): ?> class="active"<?php endif; ?>><a href="game.php" title="游戏管理">游戏管理</a></li>
                <li<?php if ($this->_tpl_vars['isactive_li'] == 'game_log'): ?> class="active"<?php endif; ?>><a href="game_log.php" title="游戏记录日志">游戏记录日志</a></li>
                <li<?php if ($this->_tpl_vars['isactive_li'] == 'game_evaluate'): ?> class="active"<?php endif; ?>><a href="game_evaluate.php" title="游戏评论数据">游戏评论数据</a></li>
                <li<?php if ($this->_tpl_vars['isactive_li'] == 'game_member_five_log'): ?> class="active"<?php endif; ?>><a href="game_member_five_log.php" title="五行记录日志">五行记录日志</a></li>
                <li<?php if ($this->_tpl_vars['isactive_li'] == 'game_member_score_log'): ?> class="active"<?php endif; ?>><a href="game_member_score_log.php" title="会员五行日志记录">会员五行日志记录</a></li>
			</ul>
		</li>
<!-- 
        产品管理项
        <li class="{if $isactive eq 'goods'}active{/if}">
            <a href="javascript:;"><i class="icon-inbox"></i> <span class="title">产品管理</span><span class="arrow {if $isactive eq 'goods'}open{/if}"></span><span class="selected"></span></a>
            <ul class="sub-menu">
                <li{if $isactive_li eq 'goods_insale'} class="active"{/if}><a href="goods_insale.php" title="线上产品">线上产品</a></li>
                <li{if $isactive_li eq 'goods_lib'} class="active"{/if}><a href="goods_insale.php?status=2" title="产品仓库">产品仓库</a></li>
                <li{if $isactive_li eq 'goods_add'} class="active"{/if}><a href="goods_insale.php?action=add" title="添加产品">发布产品</a></li>
            </ul>
        </li> -->
	</ul>
</div>