var site_url = 'http://192.168.1.168/gongsi2/web/api.gzacwl.com/';

//验证邮箱地址
function chekemail(temail){
    var pattern=/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    if(pattern.test(temail)){
        return true;
    }else{
        return false;
    }
}
//验证是否中文
function iscn(username){
	if(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/.test(username))
	{
		return true;
	}else{
		return false;
	}
}

function checkphone(phone){ 
    if((/^1[3|4|5|7|8]\d{9}$/.test(phone))){ 
        return true; 
    }else{
		return false;
	}
}

//=========================================================
//=========================================================
//===========begin  AJAX提交数据============================
/* *
 * 对将要发送的参数进行格式化。
 *
 * @private
 * @params {mix}    params      将要发送的参数
 * @return 返回合法的参数
 * @type string
 */
function parseParams(params) {
    var legalParams = "";
    params = params ? params : "";

    if (typeof(params) === "string"){
        legalParams = params;
    }else if (typeof(params) === "object"){
        try{
            legalParams = "JSON=" + JSON.stringify(params);
        }catch (ex){
            alert("Can't stringify JSON!");
            return false;
        }
    }else{
        alert("Invalid parameters!");
        return false;
    }
    return legalParams;
}

/* *
* 调用此方法AJAX获取数据。
*
* @public
* @param   {string}    url             请求的URL地址
* @param   {mix}       params          发送参数
* @param   {Function}  mycallback        回调函数
* @param   {string}    transferMode     请求的方式，有"GET"和"POST"两种
*/
function ajax_get_data(url, params, mycallback, transferMode){
	//转换要提交的数据（可以传json格式的对像进来，也可以传像 a=mm&b=cc 这样的字符串进来）
	//如果是json格式的对像则在服务器端接收时只接收JSON这个变量然后把json再传为数组即可。
    params = parseParams(params);
	transferMode = typeof(transferMode) === "string" && transferMode.toUpperCase() === "GET"?"GET":"POST";
	var gzacwl_layer_ajax = '';
    $.ajax({
        type: transferMode,
        url: url,
        data: params,
        dataType:'JSON',
		async: true,
		beforeSend:function(e){//提交数据之前
			 gzacwl_layer_ajax = layer.load('1');
		},
		complete:function(e){//处理AJAX完成之后
			layer.close(gzacwl_layer_ajax);
		},
		error:function(e){
			layer.close(gzacwl_layer_ajax);
			layer.msg('数据保存出错了！',function(){},'');
		},
        success: function(msg){
			if (typeof(mycallback) === "function"){
                mycallback(msg);
			}else if(mycallback==null){
                return;
            }else{
				return;
			}
        }
    });
}

//设置cookies值
function gzacwl_set_Cookie(a, b, c) {
    if (c) {
        var d = new Date;
        d.setTime(d.getTime() + 864E5 * c);
        c = "; expires=" + d.toGMTString()
    } else c = "";
    document.cookie = a + "=" + b + c + "; path=/"
}
//读取cookies值
function gzacwl_get_Cookie(a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
             " " == d.charAt(0);) d = d.substring(1, d.length);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return null
}
//登陆和注册打开的窗口
var GZACWL_WIN_LOGIN_REGISTER = '';
function game_login(){
    GZACWL_WIN_LOGIN_REGISTER = layer.open({
        title: false,
        type: 2,
        area: ['340px', '480px'],
        content: site_url+'login/login.html' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
    });

}
//正在加载素材的提示
var GZACWL_LOADING_TITLE = '';