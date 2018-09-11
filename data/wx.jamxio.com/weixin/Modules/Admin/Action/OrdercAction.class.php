<?php
/**
*	正姿笔微商系统经销商后台——首页
*/
class OrdercAction extends /*Common*/Action {
	//提货单后台
	public function index() {
		//$_SESSION['oid'] = 'oqUb_t95x5MNuT_KTgi6DOLq33nk';
		$manager = M('distributor')->where(array('openid' => $_SESSION['oid']))->find();
		$pddisable = M('distributor')->where(array('id' => $manager['pid']))->field('disable')->find();
		if($pddisable['disable'] == 1){
			echo "<script>alert('您的上级被禁用，请联系负责人询问情况！');javascript:history.go(-1);</script>";
		}
		$order_not = M('orderc')->where(array('user_id' => $manager['id'],'status'=>1))->count('distinct order_num');
		$order_not_next = M('orderc')->where(array('o_id' => $manager['id'],'status'=>1))->count('distinct order_num');
		$_SESSION['level'] = $manager['level'];
		$_SESSION['user_id'] = session('managerid');
		$_SESSION['old_id'] = $manager['pid'];
		$this->assign('manager',$manager);
		$this->assign('order_not',$order_not);
		$this->assign('order_not_next',$order_not_next);
		$this->display();
	}
	//经销商手上的标签

	//提货单详情
	public function order_detail(){
		$where['order_num'] = I('order_num');
		$row = M('orderc')->where($where)->group('order_num')->find();
		//把产品分别显示
		$rol = M('orderc')->where($where)->select();
		foreach ($rol as $k => $v){
			$product = M('templet')->where(array('id' => $v['p_id']))->find();
			$rol[$k]['p_name'] = $product['name'];
		}
		#die(dump($rol));
		$this->row = $row;
		$this->assign('rol',$rol);
		$this->display();
	}
	//我的提货单和提货功能
	
	public function my_dd(){
		//统计产品数量
		$count = M('templet')->where(array('dis'=>1))->count("id");
		$where['openid'] = $_SESSION['oid'];
		$manager = M('distributor')->field('id,level')->where($where)->find();
		$price = "price".$manager['level'];
		$list = M('templet')->where(array('dis'=>1))->field('id,name,image,disc,unit,state,s_name,s_value,'.$price)->select();
		$a = 1;
		$d = 1;
		foreach ($list as $k => $v) {
			$list[$k]['price'] = $v[$price];
			$list[$k]['id_num'] = $a;
			$shu_value = explode('##', $v['s_value']);
			foreach ($shu_value as $key => $val) {
				$shux_value = explode('&&', $val);
				$list[$k]['shu'][$key]['shuxValue'] = $shux_value;
			}
			$a++;
		}
		//var_dump($list);
		$manager['count'] = $count;
		//var_dump($manager);
		$whr['user_id'] = $manager['id'];
		$whr['status'] = array('neq',0);
		//查询收货地址
		$rel = M('receiving')->where($whr)->find();
		//查询已下的提货单
		$row = M('orderc')->where($whr)->order('time desc')->group('order_num')->select();
		foreach ($row as $b => $c) {
			$row[$b]['or_num'] = $d;
			$d++;
		}
		$map['user_id'] = $manager['id'];
		$map['status'] = array('eq',0);
		//查询购物车的提货单
		$wrow = M('orderc')->where($map)->order('time desc')->group('order_num')->select();
		foreach ($wrow as $b => $c) {
			$wrow[$b]['or_num'] = $d;
			$d++;
		}
		//收货地址列表
		$order_address = M('receiving')->where(array('user_id'=>$manager['id']))->select();
		
		$this->level_name=C('LEVEL_NAME');
		$this->level_num=C('LEVEL_NUM');
		$this->one = M('number')->where(array('id'=>1))->find();
		$this->rel=$rel;
		$this->manager=$manager;
		$this->order_address=$order_address;
		$this->assign('row',$row);
		$this->assign('wrow',$wrow);
		$this->assign('list',$list);
		/*echo "<pre>";
		var_dump($list);die;*/
		$this->display();
	}

	public function shu(){

		if(IS_AJAX){
			$manager = M('distributor')->field('id,level')->where(array('id'=>session('managerid')))->find();
		    $price = "price".$manager['level'];
			$data = M('templet')->where(array('id'=>$_POST['id']))->field('id,name,image,disc,unit,state,s_name,s_value,'.$price)->find();
			$data['price'] = $data[$price];
			$this->ajaxReturn($data,'json');
		}
	}

    //添加收货地址
    public function add_address(){
    	if(IS_AJAX){
    		$data = array(
    			'name'=>trim($_POST['name']),
    			'phone'=>trim($_POST['phone']),
    			'addre'=>trim($_POST['addre']),
    			'user_id'=>session('managerid'),
    			);
    		$i = M('receiving')->add($data);
    		if($i){
    			$this->ajaxReturn(1,'json');
    		}else{
    			$this->ajaxReturn(2,'json');
    		}
    	}
    }
     //修改收货地址
    public function edit_address(){
    	if(IS_AJAX){
    		$data = array(
    			'name'=>trim($_POST['name']),
    			'phone'=>trim($_POST['phone']),
    			'addre'=>trim($_POST['addre']),
    			);
    		$i = M('receiving')->where(array('id'=>$_POST['id']))->save($data);
    		if($i){
    			$this->ajaxReturn(1,'json');
    		}else{
    			$this->ajaxReturn(2,'json');
    		}
    	}
    }
    //删除收货地址
    public function address_del(){
    	if(IS_AJAX){
    		$i = M('receiving')->where(array('id'=>$_POST['id']))->delete();
    		if($i){
    			$this->ajaxReturn(1,'json');
    		}else{
    			$this->ajaxReturn(2,'json');
    		}
    	}
    } 
    
	public function my_dhj(){
		$price = "price".$_SESSION['level'];
		$count =  M('templet')->count("id");
		$list = M('templet')->field('id,name,image,disc,state,'.$price)->select();
		foreach ($list as $k => $v) {
			$list[$k]['price'] = $v[$price];
		}
		$manager = M('distributor')->where(array('openid' => $_SESSION['oid']))->find();
		$manager['count'] = $count;
		$this->manager=$manager;
		$this->assign('list',$list);
		$this->display();
	}
	public function wsh(){
		$orderObj = M('orderc');
		$templetObj = M('Templet');
		$distributorObj = M('distributor');
		$ordernum = $_GET['orderc'];
		$res = $orderObj->where(array('order_num'=>$ordernum))->select();
		foreach($res as $key=>$value){
    		$pid=$value['p_id'];
    		$userid=$value['user_id'];
            $arr=$value;
    		$arr['pInfo']=$templetObj->where("id={$pid}")->find();
    		$arr['uInfo']=$distributorObj->where("id={$userid}")->find();
    		$orderInfo[]=$arr;
    	}
    	$this->orderInfo = $orderInfo;
		$this->display();
	}
	public function xjdd(){
		$orderObj = M('orderc');
		$distributor = M('distributor');
		$uid = $_SESSION['managerid'];
		$where['status'] = array('eq',2);
		$where['o_id'] = $uid;
		$map['status'] = array('eq',3);
		$map['o_id'] = $uid;
		$a['_complex'] = $where;
		$condition[] = $a;
		$condition['_logic'] = 'OR';
		$condition['_complex'] = $map;
		$res_not_count = $orderObj->where(array('o_id'=>$uid,'status'=>1))->count('distinct order_num');
		$res_yes_count = $orderObj->where($condition)->count('distinct order_num');
		$search = trim(I('search'));
		if(!empty($search)){
			$where = array(
				'order_num' => $search,
				'_logic' => 'or',
				's_name' => $search,
			);
			$mapp['_complex'] = $where;
			$mapp['o_id']  = $uid;
			$res_no = $orderObj->where($mapp)->group('order_num')->select();
			$res_ye = $orderObj->where($mapp)->group('order_num')->select();
		}else{
			$res_no = $orderObj->where(array('o_id' => $uid,'status'=>1))->group('order_num')->select();
			$res_ye = $orderObj->where($condition)->group('order_num')->select();
		}
		foreach($res_no as $key=>$value){
	    		$userid=$value['user_id'];
	            $arr=$value;
	    		$arr['uInfo']=$distributor->where("id={$userid}")->find();
	    		
	    		$res_not[]=$arr;
	    	}
	    	foreach($res_ye as $key=>$value){
	    		$userid=$value['user_id'];
	            $arr2=$value;
	    		$arr2['uInfo']=$distributor->where("id={$userid}")->find();
	    		
	    		$res_yes[]=$arr2;
	    	}
		$this->res_yes_count = $res_yes_count;
		$this->res_not_count = $res_not_count;
		$this->res_count = $res_not_count+$res_yes_count;
		$this->res_not_total = $res_not_total;
		$this->res_yes_total = $res_yes_total;
		/*echo "<pre>";
		var_dump($res_not);
		echo "</pre>";*/
		$this->res_not = $res_not;
		$this->res_yes = $res_yes;
		$this->app_id=C('APP_ID');
		$this->app_secret=C('APP_SECRET');
		$this->display();
	}
	public function cxxjdd(){
		$orderObj = M('orderc');
		$distributorObj = M('distributor');
		$row = I('post.s_order_num');
		$where['order_num'] = $row;
		$res = $orderObj->where($where)->group('order_num')->find();
    	$res['uInfo']=$distributorObj->where(array('id'=>$res['user_id']))->find();
		//$this->res = $res;
		$this->ajaxReturn($res,'json');
	}
	//处理提货单
	public function cldd(){
		$orderObj = M('Orderc');
		$advance = M('advance');
		$distributorObj = M('distributor');
		$templetObj = M('templet');
		$order_num = I('post.order_num');
		$where['order_num'] = $order_num;
		
		$order_list = $orderObj->where($where)->field('user_id,p_id,num')->select();
		foreach ($order_list as $mm) {
			$reception_man = $advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->find();
			if($reception_man['not_send']<$mm['num']){
				$templet_name = $templetObj->where(array('id'=>$mm['p_id']))->getField('name');
				$distributor_name = $distributorObj->where(array('id'=>$mm['user_id']))->getField('name');
				$result_arr['status']=4;
				$result_arr['name']=$templet_name;
				$result_arr['distributor_name']=$distributor_name;
				$this->ajaxReturn($result_arr,'JSON');
				exit();
			}
		}
		$arr['status'] = 2;
		$rew = $orderObj->where($where)->save($arr);
		if($rew){
			foreach ($order_list as $mm) {
				$reception_man = $advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->find();
				if($reception_man['not_send']>=$mm['num']){
					$reception_data['not_send'] = $reception_man['not_send']-$mm['num'];
					$reception_data['yes_send'] = $reception_man['yes_send']+$mm['num'];
					$advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->save($reception_data);
				}else{
					$this->ajaxReturn(array('status' => 4),'json');
					exit();
				}		
			}
		}
		if($rew){
			$list = $orderObj->where($where)->group('order_num')->find();
			$man = M('distributor')->where('id='.$list['user_id'])->find();
			$parent = M('distributor')->where('id='.$list['o_id'])->find();
			$product = '';
			$variable =  $orderObj->where($where)->select();
			foreach ($variable as $key => $value) {
				$pro = M('templet')->field('id,name')->where(array('id' =>$value['p_id'] ))->find();
				$product = $product.$pro['name'].',';
			}
			$product = rtrim($product,',');

			$ordernum = $row;
			$touser = $man['openid'];
			$phone = $parent['phone'];
			$sendTime = date("Y-m-d H:i:s");
			$keyword1 = $man['name'].',恭喜您，您的提货单上级已经审核,审核人为：'.$parent['name'].',电话为:'.$phone;
			$template_id = C('REFUSE_ORDER');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
		            'first'=>array('value'=>urlencode("提货单审核完毕通知"),'color'=>"#CC0000"),
		            'keyword1'=>array('value'=>urlencode($ordernum),'color'=>'#000'),
		            'keyword2'=>array('value'=>urlencode($sendTime),'color'=>'#000'),
		            'keyword3'=>array('value'=>urlencode("产品-".$product),'color'=>'#000'),
		            'remark'=>array('value'=>urlencode($keyword1),'color'=>'#CC0000')
           		);
		            
		    	import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	public function xjjg(){
		$distributor = M('distributor');
		$where['openid'] = $_SESSION['oid'];
		$manager = $distributor->where($where)->find();
		//var_dump($manager);
		$list = $distributor->where(array('pid' => $manager['id']))->select();
		//统计下级人数
		$count = count($list);
		$manager['count'] = $count;
		$this->manager=$manager;
		$this->assign('list',$list);
		$this->display();
	}
	public function xjjg_xq(){
		$where['id'] = I('id');
		$manager = M('distributor')->field('id,name,level,levname,headimgurl')->where($where)->find();
		$price = "price".$manager['level'];
		$list = M('templet')->field('id,name,image,disc,state,'.$price)->select();
		foreach ($list as $k => $v) {
			$list[$k]['price'] = $v[$price];
		}
		$this->manager=$manager;
		$this->assign('list',$list);
		$this->display();
	}
	public function ysh(){
		$orderObj = M('orderc');
		$templetObj = M('Templet');
		$distributorObj = M('distributor');
		$ordernum = $_GET['orderc'];
		$res = $orderObj->where(array('order_num'=>$ordernum))->select();
		foreach($res as $key=>$value){
	    		$pid=$value['p_id'];
	    		$userid=$value['user_id'];
	            $arr=$value;
	    		$arr['pInfo']=$templetObj->where("id={$pid}")->find();
	    		$arr['uInfo']=$distributorObj->where("id={$userid}")->find();
	    		$orderInfo[]=$arr;
	    	}
		/*echo "<pre>";
		var_dump($orderInfo);
		echo "</pre>";*/
		$this->orderInfo = $orderInfo;
		$this->display();
	}
	public function redu(){
		$ordernum = I('post.order_num');
		$orderlist = M('orderc')->where(array('order_num'=>$ordernum))->find();
		$man = M('distributor')->field('id,name,phone,level,levname,pid')->where(array('id' => $_SESSION['user_id']))->find();
		$pro = M('templet')->field('id,name')->where(array('id' => $orderlist['p_id']))->find();
		$product = "商品名称:".$pro['name'].'等等产品';
		$parent = M('distributor')->field('id,openid')->where(array('id' => $man['pid']))->find();
		$touser = $parent['openid'];
		$phone = $man['phone'];
		$sendTime = date("Y-m-d H:i:s",$orderlist['time']);
		$keyword1 ="提货人:".$man['name'].",联系方式:".$phone.",代理等级:".$man['levname'].",点击进行审核";
		$template_id = C('REFUSE_ORDER');
		$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
		$sendData = array(
		      'first'=>array('value'=>urlencode("下级代理提货通知"),'color'=>"#CC0000"),
		      'keyword1'=>array('value'=>urlencode($ordernum),'color'=>'#000'),
		      'keyword2'=>array('value'=>urlencode($sendTime),'color'=>'#000'),
		      'keyword3'=>array('value'=>urlencode($product),'color'=>'#000'),
		      'remark'=>array('value'=>urlencode($keyword1),'color'=>'#CC0000')
		);
		   
	   	import('ORG.Net.OrderPush');
		$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
		#$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');		  
	}
	//添加和修改收货地址
	public function recehand(){
		$id = I('post.id');
		$name = I('post.name');
		$phone = I('post.phone');
		$addre = I('post.addre');
		$receiving = M('receiving');
		$where['user_id'] = $id;
		$rel = M('receiving')->where($where)->find();
		//判断地址存不存在
		if($rel){
			$arr = array(
				'name' => $name,
				'phone' => $phone,
				'addre' => $addre
			);
			$rew = $receiving->where($where)->save($arr);
			$this->ajaxReturn('1','JSON');
		}else{
			$arr = array(
				'user_id' => $id,
				'name' => $name,
				'phone' => $phone,
				'addre' => $addre
			);
			$rew = $receiving->add($arr);
			$this->ajaxReturn($rew,'JSON');
		}
	}
	//提货单
	public function orderhand(){
		if(!session('user_id')){
			$this->ajaxReturn('nouser','JSON');
		}
		$distributor = M('distributor');
		$order = M('Orderc');
		$advance = M('advance');
		$templet = M('templet');
		$aaa = $distributor->where(array('id'=>$_SESSION['user_id']))->field('level,tallestID,pid')->find();
		$time = time();
		/*	if($_SESSION['level'] == 1){
			$o_id = 0;
		}else{
			$o_id = $aaa['pid'];
		}*/
		$o_id = 0;
		$pro_num = I('post.pro_num');
		$pro_id = I('post.pro_id');
		$pro_money = I('post.pro_money');
		$pro_num = explode(",",$pro_num);
		$pro_id = explode(",",$pro_id);
		$pro_money = explode(",",$pro_money);
		array_shift($pro_num);
		array_shift($pro_id);
		array_shift($pro_money);
		$count = count($pro_id);
		$total_money = I('post.money');
		$check_money = 0;

		for ($i=0; $i < $count; $i++) { 
			if(strpos($pro_id[$i],"/")){
				$p_id[$i] = substr($pro_id[$i],0,strpos($pro_id[$i], '/'));
				$shu[$i] = strchr($pro_id[$i],'/');
				$shu[$i] = ltrim($shu[$i],'/');
			}else{
				$p_id[$i] = $pro_id[$i];
			}
			$check_money = $check_money+$pro_num[$i]*$pro_money[$i];
			$not_send = $advance->where(array('user_id'=>$_SESSION['user_id'],'p_id'=>$p_id[$i]))->getField('not_send');
			//$list_order_num = $order->where(array('user_id'=>$_SESSION['user_id'],'p_id'=>$p_id[$i]))->field('num')->select();
			/*$mm = 0;
			foreach ($list_order_num  as $kk) {
				$mm = $mm+$kk['num'];
			}*/
			/*	if($not_send >=$mm){
				$not_send = $not_send-$mm;
			}else{
				$templet_name = $templet->where(array('id'=>$p_id[$i]))->getField('name');
				$result_arr['status']=4;
				$result_arr['name']=$templet_name;
				$this->ajaxReturn($result_arr,'JSON');
				exit();
			}*/
			if($not_send<$pro_num[$i]){
				$templet_name = $templet->where(array('id'=>$p_id[$i]))->getField('name');
				$result_arr['status']=4;
				$result_arr['name']=$templet_name;
				$this->ajaxReturn($result_arr,'JSON');
				exit();
			}
		}
		if($check_money != $total_money){
			$this->ajaxReturn(5,'json');
			exit();
		}
		for ($i=0; $i < $count; $i++) { 
			if(strpos($pro_id[$i],"/")){
				$p_id[$i] = substr($pro_id[$i],0,strpos($pro_id[$i], '/'));

				$shu[$i] = strchr($pro_id[$i],'/');
				$shu[$i] = ltrim($shu[$i],'/');
			}else{
				$p_id[$i] = $pro_id[$i];
			}
			$arr = array(
				'order_num' => I('post.order_num'),
				'user_id' => $_SESSION['user_id'],
				'o_id' => $o_id,
				'p_id' => $p_id[$i],
				'status' => 1,
				's_name' => I('post.user_name'),
				's_addre' => I('post.addre'),
				's_phone' => I('post.phone'),
				'notes' => I('post.textarea'),
				'num' => $pro_num[$i],
				'price' => $pro_money[$i],
				'total_num' =>I('post.znumber'),
				'time' => $time,
				'shu_value' =>$shu[$i],
				'total_price' => I('post.money'),
				'tallestID' => $aaa['tallestID'],

			);
			$res = $addorder = $order->add($arr);
		}
		if($res){
			$result_arr['status']=1;
			$this->ajaxReturn($result_arr,'json');
		}else{
			$result_arr['status']=5;
			$this->ajaxReturn($result_arr,'json');
		}		
	}
	//删除提货单
	public function delorder(){
		$order_num = I('post.id');
		$del = M('orderc')->where('order_num='.$order_num)->delete();
		$this->ajaxReturn($del,'JSON');
	}
	public function suborder(){
		$order_num = I('post.id');
		$arr['status'] = 1;
		$del = M('orderc')->where('order_num='.$order_num)->save($arr);
		$this->ajaxReturn($del,'JSON');
	}
	//确认收货
	public function shouhuo(){
		$order_num = I('post.order_num');
		$data['status'] = 3;
		$order = M('orderc');
		//$shou = M('orderc')->where('order_num='.$order_num)->delete();
		$shou = $order->where('order_num='.$order_num)->data($data)->save(); // 根据条件保存修改的数据
		//返利功能--在审核那里呢
		/*$list = $order->where('order_num='.$order_num)->group('order_num')->find();
		$row = M('distributor')->field('level,recommendID,pid')->where('id='.$list['user_id'])->find();
		$money = M('returnrate')->where('id=3')->find();
		if($row['level'] == 1 && $row['recommendID'] != 0){
			$rol = M('distributor')->field('id,level,recommendID')->where(array('id'=>$row['recommendID']))->find();
			//判断推荐人是否是满足返利条件
			if($rol['level'] == 1){
				$rearr = array(
					'order_num' => $order_num,
					'user_id' => $rol['id'],
					'x_id' => $list['user_id'],
					'money' => $money['ratio3'],
					'state' => 0,
					'time' => time(),
					'pay_id' => $row['pid']
				);
				M('rerebate')->add($rearr);
				if($rol['recommendID'] != 0){
					$rerow = M('distributor')->field('id,level,recommendID')->where(array('id'=>$rol['recommendID']))->find();
					if($rerow['level'] == 1){
						$rearr = array(
							'order_num' => $order_num,
							'user_id' => $rerow['id'],
							'x_id' => $list['user_id'],
							'money' => $money['ratio2'],
							'state' => 0,
							'time' => time(),
							'pay_id' => $row['pid']
						);
						M('rerebate')->add($rearr);
						if($rerow['recommendID'] != 0){
							$therrrow = M('distributor')->field('id,level')->where(array('id'=>$rerow['recommendID']))->find();
							if($therrrow['level'] == 1){
								$rearr = array(
									'order_num' => $order_num,
									'user_id' => $therrrow['id'],
									'x_id' => $list['user_id'],
									'money' => $money['ratio1'],
									'state' => 0,
									'time' => time(),
									'pay_id' => $row['pid']
								);
								M('rerebate')->add($rearr);
							}
						}
					}
				}
			}
		}*/
		if($shou)
		$this->ajaxReturn('1','JSON');
	}


	public function shoppingCart(){
		$aaa = M('distributor')->where(array('id'=>$_SESSION['user_id']))->field('level,tallestID,pid')->find();
		$one = M('number')->where(array('id'=>1))->find();
		$num = M('orderc')->where(array('user_id'=>$_SESSION['user_id']))->count('distinct order_num');
		/*$totalnum = I('post.znumber');
			if($aaa['level']==1 && $totalnum<$one['one'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}
			if($aaa['level']==2 && $totalnum<$one['two'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}
			if($aaa['level']==3 && $totalnum<$one['three'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}
			if($aaa['level']==4 && $totalnum<$one['four'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}
			if($aaa['level']==5 && $totalnum<$one['five'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}
			if($aaa['level']==6 && $totalnum<$one['six'] && $num<1){
				$this->ajaxReturn(false,'json');
				exit();
			}*/
		if($_SESSION['level'] == 1){
			$o_id = 0;
		}else{
			$o_id = $aaa['pid'];
		}
		$time = time();
		$pro_num = I('post.pro_num');
		$pro_id = I('post.pro_id');
		$pro_money = I('post.pro_money');
		$pro_num = explode(",",$pro_num);
		$pro_id = explode(",",$pro_id);
		$pro_money = explode(",",$pro_money);
		array_shift($pro_num);
		array_shift($pro_id);
		array_shift($pro_money);
		$count = count($pro_id);
		$total_money = I('post.money');
		$check_money = 0;
        	for ($i=0; $i < $count; $i++) { 
			$check_money += $pro_money[$i]*$pro_num[$i];
		}
		if($check_money != $total_money){
			$this->ajaxReturn(false,'json');
			exit();
		}
		
		for ($i=0; $i < $count; $i++) { 
			if(strpos($pro_id[$i],"/")){
				$p_id[$i] = substr($pro_id[$i],0,strpos($pro_id[$i], '/'));

				$shu[$i] = strchr($pro_id[$i],'/');
				$shu[$i] = ltrim($shu[$i],'/');
			}else{
				$p_id[$i] = $pro_id[$i];
			}
			$arr = array(
				'order_num' => I('post.order_num'),
				'user_id' => $_SESSION['user_id'],
				'o_id' => $o_id,
				'p_id' => $p_id[$i],
				'status' => 0,
				's_name' => I('post.user_name'),
				's_addre' => I('post.addre'),
				's_phone' => I('post.phone'),
				'notes' => I('post.textarea'),
				'num' => $pro_num[$i],
				'price' => $pro_money[$i],
				'total_num' =>I('post.znumber'),
				'time' => $time,
				'shu_value' =>$shu[$i],
				'total_price' => I('post.money'),
				'tallestID' => $aaa['tallestID']
			);
			$addorder = M('orderc')->add($arr);
		}
		$this->ajaxReturn($addorder,'json');
	}
		
	public function batchcar(){
		$time = time();
		$names = I('post.names');
		$names = rtrim($names,',');
		$names = explode(",",$names);
		//array_shift($names);
		$count = count($names);
		//var_dump($names);die;
		$arr['status'] = 1;
		$arr['time'] = $time;
		for ($i=0; $i < $count; $i++) { 
			$res = M('orderc')->where(array('order_num'=>$names[$i]))->save($arr);
			
		}
		if ($res) {
			$this->ajaxReturn(1,'json');
		} else {
			$this->ajaxReturn(2,'json');
		}
		
		
	}
	public function findrecommendID($recommendID,&$manlist=array()){
		$distributor = M('distributor');
		$person = $distributor->where(array('pid'=>$recommendID))->field('id')->select();
		if(!empty($person)){
			foreach($person as $kp => $vp){
				$manlist[]=$vp;
				$this->findrecommendID($vp['id'],$manlist);
		}
		}
		return $manlist;
	}
	public function listorder(){
		$start = I('get.start_time');
		$end = I('get.end_time');
		$start_time = $start;
		$end_time = $end;
		$start = strtotime($start);
		$end = strtotime($end);
		$end = $end + 3600*24;
		$manlist = $this->findrecommendID($_SESSION['user_id']);
		$manlist[] = array('id'=>$_SESSION['user_id']);
		$distributor = M('distributor');
		$order = M('orderc');
		$total_price = 0;
		$total_num = 0;
		foreach ($manlist as $val) {
			if(!empty($start)){
				$listorderm = $order->where(array('user_id'=>$val['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->group('order_num')->field('total_price,total_num')->select();
			}else{
				$listorderm = $order->where(array('user_id'=>$val['id'],'status'=>array('gt',1)))->group('order_num')->field('total_price,total_num')->select();
			}
			
			foreach ($listorderm as $val) {
				$total_price = $total_price + $val['total_price'];
				$total_num = $total_num + $val['total_num'];
			}
		}
		$total_price_2 = 0;
		$total_num_2 = 0;
		$total_price_3 = 0;
		$total_num_3 = 0;
			if(!empty($start)){
				$listorderm_3 = $order->where(array('user_id'=>$_SESSION['user_id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->group('order_num')->field('total_price,total_num')->select();
			}else{
				$listorderm_3 = $order->where(array('user_id'=>$_SESSION['user_id'],'status'=>array('gt',1)))->group('order_num')->field('total_price,total_num')->select();
			}
		foreach ($listorderm_3 as $val3) {
				$total_price_3 = $total_price_3 + $val3['total_price'];
				$total_num_3 = $total_num_3 + $val3['total_num'];
			}
		$manlist_2 = $distributor->where(array('pid'=>$_SESSION['user_id']))->field('id')->select();
		foreach ($manlist_2  as $val2) {	
			if(!empty($start)){
				$listorderm_2 = $order->where(array('user_id'=>$val2['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->group('order_num')->field('total_price,total_num')->select();
			}else{
				$listorderm_2 = $order->where(array('user_id'=>$val2['id'],'status'=>array('gt',1)))->group('order_num')->field('total_price,total_num')->select();
			}
		foreach ($listorderm_2 as $val22) {
				$total_price_2 = $total_price_22 + $val22['total_price'];
				$total_num_2 = $total_num_2 + $val22['total_num'];
			}
		}
		 $man['count_person'] = count($manlist);
		 $man['total_price'] = $total_price;
		 $man['total_num'] = $total_num;
		 $man['count_person_2'] = count($manlist_2);
		 $man['total_price_2'] = $total_price_2;
		 $man['total_num_2'] = $total_num_2;
		 $man['count_person_3'] = 1;
		 $man['total_price_3'] = $total_price_3;
		 $man['total_num_3'] = $total_num_3;
		 $this->man = $man;
		 $this->start_time = $start_time;
		 $this->end_time = $end_time;
		 $this->display();
	}
	public function listorderlist(){
		$distributor = M('distributor');
		$start = I('get.start_time');
		$end = I('get.end_time');
		$start_time = $start;
		$end_time = $end;
		$start = strtotime($start);
		$end = strtotime($end);
		$end = $end + 3600*24;
		$dinstinction = I('dinstinction');
		if($dinstinction==1){
		$manlist = $this->findrecommendID($_SESSION['user_id']);
		$manlist[] = array('id'=>$_SESSION['user_id']);
		$this->discription = "团队业绩详情";
		}else if($dinstinction==2){
			$manlist = $distributor->where(array('pid'=>$_SESSION['user_id']))->field('id')->select();
			$this->discription = "直属业绩详情";
		}else {
			$manlist[] = array('id'=>$_SESSION['user_id']);
			$this->discription = "个人业绩详情";
		}
		
		$order = M('orderc');
		$distributor = M('distributor');
		
		foreach ($manlist as $key=>$val) {
			$person = $distributor->where(array('id'=>$val['id']))->field('name,levname')->find();
		$manlist[$key]['user_name'] = $person['name'];
		$manlist[$key]['levname'] = $person['levname'];
		if(!empty($start)){
			$listorderm = $order->where(array('user_id'=>$val['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->group('order_num')->field('total_num,total_price')->select();
		}else{
			$listorderm = $order->where(array('user_id'=>$val['id'],'status'=>array('gt',1)))->group('order_num')->field('total_num,total_price')->select();
		}
		$total_price = 0;
		$total_num = 0;
		foreach ($listorderm as $val) {
			$total_num = $total_num + $val['total_num'];
			$total_price = $total_price + $val['total_price'];
		}
	
		$manlist[$key]['total_num'] = $total_num;
		$manlist[$key]['total_price'] = $total_price;
	}
		 $this->list = $manlist;
		  $this->start_time = $start_time;
		 $this->end_time = $end_time;
		 $this->dinstinction = $dinstinction;
		 $this->display();
	}
	//产品详情
	public function pro_detail(){
		$id = I('get.id');
		$disc = M('Templet')->where(array('id'=>$id))->getField('disc');
		$this->row = $disc;
		$this->display();
	}
	//用户提货单年统计
	public function count_year(){
		$user = $_SESSION['user_id'];
		$Model = M(); // 实例化一个model对象 没有对应任何数据表
		$sql = "SELECT order_num, total_price, total_num FROM `order` WHERE year(FROM_UNIXTIME(time)) = year(curdate()) AND user_id = $user AND status>1 GROUP BY order_num";
		$list = $Model->query($sql);
		$allmoney = 0;
		$allnum = 0;
		$order_count = count($list);
		foreach ($list as $key => $value) {
			$allmoney += $value['total_price'];
			$allnum += $value['total_num'];
		}
		$this->allmoney = $allmoney;
		$this->allnum = $allnum;
		$this->order_count = $order_count;
		$listyear = array();
		$year = date('Y', time());
		for ($i=0; $i < 3; $i++) {
			$sql = "SELECT order_num, total_price, total_num FROM `order` WHERE year(FROM_UNIXTIME(time)) = $year AND user_id = $user AND status>1 GROUP BY order_num";
			$list = $Model->query($sql);
			$allmoney = 0;
			$allnum = 0;
			$order_count = count($list);
			foreach ($list as $key => $value) {
				$allmoney += $value['total_price'];
				$allnum += $value['total_num'];
			}
			$listyear[$i]['allmoney'] = $allmoney;
			$listyear[$i]['allnum'] = $allnum;
			$listyear[$i]['order_count'] = $order_count;
			$listyear[$i]['year'] = $year; 
			$year = $year - 1;
		}
		$this->listyear = $listyear;
		//var_dump($listyear);die;
		$this->display();
	}
	//按年搜索用户提货单统计
	public function search_count_year(){
		$year = I('option');
		$user = $_SESSION['user_id'];
		$Model = M(); // 实例化一个model对象 没有对应任何数据表
		$sql = "SELECT order_num, total_price, total_num FROM `order` WHERE year(FROM_UNIXTIME(time)) = $year AND user_id = $user AND status>1 GROUP BY order_num";
		$list = $Model->query($sql);
		$allmoney = 0;
		$allnum = 0;
		$order_count = count($list);
		foreach ($list as $key => $value) {
			$allmoney += $value['total_price'];
			$allnum += $value['total_num'];
		}
		$this->allmoney = $allmoney;
		$this->allnum = $allnum;
		$this->order_count = $order_count;
		$info = array('allmoney'=>$allmoney, 'allnum'=>$allnum, 'order_count'=>$order_count);
		$this->ajaxReturn($info, 'json');
		//$this->display('count_year');
	}
	//用户提货单月统计
	public function count_month(){
		$start_day = date("Y", time()).'-01-01'; 
		$now_day = date("Y-m-d", time());
		$user = $_SESSION['user_id'];
		$Model = M(); // 实例化一个model对象 没有对应任何数据表
		$sql = "SELECT count(distinct order_num) quantity, sum(num) tnum, sum(num*price) tmoney, date_format(FROM_UNIXTIME( `time`),'%Y%m') sdate FROM `order` WHERE year(FROM_UNIXTIME(time)) = year(curdate()) AND user_id=$user AND status>1 group by sdate";
		//$sql = "select * from `order` where year(FROM_UNIXTIME(time)) = year(curdate()) group by month(time)";
		$list = $Model->query($sql);
		$months = array('1'=>'','2'=>'','3'=>'','4'=>'','5'=>'','6'=>'','7'=>'','8'=>'','9'=>'','10'=>'','11'=>'','12'=>'');
		foreach ($list as $key => $value) {
			$month = substr($value['sdate'], -2);
			$month = substr($month, -2, 1) == 0 ? substr($month, -1) : $month; // 返回 "d"
			$months[$month] = $value;
			//$list[$key]['month'] = substr($value['sdate'], -2);
		}
		for ($i=1; $i <= 12; $i++) { 
			if (empty($months[$i])) {
				$months[$i]["quantity"] = 0;
				$months[$i]["tnum"] = 0;
				$months[$i]["tmoney"] = 0;
				//$months[$i]["sdate"] = 0;
			}
		}
		$this->months = $months;
		$this->list = $list;
		$this->start_day = $start_day;
		$this->now_day = $now_day;
		//var_dump($months);//die;
		$this->display();
	}
}
?>