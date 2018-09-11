<?php /* Smarty version 2.6.20, created on 2017-04-24 16:45:50
         compiled from introduce.html */ ?>
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
				<div class="portlet-body form">
				    <form action="introduce.php" method="post" name="frm" id="frm" onSubmit="return checkad_edit(this);" class="form-horizontal form-bordered form-row-stripped">
					<div class="control-group">
						
						<div>
							
							<script id="container" type="text/plain"><?php echo $this->_tpl_vars['index_content']; ?>
</script>
							<script type="text/javascript" src="ueditor1433/ueditor.config.js"></script>
							<script type="text/javascript" src="ueditor1433/ueditor.all.js"></script>
							<script type="text/javascript">var ue = UE.getEditor('container');</script>
						</div>
					</div>

					<div class="form-actions">
						<button type="submit" class="btn blue">保存</button>
						<input type="reset" class="btn" value="若未确定修改勿点保存按钮"/>
					</div>
					</form>
				</div>


					
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