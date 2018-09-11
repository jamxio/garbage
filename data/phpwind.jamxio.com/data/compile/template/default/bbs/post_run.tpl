<!doctype html>
<html>
<head>
	<meta charset="<?php echo htmlspecialchars(Wekit::V('charset'), ENT_QUOTES, 'UTF-8');?>" />
<title><?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','seo','title'), ENT_QUOTES, 'UTF-8');?> - Powered by phpwind</title>
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="generator" content="phpwind v<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','version'), ENT_QUOTES, 'UTF-8');?>" />
<meta name="description" content="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','seo','description'), ENT_QUOTES, 'UTF-8');?>" />
<meta name="keywords" content="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','seo','keywords'), ENT_QUOTES, 'UTF-8');?>" />
<link rel="stylesheet" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/'.Wekit::C('site', 'theme.site.default').'/css'.Wekit::getGlobal('theme','debug'); ?>/core.css?v=<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>" />
<link rel="stylesheet" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/'.Wekit::C('site', 'theme.site.default').'/css'.Wekit::getGlobal('theme','debug'); ?>/style.css?v=<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>" />
<!-- <base id="headbase" href="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','base'), ENT_QUOTES, 'UTF-8');?>/" /> -->
<?php echo Wekit::C('site', 'css.tag');?>
<script>
//全局变量 Global Variables
var GV = {
	JS_ROOT : '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','res'), ENT_QUOTES, 'UTF-8');?>/js/dev/',										//js目录
	JS_VERSION : '<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>',											//js版本号(不能带空格)
	JS_EXTRES : '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','extres'), ENT_QUOTES, 'UTF-8');?>',
	TOKEN : '<?php echo htmlspecialchars(Wind::getComponent('windToken')->saveToken('csrf_token'), ENT_QUOTES, 'UTF-8');?>',	//token $.ajaxSetup data
	U_CENTER : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space'; ?>',		//用户空间(参数 : uid)
<?php 
$loginUser = Wekit::getLoginUser();
if ($loginUser->isExists()) {
?>
	//登录后
	U_NAME : '<?php echo htmlspecialchars($loginUser->username, ENT_QUOTES, 'UTF-8');?>',										//登录用户名
	U_AVATAR : '<?php echo htmlspecialchars(Pw::getAvatar($loginUser->uid), ENT_QUOTES, 'UTF-8');?>',							//登录用户头像
<?php 
}
?>
	U_AVATAR_DEF : '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','images'), ENT_QUOTES, 'UTF-8');?>/face/face_small.jpg',					//默认小头像
	U_ID : parseInt('<?php echo htmlspecialchars($loginUser->uid, ENT_QUOTES, 'UTF-8');?>'),									//uid
	REGION_CONFIG : '',														//地区数据
	CREDIT_REWARD_JUDGE : '<?php echo $loginUser->showCreditNotice();?>',			//是否积分奖励，空值:false, 1:true
	URL : {
		LOGIN : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login'; ?>',										//登录地址
		QUICK_LOGIN : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login&a=fast'; ?>',								//快速登录
		IMAGE_RES: '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','images'), ENT_QUOTES, 'UTF-8');?>',										//图片目录
		CHECK_IMG : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login&a=showverify'; ?>',							//验证码图片url，global.js引用
		VARIFY : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=verify&a=get'; ?>',									//验证码html
		VARIFY_CHECK : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=verify&a=check'; ?>',							//验证码html
		HEAD_MSG : {
			LIST : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=notice&a=minilist'; ?>'							//头部消息_列表
		},
		USER_CARD : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&c=card'; ?>',								//小名片(参数 : uid)
		LIKE_FORWARDING : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=post&a=doreply'; ?>',							//喜欢转发(参数 : fid)
		REGION : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=area'; ?>',									//地区数据
		SCHOOL : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=school'; ?>',								//学校数据
		EMOTIONS : "<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=emotion&type=bbs'; ?>",					//表情数据
		CRON_AJAX : '<?php echo htmlspecialchars($runCron, ENT_QUOTES, 'UTF-8');?>',											//计划任务 后端输出执行
		FORUM_LIST : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=forum&a=list'; ?>',								//版块列表数据
		CREDIT_REWARD_DATA : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&a=showcredit'; ?>',					//积分奖励 数据
		AT_URL: '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=remind'; ?>',									//@好友列表接口
		TOPIC_TYPIC: '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=forum&a=topictype'; ?>'							//主题分类
	}
};
</script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/wind.js?v=<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
<?php
PwHook::display(array(PwSimpleHook::getInstance("head"), "runDo"), array(), "", $__viewer);
?>
	<link href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/default/css'.Wekit::getGlobal('theme','debug'); ?>/post.css?v=<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>" rel="stylesheet" />
</head>
<body>
<div class="wrap">
<?php if ($site_info_notice = Wekit::C('site','info.notice')) {?>
<style>.header_wrap{top:29px;}body{padding-top:75px;}</style><div id="notice"><?php echo htmlspecialchars($site_info_notice, ENT_QUOTES, 'UTF-8');?></div>
<?php }?>
<header class="header_wrap">
	<div id="J_header" class="header cc">
		<div class="logo">
			<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/',''; ?>">
				<?php  if($__css = Wekit::C('site', 'css.logo')) { ?>
				<!--后台logo上传-->
				<img src="<?php echo htmlspecialchars(Pw::getPath($__css), ENT_QUOTES, 'UTF-8');?>" alt="<?php echo htmlspecialchars(Wekit::C('site','info.name'), ENT_QUOTES, 'UTF-8');?>">
				<?php  } else { ?>
				<img src="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/'.Wekit::C('site', 'theme.site.default').'/images'; ?>/logo.png" alt="<?php echo htmlspecialchars(Wekit::C('site','info.name'), ENT_QUOTES, 'UTF-8');?>">
				<?php  } ?>
			</a>
		</div>
		<nav class="nav_wrap">
			<div class="nav">
				<ul>
	<?php  $nav = Wekit::load('SRV:nav.bo.PwNavBo');
		  $nav->setRouter();
		  $currentId =  '';
		   $main = $child = array();
		  if ($nav->isForum()) $nav->setForum($pwforum->foruminfo['parentid'], $fid, $tid);
		  $main = $nav->getNavFromConfig('main', true);
		  foreach($main as $key=>$value){
			if ($value['current']) {
				$current = 'current';
				$currentId = $key;
			} else {
				$current = '';
			}
			$value['child'] && $child[$key] = $value['child'];
		  ?>
					<li class="<?php echo htmlspecialchars($current, ENT_QUOTES, 'UTF-8');?>"><?php echo $value['name'];?></li>
	<?php  } ?>
				</ul>
			</div>
		</nav>
		<?php
PwHook::display(array(PwSimpleHook::getInstance("header_nav"), "runDo"), array(), "", $__viewer);
?>
		<div class="header_search" role="search">
			<form action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=search&c=s'; ?>" method="post">
				<input type="text" id="s" aria-label="搜索关键词" accesskey="s" placeholder="搜索其实很简单" x-webkit-speech speech name="keyword"/>
				<button type="submit" aria-label="搜索"><span>搜索</span></button>
			<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
		</div>
		<?php  if (!$loginUser->isExists()) { ?>
<div class="header_login">
	<?php
PwHook::display(array(PwSimpleHook::getInstance("header_info_3"), "runDo"), array(), "", $__viewer);
?><a rel="nofollow" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login'; ?>">登录</a><a rel="nofollow" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=register'; ?>">注册</a>
</div>
<?php  } else {
	if ($pwforum && $pwforum->isForum()) {
		$_tmpfid = $pwforum->fid;
		$_tmpcid = $pwforum->getCateId();
	} else {
		$_tmpfid = 0;
		$_tmpcid = $pwforum ? $pwforum->getCateId() : '0';
	}
?>
	<a class="header_login_btn" id="J_head_forum_post" role="button" aria-label="快速发帖" aria-haspopup="J_head_forum_pop" href="#" title="快速发帖" tabindex="-1"><span class="inside"><span class="header_post" >发帖</span></span></a>
	<div id="J_head_forum_pop" tabindex="0" class="pop_select_forum" style="display:none;" aria-label="快速发帖菜单,按ESC键关闭菜单">
		<a id="J_head_forum_close" href="#" class="pop_close" role="button">关闭窗口</a>
		<div class="core_arrow_top" style="left:310px;"><em></em><span></span></div>
		<div class="hd">发帖到其他版块</div>
		<div id="J_head_forum_ct" class="ct cc" data-fid="<?php echo htmlspecialchars($_tmpfid, ENT_QUOTES, 'UTF-8');?>" data-cid="<?php echo htmlspecialchars($_tmpcid, ENT_QUOTES, 'UTF-8');?>">
			<div class="pop_loading"></div>
		</div>
		<div class="ft">
			<div class="associate">
				<label class="fr"><input type="checkbox" id="J_head_forum_join" data-url="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=forum&a=join'; ?>">添加到我的版块</label>
				发帖到：<span id="J_post_to_forum"></span>
			</div>
			<div class="tac">
				<button type="button" class="btn btn_submit disabled" disabled="disabled" id="J_head_forum_sub" data-url="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=post'; ?>">确定</button>
			</div>
		</div>
	</div>
	<?php 
		$messageCount = $loginUser->info['notices'] + $loginUser->info['messages'];
		$messageClass = $messageCount ? 'header_message' : 'header_message header_message_none';
	?>
	<a class="header_login_btn" id="J_head_msg_btn" tabindex="0" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=message&c=message'; ?>" aria-haspopup="J_head_msg_pop" aria-label="消息菜单,按pagedown打开菜单,tab键导航,esc键关闭"><span class="inside"><span class="<?php echo htmlspecialchars($messageClass, ENT_QUOTES, 'UTF-8');?>">消息<em class="core_num J_hm_num"><?php echo htmlspecialchars($messageCount, ENT_QUOTES, 'UTF-8');?></em></span></span></a>
	<!--消息下拉菜单-->
	<div id="J_head_msg_pop" tabindex="0" aria-label="消息下拉菜单,按ESC键关闭菜单" class="header_menu_wrap my_message_menu" style="display:none;">
		<div class="header_menu cc">
			<div class="header_menu_hd" id="J_head_pl_hm"><span class="<?php echo htmlspecialchars($messageClass, ENT_QUOTES, 'UTF-8');?> header_message_down">消息<em class="core_num J_hm_num"><?php echo htmlspecialchars($messageCount, ENT_QUOTES, 'UTF-8');?></em></span></div>
			<div id="J_head_msg" class="my_message_content"><div class="pop_loading"></div></div>
		</div>
	</div>
	<div class="header_login_later">
		<?php
PwHook::display(array(PwSimpleHook::getInstance("header_info_1"), "runDo"), array(), "", $__viewer);
?>
		<a aria-haspopup="J_head_user_menu" aria-label="个人功能菜单,按pagedown打开菜单,tab键导航,esc键关闭" tabindex="0" rel="nofollow" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=space&uid=', rawurlencode($loginUser->uid); ?>" id="J_head_user_a" class="username" title="<?php echo htmlspecialchars($loginUser->username, ENT_QUOTES, 'UTF-8');?>"><?php echo htmlspecialchars(Pw::substrs($loginUser->username,6), ENT_QUOTES, 'UTF-8');?><em class="core_arrow"></em></a>
		<?php
PwHook::display(array(PwSimpleHook::getInstance("header_info_2"), "runDo"), array(), "", $__viewer);
?>
		<div class="fl">
		<div id="J_head_user_menu" role="menu" class="header_menu_wrap my_menu_wrap" style="display:none;">
			<div class="header_menu my_menu cc">
				<div class="header_menu_hd" id="J_head_pl_user"><span title="<?php echo htmlspecialchars($loginUser->username, ENT_QUOTES, 'UTF-8');?>" class="username"><?php echo htmlspecialchars(Pw::substrs($loginUser->username,6), ENT_QUOTES, 'UTF-8');?></span><em class="core_arrow_up"></em></div>
				<ul class="ct cc">
				<?php  $nav = Wekit::load('SRV:nav.bo.PwNavBo');
					$myNav = $nav->getNavFromConfig('my');
					foreach($myNav as $key=>$value){
				?>
					<li><?php echo $value['name'];?></li>
				<?php  } 
 
				$_url = '';
				$_panelManage = false;
				if ($loginUser->getPermission('panel_bbs_manage')) {
					$_url = 'manage/content/run';
					$_panelManage = true;
				}
				if (!$_panelManage && $loginUser->getPermission('panel_user_manage')) {
					$_url = 'manage/user/run';
					$_panelManage = true;
				}
				if (!$_panelManage && $loginUser->getPermission('panel_report_manage')) {
					$_url = 'manage/report/run';
					$_panelManage = true;
				}
				if (!$_panelManage && $loginUser->getPermission('panel_recycle_manage')) {
					$_url = 'manage/recycle/run';
					$_panelManage = true;
				}
				if ($_panelManage) {
				?>
					<li><a href="<?php echo htmlspecialchars(WindUrlHelper::createUrl($_url), ENT_QUOTES, 'UTF-8');?>" rel="nofollow"><em class="icon_system"></em>前台管理</a></li>
				<?php } if (Pw::getstatus($loginUser->info['status'], PwUser::STATUS_ALLOW_LOGIN_ADMIN) || Pw::inArray(3, $loginUser->groups)) {?>
					<li><a href="<?php echo htmlspecialchars(Wind::getComponent('router')->getRoute('pw')->checkUrl('admin.php'), ENT_QUOTES, 'UTF-8');?>" target="_blank" rel="nofollow"><em class="icon_admin"></em>系统后台</a></li>
				<?php  } ?>
				</ul>
				<ul class="ft cc">
					<li><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=profile'; ?>"><em class="icon_profile"></em>个人设置</a></li>
					<?php
PwHook::display(array(PwSimpleHook::getInstance("header_my"), "runDo"), array(), "", $__viewer);
?>
					<li><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=u&c=login&a=logout'; ?>" rel="nofollow"><em class="icon_quit"></em>退出</a></li>
				</ul>
			</div>
		</div>
		</div>
	</div>
	<?php  if ($loginUser->info['message_tone'] > 0 && $messageCount > 0) { ?>
	<audio autoplay="autoplay">
		<source src="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/default/images'; ?>/message/msg.wav" type="audio/wav" />
		<source src="<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/default/images'; ?>/message/msg.mp3" type="audio/mp3" />
		<div style='overflow:hidden;width:0;float:left'><embed src='<?php echo Wind::getComponent('response')->getData('G', 'url', 'themes').'/site/default/images'; ?>/message/msg.wav' width='0' height='0' AutoStart='true' type='application/x-mplayer2'></embed></div>
	</audio>
	<?php  } 
  } ?>
	</div>
</header>
<?php 
if ($child) {
foreach ($child as $ck => $cv) {
	 if ($currentId == $ck){
?>
	<div class="nav_weak" id="<?php echo htmlspecialchars($ck, ENT_QUOTES, 'UTF-8');?>">
<?php  }else{ ?>
	<div class="nav_weak" id="<?php echo htmlspecialchars($ck, ENT_QUOTES, 'UTF-8');?>" style="display:none">
<?php  } ?>
		<ul class="cc">
			<?php  foreach($cv as $_v){
				$current = $_v['current'] ? 'current' : '';
			?>
			<li class="<?php echo htmlspecialchars($current, ENT_QUOTES, 'UTF-8');?>"><?php echo $_v['name'];?></li>
			<?php  } ?>
		</ul>
	</div>
<?php }} ?>
<div class="tac"> </div>
	<div class="main_wrap">
		<div class="bread_crumb">
			<?php echo $headguide;?>
		</div>
		<form method="post" id="mainForm" name="FORM" action="<?php echo htmlspecialchars(WindUrlHelper::createUrl('bbs/post/' . $do . '/?_json=1&fid=' . $fid), ENT_QUOTES, 'UTF-8');?>" enctype="multipart/form-data">
		<div class="box_wrap post_page">
			<nav>
				<div class="content_nav">
					<ul id="tabTypeHead">
					<?php  if ($action == 'reply') { ?>
						<li class="current"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=post&a=reply&tid=', rawurlencode($tid); ?>">发表回复</a></li>
					<?php  } elseif ($action == 'modify') { ?>
						<li class="current"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=post&a=modify&tid=', rawurlencode($tid),'&pid=', rawurlencode($pid); ?>">编辑帖子</a></li>
					<?php  } else { 
  foreach ($pwforum->getThreadType($loginUser) as $key => $value) { ?>
						<li class="<?php echo htmlspecialchars(Pw::isCurrent($special == $key), ENT_QUOTES, 'UTF-8');?>"><a href="<?php echo htmlspecialchars(WindUrlHelper::createUrl('bbs/post/run/?fid=' . $fid . ($key != 'default' ? ('&special=' . $key) : '')), ENT_QUOTES, 'UTF-8');?>"><?php echo htmlspecialchars($value[1], ENT_QUOTES, 'UTF-8');?></a></li>
						<?php  } 
  } ?>
					</ul>
				</div>
			<nav>
			<?php  $draftCount = Wekit::load('draft.PwDraft')->countByUid($loginUser->uid); ?>
			<div class="post_content">
				<a id="J_draft_lis_btn" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=draft&a=myDrafts'; ?>" class="my_drafts">草稿箱<span class="red" style="<?php  if (!$draftCount) { ?>display:none;<?php  } ?>">(<em id="J_draft_count"><?php echo htmlspecialchars($draftCount, ENT_QUOTES, 'UTF-8');?></em>)</span></a>

				<div id="J_draft_list" class="fr dn">
					<div class="pop_draft" id="J_draft_wrap">
						<div class="pop_loading"></div>
						<!--span class="not_content_mini">暂无草稿</span-->
					</div>
				</div>
				<hgroup class="title">
					<?php  if ($topictypes['topic_types']) {//主题分类 ?>
					<input type="hidden" name="topic_type_id" value="" id="J_topic_type_id" />
					<select id="J_sort_1" class="mr10" name="topictype">
						<option value="0">请选择分类</option>
						<?php  foreach($topictypes['topic_types'] as $v) { ?>
						<option value="<?php echo htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8');?>"><?php echo htmlspecialchars(strip_tags($v['name']), ENT_QUOTES, 'UTF-8');?></option>
						<?php  } ?>
					</select>
					<select id="J_sort_2" class="mr10" style="display:none;" name="sub_topictype">
						<option value="0">请选择分类</option>
					</select>
					<?php  }//主题分类结束 ?>
					<input name="atc_title" id="J_atc_title" value="<?php echo htmlspecialchars($atc_title, ENT_QUOTES, 'UTF-8');?>" class="input length_6 mr15"<?php echo htmlspecialchars(!empty($isTopic) ? ' required' : '', ENT_QUOTES, 'UTF-8');?> aria-required="true" placeholder="<?php echo htmlspecialchars(!empty($default_title) ? $default_title : '请输入标题', ENT_QUOTES, 'UTF-8');?>" title="请输入标题" data-max="<?php echo htmlspecialchars(Wekit::C('bbs', 'title.length.max'), ENT_QUOTES, 'UTF-8');?>"/><span id="J_title_tip"></span>
				</hgroup>
				<?php
PwHook::display(array($pwpost, "runDo"), array('createHtmlBeforeContent'), "", $__viewer);
?>
				<div class="c"></div>
				<div class="cc mb10">
					<div class="cm">
						<div class="cw">
							<?php  //$pwpost->displayHtmlFromBeforeContent(); 
 include("D:\\websoft\\web\\phpwind\\data\\compile/template/default/bbs/wind_editor.tpl"); ?>
						</div>
					</div>
					<div class="sd">
						<div class="sidebar">
							<?php  if ($action == 'run' || $action == 'modify') { 
  if (!$pid && $loginUser->getPermission('tag_allow_add')) {
$hotTags = Wekit::load('tag.srv.PwTagService')->getHotTags(0,20);
$hotTags = array_slice($hotTags,0,10);
?>
<dl class="current post_tags_add">
	<dt class="J_sidebar_forum_toggle">添加话题</dt>
	<dd>
		<div class="user_select_input cc J_user_tag_wrap">
			<ul class="fl J_user_tag_ul">
			<?php  if ($action == 'modify') {
				$modifyTags = Wekit::load('tag.srv.PwTagService')->getTagByType('threads',$tid);
			
  foreach ($modifyTags as $tag) { ?>
				<li><a href="javascript:;" rel="tag">
					<span class="J_tag_name"><?php echo htmlspecialchars($tag['tag_name'], ENT_QUOTES, 'UTF-8');?></span>
					<del class="J_user_tag_del" title="<?php echo htmlspecialchars($tag['tag_name'], ENT_QUOTES, 'UTF-8');?>">×</del>
					<input type="hidden" name="tagnames[]" value="<?php echo htmlspecialchars($tag['tag_name'], ENT_QUOTES, 'UTF-8');?>">
					</a>
				</li>
				<?php  } 
  } ?>
			</ul>
			<input aria-label="给输出的内容添加话题" class="J_user_tag_input" type="text" data-name="tagnames[]" value="<?php echo htmlspecialchars($tags->info['tags'], ENT_QUOTES, 'UTF-8');?>" />
		</div>
		<div class="gray mb10">（话题之间空格隔开，限5个）</div>
		<div class="post_tags_hot">
			<em>热门话题</em>
			<ul class="cc" id="J_hot_tag">
			<?php  foreach ($hotTags as $v) {
				$v['tag_name'] = Pw::substrs($v['tag_name'],10);
			?>
				<li title="<?php echo htmlspecialchars($v['tag_name'], ENT_QUOTES, 'UTF-8');?>"><a href="javascript:;" rel="tag" role="button"><span><?php echo htmlspecialchars($v['tag_name'], ENT_QUOTES, 'UTF-8');?></span></a></li>
			<?php  } ?>
			</ul>
		</div>
	</dd>
</dl>
<?php  } 
  } 

PwHook::display(array($pwpost, "runDo"), array('createHtmlRightContent'), "", $__viewer);
?>
						</div>
					</div>
				</div>
				<input type="hidden" value="<?php echo htmlspecialchars($pid, ENT_QUOTES, 'UTF-8');?>" name="pid" />
				<input type="hidden" value="<?php echo htmlspecialchars($tid, ENT_QUOTES, 'UTF-8');?>" name="tid" />
				<input type="hidden" value="<?php echo htmlspecialchars($special, ENT_QUOTES, 'UTF-8');?>" name="special" />
				<div class="ft cc">
					<button type="submit" name="Submit" class="btn btn_submit btn_big fl mr10" id="J_post_sub">发布</button>
					<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=draft&a=doAdd'; ?>" class="btn btn_big mr10" id="J_draftBtn">存为草稿</a>
					<label for="reply_notice_label"><input name="reply_notice" id="reply_notice_label" type="checkbox" value="1" <?php echo htmlspecialchars($reply_notice, ENT_QUOTES, 'UTF-8');?> />有回复提醒我</label>
				</div>
			</div>
		</div>
		<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
	</div>
<!--.main-wrap,#main End-->
<div class="tac">
 <br />
 
</div>
<div class="footer_wrap">
	<div class="footer">
		<pw-drag id="footer_segment"/>
		<div class="bottom">
		<?php 
			$nav = Wekit::load('SRV:nav.bo.PwNavBo');
			$bottom = $nav->getNavFromConfig('bottom');
			foreach($bottom as $key=>$value){
		
 echo $value['name'];
  } ?>
		</div>
		<p>Powered by <a href="http://www.phpwind.net/" target="_blank" rel="nofollow">phpwind v<?php echo htmlspecialchars(NEXT_VERSION, ENT_QUOTES, 'UTF-8');?></a> &copy;2003-2103 <a href="http://www.phpwind.com" target="_blank" rel="nofollow">phpwind.com</a> <a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow"><?php echo htmlspecialchars(Wekit::C('site','info.icp'), ENT_QUOTES, 'UTF-8');?></a></p>
		<p><?php echo Wekit::C('site','statisticscode');?></p>
	</div>
	 
	 
	 
	<div id="cloudwind_common_bottom"></div>
	<?php
PwHook::display(array(PwSimpleHook::getInstance("footer"), "runDo"), array(), "", $__viewer);
?>
</div>

<!--返回顶部-->
<a href="#" rel="nofollow" role="button" id="back_top" tabindex="-1">返回顶部</a>

</div>

<!--结束-->

<script>
Wind.use('jquery', 'global', 'ajaxForm', 'dialog', function() {
	$("#J_atc_title").focus();
	//主题分类
<?php  if ($topictypes['topic_types']) { ?>

	var CURRENT_TOPIC_TYPE = parseInt('<?php echo htmlspecialchars($defaultTopicType, ENT_QUOTES, 'UTF-8');?>'),					//默认主题分类
			PARENT_TOPIC_TYPE = parseInt('<?php echo htmlspecialchars($defaultParentTopicType, ENT_QUOTES, 'UTF-8');?>'),		//默认二级父主题分类
			SORT_CONFIG = $.parseJSON('<?php echo $subTopicTypesJson;?>');				//分类数据

	var sort_1 = $('#J_sort_1'), sort_2 = $('#J_sort_2');

	//选择当前主题分类
	if(PARENT_TOPIC_TYPE) {
		//二级主题
		sort_1.val(PARENT_TOPIC_TYPE);
		sortSelect(PARENT_TOPIC_TYPE, CURRENT_TOPIC_TYPE);
	}else if(!PARENT_TOPIC_TYPE && CURRENT_TOPIC_TYPE) {
		//只有一级
		sort_1.val(CURRENT_TOPIC_TYPE);
		sortSelect(CURRENT_TOPIC_TYPE);
	}

	sort_1.on('change', function(){
			sortSelect($(this).val());
	});

	//切换下拉
	function sortSelect(s1, s2){
		var data = SORT_CONFIG[s1], //二级分类对象
				arr = [];

		if(data) {
			//存在二级分类
				//arr.push('<option value="0">请选择分类</option>');
			$.each(data, function(i, o){
				arr.push('<option value="'+ i +'">'+ o +'</option>');
			});
			sort_2.html(arr.join('')).show();

			if(s2) {
				//选中第二级分类
				sort_2.val(s2);
			}
		}else{
			//不存在二级分类
			sort_2.hide().empty();
		}
	}
<?php  } ?>
	//主题分类结束

	//点击热门标签
	$('#J_hot_tag a').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			text = $this.text();

		//不可点
		if($this.parent().hasClass('disabled')) {
			return false;
		}

		//判断是否已经添加
		if(!$('ul.J_user_tag_ul input[value="'+ text +'"]').length) {
			$('ul.J_user_tag_ul').append('<li><a><span class="J_tag_name">'+ text +'</span><del class="J_user_tag_del" title="'+ text +'">×</del><input type="hidden" name="tagnames[]" value="'+ text +'"></a></li>');
		}
		$this.parent().addClass('disabled');
	});

	//删除标签后，修改热门标签状态
	$('ul.J_user_tag_ul').on('click', '.J_user_tag_del', function(e){
		$('#J_hot_tag > li[title="'+ $(this).attr('title') +'"]').removeClass('disabled');
	});


	var title = $('#J_atc_title'),
		content_editor = $('#J_wind_editor'),
		title_tip = $('#J_title_tip');

	<?php  if ($action == 'reply') { ?>
	//编辑页 后端不验证标题空 ie拿掉placeholder
	/*if($.browser.msie) {
		title.removeAttr('placeholder');
	}*/
	<?php  } ?>

	//标题字数统计
	;(function(title,title_tip) {
		var inputEvent = function() {
			var length = $.trim(title.val().length);
			var max = title.data('max');
			if(length > max) {
				title_tip.html('最多' + max + '个字，已经超出<span style="color:red;font-weight:bold;">'+ (length - max) +'</span>个字');
			}else {
				title_tip.html('');
			}
		}
		var title_0 = title[0];
		if($.browser.version == '9.0'){//IE9对下面两个事件支持有缺陷
			setInterval(function(){
				inputEvent();
			}, 64);
		}else if('oninput' in title_0){
			title.on('input',inputEvent);
		}else{//IE6/7/8
			title[0].onpropertychange = function() {
				if (window.event.propertyName == "value"){
					var $this = $(this);
					//处理placeholder的问题
					if($this.attr("placeholder") == $this.val()){
						return false;
					}
					inputEvent();
				}
			}
		}
	})(title,title_tip);

	//草稿
	;(function() {
		var draft_count = $('#J_draft_count'),		//草稿数
			draft_wrap = $('#J_draft_wrap'),		//列表内容
			draft_loaded = false;

		//存为草稿
		$('#J_draftBtn').on('click',function(e) {
			e.preventDefault();
			var $this = $(this),
				windeditor = content_editor.data('windeditor'),
				title_v = title.val(),
				//没有编辑器直接取textarea的值，目前没有做自动同步，需要用getValue获取编辑器的值
				content = windeditor ? windeditor.getValue() : content_editor.val();
			if(!$.trim(title_v) || !$.trim(content)) {
				Wind.Util.resultTip({
					follow : $this,
					error : true,
					msg : '帖子标题或内容不能为空'
				});
				return false;
			}

			$.post(this.href, {'atc_title':title_v,'atc_content':content}, function(data){
				if(data.state === 'success') {
					Wind.Util.resultTip({
						elem : $this,
						follow : true,
						msg : '保存成功'
					});
					draft_loaded = false;

					//+1
					draft_count.text(parseInt(draft_count.text())+1).parent().show();

					//清空
					draft_wrap.html('<div class="pop_loading"></div>');
				}else if(data.state === 'fail') {
					Wind.Util.resultTip({
						error : true,
						elem : $this,
						follow : true,
						msg : data.message
					});
				}
			}, 'json');
		});

		//获取草稿列表
		var draft_list_btn = $('#J_draft_lis_btn'),
			draft_list = $('#J_draft_list'),
			content_cache = {};

		draft_list_btn.on('click', function(e){
			e.preventDefault();
			var $this = $(this);

			draft_list.toggleClass('dn');
			draft_list_btn.toggleClass('up_current');

			if(!draft_loaded && draft_list_btn.hasClass('up_current')) {
				draft_loaded = true;
				//未请求数据
				var li_arr= [];
				$.getJSON($this.attr('href'), function(data){
					if(data.state === 'success') {
						if(!data.data.length) {
							draft_wrap.html('<div class="not_content_mini"><i></i>啊哦，草稿箱暂没有任何内容哦！</div>');
							return;
						}

						$.each(data.data, function(i, o){
							li_arr.push('<li><a data-pdata="{\'id\':\''+o.id+'\'}" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?c=draft&a=doDelete'; ?>" class="pop_close J_draft_del" title="删除草稿">[删除]</a><a href="" data-id="'+ o.id +'" class="insert J_draft_insert" title="载入草稿">[载入]</a><span class="J_draft_title">'+ o.title +'</span><span>'+ o.created_time +'</span></li>');

							//存入内容
							content_cache[o.id] = o.content;
							draft_list_btn.addClass('up_current');
						});
						draft_wrap.html('<ul>'+ li_arr.join('')+ '</ul>');

					}else if(data.state === 'fail'){
						Wind.Util.resultTip({
							error : true,
							msg : data.message
						});
						draft_loaded = false;
					}
				});

			}
		}).on('blur', function(){
			//失焦隐藏
			if(!h_lock) {
				draft_list.addClass('dn');
				draft_list_btn.removeClass('up_current');
			}
		});

		//聚焦判定
		var h_lock = false;
		draft_list.on('mouseenter', function(){
			h_lock = true;
		}).on('mouseleave', function(){
			draft_list_btn.focus();
			h_lock = false;
		});


		draft_list.on('click', 'a.J_draft_del', function(e){
			//删除草稿
			e.preventDefault();
			var $this = $(this);

			Wind.dialog({
				message : '确定删除该草稿内容？',
				type : 'confirm',
				isMask : false,
				follow : $this, //跟随触发事件的元素显示
				onOk : function () {
					$('body').trigger('setCustomPost', [$this]);
					$.post($this.attr('href'), function(data){
						if(data.state === 'success') {
							$this.parent('li').remove();
							
							var c = parseInt(draft_count.text());
							draft_count.text(c-1);
							if(c <= 1) {
								draft_wrap.html('<div class="not_content_mini"><i></i>啊哦，草稿箱暂没有任何内容哦！</div>');
							}
						}else if(data.state === 'fail'){
							//global.js
							Wind.Util.resultTip({
								error : true,
								msg : data.message
							});
						}
					}, 'json');
				}
			});
		}).on('click', 'a.J_draft_insert', function(e){
			//载入草稿
			e.preventDefault();
			var $this = $(this);
			Wind.dialog({
				message : '载入草稿内容将会覆盖当前内容，确定载入？',
				type : 'confirm',
				isMask : false,
				follow : $this, //跟随触发事件的元素显示
				onOk : function () {
					windeditor = content_editor.data('windeditor');		//编辑器对象
					title.val($this.siblings('.J_draft_title').text());					//写入标题
					windeditor.setContent(content_cache[$this.data('id')]);	//写入内容
				}
			});
		}).on('click', '.J_draft_title', function(e){
			//点击标题
			$(this).siblings('a.J_draft_insert').click();
		});
	})();


//切换发帖类型选项卡
$("#tabTypeHead").on('click', 'li:not(.current)', function(){
	window.onbeforeunload = $.noop;
	var title = $('#J_atc_title');
	var content = $('#J_wind_editor');
	var editor = content.data('windeditor');
	editor && editor.saveContent();
	var atc_title = $.trim(title.val());
    var atc_content = $.trim(content.val());
    if (atc_title != "" || (atc_content != "" && atc_content != "<br>")) {
		if(confirm('确认离开并放弃此页面内容?')){
			editor && editor.clear_local_data();
		}else{
			return false;
		}
	}else{
		editor && editor.clear_local_data();
	}
});

var forceTopic = '<?php echo htmlspecialchars($forceTopic, ENT_QUOTES, 'UTF-8');?>';//是否强制主题分类，1强制
/*
 * 提交
*/
	var word_tpl = '<div class="pop_sensitive"><div class="pop_top J_drag_handle"><a href="#" class="pop_close J_close">关闭</a><strong>提示</strong></div><div class="pop_cont"><div class="not_content_mini" id="J_word_tip"></div></div><div class="pop_bottom" id="J_word_bototm"></div></div>',
			needcheck = ('<?php echo htmlspecialchars($needcheck, ENT_QUOTES, 'UTF-8');?>' == '1') ? true : false,		//是否审核
			post_btn =  $('#J_post_sub');							//提交按钮

	//点击发布
	$('#mainForm').on('submit', function(e){
		e.preventDefault();
		var titleInput = $("#J_atc_title"),
			rx_tit = titleInput.val().replace(/\s*/g, '');
		var contentTextarea = $("#J_wind_editor"),
			editor = contentTextarea.data('windeditor');
		//校验标题和内容是否为空,发新帖时才校验
		if(POST_TYPE === Post_Type_Enum.NEW_POST && (rx_tit === ''|| contentTextarea.val().replace(/\s*/g, '') === '')){
			Wind.Util.resultTip({
				error : true,
				msg : '帖子标题或内容不能为空',
				follow : post_btn,
				callback: function(){
					if(!rx_tit) {
						titleInput.focus();
					}else{
						//editor.setFocus($(editor.editorDoc.body));
					}
				}
			});
			return;
		}

		//针对不支持placeholder的浏览器优化处理
		if(document.createElement('input').placeholder !== '' && POST_TYPE === Post_Type_Enum.NEW_POST){
			if(titleInput.val() === titleInput.attr("placeholder")){
				Wind.Util.resultTip({
	 						error : true,
	 						msg : '帖子标题不能为空',
	 						follow : post_btn
	 					});
				return;
			}
		}
		//检查强制分类
		if(forceTopic == 1){
			var needPop = false;//是否需要弹窗显示分类
			var topicSelects = $('.post_page .title').find('select');
			topicSelects.each(function(i, item){
				var option = $(item).find('option:selected');
				//console.log(option.text(), $(item).val())
				if($(item).val() == 0){
					needPop = true;
				}
			});
			if(needPop === true){
				//如果满足条件，调用弹窗显示分类
				Wind.js(GV.JS_ROOT + 'pages/bbs/topicType.js?v=' + GV.JS_VERSION, function(){
					var url = GV.URL.TOPIC_TYPIC;
					var fid = '<?php echo htmlspecialchars($fid, ENT_QUOTES, 'UTF-8');?>';
					var topic = new ShowTopicPop({url: url, fid: fid, callback: function(data){
							if(data){
								needPop = false;
								$(data).each(function(i, item){
									if(i === 0){
										$("#J_sort_1").val(item.val);
										sortSelect(item.val);//调用页面里面的联动方法
									}
									if(i === 1){
										$("#J_sort_2").val(item.val);
									}
								});
								post_btn.click();
							}
						}});
						topic.init();
				});
				return false;
			}
		}
		//是否要审核
		if(needcheck) {
			Wind.dialog({
	 			message : '本版块内容需要管理员审核后才能正常显示！',
				type : 'confirm',
				isMask : false,
				okText : '发布',
				onOk : function () {
					needcheck = false;
					postSubmit();
				}
	 		});
		}else{
			//fix IE9 bug 包括 IE9兼容模式下的IE9文档模式，虽然version是7.0，但是和9.0一样
			if($.browser.msie){
				var form = $('#mainForm')[0];
				for(var i=0, len = form.elements.length; i< len; i++){
					var item = form.elements[i];
					if(item && item.type == 'application/x-shockwave-flash'){
						item.parentElement.removeChild(item);
					}
				}
			}
			postSubmit();
		}

	});

	var verify = false;
	<?php if ($hasVerifyCode) {?>
		//开启验证码
		verify = true;
	<?php }?>

	//帖子发布 ajax
	function postSubmit(){
		if(verify && Wind.Util.showVerifyPop(post_btn)) {
			//提交前验证码判断 未通过
			return false;
		}

		$('#mainForm').ajaxSubmit({
	 		dataType : 'json',
	 		beforeSerialize:function() {
	 			//同步编辑器的内容到textarea中
	 			//!TODO:编辑器组件里自动同步
	 			//content_editor.data('windeditor').saveContent();
	 		},
	 		beforeSubmit : function(data) {
	 			var title_tip = $('#J_atc_title');
	 			var max = parseInt(title_tip.data('max'));
	 			if($.trim(title_tip.val()).length > max) {
	 				title_tip.focus();
	 			}
	 			//global.js
	 			Wind.Util.ajaxBtnDisable(post_btn);
	 		},
	 		success : function(data, statusText, xhr, $form) {
	 			if(!data || !data.state){
	 				Wind.Util.resultTip({
	 						error : true,
	 						msg : '系统出错',
	 						follow : post_btn
	 					});
	 				return;
	 			}
	 			if(data.state == 'success') {
	 				//提交时页面跳转会触发onbeforeunload
	 				window.onbeforeunload = $.noop;
	 				//清除编辑器草稿
	 				content_editor.data('windeditor').clear_local_data();
	 				if(data.referer) {
	 					setTimeout(function(){
	 						location.href = decodeURIComponent(data.referer);
	 					}, 10);
	 				}
	 			}else if(data.state == 'fail') {
	 				//global.js
	 				Wind.Util.ajaxBtnEnable(post_btn);
	 				var _data = data.data;

	 				if(_data) {

	 					if(_data.isVerified) {
	 						//审核
	 						Wind.dialog.html(word_tpl, {
	 							id : 'J_word_wrap',
	 							callback : function(){
	 								$('#J_word_tip').html(data.message +'<br>是否继续发布？');
	 								$('#J_word_bototm').html('<button type="button" id="J_word_change" class="btn btn_submit mr10">马上修改</button><button type="button" class="btn" id="J_word_subdirect">直接发布</button>');

	 								//马上修改
	 								wordCallback();

	 								//马上发布
	 								$('#J_word_subdirect').on('click', function(e){
	 									e.preventDefault();
	 									//增加action 参数
	 									$form[0].action = $form[0].action+'&verifiedWord=1';

	 									postSubmit();
	 									Wind.dialog.closeAll();
	 								});
	 							}
	 						});
	 					}
	 				}else{
	 					Wind.Util.resultTip({
	 						error : true,
	 						msg : data.message,
	 						follow : post_btn
	 					});
	 				}

		 		}
	 		}
		});
	}


	//敏感词回调
	function wordCallback(text){
		Wind.use('draggable', function(){
 			$('#J_word_wrap').draggable( { handle : '.J_drag_handle'} );
 		});

		//敏感词修改聚焦
		$('#J_word_change').on('click', function(e) {
 			e.preventDefault();
 			Wind.dialog.closeAll();

 			$('iframe.wind_editor_iframe')[0].contentWindow.document.body.focus();
 		});

	}

	<?php  if ($special == 'poll') { ?>
	//投票帖
	Wind.js(GV.JS_ROOT + 'pages/bbs/postVote.js?v=' + GV.JS_VERSION)
	<?php  } ?>

});
</script>
</body>
</html>