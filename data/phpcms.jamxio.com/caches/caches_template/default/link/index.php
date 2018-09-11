<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<link href="<?php echo CSS_PATH;?>link.css" rel="stylesheet" type="text/css" />
<!--main-->
<div class="main">
	<!--left_bar-->
	<div class="col-left">
    <div class="crumbs"><a href="<?php echo siteurl($siteid);?>">网站首页</a><span> &gt; </span><a href="<?php echo APP_PATH;?>index.php?m=<?php echo ROUTE_M;?>&siteid=<?php echo $siteid;?>">友情链接</a></div>
    <div class="box boxsbg cboxs">
    <h5>默认分类 <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=list_type&type_id=0&siteid=<?php echo $siteid;?>" class="more">更多>></a></h5>
     <div class="tag_a">
        	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=c4057c64760ef8fe326d9abfc1bf1b86&action=lists&typeid=0&siteid=%24siteid&linktype=1&order=desc&num=6&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$dat = $link_tag->lists(array('typeid'=>'0','siteid'=>$siteid,'linktype'=>'1','order'=>'desc','limit'=>'6',));}?>
				<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
	       		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>" target="_blank"><img src="<?php echo $v['logo'];?>" width="92" height="31" /></a>
		        <?php $n++;}unset($n); ?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
      </div>
      <div class="tag_a">
      	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=92dd011242899e22b82a36e484b21692&action=lists&typeid=0&siteid=%24siteid&linktype=0&order=desc&num=10&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$dat = $link_tag->lists(array('typeid'=>'0','siteid'=>$siteid,'linktype'=>'0','order'=>'desc','limit'=>'10',));}?>
		<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
      		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>"  target="_blank"><?php echo $v['name'];?> </a>
        <?php $n++;}unset($n); ?>
		<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
       </div>
         
     <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=274750ae87f3b000334b2eeb6e2a35bc&action=type_lists&listorder=desc&siteid=%24siteid\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'type_lists')) {$data = $link_tag->type_lists(array('listorder'=>'desc','siteid'=>$siteid,'limit'=>'20',));}?>
		<?php $n=1;if(is_array($data)) foreach($data AS $type_v) { ?>
    	<h5><?php echo $type_v['name'];?> <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=list_type&type_id=<?php echo $type_v['typeid'];?>&siteid=<?php echo $siteid;?>" class="more">更多>></a></h5>
        <div class="tag_a">
        	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=2a89bfc3320826568f4039d9bccaaec7&action=lists&typeid=%24type_v%5Btypeid%5D&siteid=%24siteid&linktype=1&order=desc&num=6&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$dat = $link_tag->lists(array('typeid'=>$type_v[typeid],'siteid'=>$siteid,'linktype'=>'1','order'=>'desc','limit'=>'6',));}?>
				<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
	       		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>" target="_blank"><img src="<?php echo $v['logo'];?>" width="92" height="31" /></a>
		        <?php $n++;}unset($n); ?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
         </div>
        <div class="tag_a">
        	<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=96d185773e1c98101138ed222372bc8d&action=lists&typeid=%24type_v%5Btypeid%5D&siteid=%24siteid&linktype=0&order=desc&num=10&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'lists')) {$dat = $link_tag->lists(array('typeid'=>$type_v[typeid],'siteid'=>$siteid,'linktype'=>'0','order'=>'desc','limit'=>'10',));}?>
				<?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
	       		 <a href="<?php echo $v['url'];?>" title="<?php echo $v['name'];?>"  target="_blank"><?php echo $v['name'];?> </a>
		        <?php $n++;}unset($n); ?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
         </div>
    	<?php $n++;}unset($n); ?>
	<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>  
          
        	<!--pages-->
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
        <?php if($setting[$siteid]['is_post']=='1') { ?>
         <div class="txt_c">
            <a href="<?php echo APP_PATH;?>index.php?m=link&c=index&a=register&siteid=<?php echo $siteid;?>" class="sqlj_btn" target="_blank"></a>
        </div>
        <?php } ?>
     </div>
</div>
<?php include template("content","footer"); ?>
