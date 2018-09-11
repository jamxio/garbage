<!-- $Id: shop_config.htm 16865 2009-12-10 06:05:32Z sxc_shop $ -->
<?php echo $this->fetch('pageheader.htm'); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'../js/utils.js,../js/region.js')); ?>
<div class="tab-div">
    <!-- tab bar -->
    <div id="tabbar-div">
        <p>
            <?php $_from = $this->_var['group_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'group');$this->_foreach['bar_group'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['bar_group']['total'] > 0):
    foreach ($_from AS $this->_var['group']):
        $this->_foreach['bar_group']['iteration']++;
?><span class="<?php if ($this->_foreach['bar_group']['iteration'] == 1): ?>tab-front<?php else: ?>tab-back<?php endif; ?>" id="<?php echo $this->_var['group']['code']; ?>-tab"><?php echo $this->_var['group']['name']; ?></span><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </p>
    </div>
    <!-- tab body -->
    <div id="tabbody-div">

        <?php $_from = $this->_var['group_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'group');$this->_foreach['body_group'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['body_group']['total'] > 0):
    foreach ($_from AS $this->_var['group']):
        $this->_foreach['body_group']['iteration']++;
?>
        <table width="100%" id="<?php echo $this->_var['group']['code']; ?>-table" <?php if ($this->_foreach['body_group']['iteration'] != 1): ?>style="display:none"<?php endif; ?>>
        <?php $_from = $this->_var['group']['items']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'items');$this->_foreach['group_items'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['group_items']['total'] > 0):
    foreach ($_from AS $this->_var['items']):
        $this->_foreach['group_items']['iteration']++;
?>
        <tr><td>
            <div style="width:100%;border:solid 1px #dddddd;">
                <form action=<?php echo $this->_var['items']['submit']; ?> method="post" enctype="multipart/form-data">
                    <table cellspacing="0px" width="100%"  style ="border-collapse:collapse">
                        <tr style="background-color: #f4f4f4" height="35px">
                            <th colspan="2" align="left" style="padding-left: 10px"><font size="2"> <?php echo $this->_var['items']['title']; ?><?php if ($this->_var['items']['url']): ?> <a href="<?php echo $this->_var['items']['url']; ?>" target="_blank"><span style="background-color: #2F9DB5; border-radius: 3px;color: white;padding-left: 5px;padding-right: 5px">访问官网</span></a><?php endif; ?></font></th>
                        <tr>
                        <tr><th height="15px"></th><td></td></tr>
                        <?php $_from = $this->_var['items']['vars']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'param');$this->_foreach['group_items'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['group_items']['total'] > 0):
    foreach ($_from AS $this->_var['param']):
        $this->_foreach['group_items']['iteration']++;
?>
                        <tr>
                            <th width="20%" style="padding-right: 5%" align="right"><?php echo $this->_var['param']['name']; ?>：</th>
                            <td height="45px">
                                <?php if ($this->_var['param']['type'] == file): ?>
                                <input type="<?php echo $this->_var['param']['type']; ?>" style="width:200px;line-height:30px;" name="value[<?php echo $this->_var['param']['code']; ?>]" value="<?php echo $this->_var['param']['value']; ?>"/>
                                <?php elseif ($this->_var['param']['type'] == radio): ?>
                                <input type="<?php echo $this->_var['param']['type']; ?>"  name="value[<?php echo $this->_var['param']['code']; ?>]" value="1" <?php if ($this->_var['param']['value'] == 1): ?>checked="cheked"<?php endif; ?>/>是
                                <input type="<?php echo $this->_var['param']['type']; ?>"  name="value[<?php echo $this->_var['param']['code']; ?>]" value="0" <?php if ($this->_var['param']['value'] == 0): ?>checked="cheked"<?php endif; ?>/>否
                                <?php else: ?>
                                <input type="<?php echo $this->_var['param']['type']; ?>" style="padding-left: 5px;width:98%;height:30px;border-radius: 2px;border: 1px solid #dddddd" name="value[<?php echo $this->_var['param']['code']; ?>]" value="<?php echo $this->_var['param']['value']; ?>"/>
                                <?php endif; ?>
                            </td>
                        </tr>
                        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
                        <tr>
                            <th height="15px"></th>
                            <td><input type="text" name="code" value="<?php echo $this->_var['items']['code']; ?>" style="display:none"></td>
                        </tr>
                        <tr style="border-top:1px solid #f1f1f1">
                        <th width="20%"></th>
                        <td align="right" height="35px" style="padding-right: 1%"><input type="submit" name="submit" style="background-color: #dcdcdc;width: 80px;height: 28px;border-radius: 2px;border: 1px solid #bcb8c7"></td>
                        <tr>
                    </table>
                </form>
            </div>
            </br></br>
        </td></tr>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </table>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

        <!--<div class="button-div">-->
            <!--<input name="submit" type="submit" value="<?php echo $this->_var['lang']['button_submit']; ?>" class="button" />-->
            <!--<input name="reset" type="reset" value="<?php echo $this->_var['lang']['button_reset']; ?>" class="button" />-->
        <!--</div>-->

    </div>
</div>
<?php echo $this->smarty_insert_scripts(array('files'=>'tab.js,validator.js')); ?>

<script language="JavaScript">
    region.isAdmin = true;
    onload = function()
    {
        // 开始检查订单
        startCheckOrder();
    }
    var ReWriteSelected = null;
    var ReWriteRadiobox = document.getElementsByName("value[209]");

    for (var i=0; i<ReWriteRadiobox.length; i++)
    {
        if (ReWriteRadiobox[i].checked)
        {
            ReWriteSelected = ReWriteRadiobox[i];
        }
    }

    function ReWriterConfirm(sender)
    {
        if (sender == ReWriteSelected) return true;
        var res = true;
        if (sender != ReWriteRadiobox[0]) {
            var res = confirm('<?php echo $this->_var['rewrite_confirm']; ?>');
        }

        if (res==false)
        {
            ReWriteSelected.checked = true;
        }
        else
        {
            ReWriteSelected = sender;
        }
        return res;
    }
</script>

<?php echo $this->fetch('pagefooter.htm'); ?>