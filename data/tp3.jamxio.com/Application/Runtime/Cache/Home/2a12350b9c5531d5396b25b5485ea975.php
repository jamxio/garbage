<?php if (!defined('THINK_PATH')) exit();?><button onclick="close();">按<span>0</span>次</button>
<script type="text/javascript" src="/Public/zepto.min.js"></script>
<script type="text/javascript">
function test(that){
	var num = parseInt($(that).children('span').html())+1;
	$(that).children('span').html(num);
	$.ajax({
		url:'/index.php/Home/Index/get_ajax',
		data:'',
		type:'get',
		complete:function(res){
			console.log(res);
		}
	});
}
	var kk = self.setInterval("test()",500);
	function close(){
		window.clearInterval(kk);
	}
</script>