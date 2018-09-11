<?php

// 本类由系统自动生成，仅供测试用途

class IndexAction extends Action {
	public function _initialize(){

		$agent = $_SERVER['HTTP_USER_AGENT'];

		if (!strpos($agent, "icroMessenger")) {
			$this->display('Wechat/need');die();
		}
	}
	public function show_video(){
		if($_GET['mid']!=''){
			vendor('wxapi.wxapi');
			$wxapi = new WxApi();
			$act = $wxapi->wxAccessToken();
			$this->act = $act;
			$this->display();
		}else{
			die('你的媒体id不对！');
		}
	}
	public function look_vimg(){
		
	}
	public function look_video(){
		vendor('wxapi.wxapi');
		$wxapi = new WxApi();
		$act = $wxapi->wxAccessToken();

		$allow_org = 'http://wx.jamxio.com/index.php/Index/show_video';
		$long = strlen($allow_org);
		$url_premfix = substr($_SERVER["HTTP_REFERER"],0,$long);
		if($allow_org == $url_premfix){
			header("Content-type: video/mp4");
			$video = file_get_contents("http://api.weixin.qq.com/cgi-bin/media/get?access_token=$act&media_id={$_GET['mid']}");
			echo $video;die();
			readfile("http://api.weixin.qq.com/cgi-bin/media/get?access_token=$act&media_id={$_GET['mid']}");die();
			header("Location:http://api.weixin.qq.com/cgi-bin/media/get?access_token=$act&media_id={$_GET['mid']}");
			die();
			$host = 'api.weixin.qq.com';
			$content = "access_token=$act&media_id={$_GET['mid']}";
			$sock_handle = fsockopen($host,80);
			$ask_str = "GET /cgi-bin/media/get?$content HTTP/1.1\r\n";
			$ask_str .= "Host:$host\r\n";
			$ask_str .= "Content-Length:".strlen($content)."\r\n";
			$ask_str .= "\r\n";
			$ask_str .= "\r\n";
			fwrite($sock_handle, $ask_str);
			while(!feof($sock_handle)){
				$oo = fread($sock_handle);
				echo $oo;
			}
			fclose($sock_handle);
		}else{
			ob_clean();

			header("HTTP/1.1 204 No Content");
		}
	}

	public function test_down(){
		vendor('wxapi.wxapi');
		$wxapi = new WxApi();
		$act = $wxapi->wxAccessToken();
		if($_GET['mid']!=''){
			header("Content-type:video/mp4");
			#file_get_contents();
			#fread();太小
			readfile("http://api.weixin.qq.com/cgi-bin/media/get?access_token=$act&media_id={$_GET['mid']}");
		}else if($_GET['imgid']!=''){
			header("Content-type:image/jpg");
			readfile("https://api.weixin.qq.com/cgi-bin/media/get?access_token=$act&media_id={$_GET['imgid']}");
		}
	}

  	public function index(){

		vendor('wxapi.wxapi');

		$wxapi = new WxApi();

		if(!isset($_GET['code'])&&!session('openid')){

			$redirectUrl = urlencode('http://wx.jamxio.com'.U('Index/index'));

			$url = $wxapi->wxOauthUserinfo($redirectUrl);

			$wxapi->wxHeader($url);

		}else{

			if(!session('openid')){

				$code = $_GET['code'];

				$user_info = $wxapi->wxOauthAccessToken($code);

				$openid = $user_info['openid'];

				session('openid',$openid);

			}



			$template_id = 'G3q8L2o-Fbp8uk3JexmF-WELXKhw_dGGdtXfwtsl_l8';

			$url = 'http://wx.jamxio.com'.U('Wxjs/index');

			$data = array(

				'first'=>array('value'=>"你刚刚登录了",'color'=>"#CC0000"),

				'keyword1'=>array('value'=>date('Y-m-d H:i:s'),'color'=>'#000'),

				'keyword2'=>array('value'=>urlencode($_SERVER['REMOTE_ADDR']),'color'=>'#000'),

				'remark'=>array('value'=>'点击进入查看','color'=>'#CC0000')

			);

			$result = $wxapi->wxSetSend(session('openid'),$template_id,$url,$data);

			dump($result);

		}

	}

	public function test_act(){

		vendor('wxapi.wxapi');

		$wxapi = new WxApi();

		$act = $wxapi->wxAccessToken();

		$jspar = $wxapi->wxJsapiPackage();

		$url = "https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=".$act;

		$iplist = $wxapi->wxHttpsRequest($url);

		echo $act,"<br/>",json_encode($jspar),getcwd(),dirname(__FILE__);

		dump(json_decode($iplist,true));

	}

	public function iswechat(){
		dump($this);

		dump($_SERVER);

		$agent = $_SERVER['HTTP_USER_AGENT'];

		    if (!strpos($agent, "icroMessenger")) {

		        echo 'no';

		        exit();
		    }

		   echo 'yes';

	}

	public function setmenu(){//失败

		vendor('wxapi.wxapi');

		$wxapi = new WxApi();

		$menu_array = array(

			'button' => array (

				array (

					'type' => 'view',

					'name' => '微官网',

					'url' => "http://wx.jamxio.com",

				),

				array (

					'name' => '接口',

					'sub_button' => array (

						array (

			    			'type' => 'view',

							'name' => 'js',

							'url' => "http://".C('YM_DOMAIN').U('Wxjs/index'),			    			

				    		),

				    	),

				),

				array (

					'name' => '微信',

					'sub_button' => array (

						array (

							'type' => 'view',

							'name' => '获取信息',

							'url' => "http://wx.jamxio.com/index.php",

						),

					),

				),

			)

		);

		$result = $wxapi->wxMenuCreate($menu_array);

		dump($result);

	}

}