<?php
/**
*	红包系统吧
*/
class IndexAction extends Action {
	//微主页
	public function index(){		
		/*if(!session('oid')){
			checkAuth('Index/Index','index?code='.I('code'));
		}*/
		include(APP_PATH."/Class/jssdk.php");
		$app_id = C('APP_ID');
		$app_secret = C('APP_SECRET');
		$jssdk = new JSSDK($app_id,$app_secret);
		$AccessToken = $jssdk->atk();
		$dedao = https_request('https://api.weixin.qq.com/cgi-bin/user/info?access_token='.$AccessToken.'&openid='.session('oid').'&lang=zh_CN');
		$dedao = json_decode($dedao,true);
		// if(!$dedao['subscribe']){
		// 	header("Content-type:text/html;charset=UTF8");
		// 	echo "<script>/*alert('你未关注公众号！请关注后重新扫码');*/location.href='https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxNDMyNzk5Nw==&scene=116#wechat_redirect';</script>";
		// 	session('oid',null);
		// 	exit();
		// }
		$code = I('code');
		if($code!=$_SESSION['code']){//
			// echo "<script>alert('你扫过该码了');</script>";
			// exit();
			//让用户知悉当前微信，避免领错红包
			$this->nickname=$_SESSION['nickname'];
			$user = M('user')->where('openid = "'.session('oid').'"')->find();
			if($user){
				$data = array(
					'nickname' => $_SESSION['nickname'],
					'headimg' => $_SESSION['headimgurl'],
					's_count' => array('exp','s_count+1'),
				);
				M('user')->where('openid = "'.session('oid').'"')->setField($data);
			}else{
				$data = array(
					'openid' => $_SESSION['oid'],
					'nickname' => $_SESSION['nickname'],
					'headimg' => $_SESSION['headimgurl'],
					'time' => time(),
					's_count' => 1,
				);
				M('user')->add($data);
			}
		}
		$this->code = $code;
		$this->display();
	}
	public function introduce(){
		$this->activity = M('activity')->find();
		$this->display();
	}
	//检验单品状态、红包状态与密码
	public function checkpass(){
		/*if(!IS_AJAX){
			halt('页面不存在！');
		}*/
		$openid = $_SESSION['oid'];
		if(!$openid){//获取不到用户信息，清除缓存重新操作
			$arr['status'] = 'openid';
			$arr['msg'] = '用户信息错误！';
			//$this->ajaxReturn($arr,'JSON');
		}
		$num = I("post.num");
		$code = I("post.code");
		$phone = I("post.phone");
		$get_time = time(); 
		$_SESSION['code'] = '';
		if($code==$_SESSION['code']){//不接受攻击访问
			$arr['status'] = 'had';
			$arr['msg'] = '你刚才扫过了！';
			//$this->ajaxReturn($arr,'JSON');
		}
		//检查标签是否存在
		$tag_info = M('code')->where('code="'.$code.'" and freeze !=1')->find();
		$mtag = $tag_info['mtag'];
		if(!$mtag){
			$arr['status'] = 'notag';
			$arr['msg'] = '标签不存在！';
			//$this->ajaxReturn($arr,'JSON');
		}
		//查询是否有代号
		$user_agent = M("user_agent")->where(array("number"=>$num))->find();
		if (!$user_agent) {
			$lock_info = M('lock')->where(array("tag_id"=>$tag_info["id"]))->find();
			$lock_num = (int)$lock_info["num"];
			if (!$lock_info) {
				$date = array(
					'num' => 1,
					'end_time' => time(),
					'tag_id' => $tag_info["id"],
					);
				M('lock')->add($date);	
			}else if (($lock_info['end_time'] + 7200) < $get_time) {
				$date['end_time'] = $get_time;
				$date['num'] = 1;
				M('lock')->where(array("id"=>$lock_info["id"]))->save($date);
			}else if ($lock_info["num"] < 5) {
				$date["end_time"] = time();
				$date["num"] = $lock_num + 1;
				M('lock')->where(array("id"=>$lock_info["id"]))->save($date);
			}else{
				$arr['msg'] = '输入的次数过多，该码已被禁用！';
				$arr['status'] = 'noset';
				$this->ajaxReturn($arr,'JSON');
				exit;
			}
			$arr['msg'] = '编码错误';
			$arr['status'] = 'noset';
			$this->ajaxReturn($arr,'JSON');
		}
		//查询标签是否存在中奖规则，
		$rl_info = M('redrule')->where('(((tag_beg <= "'.$mtag.'" and tag_end >= "'.$mtag.'") or (tag_end <= "'.$mtag.'" and tag_beg >= "'.$mtag.'"))) and status=1')->find();
		if(!$rl_info){//中奖规则未设置
			$arr['msg'] = '红包不存在！';
			$arr['status'] = 'noset';
			$this->ajaxReturn($arr,'JSON');
		}else if($rl_info['time_beg']>$get_time){//未开始
			$arr['status'] = 'nostart';
			$arr['msg'] = '红包未开启';
			$this->ajaxReturn($arr,'JSON');
		}else if($rl_info['time_end']<$get_time){//已结束
			$arr['status'] = 'hadstop';
			$arr['msg'] = '红包已过期';
			$this->ajaxReturn($arr,'JSON');
		}
		//检查是否已经领取
		$red_info = M('redlist')->where('c_id = '.$tag_info['id'])->find();
		if($red_info){//已领取
			$arr['status'] = 'got';
			$arr['msg'] = '红包已被领取';
			$this->ajaxReturn($arr,'JSON');
		}
		//红包未被领取
		$user_info = M('user')->where('openid = "'.$openid.'"')->find();
		if($user_info['black']==1){//被拉黑
			$arr['status'] = 'black';
			$arr['msg'] = '你无权领取红包！';
			$this->ajaxReturn($arr,'JSON');
		}
		$_SESSION['code'] = $code;
		$user_chg = M('user')->where('id = '.$user_info['id'])->setInc('r_count');
		$chance = $rl_info['chance1'];
		if($chance!=99.99){
			$send = mt_rand(0,10000);
			if($send>=$chance*100){//运气不好，未中金额
				M('redlist')->add(array('u_id'=>$user_info['id'],'c_id'=>$tag_info['id'],'time'=>$get_time,'remark'=>'差点运气！','phone'=>$phone));
				$arr['status'] = 'empty';
				$arr['msg'] = '你未中奖！';
				$this->ajaxReturn($arr,'JSON');	
			}
		}
		$moneymin = $rl_info['money1']*100;
		$moneymax = $rl_info['money2']*100;
		$money = rand($moneymin,$moneymax);
		if($money<100){//如果金额小于100分跳过发红包接口，微信不能发低于一元
			$money = $money/100;
			M('redlist')->add(array('u_id'=>$user_info['id'],'c_id'=>$tag_info['id'],'money'=>$money,'time'=>$get_time,'remark'=>'有中奖，但小于1元故未发送！','phone'=>$phone));
			$arr['status'] = 'empty';
			$arr['msg'] = '你未中奖！';
			$this->ajaxReturn($arr,'JSON');
		}
		//这一步，检查系统红包限额
		$money_info = M('money')->field('(deposit-payment)*100 as balance,id')->order('time desc')->find();
		$balance = $moeny_info['balance'];//($money_info['deposit']-$moeny_info['payment'])*100;//转单位
		if($balance<$money){
			$arr['status'] = 'nomoney';
			$arr['msg'] = '系统余额不足，请等待管理员充值后重试！';
			$this->ajaxReturn($arr,'JSON');
		}
		$remark = '已中奖！';
		$add_id = M('redlist')->add(array('u_id'=>$user_info['id'],'c_id'=>$tag_info['id'],'money'=>$money/100,'time'=>$get_time,'phone'=>$phone));
		include(APP_PATH."/Class/sendredpack.php");	
		$billno= 'fxm'.$mtag;//在标号前加fxm前缀生成订单号
 		$rp_config=C('REDPACK');
		$testobj = new  SENDREDPACK( $openid, $money,$billno,$rp_config);
		#$hbinfo = $testobj->rp_result();//得到一个红包接口返回数组
		if($hbinfo['return_code']!="SUCCESS"){//微信接口返回错误，可能是配置问题，也可能是单号重复，反正是失败；
			M('redlist')->where("id = $add_id")->setField('remark',$remark.'返回错误'.$hbinfo['return_msg']);
			$arr['msg'] = '红包发送失败';
			$arr['status'] = 'weixin';
		}else if($hbinfo['result_code']!="SUCCESS"){
			M('redlist')->where("id = $add_id")->setField('remark',$remark.'结果错误'.$hbinfo['err_code_des']);
			$arr['msg'] = $hbinfo['err_code_des'];
			$arr['msg'] = '红包发送失败';
			$arr['status'] = 'weixin';
		}else{
			$data['wx_billno'] = $hbinfo['send_listid'];//微信订单号
			$data['we_billno'] = $billno;//红包金额
			$data['remark'] = $remark.$hbinfo['err_code_des'];
			M('redlist')->where("id = $add_id")->setField($data);
			/*$money = $money/100;
			M('money')->where("id = ".$moeny_info['id'])->setInc('payment',$money);//把已支出部分增加
*/
			$arr['msg'] = $hbinfo['err_code_des'];
			$arr['status'] = 'success';
		}
		$this->ajaxReturn($arr,'JSON');
	}
}
?>