<?php if ($this->_var['best_goods']): ?>
<?php if ($this->_var['cat_rec_sign'] != 1): ?>
<DIV class="all_t"><SPAN>精品推荐</SPAN><a href="search.php?intro=best">更多>></a> </DIV>
<div id="show_best_area" class="clearfix goodsBox all_mid">
  <?php endif; ?>
  <?php $_from = $this->_var['best_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>
  <div class="goodsItem"> <span class="best"></span> <a href="<?php echo $this->_var['goods']['url']; ?>"><img src="<?php echo $this->_var['goods']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>" class="goodsimg" /></a><br />
    <p><a href="<?php echo $this->_var['goods']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"><?php echo $this->_var['goods']['short_style_name']; ?></a></p>
    <div class="prices">
      <?php if ($this->_var['goods']['promote_price'] != ""): ?>
      <font class="shop_s"><?php echo $this->_var['lang']['promote_price']; ?><b><?php echo $this->_var['goods']['promote_price']; ?></b></font>
      <?php else: ?>
      <font class="shop_s"><b><?php echo $this->_var['goods']['shop_price']; ?></b></font>
      <?php endif; ?>
      <?php if ($this->_var['show_marketprice']): ?>
      / <font class="market_s"><?php echo $this->_var['goods']['market_price']; ?></font>
      <?php endif; ?>
    </div>
  </div>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  <?php if ($this->_var['cat_rec_sign'] != 1): ?>
  <div class="clear0"></div>
</div>
<?php endif; ?>
<?php endif; ?>
