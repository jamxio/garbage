<?php /* Smarty version 2.6.20, created on 2017-03-02 22:17:35
         compiled from goods_insale.html */ ?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="zh" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="zh" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!--> <html lang="zh" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8" />
    <title>个人网站管理后台</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta name="keywords" content="个人网站管理后台">
    <meta content="个人网站管理后台" name="description" />
    <meta content="jamxio" name="author" />
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/style_tmp.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    <link rel="stylesheet" href="./templates/media/css/DT_bootstrap.css" />
   

</head>
<body class="page-header-fixed">
<!-- BEGIN HEADER -->
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<!-- END HEADER -->
<!-- BEGIN CONTAINER -->
<div class="page-container">
    <!-- BEGIN SIDEBAR LEFT -->
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/left.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    <!-- END SIDEBAR LEFT -->
    <!-- BEGIN PAGE -->
    <div class="page-content">
        <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
        <div id="portlet-config" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button"></button>
                <h3>窗口小部件设置</h3>
            </div>
            <div class="modal-body">窗口小部件设置形式放在这里</div>
        </div>
        <!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
        <!-- BEGIN PAGE CONTAINER-->
        <div class="container-fluid">
            <!-- BEGIN PAGE HEADER-->
            <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/setting.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
            <!-- END PAGE HEADER-->
            <div id="dashboard">
                <div class="portlet box blue">
					<?php if ($this->_tpl_vars['method'] == 'list'): ?>
                    <div class="portlet-title">
                        <div class="caption"><i class="icon-reorder"></i><?php if ($this->_tpl_vars['status'] == 1): ?>线上产品<?php else: ?>产品仓库<?php endif; ?></div>
                        <div class="tools"><a href="javascript:;" class="collapse"></a></div>
                        <div class="actions"><a class="btn green"  href="goods_insale.php?action=add"><i class="icon-plus"></i>添加产品</a></div>
                    </div>
                    <div class="portlet-body">
                        <div class="row-fluid">
                            <div class="span7">
                                <form name="myform" method="Post" action="goods_insale.php<?php if ($this->_tpl_vars['status'] == 2): ?>?status=2<?php endif; ?>">
                                    <div id="sample_1_filter" class="dataTables_filter">
                                        <label id="sre">
											产品名关键字：
                                                <input name="goods_key" type="text" id="goods_key" size="10" value="<?php echo $this->_tpl_vars['goods_key']; ?>
" autofocus/>
                                            &nbsp;&nbsp;
                                            产品类别：
                                            <select name="goods_type" id="goods_type">
												<option>所有</option>
											<?php unset($this->_sections['a']);
$this->_sections['a']['name'] = 'a';
$this->_sections['a']['loop'] = is_array($_loop=$this->_tpl_vars['goods_type_list']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['a']['show'] = true;
$this->_sections['a']['max'] = $this->_sections['a']['loop'];
$this->_sections['a']['step'] = 1;
$this->_sections['a']['start'] = $this->_sections['a']['step'] > 0 ? 0 : $this->_sections['a']['loop']-1;
if ($this->_sections['a']['show']) {
    $this->_sections['a']['total'] = $this->_sections['a']['loop'];
    if ($this->_sections['a']['total'] == 0)
        $this->_sections['a']['show'] = false;
} else
    $this->_sections['a']['total'] = 0;
if ($this->_sections['a']['show']):

            for ($this->_sections['a']['index'] = $this->_sections['a']['start'], $this->_sections['a']['iteration'] = 1;
                 $this->_sections['a']['iteration'] <= $this->_sections['a']['total'];
                 $this->_sections['a']['index'] += $this->_sections['a']['step'], $this->_sections['a']['iteration']++):
$this->_sections['a']['rownum'] = $this->_sections['a']['iteration'];
$this->_sections['a']['index_prev'] = $this->_sections['a']['index'] - $this->_sections['a']['step'];
$this->_sections['a']['index_next'] = $this->_sections['a']['index'] + $this->_sections['a']['step'];
$this->_sections['a']['first']      = ($this->_sections['a']['iteration'] == 1);
$this->_sections['a']['last']       = ($this->_sections['a']['iteration'] == $this->_sections['a']['total']);
?>
                                                <option value="<?php echo $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']; ?>
" <?php if ($this->_tpl_vars['goods_type'] == $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']): ?>selected="selected"<?php endif; ?> ><?php echo $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']; ?>
</option>
											<?php endfor; endif; ?>
                                            </select>
                                            &nbsp;&nbsp;
                                            <input name="action" type="hidden" id="action" value="search" />
                                            <input class="btn green" type="submit" value="搜索">
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <table class="table table-striped table-hover table-bordered" id="sample_editable_1">
                            <thead>
                            <tr>
                                <th>产品名称</th>
                                <th>产品类别</th>
                                <th>产品价格（元）</th>
                                <th>产品介绍</th>
                                <th>发布时间</th>
                                <th>操作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                            </tr>
                            </thead>
                            <tbody>
                            <?php unset($this->_sections['a']);
$this->_sections['a']['name'] = 'a';
$this->_sections['a']['loop'] = is_array($_loop=$this->_tpl_vars['goods_list']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['a']['show'] = true;
$this->_sections['a']['max'] = $this->_sections['a']['loop'];
$this->_sections['a']['step'] = 1;
$this->_sections['a']['start'] = $this->_sections['a']['step'] > 0 ? 0 : $this->_sections['a']['loop']-1;
if ($this->_sections['a']['show']) {
    $this->_sections['a']['total'] = $this->_sections['a']['loop'];
    if ($this->_sections['a']['total'] == 0)
        $this->_sections['a']['show'] = false;
} else
    $this->_sections['a']['total'] = 0;
if ($this->_sections['a']['show']):

            for ($this->_sections['a']['index'] = $this->_sections['a']['start'], $this->_sections['a']['iteration'] = 1;
                 $this->_sections['a']['iteration'] <= $this->_sections['a']['total'];
                 $this->_sections['a']['index'] += $this->_sections['a']['step'], $this->_sections['a']['iteration']++):
$this->_sections['a']['rownum'] = $this->_sections['a']['iteration'];
$this->_sections['a']['index_prev'] = $this->_sections['a']['index'] - $this->_sections['a']['step'];
$this->_sections['a']['index_next'] = $this->_sections['a']['index'] + $this->_sections['a']['step'];
$this->_sections['a']['first']      = ($this->_sections['a']['iteration'] == 1);
$this->_sections['a']['last']       = ($this->_sections['a']['iteration'] == $this->_sections['a']['total']);
?>
                            <tr class="">
                                <td><?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_name']; ?>
</td>
                                <td><?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_type']; ?>
</td>
								<td style="color:red;"><?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_price']; ?>
</td>
                                <td><?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_introduce']; ?>
</td>
                                <td><?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_time']; ?>
</td>
                                <td><a class="修改" href="goods_insale.php?action=add&id=<?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_id']; ?>
">修改</a>&nbsp;&nbsp;|
									<a class="上下架" href="goods_insale.php?action=backorup&id=<?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_id']; ?>
"><?php if ($this->_tpl_vars['status'] == 1): ?>下架<?php elseif ($this->_tpl_vars['status'] == 2): ?>上架<?php endif; ?></a>&nbsp;&nbsp;|
									<a class="删除" href="goods_insale.php?action=del&id=<?php echo $this->_tpl_vars['goods_list'][$this->_sections['a']['index']]['g_id']; ?>
">断售删除</a>&nbsp;&nbsp;
								</td>
                            </tr>
                            <?php endfor; endif; ?>
                            </tbody>
                        </table>

                        <div class="row-fluid">
                            <div class="span6">
                                <div id="sample_1_info" class="dataTables_info">每页 <font color="#FF0000"><?php echo $this->_tpl_vars['pageinfo']['pagesize']; ?>
</font> 条 共 <font color="#FF0000"><?php echo $this->_tpl_vars['pageinfo']['totalpage']; ?>
</font> 页 共 <font color="#FF0000"><?php echo $this->_tpl_vars['pageinfo']['totalrecord']; ?>
</font> 条记录</div>
                            </div>
                            <div class="span6"><div class="dataTables_paginate paging_bootstrap pagination"><ul><?php echo $this->_tpl_vars['pageinfo']['multi']; ?>
</ul></div></div>
                        </div>
                    </div>
					<?php endif; ?>
					<?php if ($this->_tpl_vars['method'] == 'edit'): ?>
                    <div class="portlet-title">
                        <div class="caption"><i class="icon-reorder"></i>发布产品</div>
                        <div class="tools"><a href="javascript:;" class="collapse"></a></div>
                        <div class="actions"><a class="btn green"  href="goods_insale.php?action=add"><i class="icon-plus"></i>添加产品</a></div>
                    </div>
                    <div class="portlet-body form">
                        <form action="goods_insale.php?action=add_save" method="post" name="frm" id="frm" onSubmit="return checkad_edit(this);" class="form-horizontal form-bordered form-row-stripped">
                            <div class="row-fluid">
								<input type="hidden" name="goods_id" value="<?php echo $this->_tpl_vars['goods_info']['g_id']; ?>
"/> 
								<div class="control-group">
                                    <label class="control-label">产品名称</label>
                                    <div class="controls">
                                        <input type="text" placeholder="(必须填写且字数15以下)" name="goods_name" id="goods_name" value="<?php echo $this->_tpl_vars['goods_info']['g_name']; ?>
" class="m-wrap span3" />
                                        <span class="help-inline error">*</span>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">产品类别</label>
                                    <div class="controls">
                                        <select name="goods_type" id="goods_type">
												<option value="0">自定义</option>
											<?php unset($this->_sections['a']);
$this->_sections['a']['name'] = 'a';
$this->_sections['a']['loop'] = is_array($_loop=$this->_tpl_vars['goods_type_list']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['a']['show'] = true;
$this->_sections['a']['max'] = $this->_sections['a']['loop'];
$this->_sections['a']['step'] = 1;
$this->_sections['a']['start'] = $this->_sections['a']['step'] > 0 ? 0 : $this->_sections['a']['loop']-1;
if ($this->_sections['a']['show']) {
    $this->_sections['a']['total'] = $this->_sections['a']['loop'];
    if ($this->_sections['a']['total'] == 0)
        $this->_sections['a']['show'] = false;
} else
    $this->_sections['a']['total'] = 0;
if ($this->_sections['a']['show']):

            for ($this->_sections['a']['index'] = $this->_sections['a']['start'], $this->_sections['a']['iteration'] = 1;
                 $this->_sections['a']['iteration'] <= $this->_sections['a']['total'];
                 $this->_sections['a']['index'] += $this->_sections['a']['step'], $this->_sections['a']['iteration']++):
$this->_sections['a']['rownum'] = $this->_sections['a']['iteration'];
$this->_sections['a']['index_prev'] = $this->_sections['a']['index'] - $this->_sections['a']['step'];
$this->_sections['a']['index_next'] = $this->_sections['a']['index'] + $this->_sections['a']['step'];
$this->_sections['a']['first']      = ($this->_sections['a']['iteration'] == 1);
$this->_sections['a']['last']       = ($this->_sections['a']['iteration'] == $this->_sections['a']['total']);
?>
                                                <option value="<?php echo $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']; ?>
" <?php if ($this->_tpl_vars['goods_info']['g_type'] == $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']): ?>selected="selected"<?php endif; ?> ><?php echo $this->_tpl_vars['goods_type_list'][$this->_sections['a']['index']]['g_type']; ?>
</option>
											<?php endfor; endif; ?>
                                            </select>
											<input type="text" placeholder="(自定义类型，不填默认为其他)" name="goods_type_mix" id="goods_type_mix" value="<?php echo $this->_tpl_vars['news_info']['n_title']; ?>
" class="m-wrap span2" />
                                        <span class="help-inline error">*</span>
                                    </div>
                                </div>
								<div class="control-group">
                                    <label class="control-label">产品价格（元）</label>
                                    <div class="controls">
                                        <input type="text" placeholder="(必须填写产品单价)" name="goods_price" id="goods_price" value="<?php echo $this->_tpl_vars['goods_info']['g_price']; ?>
" class="m-wrap span2" />
                                        <span class="help-inline error">*</span>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">产品概述</label>
                                    <div class="controls">
                                        <input type="text" placeholder="(可以暂不填写，字数30以内)" name="goods_introduce" id="goods_inctroduce" value="<?php echo $this->_tpl_vars['goods_info']['g_introduce']; ?>
" class="m-wrap span6" />
                                        <span class="help-inline error"></span>
                                    </div>
                                </div>
                            </div>
							<input type="hidden" name="goods_time" value=""/> 
							<div class="control-group">
                                    <label class="control-label">产品动向</label>
                                    <div class="controls">
                                        <label class="radio">
                                            <input type="radio" name="goods_status" value="1" checked />
                                            发布线上
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="goods_status" value="2" <?php if ($this->_tpl_vars['goods_info']['g_status'] == 2): ?>checked<?php endif; ?> />
                                            放入仓库
                                        </label>
                                    </div>
                                </div>
                            <div class="form-actions">
                                <input type="hidden" name="goods_id" id="goods_id" value="<?php echo $this->_tpl_vars['goods_info']['g_id']; ?>
">
                                <button type="submit" class="btn blue">保存</button>
                                <button type="reset" class="btn">重填</button>
                            </div>
                        </form>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <!-- END PAGE CONTAINER-->
        </div>
    </div>
    <!-- END PAGE -->
</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<!-- END FOOTER -->
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "comm/javascript_tmp.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>


</body>
</html>