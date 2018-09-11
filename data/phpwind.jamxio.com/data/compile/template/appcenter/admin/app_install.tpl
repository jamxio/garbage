<!doctype html>
<html>
<head>
<meta charset="<?php echo htmlspecialchars(Wekit::V('charset'), ENT_QUOTES, 'UTF-8');?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title><?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','c','name'), ENT_QUOTES, 'UTF-8');?></title>
<link href="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','css'), ENT_QUOTES, 'UTF-8');?>/admin_style.css?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>" rel="stylesheet" />
<script>
//全局变量，是Global Variables不是Gay Video喔
var GV = {
	JS_ROOT : "<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','res'), ENT_QUOTES, 'UTF-8');?>/js/dev/",																									//js目录
	JS_VERSION : "<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>",																										//js版本号
	TOKEN : '<?php echo htmlspecialchars(Wind::getComponent('windToken')->saveToken('csrf_token'), ENT_QUOTES, 'UTF-8');?>',	//token ajax全局
	REGION_CONFIG : {},
	SCHOOL_CONFIG : {},
	URL : {
		LOGIN : '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','loginUrl'), ENT_QUOTES, 'UTF-8');?>',																													//后台登录地址
		IMAGE_RES: '<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','images'), ENT_QUOTES, 'UTF-8');?>',																										//图片目录
		REGION : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=area'; ?>',					//地区
		SCHOOL : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','index.php?m=misc&c=webData&a=school'; ?>'				//学校
	}
};
</script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/wind.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/jquery.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>

</head>
<body>
<div class="wrap">
	<div class="nav">
		<ul class="cc">
			<li><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app'; ?>">已安装</a></li>
			<li class="current"><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app&a=install'; ?>">本地安装</a></li>
			<?php  if(Wekit::load('APPCENTER:service.srv.PwDebugApplication')->inDevMode1()){ ?>
			<li><a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=develop'; ?>">开发助手</a></li>
			<?php  } ?>
		</ul>
	</div>
	<!--应用安装-->
<div class="h_a">安装说明</div>
<div class="prompt_text">
		<ul>
			<li>目前仅支持.zip压缩包</li>
			<li>请上传压缩包，然后点立即安装开始安装流程</li>
			<li>如果安装失败，可按照错误提示修复错误，然后选择重试</li>
		</ul>
</div>
<div class="h_a">本地上传</div>
<form id="uploadForm" method="post" action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app&a=doInstall'; ?>">
	<div class="table_full mb10">
			<table width="100%">
				<col class="th" />
				<tr>
					<th>选择文件</th>
					<td>
						<!--选择文件-->
						<div class="cc mb10">
							<div id="J_up_wrap" class="single_file_up">
								<a href="">上传文件</a>
								<input id="J_swfupload_btn" name="application" type="file">
							</div>
							<span id="J_up_tip" class="mr20" style="display:none;"></span>
							<span id="J_up_file" class="mr5" style="display:none;"></span>
							<a href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app&a=delFile'; ?>" id="J_up_del" style="display:none;">[删除]</a>
							<!-- <span class="tips_loading">正在上传</span>
							<span class="tips_loading">正在验证</span>
							<span class="tips_error">错误提示</span>
							<span class="tips_success">安装成功</span> -->
						</div>
						<button id="J_upload_btn" type="submit" class="btn btn_submit" style="visibility:hidden;">立即安装</button>
						<!--上传进度-->
						<div id="J_cc" style="display:none;">
							<div class="cc">
								<div class="install_schedule_bg fl mr10"><div id="J_install_schedule" class="install_schedule" style="width:0%;"><span></span></div></div><div id="J_percent" style="line-height:24px;">0%</div>
							</div>
							<div id="loadStep" class="install_load cc"></div>
						</div>
					</td>
				</tr>
			</table>
		<input type="hidden" name="file" id="J_file_input">
		</div>
<input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form>
<?php  if($apps){ ?>
<div class="h_a">未安装应用</div>
	<div class="table_full mb10">
		<table width="100%">
			<col class="th" />
<?php foreach ($apps as $k => $v){ ?>
			<tr>
				<th><span class="b mr10"><?php echo htmlspecialchars($v, ENT_QUOTES, 'UTF-8');?></span><a class="J_ajax_del w" href="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app&a=delFolder'; ?>" data-pdata="{'folder': '<?php echo htmlspecialchars($v, ENT_QUOTES, 'UTF-8');?>'}">[删除]</a></th>
				<td><form action="<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?apps%5B%5D=', rawurlencode($v),'&m=appcenter&c=app&a=toInstall'; ?>" method="post" class="J_ajaxForm"><button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">安装</button><input type="hidden" name="csrf_token" value="<?php echo WindSecurity::escapeHTML(Wind::getComponent('windToken')->saveToken('csrf_token')); ?>"/></form></td>
			</tr>
<?php  } ?>
		</table>
	</div>
	<!--button type="submit" class="btn btn_submit">安装</button-->
<?php  } ?>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/pages/admin/common/common.js?v<?php echo htmlspecialchars(NEXT_RELEASE, ENT_QUOTES, 'UTF-8');?>"></script>
</div>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/util_libs/swfupload/swfupload.js?v<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','c','version'), ENT_QUOTES, 'UTF-8');?>"></script>
<script src="<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','url','js'), ENT_QUOTES, 'UTF-8');?>/util_libs/swfupload/plugins/swfupload.cookies.js?v<?php echo htmlspecialchars(Wind::getComponent('response')->getData('G','c','version'), ENT_QUOTES, 'UTF-8');?>"></script>
<script>
/*
 * 1、state = 'success' && step = '' 成功！
 * 2、state = 'success' && step = 'num' 请求stepurl!
 * 3、state = 'fail' 失败！
 */
var conf = {
	stepUrl : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?m=appcenter&c=app&a=doInstall'; ?>',
	
};
$(function(){


	var up_wrap = $('#J_up_wrap'),
			swfu,
			up_tip = $('#J_up_tip'),
			up_file = $('#J_up_file'),
			up_del = $('#J_up_del'),
			up_btn = $('#J_upload_btn'),
			file_input = $('#J_file_input');
	

	swfu = new SWFUpload({
		//debug : true,
		upload_url : '<?php echo Wind::getComponent('response')->getData('G', 'url', 'base'),'/','admin.php?_json=1&m=appcenter&c=app&a=upload'; ?>', 
		flash_url : GV.JS_ROOT+ 'util_libs/swfupload/Flash/swfupload.swf', 
		post_params: {
			siteId : 1,
			csrf_token : GV.TOKEN
		},
		/*custom_settings : {
			progressTarget : "fsUploadProgress",
			cancelButtonId : "btnCancel"
		},*/
		file_types : "*.zip",
		file_upload_limit : 1,
		button_placeholder_id : "J_swfupload_btn", 
		button_width: "65",
		button_height: "29",
		button_text: '',
		button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
		file_queue_error_handler : function(file, errorCode, message) {
			try {
				switch (errorCode) {
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						alert("文件太大了——文件名: " + file.name + ", 大小: " + file.size + ", Message: " + message);
						break;
					case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
						alert("请不要上传0字节的文件");
						$.error("Error Code: Zero byte file, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
						break;
					case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
						alert("错误的文件类型");
						break;
					case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
						alert('最多只能上传'+ this.settings.file_upload_limit +'个文件');
						break;
					default:
						$.error("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
						break;
				}
			} catch (ex) {
	       	 $.error(ex);
	   	 }
		},
		file_dialog_complete_handler : function (numFilesSelected, numFilesQueued) {
			//开始上传
			this.startUpload();
			//up_tip.html('<span class="tips_loading">正在上传</span>').show();
		},
    //file_size_limit : "20480",
		upload_start_handler : function (file) {
			//开始上传文件前触发的事件处理函数
			try {
				up_tip.html('<span class="tips_loading">正在上传并校验</span>').show();;
			}
			catch (ex) {}
	
			return true;
		},
		upload_success_handler : function (file, serverData, r) {
			//文件上传成功后触发的事件处理函数
			try {
				var data = $.parseJSON(serverData),
						_data = data.data;

				if(data.state=== 'success') {
					file_input.val(_data.file);

					up_wrap.hide();

					up_tip.html('<span class="tips_success">上传成功</span>').show();
					up_file.text(file.name).show();
					up_del.show();	
					up_btn.css('visibility', 'visible');	//按钮可见
				}else if(data.state === 'fail'){
					up_tip.html('<span class="tips_error">'+ data.message +'</span>').show();
					restLimit();
				}
			} catch (ex) {
				this.debug(ex);
			}
		},
		upload_complete_handler : function (file) {
			//完成
		}

	});

	//删除
	up_del.on('click', function(e){
		e.preventDefault();
		$.post(this.href, {
			file : file_input.val()
		}, function(data){
			if(data.state == 'success') {
				window.location.href=window.location.href;
			}else if(data.state == 'fail') {
				Wind.use('dialog', function(){
					Wind.dialog.alert(data.message);
				});
			}
		}, 'json');
		
	});

	//队列数减1
	function restLimit() {
		var stats = swfu.getStats();
		stats.successful_uploads--;
		swfu.setStats(stats);
	}
	
});
Wind.js(GV.JS_ROOT +"/pages/appcenter/admin/setUpApp.js?v="+ GV.JS_VERSION);
</script>
</body>
</html>