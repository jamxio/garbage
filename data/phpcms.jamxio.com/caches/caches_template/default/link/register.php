<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<script type="text/javascript" src="<?php echo JS_PATH;?>formvalidator.js" charset="UTF-8"></script> 
<script type="text/javascript" src="<?php echo JS_PATH;?>formvalidatorregex.js" charset="UTF-8"></script>
<link href="<?php echo CSS_PATH;?>link.css" rel="stylesheet" type="text/css" />
<link href="<?php echo CSS_PATH;?>table_form.css" rel="stylesheet" type="text/css" /> 
<!--main-->
<div class="main">
<!--left_bar-->
<div class="col-left">
<div class="crumbs"><a href="<?php echo siteurl($siteid);?>">网站首页</a><span> &gt; </span><a href="<?php echo APP_PATH;?>index.php?m=<?php echo ROUTE_M;?>&siteid=<?php echo $siteid;?>">友情链接</a><span> &gt; </span><?php echo $type_arr['name'];?></div>
<div>

<form action="<?php echo APP_PATH;?>index.php?m=link&c=index&a=register&siteid=<?php echo $siteid;?>" method="post" name="myform" id="myform">
<table cellspacing="1" cellpadding="0" class="table_form">
<caption>申请友情链接</caption>
<tbody><tr> 
<th width='60'>链接类型</th>
<td width="300"><input type="radio" onclick="$('#logolink').hide()" checked="checked" value="0" name="linktype" class="radio_style"> 文字链接
<input type="radio" onclick="$('#logolink').show()" value="1" name="linktype" class="radio_style"> Logo链接
</td>
</tr>
<tr> 
<th>所属分类</th>
<td>
<select  style="width: 36%;" id="typeid" name="typeid">
<option value="0">默认分类</option>
<?php $n=1;if(is_array($types)) foreach($types AS $type_arr) { ?>
<option value="<?php echo $type_arr['typeid'];?>"><?php echo $type_arr['name'];?></option>
<?php $n++;}unset($n); ?>
</select>
</td>
</tr>
<tr> 
<th>网站名称</th>
<td><input type="text" value="" id="name" name="name" class="input-text"></td>
</tr>
<tr> 
<th>网站地址</th>
<td><input type="text" size="40" value="" name="url" id="url" class="input-text"></td>
</tr>
<tr style="display: none;" id="logolink"> 
<th>Logo地址</th>
<td><input type="text" size="40" value="" name="logo" id="logo" class="input-text"></td>
</tr>
<?php if($setting['enablecheckcode']=='1') { ?>
<tr>
       <th>验证码：</th>
       <td><input name="code" type="text" id="code" size="10"  class="input-text"/> <?php echo form::checkcode('code_img','4','14',110,30);?></td>
</tr>
<?php } ?>
<tr> 
<th></th>
<td><input type="submit" value=" 申 请 " name="dosubmit" class="button"> <input type="reset" value=" 取 消 " name="reset" class="button"> </td>
</tr> 
</tbody></table>
</form>
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
         <div class="box">
            <h5 class="title-2">本站LOGO：</h5>
            <div class="tag_a pad-lr-10">
	        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"block\" data=\"op=block&tag_md5=7eb0fb305b6986bb54bd772959613bd2&pos=3\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">添加碎片</a>";}$block_tag = pc_base::load_app_class('block_tag', 'block');echo $block_tag->pc_tag(array('pos'=>'3',));?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
           </div>
        </div>
        <div class="bk10"></div>
        <div class="box">
            <h5 class="title-2">合作联系方式</h5>
            <div class="tag_a pad-lr-10">
	        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"block\" data=\"op=block&tag_md5=56aa81bf842c5558e108d85835267175&pos=2\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">添加碎片</a>";}$block_tag = pc_base::load_app_class('block_tag', 'block');echo $block_tag->pc_tag(array('pos'=>'2',));?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
           </div>
        </div>
        <div class="bk10"></div>
         <div class="box">
            <h5 class="title-2">链接要求</h5>
            <div class="tag_a pad-lr-10">
	        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"block\" data=\"op=block&tag_md5=f3910fed6cfbd1f48602f6868992a441&pos=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">添加碎片</a>";}$block_tag = pc_base::load_app_class('block_tag', 'block');echo $block_tag->pc_tag(array('pos'=>'1',));?>
			<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
           </div>
        </div>
        
        
    </div>
    
    
    
</div>
<script type="text/javascript">
<!--
	$(function(){
	$.formValidator.initConfig({autotip:true,formid:"myform",onerror:function(msg){}});
	$("#name").formValidator({onshow:"请输入网站名称",onfocus:"请输入网站名称"}).inputValidator({min:1,max:999,onerror:"网站名称不能为空"});
 	$("#url").formValidator({onshow:"请输入网站网址",onfocus:"请输入网站网址"}).inputValidator({min:1,onerror:"请输入网站网址"}).regexValidator({regexp:"^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&]*([^<>])*$",onerror:"格式应该为http://www.phpcms.cn/"})
 	$("#code").formValidator({onshow:"请输入验证码",onfocus:"验证码不能为空"}).inputValidator({min:1,max:999,onerror:"验证码不能为空"}).ajaxValidator({
	    type : "get",
		url : "",
		data :"m=pay&c=deposit&a=public_checkcode",
		datatype : "html",
		async:'false',
		success : function(data){	
            if(data == 1)
			{
                return true;
			}
            else
			{
                return false;
			}
		},
		buttons: $("#dosubmit"),
		onerror : "验证码错误",
		onwait : "验证中"
	});
 	})
//-->
</script>
<?php include template("content","footer"); ?>
