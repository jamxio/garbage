<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<link href="<?php echo CSS_PATH;?>vote.css" rel="stylesheet" type="text/css" />
<div class="main votesss">
<div class="vote_listt col-left">
<div class="crumbs"><a href="<?php echo siteurl($siteid);?>">首页</a><span> &gt; </span><a href="<?php echo APP_PATH;?>index.php?m=vote&c=index&a=lists&siteid=<?php echo $siteid;?>">投票</a> </div>
    	<div class="tit"> <h5>投票列表</h5></div>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"vote\" data=\"op=vote&tag_md5=902394b0fd31d010969b2f45013536e2&action=lists&order=subjectid+desc&siteid=%24siteid&num=12&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$vote_tag = pc_base::load_app_class("vote_tag", "vote");if (method_exists($vote_tag, 'lists')) {$pagesize = 12;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$vote_total = $vote_tag->count(array('order'=>'subjectid desc','siteid'=>$siteid,'limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($vote_total, $page, $pagesize, $urlrule);$data = $vote_tag->lists(array('order'=>'subjectid desc','siteid'=>$siteid,'limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
        <ul class="wrap icon3j">
        <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
        <li><a title="<?php echo $r['subject'];?>" target="_blank" href="<?php echo APP_PATH;?>index.php?m=vote&c=index&a=show&show_type=1&subjectid=<?php echo $r['subjectid'];?>&siteid=<?php echo $siteid;?>"><?php echo $r['subject'];?></a><span><font color="#1E50A0">(投票数: <?php echo $r['votenumber'];?>)</font></span></li>
        <?php $n++;}unset($n); ?>
        </ul>
        <div id="pages" class="text-c"><?php echo $pages;?></div>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
    </div>
<div class="col-auto">
    	<!--广告228x90-->
        <div class="box">
            <h5 class="title-2">热门投票</h5>
            <div class="tag_a">
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"vote\" data=\"op=vote&tag_md5=d431ece581a91e18c25b5b1317fe1471&action=hits&siteid=%24siteid&num=10&order=DESC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$vote_tag = pc_base::load_app_class("vote_tag", "vote");if (method_exists($vote_tag, 'hits')) {$data = $vote_tag->hits(array('siteid'=>$siteid,'order'=>'DESC','limit'=>'10',));}?>
<ul class="wrap icon3j mg_t10">
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<li><a href="<?php echo APP_PATH;?>index.php?m=vote&c=index&a=show&catid=53&show_type=1&subjectid=<?php echo $r['subjectid'];?>&siteid=<?php echo $siteid;?>" title="<?php echo $r['subject'];?>" target="_blank"><?php echo str_cut($r[subject],34,false);?></a></li>
<?php $n++;}unset($n); ?>
</ul>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
			</div>
        </div>
        <div class="bk10"></div>
                 
             </div>
</div>
<?php include template("content","footer"); ?>