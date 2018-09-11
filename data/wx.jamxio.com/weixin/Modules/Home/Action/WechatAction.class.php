<?php 
class WechatAction extends Action{
	private $wechat_obj;
	
	/**
	 * 构造函数
	 * **/
	public function __construct(){
		parent::__construct();
		$options = array(
				'token'=>C('APP_TOKEN'), //填写你设定的key
				'encodingaeskey'=>C('APP_AESK'), //填写加密用的EncodingAESKey，如接口为明文模式可忽略
				'appid'=>C('APP_ID'), //填写高级调用功能的app id
				'appsecret'=>C('APP_SECRET'), //填写高级调用功能的密钥
		);
		import("Class.Wechat",APP_PATH);
		$this->wechat_obj = new Wechat($options);
	}
	
	//入口
	public function index(){
		if (!isset($_GET['echostr'])) {
			//             $wechat->responseMsg();
			//             $postObj = $this->wechat_obj->getRev_obj();
			$type = $this->wechat_obj->getRev()->getRevType();
			//消息类型分离
			switch ($type){
				case Wechat::MSGTYPE_EVENT:
					$result = $this->receiveEvent();
					break;
				case Wechat::MSGTYPE_TEXT:
					$result = $this->receiveText();
					break;
				case Wechat::MSGTYPE_IMAGE:
					//$result = $this->receiveImage();
					break;
					/*  case Wechat::MSGTYPE_LOCATION:
					 $result = $this->receiveLocation();
					break; */
				case Wechat::MSGTYPE_VOICE:
					//$result = $this->receiveVoice();
					break;
				case Wechat::MSGTYPE_VIDEO:
					//$result = $this->receiveVideo();
					break;
				case Wechat::MSGTYPE_LINK:
					//$result = $this->receiveLink();
					break;
				default:
					$result = "unknown msg type: ".$type;
					break;
			}
			echo $result;
		}else{
			$this->wechat_obj->valid();//明文或兼容模式可以在接口验证通过后注释此句，但加密模式一定不能注释，否则会验证失败
		}
	}
	
	/**
	 * 调用授权跳转接口
	 * **/
	public function authJump(){
		$action=I('get.action');
		$ct=I('get.ct');
		$callback = "http://".C('YM_DOMAIN')."/index.php/Home/Wechat/getUserInfo?action=".$action."&ct=".$ct;
		$state = '1';
		$url = $this->wechat_obj->getOauthRedirect($callback,$state);
		ob_end_clean();
		header("location:$url");
	}
	
	/**
	 * 获取微信用户基本信息(未关注也可获取)
	 * **/
	public function getUserInfo(){
		$action=I('get.action');
		$ct=I('get.ct');
		$OauthAccessToken = $this->wechat_obj->getOauthAccessToken();
		$WechatUserInfo = $this->wechat_obj->getOauthUserinfo($OauthAccessToken['access_token'],$OauthAccessToken['openid']);
	
		if (!empty($WechatUserInfo['openid'])){
			//session('[start]');//thinkPHP启动session
			//$checkResult = $this->CheckMemberExist($WechatUserInfo['openid']);
			switch ($action){
				case 'applyAllAgent':
					session('login','yes');
					session('oid',$WechatUserInfo['openid']);
					session('headimgurl',$WechatUserInfo['headimgurl']);
					session('nickname',$WechatUserInfo['nickname']);
					$this->redirect('Home/Manager/applyAllAgent');
					break;
				//add by jamxio 2017/5/11 ↓
				case 'hongbao':
					session('login','yes');
					session('oid',$WechatUserInfo['openid']);
					session('headimgurl',$WechatUserInfo['headimgurl']);
					session('nickname',$WechatUserInfo['nickname']);
					$this->redirect('Home/Redpack/hongbao');
					break;
				//add by jamxio↑
				case 'index':
					session('login','yes');
					session('logina','yes');
					session('oid',$WechatUserInfo['openid']);
					session('headimgurl',$WechatUserInfo['headimgurl']);
					session('nickname',$WechatUserInfo['nickname']);
					$this->redirect('Admin/Index/index');
					break;
					
				case 'apply':
					session('login','yes');
					session('oid',$WechatUserInfo['openid']);
					session('headimgurl',$WechatUserInfo['headimgurl']);
					session('nickname',$WechatUserInfo['nickname']);
					$url="http://".C('YM_DOMAIN')."/index.php/Admin/Manage/apply?ct=".$ct; 
					echo "<script>"; 
					echo "location.href='$url'"; 
					echo "</script>";
					break;

				default:
					break; 
			}
		}
	}
	
	/**
	 * +-------------------------------
	 * 事件处理
	 * +-------------------------------
	 */
	public function receiveEvent(){
		$EventArray = $this->wechat_obj->getRevEvent();
		$one = M('first')->where(array('id'=>1))->find();
		switch ($EventArray['event']){
			case Wechat::EVENT_SUBSCRIBE:
				$content = $one['content'];
				break;
			case Wechat::EVENT_UNSUBSCRIBE:
				$content = "取消关注";
				break;
			case Wechat::EVENT_SCAN:
				$content = "扫描场景 " . $EventArray['key'];
				break;
			case Wechat::EVENT_MENU_CLICK:
				switch ($EventArray['key']){
					case "COMPANY":
						$content = array();
						$content[] = array(
								"Title" => "多图文1标题",
								"Description" => "",
								"PicUrl" => "http://discuz.comli.com/weixin/weather/icon/cartoon.jpg",
								//"Url" => "http://a.ewm.net.cn/zhaoyang/index.php/Index/Index/wdjs"
						);
						break;
					default:
						$content = "点击菜单：" . $EventArray['key'];
						break;
				}
				break;
			case Wechat::EVENT_LOCATION:
				$LocationArray = $this->wechat_obj->getRevEventGeo();
				$content = "上传位置：纬度 " . $LocationArray['x'] . ";经度 " . $LocationArray['y'];
				break;
			case Wechat::EVENT_MENU_VIEW:
				$content = "跳转链接 " . $EventArray['key'];
				break;
			case Wechat::EVENT_SEND_MASS:
				$SEND_MASS_Array = $this->wechat_obj->getRevResult();
				$content = "消息ID：" . $SEND_MASS_Array['MsgID'] . "，结果：" . $SEND_MASS_Array['Status'] . "，粉丝数："
						. $SEND_MASS_Array['TotalCount'] . "，过滤：" . $SEND_MASS_Array['FilterCount']
						. "，发送成功：" . $SEND_MASS_Array['SentCount'] . "，发送失败：" . $SEND_MASS_Array['ErrorCount'];
				break;
			default:
				$content = "receive a new event: " . $EventArray['event'];
				break;
		}
		if(is_array($content)){
			if (isset($content[0])){
				$this->wechat_obj->news($content)->reply();
			}else if (isset($content['MusicUrl'])){
				$this->wechat_obj->music($content)->reply();
			}
		}else{
			$this->wechat_obj->text($content)->reply();
		}
	
		// 		if (is_array($EventArray)){
		// 			$log = print_r($EventArray,true);
		// 			setLog($log);
		// 		}else {
		// 			setLog("not array!");
		// 		}
	
	}
	
	/**
	 * +-----------------------------
	 * 回复文本
	 * +-----------------------------
	 */
	public function receiveText(){
		$keyword = trim($this->wechat_obj->getRevContent());
		
		$list = M('reply')->where(array('id'=>1))->find();
		if($list['use']==1){
				$variable = M('answer')->select();
				foreach ($variable as $key => $value) {

				if (strstr($keyword, $value['keyword'])){
					$content = $value['content'];
				}
				if(empty($content)){
					$content = "您好！请回复正确的关键字!";
				}
			}
			$this->wechat_obj->text($content)->reply();
		}
		
	}
	public function getMedia_id(){
		$url = "https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=K2QyhY-zWQYNuwZLTiVgn6MLxbbRgkTImZS7VkP4GPX-xFFn8c6qpYELDD626qyDftVfsUwB9t3wyXKYfy9J99QQ7Ae4RH6AftXqrGgzRAMXJKhAHARDE";
		$data = array (
					"type"=>"image",
					"offset"=>0,
					"count"=>20
				);
		$data = json_encode($data);
		$res = https_request($url,$data);
		var_dump($res);
	}
	
	/**
	 * +----------------------------------
	 * 设置自定义菜单
	 * +----------------------------------
	 */
	public function setMenu(){
		$wzyUrl = "http://".C('YM_DOMAIN')."/index.php/Home/Index/homepage";
		$gwUrl = "http://web72-16003.17.xiniu.com/index.aspx";
		$fwcxUrl = "http://".C('YM_DOMAIN')."/index.php/Home/Security/checkAttent";
		//$ooo = "#";
		$newmenu = array (
			'button' => array (
				0 => array (
					'name' => '微官网',
					'sub_button' => array (
						0 => array (
				    			'type' => 'view',
							'name' => '微官网',
							'url' => "http://wsxy.315ww.com/index.php/Home/Index/Homepage",
			    			),
			    			1 => array (
			    				'type' => 'view',
							'name' => '微官网一',
							'url' => "http://wsxy.315ww.com/index.php/Home/Index/indexone",
			    			),
				    		2 => array (
				    			'type' => 'view',
							'name' => '微官网二',
							'url' => "http://wsxy.315ww.com/index.php/Home/Index/indextwo",
				    		),
				    		3 => array (
				    			'type' => 'view',
							'name' => '微官网三',
							'url' => "http://wsxy.315ww.com/index.php/Home/Index/indexthree",
				    		),
				    		4 => array (
				    			'type' => 'view',
							'name' => '微官网四',
							'url' => "http://wsxy.315ww.com/index.php/Home/Index/indexfour",
				    		),
				    	),
				),
				1 => array (
					'name' => '宣传介绍',
					'sub_button' => array (
						0 => array (
			    				'type' => 'view',
							'name' => '宣传图',
							'url' => "http://wsxy.315ww.com/index.php/Home/Taobao/index",
			    			),
			    			1 => array (
			    				'type' => 'view',
							'name' => '公司资质',
							'url' => "http://wsxy.315ww.com/index.php/Home/Company/index",
			    			),
				    		2 => array (
				    			'type' => 'view',
							'name' => '代理后台',
							'url' => "http://wsxy.315ww.com/index.php/Admin/Index/index",
				    		),
				    		3 => array (
				    			'type' => 'view',
							'name' => '闪修宝后台',
							'url' => "http://".C('YM_DOMAIN')."/index.php/Admin/Index/index",
				    		),
				    	),
				),
				2 => array (
				    	'name' => '防伪查询',
					'sub_button' => array (
					    	0 => array (
				    			'type' => 'view',
							'name' => '防伪查询',
							'url' => "http://wsxy.315ww.com/index.php/Home/Security/checkAttent",
				    		),
				    		1 => array (
				    			'type' => 'view',
							'name' => '代理查询',
							'url' => "http://wsxy.315ww.com/index.php/Home/Manager/index",
				    		),
				    		2 => array (
				    			'type' => 'view',
							'name' => '闪修宝微官网',
							'url' => "http://".C('YM_DOMAIN')."/index.php/Home/Index/Homepage",
				    		),
				    		3 => array (
				    			'type' => 'view',
							'name' => '经销申请',
							'url' => "http://".C('YM_DOMAIN')."/index.php/Home/Manager/applyAllAgent",
				    		),
				    	),
				),
			),
		);
		$result = $this->wechat_obj->createMenu($newmenu);
		#var_dump($result);
		if ($result){
			echo "success!";
		}else {
			echo "error!";
		}
	}
	
	//接收图片消息
	private function receiveImage($object){
		$PicArray = $this->wechat_obj->getRevPic();
		$this->wechat_obj->image($PicArray['mediaid'])->reply();
	}
	
	//接收位置消息
	private function receiveLocation(){
		$LocationArray = $this->wechat_obj->getRevGeo();
		$content = "你发送的是位置，纬度为：" . $LocationArray['x'] . "；经度为：" . $LocationArray['y'] . "；缩放级别为："
				. $LocationArray['scale'] . "；位置为：" . $LocationArray['label'];
		$this->wechat_obj->text($content)->reply();
	}
	
	//接收语音消息
	private function receiveVoice(){
		$VoiceArray = $this->wechat_obj->getRevContent();
		//         $VoiceArray = $this->wechat_obj->getRevVoice();
		if (isset($VoiceArray['Recognition']) && !empty($VoiceArray['Recognition'])){
			$content = "你刚才说的是：" . $VoiceArray;
			$this->wechat_obj->text($content)->reply();
		}else{
			$content = $VoiceArray['mediaid'];
			$this->wechat_obj->voice($content)->reply();
		}
	}
	
	//接收视频消息
	private function receiveVideo(){
		$VideoArray = $this->wechat_obj->getRevVideo();
		$content = array(
				"MediaId" => $VideoArray['mediaid'],
				"ThumbMediaId" => $VideoArray['thumbmediaid'],
				"Title" => "精彩片段",
				"Description" => "精彩内容"
		);
		$this->wechat_obj->video($content['MediaId'],$content['Title'],$content['Description'])->reply();
	}
	
	//接收链接消息
	private function receiveLink(){
		$LinkArray = $this->wechat_obj->getRevLink();
		$content = "你发送的是链接，标题为：" . $LinkArray['Title'] . "；内容为：" . $LinkArray['Description'] . "；链接地址为：" . $LinkArray['Url'];
		$this->wechat_obj->text($content)->reply();
	}
	
	
	
	//回复多客服消息
	private function transmitService($object){
		$xmlTpl = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[transfer_customer_service]]></MsgType>
                   </xml>";
		$result = sprintf($xmlTpl, $object->FromUserName, $object->ToUserName, time());
		return $result;
	}
}
?>