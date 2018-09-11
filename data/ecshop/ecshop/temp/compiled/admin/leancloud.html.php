<?php if ($this->_var['full_page']): ?>
<!-- $Id: users_list.htm 17053 2010-03-15 06:50:26Z sxc_shop $ -->
<?php echo $this->fetch('pageheader.htm'); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'../js/utils.js,listtable.js')); ?>

<div class="form-div" style="height: 25px;padding-top: 10px">
    <div style="position: absolute;">&nbsp;&nbsp;<a href="leancloud.php?act=edit"><b><?php echo $this->_var['lang']['create_push']; ?></b></a></div>
    <div style="position: absolute;left: 100px;">
        <form action="javascript:searchUser()" name="searchForm">
            &nbsp;&nbsp;
            <img src="images/icon_search.gif" width="26" height="22" border="0" alt="SEARCH" />
            &nbsp;&nbsp;<select name="order_by" style="width: 120px"><option value="0"><?php echo $this->_var['lang']['order_by']; ?></option><?php echo $this->html_options(array('options'=>$this->_var['order_by'])); ?></select>
            &nbsp;&nbsp;<select name="platform" style="width: 120px"><option value="0"><?php echo $this->_var['lang']['platform']; ?></option><?php echo $this->html_options(array('options'=>$this->_var['platform'])); ?></select>
            &nbsp;&nbsp;<select name="status" style="width: 120px"><option value="0" selected><?php echo $this->_var['lang']['status']; ?></option><?php echo $this->html_options(array('options'=>$this->_var['status'])); ?></select>
            &nbsp;&nbsp;<input  name="title" style="width: 120px" type="text"  value="<?php echo $this->_var['lang']['search_content']; ?>" />
            &nbsp;&nbsp;<input type="submit" value="<?php echo $this->_var['lang']['button_search']; ?>" />
        </form>
    </div>
</div>

<form method="POST" action="leancloud.php" name="listForm" onsubmit="return confirm_bath()">

    <!-- start users list -->
    <div class="list-div" id="listDiv">
        <?php endif; ?>
        <!--用户列表部分-->
        <table cellpadding="3" cellspacing="1">
            <tr>
                <th><input onclick='listTable.selectAll(this, "checkboxes")' type="checkbox"></th>
                <th><a href="javascript:listTable.sort('user_id'); "><?php echo $this->_var['lang']['record_id']; ?></a><?php echo $this->_var['sort_user_id']; ?></th>
                <th><a href="javascript:listTable.sort('user_name'); "><?php echo $this->_var['lang']['title']; ?></a><?php echo $this->_var['sort_user_name']; ?></th>
                <th><a href="javascript:listTable.sort('email'); "><?php echo $this->_var['lang']['link']; ?></a><?php echo $this->_var['sort_email']; ?></th>
                <th><a href="javascript:listTable.sort('is_validated'); "><?php echo $this->_var['lang']['platform']; ?></a><?php echo $this->_var['sort_is_validate']; ?></th>
                <th><?php echo $this->_var['lang']['status']; ?></th>
                <th><?php echo $this->_var['lang']['create_time']; ?></th>
                <th><?php echo $this->_var['lang']['push_time']; ?></th>
                <th><?php echo $this->_var['lang']['handler']; ?></th>
            <tr>
                <?php $_from = $this->_var['push_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['item']):
?>
            <tr>
                <td><input type="checkbox" name="checkboxes[]" value="<?php echo $this->_var['item']['id']; ?>" notice="<?php if ($this->_var['user']['user_money'] != 0): ?>1<?php else: ?>0<?php endif; ?>"/><?php echo $this->_var['user']['user_id']; ?></td>
                <td class="first-cell"><?php echo $this->_var['item']['id']; ?></td>
                <td><?php echo $this->_var['item']['title']; ?></td>
                <td><?php echo $this->_var['item']['link']; ?></td>
                <td><?php echo $this->_var['platform'][$this->_var['item']['platform']]; ?></td>
                <td><?php echo $this->_var['status'][$this->_var['item']['isPush']]; ?></td>
                <td><?php echo $this->_var['item']['created_at']; ?></td>
                <td><?php echo $this->_var['item']['updated_at']; ?></td>
                <td align="center">
                    <a href="leancloud.php?act=edit&id=<?php echo $this->_var['item']['id']; ?>" title="<?php echo $this->_var['lang']['edit']; ?>"><?php echo $this->_var['lang']['edit']; ?></a>
                    <a href="leancloud.php?act=resend&id=<?php echo $this->_var['item']['id']; ?>" title="<?php echo $this->_var['lang']['resend']; ?>"><?php echo $this->_var['lang']['resend']; ?></a>
                    <!--<a href="leancloud.php?act=remove&id=<?php echo $this->_var['item']['id']; ?>" title="<?php echo $this->_var['lang']['remove']; ?>"><img src="images/icon_drop.gif" border="0" height="16" width="16" /></a>-->
                    <a href="javascript:" onclick="listTable.remove(<?php echo $this->_var['item']['id']; ?>, '<?php echo $this->_var['lang']['drop_confirm']; ?>')"><?php echo $this->_var['lang']['remove']; ?></a>
                </td>
            </tr>
            <?php endforeach; else: ?>
            <tr><td class="no-records" colspan="10"><?php echo $this->_var['lang']['no_records']; ?></td></tr>
            <?php endif; unset($_from); ?><?php $this->pop_vars();; ?>
            <tr>
                <td colspan="2">
                    <input type="hidden" name="act" value="batch_remove" />
                    <input type="submit" id="btnSubmit" value="<?php echo $this->_var['lang']['batch_remove']; ?>" disabled="true" class="button" /></td>
                <td align="right" nowrap="true" colspan="8">
                    <?php echo $this->fetch('page.htm'); ?>
                </td>
            </tr>
        </table>

        <?php if ($this->_var['full_page']): ?>
    </div>
    <!-- end users list -->
</form>
<script type="text/javascript" language="JavaScript">
    <!--
    listTable.recordCount = <?php echo $this->_var['record_count']; ?>;
    listTable.pageCount = <?php echo $this->_var['page_count']; ?>;

    <?php $_from = $this->_var['filter']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>
    listTable.filter.<?php echo $this->_var['key']; ?> = '<?php echo $this->_var['item']; ?>';
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

    
//    onload = function()
//    {
//        document.forms['searchForm'].elements['keyword'].focus();
//        // 开始检查订单
//        startCheckOrder();
//    }

    /**
     * 搜索用户
     */
    function searchUser()
    {
        listTable.filter['order_by'] = Utils.trim(document.forms['searchForm'].elements['order_by'].value);
        listTable.filter['platform'] = document.forms['searchForm'].elements['platform'].value;
        listTable.filter['status'] = Utils.trim(document.forms['searchForm'].elements['status'].value);
        listTable.filter['title'] = Utils.trim(document.forms['searchForm'].elements['title'].value);
        listTable.filter['page'] = 1;
        listTable.loadList();
    }

    function confirm_bath()
    {
        userItems = document.getElementsByName('checkboxes[]');

        cfm = '<?php echo $this->_var['lang']['list_remove_confirm']; ?>';

        for (i=0; userItems[i]; i++)
        {
            if (userItems[i].checked && userItems[i].notice == 1)
            {
                cfm = '<?php echo $this->_var['lang']['list_still_accounts']; ?>' + '<?php echo $this->_var['lang']['list_remove_confirm']; ?>';
                break;
            }
        }

        return confirm(cfm);
    }
    //-->
</script>

<?php echo $this->fetch('pagefooter.htm'); ?>
<?php endif; ?>