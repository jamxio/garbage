 
<?php if ($this->_var['hot_goods']): ?>
<?php if ($this->_var['cat_rec_sign'] != 1): ?>
<div id="show_hot_area" class="clearfix goodsBox all_mid all_ms">
  <?php endif; ?>
  <?php $_from = $this->_var['hot_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_64263400_1523428845');if (count($_from)):
    foreach ($_from AS $this->_var['goods_0_64263400_1523428845']):
?>
 <a class="goodsItem" href="<?php echo $this->_var['goods_0_64263400_1523428845']['url']; ?>"> <div  class="img-box"><img src="<?php echo $this->_var['goods_0_64263400_1523428845']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods_0_64263400_1523428845']['name']); ?>" class="goodsimg" /></div>
  <div class="goods-brief"><?php echo sub_str($this->_var['goods_0_64263400_1523428845']['brief'],20); ?></div>
    <div class="gos-title"><?php echo htmlspecialchars($this->_var['goods_0_64263400_1523428845']['short_name']); ?></div> 
  <div class="prices">
      <?php if ($this->_var['goods_0_64263400_1523428845']['promote_price'] != ""): ?>
    <font class="shop_s"><?php echo $this->_var['lang']['promote_price']; ?><b><?php echo $this->_var['goods_0_64263400_1523428845']['promote_price']; ?></b></font>
    <?php else: ?>
    <font class="shop_s"><b><?php echo $this->_var['goods_0_64263400_1523428845']['shop_price']; ?></b></font>
    <?php endif; ?>
  </div>
   

  </a>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  <?php if ($this->_var['cat_rec_sign'] != 1): ?>
  <div class="clear0"></div>
</div> <div class="clear10"></div>
<?php endif; ?>
<?php endif; ?>
