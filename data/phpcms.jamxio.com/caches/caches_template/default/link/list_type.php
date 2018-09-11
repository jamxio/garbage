<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<link href="<?php echo CSS_PATH;?>link.css" rel="stylesheet" type="text/css" />
<!--main-->
<div class="main">
	<!--left_bar-->
	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=5e7fdb3818fd963f06055c19c9bd73c7&action=get_type&typeid=%24type_id&siteid=%24siteid\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'get_type')) {$data = $link_tag->get_type(array('typeid'=>$type_id,'siteid'=>$siteid,'limit'=>'20',));}?>
     <?php $type_arr = $data;?>
  	 <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
	<div class="col-left"> 
    <div class="crumbs"><a href="<?php echo siteurl($siteid);?>">网站首页</a><span> &gt; </span><a href="<?php echo APP_PATH;?>index.php?m=<?php echo ROUTE_M;?>&siteid=<?php echo $siteid;?>">友情链接</a><span> &gt; </span><?php echo $type_arr['name'];?></div>
    <div class="box boxsbg cboxs">
     
 	 	<h5><?php echo $type_arr['name'];?> </h5>
        <div class="tag_a">
        	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=1a473ddf0921c2f375c02b02252e6eee&action=lists&typeid=%24type_id&siteid=%24siteid&linktype=1&order=desc&num=6&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$dat = $link_tag->lists(array('typeid'=>$type_id,'siteid'=>$siteid,'linktype'=>'1','order'=>'desc','limit'=>'6',));}?>
				<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
	       		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>"  target="_blank"><img src="<?php echo $v['logo'];?>" width="92" height="31" /></a>
		        <?php $n++;}unset($n); ?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
         </div>
		 
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=9885c0183f9bcdaba20f8c21416710f2&action=lists&typeid=%24type_id&siteid=%24siteid&linktype=0&order=desc&num=2&page=%24_GET%5Bpage%5D&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$pagesize = 2;$page = intval($_GET[page]) ? intval($_GET[page]) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$link_total = $link_tag->count(array('typeid'=>$type_id,'siteid'=>$siteid,'linktype'=>'0','order'=>'desc','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($link_total, $page, $pagesize, $urlrule);$dat = $link_tag->lists(array('typeid'=>$type_id,'siteid'=>$siteid,'linktype'=>'0','order'=>'desc','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
        <div class="tag_a">
  				<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
	       		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>" target="_blank"><?php echo $v['name'];?> </a>
		        <?php $n++;}unset($n); ?>
        </div>
        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		 <div id="pages"><?php echo $pages;?></div>
         </div>
		 
    </div>
    <!--right_bar-->
    <div class="col-auto">
    	<!--广告228x90-->
        <div class="box">
            <h5 class="title-2">友情链接分类</h5>
            <div class="tag_a">
            <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=list_type&type_id=0&siteid=<?php echo $siteid;?>" title="默认分类">默认分类</a>
            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=274750ae87f3b000334b2eeb6e2a35bc&action=type_lists&listorder=desc&siteid=%24siteid\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'type_lists')) {$data = $link_tag->type_lists(array('listorder'=>'desc','siteid'=>$siteid,'limit'=>'20',));}?>
            <?php $n=1;if(is_array($data)) foreach($data AS $type_v) { ?>
            <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=list_type&type_id=<?php echo $type_v['typeid'];?>&siteid=<?php echo $siteid;?>" title="<?php echo $type_v['name'];?>"><?php echo $type_v['name'];?></a>
            <?php $n++;}unset($n); ?>
            <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
             </div>
        </div>
        <div class="bk10"></div>
        <?php if($setting['is_post']=='1') { ?>
        <div class="txt_c">
            <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=register&siteid=<?php echo $siteid;?>" class="sqlj_btn"></a>
        </div>
        <?php } ?>
    </div>
</div>
<?php include template("content","footer"); ?>
