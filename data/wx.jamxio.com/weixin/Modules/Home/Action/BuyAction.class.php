<?php
//用户扫码购
//2017/5/26
//
class BuyAction extends Action {
	
	public function index(){
		$ming = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$mima = base64_encode('你好！');
		echo base64_encode($mima);
		echo $ming = base64_encode($ming);
		echo base64_decode($ming);
		$this->show('购买首页');
	}
	//检查售货机状态，可用时列出商品列表
	public function goods(){
		echo 'sdsd';
		$this->show('sdsdds');$this->display();
		exit();
		$robot = I('device_no');
		$R = M('robot');
		$info = $R->where("robot = $robot")->find();
		if($info['status']==0){
			$this->show('机器被停用！');
			exit;
		}
		if(($info['signtime']+6)<time()){
			$this->show('机器已离线！');
			exit;
		}
		if($info['num1']==0&&$info['num2']==0&&$info['num3']==0){
			$this->show('商品已售罄！');
			exit;
		}
		$this->info=$info;
		$this->display('goods');
	}
	//用户提交购买后确认支付
	public function topay(){
		header("Content-Type:text/html;charset=UTF-8");		
		ini_set('date.timezone','Asia/Shanghai');
		error_reporting(0);
		import("Class.Wxpay.WxPay#JsApiPay",APP_PATH);
		//①、获取用户openid
		$tools = new JsApiPay();
		if(session('openid')==''){
			$openId = $tools->GetOpenid();//进来立刻获取openid,原因:如果获取openid会跳转一次，之前的步骤是无效的
			session('openid',$openId);
		}
		$openId = session('openid');
		$robot = I('device_no');
		$type = I('good_type');
		$goods = "goods$type";
		$num = "num$type"; 
		$price = "price$type";
		$R = M('robot');
		$info = $R->where("robot = $robot")->field("$goods as goods,$num as num,$price as price")->find();
		if(!$info || $info["num"]<=0){
			echo "<script>alert('选择出错');history.go(-1);</script>";
			exit;
		}
		$fee = $info['price']*100;
		$attach = "$robot,$type";//向支付回调函数传达商品信息
		import("Class.Wxpay.WxPay#Api",APP_PATH);
		//②、统一下单
		$input = new WxPayUnifiedOrder();
		$input->SetBody($info['goods']);//简要描述
		$input->SetAttach("$attach");//自定义附加数据
		$input->SetOut_trade_no(WxPayConfig::MCHID.date("YmdHis"));//设置商户系统内部的订单号
		$input->SetTotal_fee($fee);//支付金额/分
		$input->SetSpbill_create_ip(gethostbyname($_ENV['COMPUTERNAME']));//调用ip
		$input->SetTime_start(date("YmdHis"));//设置订单生成时间
		$input->SetTime_expire(date("YmdHis", time() + 60));//设置订单失效时间
		#$input->SetGoods_tag("test2");//设置商品优惠标记，可不设
		$input->SetNotify_url("http://".C('YM_DOMAIN')."/index.php/smao/Buy/notify");//设置接收微信支付异步通知回调地址
		$input->SetTrade_type("JSAPI");//JSAPI，NATIVE，APP
		$input->SetOpenid($openId);//用户openid

		$order = WxPayApi::unifiedOrder($input);//生成预付订单

		$jsApiParameters = $tools->GetJsApiParameters($order);//传递订单参数到前端

		#$editAddress = $tools->GetEditAddressParameters();
		//③、在支持成功回调通知中处理成功之后的事宜，见 notify
		/**
		 * 注意：
		 * 1、当你的回调地址不可访问的时候，回调通知会失败，可以通过查询订单来确认支付是否成功
		 * 2、jsapi支付时需要填入用户openid，WxPay.JsApiPay.php中有获取openid流程 （文档可以参考微信公众平台“网页授权接口”，
		 * 参考http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html）
		**/
		$this->goods = $info;
		
		$this->jsApiParameters = $jsApiParameters;//jsapi 参数，关键，用于调用支付js接口
		$this->display();
	}
	//支付成功处理函数，去notify类写notifyprocess
	public function notify(){
		import("Class.Wxpay.notify",APP_PATH);
		$notify = new PayNotifyCallBack();
		$notify->Handle(false);
	}
}
?>