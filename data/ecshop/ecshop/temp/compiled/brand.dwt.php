<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="Generator" content="ECSHOP v3.6.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="Description" content="<?php echo $this->_var['description']; ?>" />

<title><?php echo $this->_var['page_title']; ?></title>

<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" href="animated_favicon.gif" type="image/gif" />
<link href="<?php echo $this->_var['ecs_css_path']; ?>" rel="stylesheet" type="text/css" />

<?php echo $this->smarty_insert_scripts(array('files'=>'common.js,global.js,compare.js')); ?>
</head>
<body>
<?php echo $this->fetch('library/page_header.lbi'); ?>

<div class="block box">
 <div id="ur_here">
  <?php echo $this->fetch('library/ur_here.lbi'); ?>
 </div>
</div>

<div class="blank"></div>
<div class="block clearfix">
  
  <div class="AreaR">
    <div class="box">
     <div class="box_1">
      <h3><span><?php echo $this->_var['brand']['brand_name']; ?></span></h3>
      <div class="boxCenterList">
        <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
        <tr>
          <td bgcolor="#ffffff" width="200" align="center" valign="middle">
          <div style="width:200px; overflow:hidden;">
          <?php if ($this->_var['brand']['brand_logo']): ?>
            <img src="data/brandlogo/<?php echo $this->_var['brand']['brand_logo']; ?>" />
            <?php endif; ?>
          </div>
          </td>
          <td bgcolor="#ffffff">
          <?php echo nl2br($this->_var['brand']['brand_desc']); ?><br />
            <?php if ($this->_var['brand']['site_url']): ?>
            <?php echo $this->_var['lang']['official_site']; ?> <a href="<?php echo $this->_var['brand']['site_url']; ?>" target="_blank" class="f6"><?php echo $this->_var['brand']['site_url']; ?></a><br />
            <?php endif; ?>
            <?php echo $this->_var['lang']['brand_category']; ?><br />
            <div class="brandCategoryA">
              <?php $_from = $this->_var['brand_cat_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');if (count($_from)):
    foreach ($_from AS $this->_var['cat']):
?>
            <a href="<?php echo $this->_var['cat']['url']; ?>" class="f6"><?php echo htmlspecialchars($this->_var['cat']['cat_name']); ?> <?php if ($this->_var['cat']['goods_count']): ?>(<?php echo $this->_var['cat']['goods_count']; ?>)<?php endif; ?></a>
              <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </div>  
         </td>
        </tr>
      </table>
      </div>
     </div>
    </div>
    <div class="blank5"></div>
  
   
<?php echo $this->fetch('library/recommend_best.lbi'); ?>
  <?php echo $this->fetch('library/goods_list.lbi'); ?>
  <?php echo $this->fetch('library/pages.lbi'); ?>



  </div>  
  
</div>

<div class="blank"></div>
<?php echo $this->fetch('library/page_footer.lbi'); ?>
</body>
</html>
