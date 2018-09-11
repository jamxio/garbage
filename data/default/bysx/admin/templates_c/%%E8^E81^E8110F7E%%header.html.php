<?php /* Smarty version 2.6.20, created on 2017-04-29 13:41:23
         compiled from comm/header.html */ ?>
<div class="header navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container-fluid">
			<a class="brand" href="index.php"><img src="./templates/media/image/logo.png" alt="江晓网站" height="80" width="80"/></a>
			<a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse"><img src="./templates/media/image/menu-toggler.png" alt="菜单按钮" /></a>        
			<ul class="nav pull-right">
				<li class="dropdown" id="header_notification_bar"><a href="<?php echo $this->_tpl_vars['indexurl']; ?>
">前台首页</a></li>
				<li class="dropdown user">
					<a class="dropdown-toggle" data-toggle="dropdown">
					<img alt="<?php echo $this->_tpl_vars['realname']; ?>
" src="./templates/media/image/user_small.jpg" />
					<span class="username"><?php echo $_SESSION['realname']; ?>
</span><i class="icon-angle-down"></i></a>
					<ul class="dropdown-menu">
						<li><a href="user.php?action=edit&id=<?php echo $_SESSION['id']; ?>
"><i class="icon-user"></i> 我的资料</a></li>
						<li class="divider"></li>
						<li><a href="login.php?action=logout"><i class="icon-key"></i> 安全退出</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>