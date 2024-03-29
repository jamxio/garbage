<?php
/**
*	正姿笔微商系统经销商管理系统 ，总后台订货单处理
*/
header("Content-Type: text/html; charset=utf-8");
class OrderAction extends CommonAction
{
	public function index(){
		import('ORG.Util.Page');
		$order = M('Order');
		$distributor = M('distributor');
		$status = I('status');
		$user_id = I('user_id');
		$report_order = I('report_order');
		$o_id = I('o_id');
		if(!empty($user_id) && $report_order==1){
			$map =array('user_id'=>$user_id,'status'=>array('gt',1));

		}else if(!empty($user_id) && $report_order==2){
			$ids = $this->findDerectly($user_id);
			
			$ids[] = $user_id;
			$map =array('user_id'=>array('in',$ids),'status'=>array('gt',1));
		}
		else if(!empty($user_id) && $report_order==3){
			$ids = $this->findAll($user_id);
			$ids[]= $user_id;
			$map =array('user_id'=>array('in',$ids),'status'=>array('gt',1));
		}else{
			$map = null;
		}
		$count = $order->where($map)->count('distinct order_num');
		if($count > 0){
			$p = new Page($count, 8);
			$limit= $p->firstRow . "," . $p->listRows;
			$applyList = $order->where($map)->order('time desc')->group('order_num')->limit($limit)->select();
			foreach ($applyList as $k => $v) {
				$list = $distributor->where(array('id' => $v['user_id']))->find();
				if($v['o_id'] !=0){
					$ros = $distributor->where(array('id' => $v['o_id']))->field('id,name,phone,levname')->find();
					$applyList[$k]['bossname'] = $ros['name'];
					$applyList[$k]['bossphone'] = $ros['phone'];
				}else{
					$applyList[$k]['bossname'] = "总部";
					$applyList[$k]['bossphone'] = "";
				}
				$applyList[$k]['name'] = $list['name'];
				$applyList[$k]['phone'] = $list['phone'];
				$applyList[$k]['levname'] = $list['levname'];
				$row = $order->field('p_id,num,price')->where(array('order_num' => $v['order_num']))->select();
				foreach ($row as $b => $d) {
					$rol = M('Templet')->field('name')->where(array('id' => $d['p_id']))->find();
					$row[$b]['pr_name'] = $rol['name'];
				}
				$applyList[$k]['row'] = $row;
			}
			$page = $p->show();
			$this->page = $page;
			$this->assign('row',$row);
			$this->assign('applyList',$applyList);
		}

		$this->pages = ceil($count/8);
		$this->display();
	}
	//获取快递信息
	public function getexpress(){
		$res = M('Order')->where(array('order_num'=>I('ordernumber')))->field('excompany,compcode,express')->find();
		$this->ajaxReturn($res, 'json');
	}
	//添加或更换快递
	public function editexpress(){
		$row = I();
		$data = array(
			'excompany'=>$row['expComName'],
			'compcode'=>$row['expCom'],
			'express'=>$row['express']
		);
		$res = M('Order')->where(array('order_num'=>$row['ordernumber']))->save($data);
		if ($res) {
			$dtt = M('Order')->where(array('order_num'=>$row['ordernumber']))->field('excompany,compcode,express')->find();
			$this->ajaxReturn($dtt, 'json');
		} else {
			$this->ajaxReturn('error', 'json');
		}
	}
	//Looking for staff
	public function findDerectly($user_id){
		$distributor = M('distributor');
		$ids = array();
		$listDerectly = $distributor->where(array('pid'=>$user_id))->field('id')->select();
		foreach ($listDerectly as $val) {
			$ids[]=$val['id'];
		}
		return $ids;
	}
	//Looking for all staff
	public function findAll($user_id,&$manlist=array()){
		$distributor = M('distributor');
		$person = $distributor->where(array('pid'=>$user_id))->field('id')->select();
		if(!empty($person)){
			foreach($person as $vp){
				$manlist[]=$vp['id'];
				$this->findAll($vp['id'],$manlist);
			}
		}
		return $manlist;
	}
	//品牌合伙人订货单申请信息列表
	public function applyList()
	{
		import('ORG.Util.Page');
		$order = M('Order');
		$count = $order->where(array('o_id' => 0,'status' => 1))->count('distinct order_num');
		if($count > 0){
			$p = new Page($count, 8);
			$limit= $p->firstRow . "," . $p->listRows;
			$applyList = $order->order('time desc')->where(array('o_id' => 0,'status' => 1))->group('order_num')->limit($limit)->select();
			foreach ($applyList as $k => $v) {
				$list = M('distributor')->where(array('id' => $v['user_id']))->find();
				$applyList[$k]['name'] = $list['name'];
				$applyList[$k]['phone'] = $list['phone'];
				$applyList[$k]['levname'] = $list['levname'];
				$applyList[$k]['bossname'] = $list['bossname'];
				$row = $order->field('p_id,num')->where(array('order_num' => $v['order_num']))->select();
				foreach ($row as $b => $d) {
					$rol = M('Templet')->field('name')->where(array('id' => $d['p_id']))->find();
					$row[$b]['pr_name'] = $rol['name'];
				}
				$applyList[$k]['row'] = $row;
			}
			$page = $p->show();
			$this->page = $page;
			$this->assign('row',$row);
			$this->assign('applyList',$applyList);
		}
		$this->pages = ceil($count/8);
		$this->display();
	}


   public function audit(){
		if(!IS_AJAX) {
			halt('页面不存在！');
		}
		vendor("phpqrcode.phpqrcode");
		$mids = I('mids');
		$mids = substr($mids,1);
		$managers = explode('_',$mids);
		import('ORG.Net.OrderPush');
		$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
		foreach($managers as $m) {
			$list = M('order')->where(array('order_num' => $m))->group('order_num')->find();
			$rew = M('order')->where(array('order_num' => $m))->save(array('status' => 2));

			if($rew){
				$people = M('distributor')->field('id,name,openid,level,recommendID,pid')->where(array('id' => $list['user_id']))->find();
				$touser = $people['openid'];
				$sendTime = date("Y-m-d H:i:s");
				$keyword1 =$m.",恭喜您!".$people['name']."总部已经审核,已转入库存";
				$template_id = C('REFUSE_ORDER');
				$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
				$sendData = array(
					'first'=>array('value'=>urlencode("公司审核完毕订货单通知"),'color'=>"#CC0000"),
					'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
					'keyword2'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
					'keyword3'=>array('value'=>urlencode("公司已经审核"),'color'=>'#000'),
					'remark'=>array('value'=>urlencode("点击进行查看"),'color'=>'#CC0000')
				);
				$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');

				//处理库存
				$advance = M('advance');
				$order_list = M('order')->where(array('order_num' => $m))->select();
				foreach ($order_list as $mm) {
					$reception_man = $advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->find(); 
					if(!empty($reception_man)){
						$reception_edit['not_send'] = $reception_man['not_send']+$mm['num'];
						$reception_edit['money'] = $reception_man['money']+$mm['price']*$mm['num'];//加总额
						$reception_edit['price'] = $reception_edit['money']/$reception_edit['not_send'];//求平均单价
						$advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->save($reception_edit);
					}else{
						$reception_add['not_send'] = $mm['num'];
						$reception_add['yes_send'] = 0;
						$reception_add['money'] = $mm['price']*$mm['num'];//加总额
						$reception_add['price'] = $reception_add['money']/$reception_add['not_send'];//求平均单价
						$reception_add['p_id'] = $mm['p_id'];
						$reception_add['user_id'] = $mm['user_id'];
						$advance->add($reception_add);
						//修改->增加会改变后一个产品库存的id
					//经2017-8-2在次修改，因为又出现了改后面已提货数的漏洞
					//最后解决方案为，区分添加和修改的变量命名。
						unset($reception_add['p_id']);
					}
				}
			}
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	public function oneaudit(){
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		$mids = I('mids');
		$list = M('order')->where(array('order_num' => $mids))->group('order_num')->find();
		$rew = M('order')->where(array('order_num' => $mids))->save(array('status' => 2));

		if($rew){
			$people = M('distributor')->field('id,name,openid,level,recommendID,pid')->where(array('id' => $list['user_id']))->find();
			$touser = $people['openid'];
			$sendTime = date("Y-m-d H:i:s");
			$keyword1 =$mids.",恭喜您!".$people['name']."总部已经审核，已转入库存";
			$template_id = C('REFUSE_ORDER');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
				'first'=>array('value'=>urlencode("公司审核完毕订货单通知"),'color'=>"#CC0000"),
				'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
				'keyword2'=>array('value'=>urlencode($sendTime),'color'=>'#000'),
				'keyword3'=>array('value'=>urlencode("公司已经审核"),'color'=>'#000'),
				'remark'=>array('value'=>urlencode("点击进行查看"),'color'=>'#CC0000')
			);
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');

			//处理库存
			$advance = M('advance');
			$order_list = M('order')->where(array('order_num' => $mids))->select();
			foreach ($order_list as $mm) {
				$reception_man = $advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->find(); 
				if(!empty($reception_man)){
					$reception_edit['not_send'] = $reception_man['not_send']+$mm['num'];
					$reception_edit['money'] = $reception_man['money']+$mm['price']*$mm['num'];//加总额
					$reception_edit['price'] = $reception_edit['money']/$reception_edit['not_send'];//求平均单价
					$advance->where(array('user_id'=>$mm['user_id'],'p_id'=>$mm['p_id']))->save($reception_edit);
				}else{
					$reception_add['not_send'] = $mm['num'];
					$reception_add['yes_send'] = 0;
					$reception_add['money'] = $mm['price']*$mm['num'];//加总额
					$reception_add['price'] = $reception_add['money']/$reception_add['not_send'];//求平均单价
					$reception_add['p_id'] = $mm['p_id'];
					$reception_add['user_id'] = $mm['user_id'];
					$advance->add($reception_add);
					//修改->增加会改变后一个产品库存的id
					//经2017-8-2在次修改，因为又出现了改后面已提货数的漏洞
					//最后解决方案为，区分添加和修改的变量命名。
					unset($reception_add['p_id']);
				}
			}
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	//转给上级审核
	public function ordertoboss(){
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		$mids = I('mids');
		$list = M('order')->where(array('order_num' => $mids))->group('order_num')->find();
			$man = M('distributor')->field('name,pid')->where(array('id' => $list['user_id']))->find();
		$rew = M('order')->where(array('order_num' => $mids))->save(array('o_id' => $man['pid']));
		if($rew){
			$people = M('distributor')->field('id,name,openid')->where(array('id' => $man['pid']))->find();
			$touser = $people['openid'];
			$sendTime = date("Y-m-d H:i:s");
			$keyword1 =$mids.",下单人!".$man['name']."总部决定库存由你来转";
			$template_id = C('REFUSE_ORDER');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
				'first'=>array('value'=>urlencode("公司转移首充库存订单"),'color'=>"#CC0000"),
				'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
				'keyword2'=>array('value'=>urlencode($sendTime),'color'=>'#000'),
				'keyword3'=>array('value'=>urlencode("库存申请转移"),'color'=>'#000'),
				'remark'=>array('value'=>urlencode("点击进行库存审核"),'color'=>'#CC0000')
			);
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
			$this->ajaxReturn(array('status' => 1),'json');
		}
		$this->ajaxReturn(array('status' => 0),'json');
	}
	//搜索
	public function search(){
		import('ORG.Util.Page');
		$keyword = $_GET['keyword'];
		$order = M('Order');
		$distributor = M('distributor');
		if($_GET['id'] == 1){
			$map = array(
				'order_num' => $keyword,
				'_logic' => 'or',
				's_name' => $keyword,
			);
		}elseif($_GET['id'] == 2){
			$where = array(
				'name' => $keyword,
			);
			$lista = $distributor->where($where)->find();
			$map = array(
				'user_id' => $lista['id'],
				'_logic' => 'or',
				'o_id' => $lista['id'],
			);
		}else{
			$map = array(
				'status'=>$keyword,
			);
		}
		$count = $order->where($map)->count('distinct order_num');
		if($count > 0){
			$p = new Page($count, 8);
			$limit= $p->firstRow . "," . $p->listRows;
			$applyList = $order->where($map)->order('time desc')->group('order_num')->limit($limit)->select();
			foreach ($applyList as $k => $v) {
				$list = $distributor->where(array('id' => $v['user_id']))->find();
				$ros = $distributor->where(array('name' => $list['bossname']))->find();
				$applyList[$k]['name'] = $list['name'];
				$applyList[$k]['phone'] = $list['phone'];
				$applyList[$k]['levname'] = $list['levname'];
				$applyList[$k]['bossname'] = $list['bossname'];
				$applyList[$k]['bossphone'] = $ros['phone'];
				$row = $order->field('p_id,num')->where(array('order_num' => $v['order_num']))->select();
				foreach ($row as $b => $d) {
					$rol = M('Templet')->field('name')->where(array('id' => $d['p_id']))->find();
					$row[$b]['pr_name'] = $rol['name'];
				}
				$applyList[$k]['row'] = $row;
			}
			$page = $p->show();
			$this->page = $page;
			$this->assign('row',$row);
			$this->assign('applyList',$applyList);
		}
		$this->keyword = $keyword;
		$this->id = $_GET['id'];
		$this->pages = ceil($count/8);
		$this->display('index');
	}
	public function cont(){
		import('ORG.Util.Page');
		$order = M('order');
		$distributor = M('distributor');
		$count = $distributor->where(array('pid' => 0,'level' => 1))->count();
		if($count > 0){
			$p = new Page($count, 10);
			$limit= $p->firstRow . "," . $p->listRows;
			$a = $distributor->where(array('pid' => 0,'level' => 1))->field('id,name')->limit($limit)->select();
			foreach($a as $k => $v){
				//代理线最高代理下单的统计
				$money = 0;
				$xmoney = 0;
				$list = $order->where(array('user_id'=>$a[$k]['id']))->group('order_num')->field('total_price')->select();
				//var_dump($list);
				foreach($list as $ke => $va){
					$money = $money + $list[$ke]['total_price'];
				}
				$a[$k]['money'] = $money;
				//代理线其他代理下单的统计
				$lista = $order->where(array('tallestID'=>$a[$k]['id']))->group('order_num')->field('total_price')->select();
				//var_dump($list);
				foreach($lista as $u => $i){
					$xmoney = $xmoney + $lista[$u]['total_price'];
				}
				$a[$k]['xmoney'] = $xmoney;
				$a[$k]['zmoney'] = $xmoney+$money;
				/*$a[$k]['wcont'] = $order->where(array('user_id'=>$a[$k]['id'],'status'=>1))->count('distinct order_num');
				$a[$k]['ycont'] = $order->where(array('user_id'=>$a[$k]['id'],'status'=>2))->count('distinct order_num');
				$a[$k]['scont'] = $order->where(array('user_id'=>$a[$k]['id'],'status'=>3))->count('distinct order_num');
				$a[$k]['x_wcont'] = $order->where(array('tallestID'=>$a[$k]['id'],'status'=>1))->count('distinct order_num');
				$a[$k]['x_ycont'] = $order->where(array('tallestID'=>$a[$k]['id'],'status'=>2))->count('distinct order_num');
				$a[$k]['x_scont'] = $order->where(array('tallestID'=>$a[$k]['id'],'status'=>3))->count('distinct order_num');*/
			}
			$this->start=$p->firstRow;
			$page = $p->show();
			$this->page = $page;
			$this->assign('a',$a);
		}
		$this->pages = ceil($count/10);
		$this->display();
	}
	public function orsearch(){
		import('ORG.Util.Page');
		$order = M('order');
		$distributor = M('distributor');
		$start_time = I('get.start_time');
		$end_time = I('get.end_time');
		$keyword = I('get.keyword');
		if($start_time && $end_time){
			if(!is_numeric($start_time) && !is_numeric($end_time)){
				$start_time = strtotime($start_time);
				$end_time = strtotime($end_time)+86399;
				$wherea['time'] = array(array('egt',$start_time),array('elt',$end_time));
				$where['time'] = array(array('egt',$start_time),array('elt',$end_time));
			}
		}
		if($keyword){
			$map['name'] = $keyword;
		}
		$map['pid'] = 0;
		$map['level'] = 1;
		$count = $distributor->where($map)->count();
		if($count > 0){
			$p = new Page($count, 10);
			$limit= $p->firstRow . "," . $p->listRows;
			$a = $distributor->where($map)->field('id,name')->limit($limit)->select();
			foreach($a as $k => $v){
				//代理线最高代理下单的统计
				$money = 0;
				$xmoney = 0;
				$where['user_id'] = $a[$k]['id'];
				$list = $order->where($where)->group('order_num')->field('total_price')->select();
				//var_dump($list);
				foreach($list as $ke => $va){
					$money = $money + $list[$ke]['total_price'];
				}
				$a[$k]['money'] = $money;
				//代理线其他代理下单的统计
				$wherea['tallestID'] = $a[$k]['id'];
				$lista = $order->where($wherea)->group('order_num')->field('total_price')->select();
				//var_dump($list);
				foreach($lista as $u => $i){
					$xmoney = $xmoney + $lista[$u]['total_price'];
				}
				$a[$k]['xmoney'] = $xmoney;
				$a[$k]['zmoney'] = $xmoney+$money;
			}
			$page = $p->show();
			$this->page = $page;
			$this->assign('a',$a);
		}
		$this->s_time = I('get.start_time');
		$this->e_time = I('get.end_time');
		$this->keyword = $keyword;
		$this->pages = ceil($count/10);
		$this->display('cont');
	}
	public function search1(){
		$templet = M('Templet');
		$distributor = M('distributor');
		$start = I('get.start_time');
		$end = I('get.end_time');
		$start = strtotime($start);
		$end = strtotime($end);
		$end = $end + 3600*24;
		$condition['time'] = array(between,array($start,$end));
		$order = M('Order');
			$templet = M('Templet');
			$xlsCell  = array(
			array('order_num','订货单号'),
			array('name','订货经销商'),
			array('phone','订货经销商电话'),
			array('bossname','接单经销商'),
			array('bossphone','接单经销商电话'),
			array('pr_namenum','产品名称'),
			array('s_name','收货人姓名'),
			array('s_phone','收货人电话'),
			array('s_addre','收货地址'),
			array('notes','备注'),
			array('timea','申请时间'),
			array('sname','状态')
			);
			$applyList = $order->where($condition)->order('time desc')->group('order_num')->select();
			foreach ($applyList as $k => $v) {
				$list = $distributor->where(array('id' => $v['user_id']))->find();
				$ros = $distributor->where(array('name' => $list['bossname']))->find();
				$applyList[$k]['name'] = $list['name'];
				$applyList[$k]['phone'] = $list['phone'];
				$applyList[$k]['levname'] = $list['levname'];
				$applyList[$k]['bossname'] = $list['bossname'];
				$applyList[$k]['bossphone'] = $ros['phone'];
				$row = $order->field('p_id,num')->where(array('order_num' => $v['order_num']))->select();
				$applyList[$k]['pr_namenum'] = "";
				foreach ($row as $b => $d) {
					$rol = $templet->field('name')->where(array('id' => $d['p_id']))->find();
					$applyList[$k]['pr_namenum'] .= $rol['name']."x".$row[$b]['num']." ";
				}
				if($applyList[$k]['status'] == 1){
					$applyList[$k]['sname'] = "未审核";
				}else if($applyList[$k]['status'] == 2){
					$applyList[$k]['sname'] = "配送中";
				}
				else if($applyList[$k]['status'] == 5){
					$applyList[$k]['sname'] = "待公司审核";
				}
				else{
					$applyList[$k]['sname'] = "已收货";
				}
				$applyList[$k]['row'] = $row;
				$applyList[$k]['timea'] = date("Y-m-d H:i:s", $applyList[$k]['time']);
			}
			$xlsName = '订货单表';
			$this->exportExcel($xlsName,$xlsCell,$applyList);	
	}

	public function find_same_level($level,$recommendID){
		$new_recommend = M('distributor')->where(array('id'=>$recommendID))->field('id,recommendID,level')->find();
		if($new_recommend['level']!=$level){
			return $this->find_same_level($level,$new_recommend['recommendID']);
		}else{
			return $new_recommend;
		}		
	}

		//订货单删除
	public function delete()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}
		vendor("phpqrcode.phpqrcode");
		$mids = I('mids');
		$mids = substr($mids,1);
		$managers = explode('_',$mids);
		foreach($managers as $m) {
			$list = M('order')->where(array('order_num' => $m))->group('order_num')->find();
			$people = M('distributor')->field('id,name,openid')->where(array('id' => $list['user_id']))->find();
			$touser = $people['openid'];
			$sendTime = date("Y-m-d H:i:s");
			$remark ="遗憾地告诉您,".$people['name']."公司已拒绝该订货单,审核时间:".$sendTime;
			$template_id = C('REFUSE_ORDER');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
                'first'=>array('value'=>urlencode("公司审核后，已经拒绝订货单通知"),'color'=>"#CC0000"),
                'keyword1'=>array('value'=>urlencode($m),'color'=>'#000'),
                'keyword2'=>array('value'=>urlencode($sendTime),'color'=>'#000'),
                'keyword3'=>array('value'=>urlencode("公司已经拒绝该订货单"),'color'=>'#000'),
                'remark'=>array('value'=>urlencode($remark),'color'=>'#CC0000')
            );
			
			$result1 = M('order')->where(array('order_num' => $m))->delete();
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			if($result1){
				$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
			}
			
		
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	public function total(){
		import('ORG.Util.Page');
		$model = M('distributor');
		$OderM = M('order');
		$level = I('level');
		$where = array("level"=>$level);
		$count = $model->where($where)->count('id');
		$p = new Page($count, 10);
		$limit = $p->firstRow . "," . $p->listRows;
		$voList=$model->field('id,name,levname,phone')->where($where)->limit($limit)->select();
		foreach ($voList as $key => $value) {
			$order1 = $OderM->where(array('user_id'=>$value['id'],'status'=>1))->count('distinct order_num');
			$voList[$key]['m1'] = $order1;
			$counta = 0;
			$variable = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>1))->group('order_num')->select();
			foreach ($variable as $k => $v) {
				$counta = $counta + $v['total_price'];
			}
			$voList[$key]['m1money'] = $counta;
			$order2 = $OderM->where(array('user_id'=>$value['id'],'status'=>2))->count('distinct order_num');
			$voList[$key]['m2'] = $order2;
			$countb = 0;
			$variable2 = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>2))->group('order_num')->select();
			foreach ($variable2 as $k => $v) {
				$countb = $countb + $v['total_price'];
			}
			$voList[$key]['m2money'] = $countb;
			$countc = 0;
			$order3 = $OderM->where(array('user_id'=>$value['id'],'status'=>3))->count('distinct order_num');
			$voList[$key]['m3'] = $order3;
			$variable3 = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>3))->group('order_num')->select();
			foreach ($variable3 as $k => $v) {
				$countc = $countc + $v['total_price'];
			}
			$voList[$key]['m3money'] = $countc;
			$order4 = $OderM->where(array('o_id'=>$value['id'],'status'=>1))->count('distinct order_num');
			$voList[$key]['n1'] = $order4;
			$countd = 0;
			$variable4 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>1))->group('order_num')->select();
			foreach ($variable4 as $k => $v) {
				$countd = $countd + $v['total_price'];
			}
			$voList[$key]['n1money'] = $countd;
			$order5= $OderM->where(array('o_id'=>$value['id'],'status'=>2))->count('distinct order_num');
			$voList[$key]['n2'] = $order5;
			$counte= 0;
			$variable5 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>2))->group('order_num')->select();
			foreach ($variable5 as $k => $v) {
				$counte = $counte + $v['total_price'];
			}
			$voList[$key]['n2money'] = $counte;
			$order6= $OderM->where(array('o_id'=>$value['id'],'status'=>3))->count('distinct order_num');
			$voList[$key]['n3'] = $order6;
			$countf= 0;
			$variable6 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>3))->group('order_num')->select();
			foreach ($variable6 as $k => $v) {
				$countf = $countf+ $v['total_price'];
			}
			$voList[$key]['n3money'] = $countf;
		}
		$page = $p->show();
		$this->page = $page;
		$this->assign('voList',$voList);
		$this->keyword = $keyword;
		$this->level = $level;
		$this->pages = ceil($count/10);
		$this->display();
	}
	public function orsearch2(){
		$name = trim(I('searchname'));
		$level = I('level');
		$where = array('name'=>$name);

		import('ORG.Util.Page');
		$model = M('distributor');
		$OderM = M('order');
		$count = $model->where($where)->count('id');
		$p = new Page($count, 15);
		$limit = $p->firstRow . "," . $p->listRows;
		$voList=$model->field('id,name,levname,phone')->where($where)->limit($limit)->select();
		foreach ($voList as $key => $value) {
			$order1 = $OderM->where(array('user_id'=>$value['id'],'status'=>1))->count('distinct order_num');
			$voList[$key]['m1'] = $order1;
			$counta = 0;
			$variable = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>1))->group('order_num')->select();
			foreach ($variable as $k => $v) {
				$counta = $counta + $v['total_price'];
			}
			$voList[$key]['m1money'] = $counta;
			$order2 = $OderM->where(array('user_id'=>$value['id'],'status'=>2))->count('distinct order_num');
			$voList[$key]['m2'] = $order2;
			$countb = 0;
			$variable2 = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>2))->group('order_num')->select();
			foreach ($variable2 as $k => $v) {
				$countb = $countb + $v['total_price'];
			}
			$voList[$key]['m2money'] = $countb;
			$countc = 0;
			$order3 = $OderM->where(array('user_id'=>$value['id'],'status'=>3))->count('distinct order_num');
			$voList[$key]['m3'] = $order3;
			$variable3 = $OderM ->field('id,o_id,total_price')->where(array('user_id'=>$value['id'],'status'=>3))->group('order_num')->select();
			foreach ($variable3 as $k => $v) {
				$countc = $countc + $v['total_price'];
			}
			$voList[$key]['m3money'] = $countc;
			$order4 = $OderM->where(array('o_id'=>$value['id'],'status'=>1))->count('distinct order_num');
			$voList[$key]['n1'] = $order4;
			$countd = 0;
			$variable4 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>1))->group('order_num')->select();
			foreach ($variable4 as $k => $v) {
				$countd = $countd + $v['total_price'];
			}
			$voList[$key]['n1money'] = $countd;
			$order5= $OderM->where(array('o_id'=>$value['id'],'status'=>2))->count('distinct order_num');
			$voList[$key]['n2'] = $order5;
			$counte= 0;
			$variable5 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>2))->group('order_num')->select();
			foreach ($variable5 as $k => $v) {
				$counte = $counte + $v['total_price'];
			}
			$voList[$key]['n2money'] = $counte;
			$order6= $OderM->where(array('o_id'=>$value['id'],'status'=>3))->count('distinct order_num');
			$voList[$key]['n3'] = $order6;
			$countf= 0;
			$variable6 = $OderM ->field('id,o_id,total_price')->where(array('o_id'=>$value['id'],'status'=>3))->group('order_num')->select();
			foreach ($variable6 as $k => $v) {
				$countf = $countf+ $v['total_price'];
			}
			$voList[$key]['n3money'] = $countf;
		}
		$page = $p->show();
		$this->page = $page;
		$this->assign('voList',$voList);
		$this->name = $name;
		$this->level = $level;
		$this->pages = ceil($count/10);
		$this->display('total');
	}
	public function editlevname(){
		$this->one = M('number')->where(array('id'=>1))->find();
		$this->level_name=C('LEVEL_NAME');
		$this->level_num=C('LEVEL_NUM');
		$this->display();
	}
   public function updatelevname(){
		$distributor = M('distributor');
		$data1 = array(
			'one'=>trim(I('name1')),
			'two'=>trim(I('name2')),
			'three'=>trim(I('name3')),
			'four'=>trim(I('name4')),
			'five'=>trim(I('name5')),
			'six'=>trim(I('name6')),
		);
		$res1 = M('number')->where(array('id'=>1))->save($data1);
		if($res1){
			$this->success('更新成功');
			echo "<script>window.parent.frames['leftFrame'].location.reload();</script>";
		}
		else{
			$this->success('更新失败');
		}
	}
	public function monthlist(){
		$distributor = M('distributor');
		$order = M('order');
		$charge = M('chargemoney');
		$searchman = trim(I('searchname'));
		$begintime = date("Y-m-d H:i:s",mktime(0, 0 , 0,date("m"),1,date("Y")));
		$endtime = date("Y-m-d H:i:s",mktime(23,59,59,date("m"),date("t"),date("Y")));
		$begintime = strtotime($begintime);
		$endtime = strtotime($endtime);
		if(!empty($searchman)){
			$count = $distributor->where(array('level'=>1,'audited'=>1,'name'=>$searchman))->count('id');
		}else{
			$count = $distributor->where(array('level'=>1,'audited'=>1))->count('id');	
		}
		import('ORG.Util.Page');
		$p = new Page($count, 10);
		$limit= $p->firstRow . "," . $p->listRows;
		if(!empty($searchman)){
			$list = $distributor->where(array('level'=>1,'audited'=>1,'name'=>$searchman))->field('id,name,levname,recommendID,time')->order('time desc')->limit($limit)->select();
		}else{
			$list = $distributor->where(array('level'=>1,'audited'=>1))->field('id,name,levname,recommendID,time')->order('time desc')->limit($limit)->select();
		}
		foreach ($list as $k => $v) {
			
			$orderlist = $order->where(array('user_id'=>$v['id'],'status'=>array('in','2,3'),"time"=>array('between',array($begintime,$endtime))))->group('order_num')->field('total_num')->select();
			$total_num = 0;
			foreach($orderlist as $b=>$c){
				$total_num = $total_num + $c['total_num'];
			}
			$list[$k]['total_pricem'] = $total_num; 
		$total_num = $allsontotalreturn + $total_num;
		$list[$k]['total_price'] = $total_num;
		$listmoneyk = 0;
		$mmc = 0;
		$diretly = $distributor->where(array('recommendID'=>$v['id'],'level'=>1))->field('id')->select();
		$sondiretly = 0;
	
		
			$myreturn = $returnmmk-$sondiretly;
			
				$list[$k]['returnmoney'] = $myreturn;
				
		}
		$this->nomonth = date('n');
		$page = $p->show();
		$this->page = $page;
		$this->level_name=C('LEVEL_NAME');
		$this->assign('list',$list);
		$this->display();
	}
}
?>