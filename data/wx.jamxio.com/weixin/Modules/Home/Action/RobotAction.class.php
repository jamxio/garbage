<?php
// 机器接口
class RobotAction extends Action {
	
	public function index(){
		$this->show('机器首页');
	}
	//登记机器在线状态
	public function sign(){
		$robot = I('device_no');
		$password = I('password');//得到加密的第二个参数

		$R = M('robot');
		$pwd = $R->where("robot = $robot")->getField('password');
		if($password!=$pwd)exit;//密码错误，丢弃
		$time = time();
		$data = array("signtime"=>$time);
		$result = $R->where("robot = $robot")->save($data);//登记最后在线时间

		$order = M('gorder')->where("robot = $robot and status=1 and time >($time-120)")->field('id,goods_type')->find();//找到本机2分钟内1,已支付的订单
		if($order){//如果有订单则进行提醒出货登记
			$orderid = $order['id'];
			$change = M('gorder')->where("id = $orderid")->save(array('status'=>2));//改变订单状态为2,已提醒
		}
		$time = time();
		if($change){
			$arr['status'] = 'vomit';
			$arr['goods_type'] = $order['goods_type'];
			$arr['num'] = $orderid;
			$arr['time'] = $time;
		}else{//登记不成功的时候不返回出货指令
			$arr['status'] = 'ok';
			$arr['goods_type'] = 0;
			$arr['num'] = 0;
			$arr['time'] = $time;
		}
		//组织密码
		var_dump($password.$time);
		$par2 = md5($password.$time);
		$arr["password"] = $par2;
		die(dump($arr));
		$this->ajaxReturn($arr,'JSON');
	}
	//返回出货成功状态
	public function success(){
		$robot = I('device_no');
		#$password = I('password');//得到加密的第二个参数

		$orderid = I('num');
		$gd_type = I('gd_type');
		#if($param2['time']<(time()-6))exit;//丢弃过时请求,登记出货成功并不需要丢弃		
		$R = M('robot');
		// $pwd = $R->where("robot = $robot")->getField('password');
		// if($param2['password']!=$pwd)exit;//密码错误，丢弃
		
		$time = time();
		$data = array("signtime"=>$time);
		$result = $R->where("robot = $robot")->save($data);//登记最后在线时间
		if($orderid){//如果有订单则进行成功出货登记
			$change = M('gorder')->where("id = $orderid and robot =$robot")->save(array('status'=>3,'gd_type'=>$gd_type,'time1'=>$time));//改变订单状态为3,出货成功
			if($change){//如果是第一次修改，则减少机器存货
				$goods = 'num'.$goods_type;
				$R->where("robot = $robot")->setDec($goods);
			}
		}
		if($change!==false){
			$arr = array(
				'status' => 'finish',
				'num' => $orderid
			);
		}else{
			$arr = array(
				'status' => 'unfinished',
				'num' => $orderid
			);
		}
		$this->ajaxReturn($arr,'JSON');
	}
	//强制机器上线，需要机器编号参数
	public function inline(){
		ignore_user_abort(true);//忽略用户离线
		set_time_limit(0);//超时无限制
		$robot = I('device_no');//获取机器编号
		$R = M('robot');
		$time = time();
		$where = "robot = '".$robot."'";
		$data = array("signtime"=>$time);
		$result = $R->where($where)->save($data);//登记最后在线时间
		#die($R->getLastSql());
		if(!$result){
			return 0;
		}
		sleep(3);//每3秒执行一次
		$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		file_get_contents($url);
	}
}
?>