<?php
/**
*	伊蔲兰迪微商系统经销商管理系统
*/
header("Content-Type: text/html; charset=utf-8");
class ManagerAction extends CommonAction
{
	//级别经销商列表
	// public function index()
	// {   
	// 	$pid = session('did');
	// 	$level = I('level');
	// 	$disable = I('disable');
	// 	$userid = I('userid');
	// 	import('ORG.Util.Page');
	// 	if($pid == 0) {       //总管理员
	// 		$model = M('distributor');
	// 		if(!empty($userid)){
	// 			$map['id'] = $userid;
	// 		}else{
	// 			$map['level'] = $level;
	// 		}
	// 		//取得满足条件的记录数
	// 		if(!empty($disable)){
	// 			$count = $model->where(array('disable'=>1))->count('id');
	// 		}else{
	// 			$count = $model->where($map)->count('id');
	// 		}
	// 		if ($count > 0) {           //总管理员
	// 			//创建分页对象
	// 			$p = new Page($count, 8);
	// 			$limit= $p->firstRow . "," . $p->listRows;
				
	// 			if(!empty($disable)){
	// 				$voList=$model->where(array('disable'=>1))->order('time desc')->limit($limit)->select();
	// 			}else{
	// 				$voList=$model->where($map)->order('time desc')->limit($limit)->select();
	// 			}
	// 			//分页跳转的时候保证查询条件
	// 			foreach ($map as $key => $val) {
	// 				//urlencode编码url字符串
	// 				if (!is_array($val)) {
	// 					$p->parameter .= "$key=" . urlencode($val) . "&";
	// 				}
	// 			}
	// 			foreach ($voList as $key => $value) {
			
	// 				$voList[$key]['number']  = $value['number'].$value['id'];
	// 				$rman = $model->where(array('id'=>$value['recommendID']))->field('name,recommendID,levname')->find();
	// 				$voList[$key]['tname'] = $rman['name'];
	// 				$voList[$key]['tlevname'] = $rman['levname'];
	// 			}
	// 			//*分页显示*
	// 			$page = $p->show();
	// 			$this->page = $page;

	// 			$this->mList = $voList;
	// 			$this->level = $level;
	// 		}
	// 		$this->start = $p->firstRow;
	// 		$this->level = $level;
	// 		$this->level_name=C('LEVEL_NAME');
	// 		$this->level_num=C('LEVEL_NUM');
	// 		$this->pages = ceil($count/8);
	// 		$this->display();
	// 	}else {                      //联盟总代
	// 		//ilyzbs修改开始处
	// 		if ($rs = S($pid)){
	// 			$dis=$rs;
	// 		}else{
	// 			import('Class.Adjust',APP_PATH);
	// 			$pid = session('did');
	// 			$dis = Adjust::findBelow($pid);
	// 			S($pid,$dis,300);
	// 		}
	// 		//ilyzbs修改结束处
	// 		$dist = array();
	// 		foreach($dis as $v) {
	// 			if(!empty($v)) {
	// 				foreach($v as $val) {
	// 					if($val['level'] == $level) {
	// 						$dist[] = $val;
	// 					}
	// 				}
	// 			}
	// 		}
	// 		$count = count($dist);
	// 		$p = new Page($count,8);
	// 		$dist = array_splice($dist,$p->firstRow,$p->listRows);
	// 			foreach ($dist as $key => $value) {
	// 			/*	if(strlen($value['id'])>=4){
	// 					$dist[$key]['number']  = $value['number'].substr($value['id'],4);
	// 				}else{
						
	// 				}*/
	// 				$dist[$key]['number']  = $value['number'].$value['id'];
	// 			}
	// 		$this->mList = $dist;
	// 		$this->page = $p->show();
	// 		$this->level = $level;
	// 		$this->start = $p->firstRow;
	// 		$this->level_name=C('LEVEL_NAME');
	// 		$this->level_num=C('LEVEL_NUM');
	// 		$this->display();
	// 	}

	// }

	//经销商级别升级表单处理
	public function upgrade()
	{
		/*if(!IS_AJAX) {
			halt("页面不存在！");
		}*/
		$d = M('distributor');
		$mid = I('mid');
		$level = I('level');
		$branch = I('branch');
		$type = I('type');
		if($level == 1 && $type == 'up'){
			$managed = 2;
		}else{
			$managed = 0;
		}
		if($type == 'down'){
			$managed = 0;
		}
		//$type = I('type');
		$level_name = C("LEVEL_NAME");
		
		$levname = $level_name[$level];
		$one = $d->field('id,pid,bossname,num,upId')->find($mid);
		if($type == 'up'){
			if($level == 1){
				$bossname = "总部";
			}else{
				$bossname = I('b_name');
			}
			if(empty($bossname)){
				$this->ajaxReturn(array('status' => 3),'json');exit();
			}
			//升级前记住他原本的pid
			if($one['num']>=1 || $one['upId'] != 0){
				$upId = $one['upId'];
				$num = $one['num']+1;
			}else{
				$upId = $one['pid'];
				$num = 1;
			}
			//代理升级后修复关系(修改pid)归原来上级的上级管
			/*$row = $this->repair($mid,$level);
			if($row == 0){
				$mypid = 0;
				$pname = '总部';
			}else if($row == -1){
				$mypid = -1;
				$pname = '-1';
			}else{
				$mypid = $row['id'];
				$pname = $row['name'];
			}*/
			$arr = array(
				'id' => $mid,
				'pid' => I('b_id'),//$mypid
				'level' => $level,
				'levname' => $levname,
				'bossname' => $bossname,
				//'pname' => $pname,
				'managed' => $managed,
				'upId' => $upId,
				'num' => $num
			);
		}else{
			$arr = array(
					'id' => $mid,
					'level' => $level,
					'levname' => $levname,
					//'bossname' => $bossname,
					'managed' => $managed
			);
		}
		if($d->save($arr)){
			if($type == 'up'){
				//ilyzbs修改开始处
				/*$pid = session('did');
				S($pid,NULL);
				//ilyzbs修改结束处
				
				//升级后判定有没代理的upId或downId为自己的id,如果等级比自己低，则重新把这个代理归自己管
				$where = array(
					'upId'=>$one['id'],
					'_logic'=>'or',
					'downId'=>$one['id']
				);
				$up = $d->field('id,level')->where($where)->select();
				if($up){
					foreach ($up as $k=>$v){
						if($v['level']>$level){
							$d->where(array('id'=>$v['id']))->save(array('pid'=>$one['id']));
						}
					}
				}*/
			$signaturea = M('distributor')->where(array('id' => $arr['id']))->find();
			//公众号推送
			$touser = $signaturea['openid'];
			$uName = $signaturea['name'];
			$keyword1 = $signaturea['name'];
			$phone = $signaturea['phone'];
			$bname = $signaturea['bossname'];
			$sendTime = date("Y-m-d H:i:s");
			$template_id = C('SH_MB');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
                'first'=>array('value'=>urlencode("$uName,恭喜你，您升级了！现在等级是".$arr['levname']),'color'=>"#CC0000"),
                'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
                'keyword2'=>array('value'=>urlencode("$phone"),'color'=>'#000'),
                'keyword3'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
                'remark'=>array('value'=>urlencode("加油，为我们的伊蔲兰迪品牌的继续壮大一起努力。"),'color'=>'#CC0000')
            );
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
				$this->ajaxReturn(array('status' => 1),'json');
			}else if($type == 'down'){
				//先升级后降级
				/*if($one['upId'] !=0){
					$upLevel = $d->field("level,name")->find($one['upId']);
					//$upLevel = $d->where(array('id'=>$one['upId']))->getField('level');
					if($upLevel['level']<$level){
						$d->where(array('id'=>$mid))->save(array('pid'=>$one['upId'],'pname'=>$upLevel['name']));
					}
				}*/
				//降级后，把他的下属代理归他的上级管，同时下属代理记住原本的代理id(升级后又归位)
				$map = array(
					'pid'=>$mid,
					'_logic'=>'or',
					'downId'=>$one['id'],
					'_logic'=>'or',
					'upId'=>$one['id']
				);
				$down = $d->field('id,level')->where($map)->select();
				if($down){
					foreach ($down as $key=>$val){
						if($val['level']<=$level){
							$d->where(array('id'=>$val['id']))->save(array('pid'=>$one['pid'],'bossname'=>$one['bossname'],'downId'=>$one['id']));
						}
					}
				}
				$this->ajaxReturn(array('status' => 2),'json');
			}
		} else {
			$this->ajaxReturn(array('status' => 0),'json');
		}
	}

	public function repair($id,$level){
		if($level>1){
			$d = M('distributor');
			$pid = $d->where(array('id'=>$id))->getField('pid');
			$row = $d->field('id,pid,level,name')->where(array('id'=>$pid))->find();
			if(!$row){
				return -1;
			}
			if($row['level']<$level){
				return $row;
			}else{
				return self::repair($row['id'], $level);
			}
		}else{
			return 0;
		}
		
	}
	//总代理申请信息列表
	public function check_agent()
	{
		$applyList = M('distributor')->where(array('managed' => 1))->select();
		foreach ($applyList as $key => $value) {
			/*	if(strlen($value['id'])>=4){
					$applyList[$key]['number']  = $value['number'].substr($value['id'],4);
				}else{
					
				}*/
			$applyList[$key]['number']  = $value['number'].$value['id'];
			
		}
		$this->level_name=C('LEVEL_NAME');
		$this->applyList = $applyList;
		$this->display();
	}
	public function checkagent()
	{
		import('ORG.Util.Page');
		$count = M('distributor')->where(array('audited' => 2))->count('id');
		$p = new Page($count, 10);
		if($count>0){
		$limit= $p->firstRow . "," . $p->listRows;
		
		$applyList = M('distributor')->where(array('audited' => 2))->limit($limit)->select();
			foreach ($applyList as $key => $value) {
				$applyList[$key]['number']  = $value['number'].$value['id'];	
			}
		}
	
		$this->start = $p->firstRow;
		$this->page = $p->show();
		$this->pages = ceil($count/10);
		$this->applyList = $applyList;
		$this->display();
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
	//people number
	public function group(){
		import('ORG.Util.Page');
		$distributor = M('distributor');
		$order = M('order');
		$keywordm = trim(I('keyword'));
		$map = array(
			'wechatnum' => $keywordm,
			'_logic' => 'or',
			'phone' => $keywordm,
			'_logic' => 'or',
			'name' => $keywordm
		);
		$userid = I('userid');
		$level = I('level');
		$condition = array('pid'=>$userid,'level'=>$level);
		$condition1 = array('pid'=>$userid);
		$where = array('level'=>$level);
		$begintime_1 = date("Y-m-d H:i:s",mktime(0, 0 , 0,date("m"),1,date("Y")));
		$endtime_1 = date("Y-m-d H:i:s",mktime(23,59,59,date("m"),date("t"),date("Y")));
		$begintime_1 = strtotime($begintime_1);
		$endtime_1 = strtotime($endtime_1);
		$begintime_2 = strtotime('-2 month');
		$endtime_2 = time();
		$begintime_3 = strtotime('-3 month');
		$endtime_3 = time();
		$hz = I('zz');
		if(!empty($hz) && !empty($userid)){
			$manlist = $this->findrecommendID($userid);
			$manlist[] = array('id'=>$userid);
			foreach ($manlist as $kk=>$mm) {
				$personlist = $distributor->where(array('id'=>$mm['id']))->find();
				$manlist[$kk]['number'] = $personlist['number'];
				$manlist[$kk]['id'] = $personlist['id'];
				$manlist[$kk]['name'] = $personlist['name'];
				$manlist[$kk]['levname'] = $personlist['levname'];
				$manlist[$kk]['phone'] = $personlist['phone'];
				$manlist[$kk]['wechatnum'] = $personlist['wechatnum'];
				$manlist[$kk]['bossname'] = $personlist['bossname'];
				$manlist[$kk]['headimgurl'] = $personlist['headimgurl'];
				$manlist[$kk]['email'] = $personlist['email'];
				$manlist[$kk]['idennum'] = $personlist['idennum'];
				$manlist[$kk]['address'] = $personlist['address'];
				$manlist[$kk]['time'] = $personlist['time'];
				$manlist[$kk]['idennumimg'] = $personlist['idennumimg'];
				$manlist[$kk]['liveimg'] = $personlist['liveimg'];
				$manlist[$kk]['num1']  = $distributor->where(array('pid'=>$mm['id'],'level'=>1))->count('id');
				$manlist[$kk]['num2']  = $distributor->where(array('pid'=>$mm['id'],'level'=>2))->count('id');
				$manlist[$kk]['num3']  = $distributor->where(array('pid'=>$mm['id'],'level'=>3))->count('id');
				$manlist[$kk]['num4']  = $distributor->where(array('pid'=>$mm['id'],'level'=>4))->count('id');
				$manlist[$kk]['num5']  = $distributor->where(array('pid'=>$mm['id'],'level'=>5))->count('id');
				$manlist[$kk]['num6']  = $distributor->where(array('pid'=>$mm['id'],'level'=>6))->count('id');
				$manlist[$kk]['num']  = $manlist[$kk]['num1']+$manlist[$kk]['num2']+$manlist[$kk]['num3']+$manlist[$kk]['num4'];
				$manlist[$kk]['numz']  = count($this->findrecommendID($mm['id']))+1;

			}
			$this->applyList = $manlist;
		}else{
			if(!empty($keywordm)){
				$count = $distributor->where($map)->count('id');
			}else if(!empty($userid) && !empty($level)){
				$count = $distributor->where($condition)->count('id');
			}
			else if(!empty($userid)){
				$count = $distributor->where($condition1)->count('id');
			}
			else{
				$count = $distributor->where($where)->count('id');
			}
			$p = new Page($count, 8);
			if($count>0){
				$limit= $p->firstRow . "," . $p->listRows;
				if(!empty($keywordm)){
					$applyList = $distributor->where($map)->limit($limit)->select();
				}else if(!empty($userid) && !empty($level)){
					$applyList = $distributor->where($condition)->limit($limit)->select();
				}
				else if(!empty($userid)){
					$applyList = $distributor->where($condition1)->limit($limit)->select();
				}
				else{
					$applyList = $distributor->where($where)->limit($limit)->select();
				}

				foreach ($applyList as $key => $value) {
					$applyList[$key]['num1']  = $distributor->where(array('pid'=>$value['id'],'level'=>1))->count('id');
					$applyList[$key]['num2']  = $distributor->where(array('pid'=>$value['id'],'level'=>2))->count('id');
					$applyList[$key]['num3']  = $distributor->where(array('pid'=>$value['id'],'level'=>3))->count('id');
					$applyList[$key]['num4']  = $distributor->where(array('pid'=>$value['id'],'level'=>4))->count('id');
					$applyList[$key]['num5']  = $distributor->where(array('pid'=>$value['id'],'level'=>5))->count('id');
					$applyList[$key]['num6']  = $distributor->where(array('pid'=>$value['id'],'level'=>6))->count('id');
					$applyList[$key]['num']  = $applyList[$key]['num1']+$applyList[$key]['num2']+$applyList[$key]['num3']+$applyList[$key]['num4']+$applyList[$key]['num5']+$applyList[$key]['num6'];
					$applyList[$key]['numz']  = count($this->findrecommendID($value['id']))+1;
			
				}
			}
			$this->applyList = $applyList;
			$this->start = $p->firstRow;
			$this->page = $p->show();
		}
		if(!empty($userid)){
			$this->oneman = $distributor->where(array('id'=>$userid))->field('name,levname,id,number')->find();
		}
		$month['m1'] =date('n');
		$month['m2_start'] = date("Y.m.d",$begintime_2);
		$month['m2_end'] = date("Y.m.d",$endtime_2);
		$month['m3_start'] = date("Y.m.d",$begintime_3);
		$month['m3_end'] = date("Y.m.d",$endtime_3);
		$this->month = $month;
		$this->level_name=C('LEVEL_NAME');
		$this->level_num=C('LEVEL_NUM');
		$this->pages = ceil($count/8);
		$this->level = $level;
		$this->display();
	}

	//performance
	public function groupm()
	{   
		import('ORG.Util.Page');
		$distributor = M('distributor');
		$order = M('orderc');
		$keywordm = trim(I('keyword'));
		$start = I('get.start_time');
		$end = I('get.end_time');
		$start_time = $start ;
		$end_time = $end;
		$start = strtotime($start);
		$end = strtotime($end);
		$end = $end + 3600*24;
		$field = "id,name,level,levname,pid,recommendID,wechatnum,phone,email,idennum,address,time,bossname,headimgurl,idennumimg,liveimg,number,end_time,start_time";
		if ($start && $end) {
			$condition['time'] = array('between',array($start,$end));
		}
		if ($keywordm) {
			$map['wechatnum|phone|phone'] = $keywordm;
		}
		$userid = I('userid');
		$level = I('level');
		$map['level'] = $level;
		$dinstinction = I('dinstinction');
		$condition = array('pid'=>$userid,'level'=>$level);
		$condition1 = array('pid'=>$userid);
		$where = array('level'=>$level);
		$begintime_1 = date("Y-m-d H:i:s",mktime(0, 0 , 0,date("m"),1,date("Y")));
		$endtime_1 = date("Y-m-d H:i:s",mktime(23,59,59,date("m"),date("t"),date("Y")));
		$begintime_1 = strtotime($begintime_1);
		$endtime_1 = strtotime($endtime_1);
		$begintime_2 = strtotime('-2 month');
		$endtime_2 = time();
		$begintime_3 = strtotime('-3 month');
		$endtime_3 = time();
		$hz = I('zz');
		if(!empty($hz) && !empty($userid)){
			$manlist = $this->findrecommendID($userid);
			$manlist[] = array('id'=>$userid);
			foreach ($manlist as $kk=>$mm) {
				$personlist = $distributor->where(array('id'=>$mm['id']))->find();
				$manlist[$kk]['number'] = $personlist['number'];
				$manlist[$kk]['id'] = $personlist['id'];
				$manlist[$kk]['name'] = $personlist['name'];
				$manlist[$kk]['levname'] = $personlist['levname'];
				$manlist[$kk]['phone'] = $personlist['phone'];
				$manlist[$kk]['wechatnum'] = $personlist['wechatnum'];
				$manlist[$kk]['bossname'] = $personlist['bossname'];
				$manlist[$kk]['headimgurl'] = $personlist['headimgurl'];
				$manlist[$kk]['email'] = $personlist['email'];
				$manlist[$kk]['idennum'] = $personlist['idennum'];
				$manlist[$kk]['address'] = $personlist['address'];
				$manlist[$kk]['time'] = $personlist['time'];
				$manlist[$kk]['idennumimg'] = $personlist['idennumimg'];
				$manlist[$kk]['liveimg'] = $personlist['liveimg'];
				$manlist[$kk]['num1']  = $distributor->where(array('pid'=>$mm['id'],'level'=>1))->count('id');
				$manlist[$kk]['num2']  = $distributor->where(array('pid'=>$mm['id'],'level'=>2))->count('id');
				$manlist[$kk]['num3']  = $distributor->where(array('pid'=>$mm['id'],'level'=>3))->count('id');
				$manlist[$kk]['num4']  = $distributor->where(array('pid'=>$mm['id'],'level'=>4))->count('id');
				$manlist[$kk]['num5']  = $distributor->where(array('pid'=>$mm['id'],'level'=>5))->count('id');
				$manlist[$kk]['num6']  = $distributor->where(array('pid'=>$mm['id'],'level'=>6))->count('id');
				$manlist[$kk]['num']  = $manlist[$kk]['num1']+$manlist[$kk]['num2']+$manlist[$kk]['num3']+$manlist[$kk]['num4'];
				$manlist[$kk]['numz']  = count($this->findrecommendID($mm['id']))+1;
				$manlist[$kk]['total_price_1'] = $order->where(array('user_id'=>$value['id'],'status'=>array('egt',1),'time'=>array('between',array($begintime_1,$endtime_1))))->group('order_num')->sum('total_price');
				$manlist[$kk]['total_price_2'] = $order->where(array('user_id'=>$value['id'],'status'=>array('egt',1),'time'=>array('between',array($begintime_2,$endtime_2))))->group('order_num')->sum('total_price');
				$manlist[$kk]['total_price_3'] = $order->where(array('user_id'=>$value['id'],'status'=>array('egt',1),'time'=>array('between',array($begintime_3,$endtime_3))))->group('order_num')->sum('total_price');
				if(empty($manlist[$kk]['total_price_1'])){
					$manlist[$kk]['total_price_1']=0;
				}
				if(empty($manlist[$kk]['total_price_2'])){
					$manlist[$kk]['total_price_2']=0;
				}
				if(empty($manlist[$kk]['total_price_3'])){
					$manlist[$kk]['total_price_3']=0;
				}
			}
			$this->applyList = $manlist;
		}else{
			$count = $distributor->where($map)->count('id');
			$p = new Page($count, 6);
			if($count>0){
				$limit= $p->firstRow . "," . $p->listRows;
				$applyList = $distributor->where($map)->field($field)->limit($limit)->select();
				foreach ($applyList as $key => $value) {
					if(!empty($start)){
						$orderlist_1 = $order->where(array('user_id'=>$value['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->field('total_num,total_price')->group('order_num')->select();
					}else{
						$orderlist_1 = $order->where(array('user_id'=>$value['id'],'status'=>array('gt',1)))->field('total_num,total_price')->group('order_num')->select();
					}
					$total_num_1 = 0;
					$total_num_2 = 0;
					$total_num = 0;
					$total_price_1 = 0;
					$total_price_2 = 0;
					$total_price = 0;
					foreach ($orderlist_1 as $val1) {
						$total_num_1 = $total_num_1+$val1['total_num'];
						$total_price_1 = $total_price_1+$val1['total_price'];
					}
					$direction_man = $distributor->where(array('pid'=>$value['id']))->field('id')->select();
					foreach ($direction_man as $derect) {
						if(!empty($start)){
							$orderlist_2 = $order->where(array('user_id'=>$derect['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->field('total_num,total_price')->group('order_num')->select();
						}else{
							$orderlist_2 = $order->where(array('user_id'=>$derect['id'],'status'=>array('gt',1)))->field('total_num,total_price')->group('order_num')->select();
						}
						foreach ($orderlist_2 as $val2) {
							$total_num_2 = $total_num_2+$val2['total_num'];
							$total_price_2 = $total_price_2+$val2['total_price'];
						}
					}
					$total_num_2 = $total_num_1+$total_num_2;
					$total_price_2 = $total_price_1+$total_price_2;
					$mids = $this->findrecommendID($value['id']);
					$mids[]=array('id'=>$value['id']);
					foreach ($mids as $bb) {
						if(!empty($start)){
							$orderlistmm = $order->where(array('user_id'=>$bb['id'],'status'=>array('gt',1),'time'=>array('between',array($start,$end))))->group('order_num')->field('total_num,total_price')->select();
						}else{
							$orderlistmm = $order->where(array('user_id'=>$bb['id'],'status'=>array('gt',1)))->group('order_num')->field('total_num,total_price')->select();
						}					
						foreach ($orderlistmm as $zz) {
							$total_price = $total_price + $zz['total_price'];
							$total_num = $total_num + $zz['total_num'];
						}						
					}
					$applyList[$key]['total_num_1'] = $total_num_1;
					$applyList[$key]['total_num_2'] = $total_num_2;
					$applyList[$key]['total_price_1'] = $total_price_1;
					$applyList[$key]['total_price_2'] = $total_price_2;
					$applyList[$key]['total_price'] = $total_price;
					$applyList[$key]['total_num'] = $total_num;
					$applyList[$key]['start_time'] = $start_time;
					$applyList[$key]['end_time'] = $end_time;
				}
			}
			$this->applyList = $applyList;
			$this->start = $p->firstRow;
			$this->page = $p->show();
		}
		$this->level = $level;
		$this->keywordm = $keywordm;
		$this->start_time = I('get.start_time');
		$this->end_time = I('get.end_time');

		if($dinstinction==2){
			$applyExcle = $distributor->where($map)->field($field)->select();
			$xlsCell  = array(
				array('name','姓名'),
				array('bossname','上级名称'),
				array('total_num_1','个人业绩（产品总数'),
				array('total_price_1','个人业绩（订单总额'),
				array('total_num_2','个人加直属（产品总数'),
				array('total_price_2','个人加直属（订单总额'),
				array('total_num','团队业绩（产品总数）'),
				array('total_price','团队业绩（订单总额'),
				array('start_time','开始时间'),
				array('end_time','结束时间'),
			);
			$xlsName = '订单表';
			$this->exportExcel($xlsName,$xlsCell,$applyExcle);	
		}else{
			if(!empty($userid)){
				$this->oneman = $distributor->where(array('id'=>$userid))->field('name,levname,id,number')->find();
			}
			$month['m1'] =date('n');
			$month['m2_start'] = date("Y.m.d",$begintime_2);
			$month['m2_end'] = date("Y.m.d",$endtime_2);
			$month['m3_start'] = date("Y.m.d",$begintime_3);
			$month['m3_end'] = date("Y.m.d",$endtime_3);
			$this->month = $month;
			$this->level_name=C('LEVEL_NAME');
			$this->level_num=C('LEVEL_NUM');
			$this->pages = ceil($count/6);
			$this->display();
		}		
	}
	//总代理申请审核
	public function audit()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		vendor("phpqrcode.phpqrcode");

		$mids = I('mids');
		$mids = substr($mids,1);
		$managers = explode('_',$mids);
		$field = 'id,recommendID,level';
		$distributor = M('distributor');
		foreach($managers as $m) {

			$signature = $distributor->where(array('id' => $m))->find();
			$location = $signature['signature'];

			if($location == NULL) {   //若没名片则生成名片
				$appid = C('APP_ID');
				$callback = 'http://'.C('YM_DOMAIN').'/index.php/Admin/Signature/getsign';
				$text="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" . $appid . "&redirect_uri=" . urlencode($callback) . "&response_type=code&scope=snsapi_base&state=" . $m . "#wechat_redirect";
				$level = "L";
				$size = "10";
				$location = __ROOT__ . '/signatures/' . $m . '.png';
				$url = './signatures/' . $m . '.png';
				//生成图片
				QRcode::png($text,$url,$level,$size);
			}
			$arr = array(
				'id' => $m,
				'managed' => 2,
				'audited' => 1,
				'signature' => $location,
				);
			$distributor->save($arr);
			$signaturea = $distributor->where(array('id' => $m))->find();
			//公众号推送
			$touser = $signaturea['openid'];
			$uName = $signaturea['name'];
			$keyword1 = $signaturea['name'];
			$phone = $signaturea['phone'];
			$bname = $signaturea['bossname'];
			$sendTime = date("Y-m-d H:i:s");
			$template_id = C('SH_MB');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
                'first'=>array('value'=>urlencode("$uName,你的伊蔲兰迪微商控价系统代理审核成功！"),'color'=>"#CC0000"),
                'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
                'keyword2'=>array('value'=>urlencode("$phone"),'color'=>'#000'),
                'keyword3'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
                'remark'=>array('value'=>urlencode("欢迎您加入伊蔲兰迪微商控价系统。你的直属上级:".$bname."。"),'color'=>'#CC0000')
            );
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
			//推荐人的返利
			/*if($signaturea['recommendID'] != 0 && $signaturea['level'] == 1){
				$recommend = M('recommend_rebate');
				$a = M('returnrate')->where(array('id' => 3))->find();
				$le = $distributor->field($field)->where(array('id' => $signaturea['recommendID']))->find();
				if($le['level'] == 1){
					$add = array(
						'user_id' => $le['id'],
						'x_id' => $signaturea['id'],
						'time' => time(),
						'money' => $a['remoney1'],
						'status' => 0
					);
					$recommend->add($add);
					if($le['recommendID'] != 0){
						$lee = $distributor->field($field)->where(array('id' => $le['recommendID']))->find();
						if($lee['level'] == 1){
							$addtwo = array(
								'user_id' => $lee['id'],
								'x_id' => $signaturea['id'],
								'time' => time(),
								'money' => $a['remoney'],
								'status' => 0
							);
							$recommend->add($addtwo);
						}
					}
				}
			}*/
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	//总代理单个申请审核
	public function oneaudit()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		vendor("phpqrcode.phpqrcode");

		$m = I('mids');
		$field = 'id,recommendID,level';
		$distributor = M('distributor');
			$signature = $distributor->where(array('id' => $m))->find();
			$location = $signature['signature'];

			if($location == NULL) {   //若没名片则生成名片
				$appid = C('APP_ID');
				$callback = 'http://'.C('YM_DOMAIN').'/index.php/Admin/Signature/getsign';
				$text="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" . $appid . "&redirect_uri=" . urlencode($callback) . "&response_type=code&scope=snsapi_base&state=" . $m . "#wechat_redirect";
				$level = "L";
				$size = "10";
				$location = __ROOT__ . '/signatures/' . $m . '.png';
				$url = './signatures/' . $m . '.png';
				//生成图片
				QRcode::png($text,$url,$level,$size);
			}
			$arr = array(
				'id' => $m,
				'managed' => 2,
				'audited' => 1,
				'signature' => $location,
				);
			$distributor->save($arr);
			$signaturea = $distributor->where(array('id' => $m))->find();
			//公众号推送
			$touser = $signaturea['openid'];
			$uName = $signaturea['name'];
			$keyword1 = $signaturea['name'];
			$phone = $signaturea['phone'];
			$bname = $signaturea['bossname'];
			$sendTime = date("Y-m-d H:i:s");
			$template_id = C('SH_MB');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
		            'first'=>array('value'=>urlencode("$uName,你的伊蔲兰迪微商控价系统代理审核成功！"),'color'=>"#CC0000"),
		            'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
		            'keyword2'=>array('value'=>urlencode("$phone"),'color'=>'#000'),
		            'keyword3'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
		            'remark'=>array('value'=>urlencode("欢迎您加入伊蔲兰迪微商控价系统。你的直属上级:".$bname."。"),'color'=>'#CC0000')
	            );
			import('ORG.Net.OrderPush');
			$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
			
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');
			//推荐人的返利
			/*if($signaturea['recommendID'] != 0 && $signaturea['level'] == 1){
				$recommend = M('recommend_rebate');
				$a = M('returnrate')->where(array('id' => 3))->find();
				$le = $distributor->field($field)->where(array('id' => $signaturea['recommendID']))->find();
				if($le['level'] == 1){
					$add = array(
						'user_id' => $le['id'],
						'x_id' => $signaturea['id'],
						'time' => time(),
						'money' => $a['remoney1'],
						'status' => 0
					);
					$recommend->add($add);
					if($le['recommendID'] != 0){
						$lee = $distributor->field($field)->where(array('id' => $le['recommendID']))->find();
						if($lee['level'] == 1){
							$addtwo = array(
								'user_id' => $lee['id'],
								'x_id' => $signaturea['id'],
								'time' => time(),
								'money' => $a['remoney'],
								'status' => 0
							);
							$recommend->add($addtwo);
						}
					}
				}
			}*/
		$this->ajaxReturn(array('status' => 1),'json');
	}
	//勾选代理旗下代理审核
	public function qtaudit()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		vendor("phpqrcode.phpqrcode");

		$mids = I('mids');
		$mids = substr($mids,1);
		$managers = explode('_',$mids);
		$returnrate = M('returnrate');
		$recommend = M('recommend_rebate');
		$distributor = M('distributor');
		import('ORG.Net.OrderPush');
		$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
		foreach($managers as $m){
			$distributor->where(array('id' => $m))->setField('audited',1);
			$signaturea = M()->query("select A.openid as openid,B.openid as bopenid,A.name as name,A.phone as phone,A.bossname as bossname from distributor A,distributor B where A.pid = B.id and A.id = $m");
			//公众号推送
			$touser = $signaturea['openid'];
			$touser1 = $signaturea['bopenid'];
			$uName = $signaturea['name'];
			$keyword1 = $signaturea['name'];
			$phone = $signaturea['phone'];
			$bname = $signaturea['bossname'];
			$sendTime = date("Y-m-d H:i:s");
			$template_id = C('SH_MB');
			$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
			$sendData = array(
		            'first'=>array('value'=>urlencode("$uName,你的伊蔲兰迪微商控价系统代理审核成功！"),'color'=>"#CC0000"),
		            'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
		            'keyword2'=>array('value'=>urlencode("$phone"),'color'=>'#000'),
		            'keyword3'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
		            'remark'=>array('value'=>urlencode("欢迎您加入伊蔲兰迪微商控价系统。你的直属上级:".$bname."。"),'color'=>'#CC0000')
        		);
			$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');

			$sendData['first'] = array('value'=>urlencode("$bname,你的旗下代理通过总部审核！"),'color'=>"#CC0000");
			$sendData['remark'] = urlencode("携手Ecolady继续加油，共创更好明天！"),'color'=>'#CC0000');
			$sendMsg->doSend($touser1,$template_id,$url, $sendData, $topcolor = '#7B68EE');
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	//单个代理旗下代理审核
	public function oneqtaudit()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}

		vendor("phpqrcode.phpqrcode");

		$m = I('mids');
		$returnrate = M('returnrate');
		$recommend = M('recommend_rebate');
		$distributor = M('distributor');

		$distributor->where(array('id' => $m))->setField('audited',1);		
		$signaturea = M()->query("select A.openid as openid,B.openid as bopenid,A.name as name,A.phone as phone,A.bossname as bossname from distributor A,distributor B where A.pid = B.id and A.id = $m");
		//公众号推送
		$touser = $signaturea['openid'];
		$touser1 = $signaturea['bopenid'];
		$uName = $signaturea['name'];
		$keyword1 = $signaturea['name'];
		$phone = $signaturea['phone'];
		$bname = $signaturea['bossname'];
		$sendTime = date("Y-m-d H:i:s");
		$template_id = C('SH_MB');
		$url = "http://".C('YM_DOMAIN')."/index.php/Admin/";
		$sendData = array(
	            'first'=>array('value'=>urlencode("$uName,你的伊蔲兰迪微商控价系统代理审核成功！"),'color'=>"#CC0000"),
	            'keyword1'=>array('value'=>urlencode("$keyword1"),'color'=>'#000'),
	            'keyword2'=>array('value'=>urlencode("$phone"),'color'=>'#000'),
	            'keyword3'=>array('value'=>urlencode("$sendTime"),'color'=>'#000'),
	            'remark'=>array('value'=>urlencode("欢迎您加入伊蔲兰迪微商控价系统。你的直属上级:".$bname."。"),'color'=>'#CC0000')
            );
		import('ORG.Net.OrderPush');
		$sendMsg = new OrderPush(C('APP_ID'),C('APP_SECRET'));
		$sendMsg->doSend($touser, $template_id, $url, $sendData, $topcolor = '#7B68EE');

		$sendData['first'] = array('value'=>urlencode("$bname,你的旗下代理通过总部审核！"),'color'=>"#CC0000");
		$sendData['remark'] = urlencode("携手Ecolady继续加油，共创更好明天！"),'color'=>'#CC0000');
		$sendMsg->doSend($touser1,$template_id,$url, $sendData, $topcolor = '#7B68EE');
		$this->ajaxReturn(array('status' => 1),'json');
	}

	//删除联盟总代
	public function delete()
	{
		if(!IS_AJAX) {
			halt('页面不存在！');
		}
		$mids = I('mids');
		$mids = substr($mids,1);
		$managers = explode('_',$mids);
		foreach($managers as $m) {
			M('distributor')->where(array('id' => $m))->delete();
		}
		$this->ajaxReturn(array('status' => 1),'json');
	}
	public function onedel(){
		if(!IS_AJAX) {
			halt('页面不存在！');
		}
		$i = M('distributor')->where(array('id' => $_POST['id']))->delete();
		if($i){
			$this->ajaxReturn(array('status' => 1),'json');
		}
		
	}
	//删除代理
	public function del(){
		$model = M('distributor');
		$order = M('order');
		$recommend_rebate = M('recommend_rebate');
		$rebate = M('rebate');
		$rerebate = M('rerebate');
		$id = I('get.id');
		$where['id']=$id;
		$row = $model->field('pid,name')->where($where)->find();
		$pname = $model->where(array('id'=>$row['pid']))->getField('name');
		if($row){
			$data = array(
				'pid' => $row['pid'],
				'bossname' => $pname,
				'pname' => $pname,
				'recommendID' => 0
			);
			$model->where(array('pid' => $id))->save($data);
		}
		$flag=$model->where($where)->delete();
		//查看订单是否存在相关信息
		$arr['user_id']=$id;
		$orrow = $order->where($arr)->limit(1)->select();
		if($orrow){
			$order->where($arr)->delete();
		}
		//查看推荐返利是否存在相关信息
		$rererow = $recommend_rebate->where($arr)->limit(1)->select();
		if($rererow){
			$recommend_rebate->where($arr)->delete();
			//查看推荐人下单返利是否存在相关信息
			$lirow = $rerebate->where($arr)->limit(1)->select();
			if($lirow){
				$rerebate->where($arr)->delete();
			}
		}
		$rearr['x_id']=$id;
		$rererowone = $recommend_rebate->where($rearr)->limit(1)->select();
		if($rererowone){
			$recommend_rebate->where($rearr)->delete();
		}
		//查看下单返利是否存在相关信息
		$rerow = $rebate->where($arr)->limit(1)->select();
		if($rerow){
			$rebate->where($arr)->delete();
		}
		//$this->display();
		if($flag){
			$this->success('删除成功');
			echo "<script>window.parent.frames['leftFrame'].location.reload();</script>";
		}else {
			$this->error('删除失败');
		}
	}
	//搜索
	public function search(){
		import('ORG.Util.Page');
		if(!empty($_POST['id'])) {
			$id = $_POST['id'];
		} else if(!empty($_GET['id'])) {
			$id = $_GET['id'];
		}
		if(!empty($_POST['keyword'])) {
			$keyword = $_POST['keyword'];
		} else if(!empty($_GET['keyword'])) {
			$keyword = $_GET['keyword'];
		}
		$level = I('level');
		$map['level'] = array('eq',"$level");
		$keywordm = I('keywordm');
		$did = session("did");
		if($id == 1) {      //搜索代理商
			if(empty($keyword)){
					$map = array(
					'wechatnum' => $keywordm,
					'_logic' => 'or',
					'phone' => $keywordm,
					'_logic' => 'or',
					'name' => $keywordm
				);
				}else{
					$map['id'] = $keyword;
				}
				$row = M('Distributor')->where($map)->select();
				foreach ($row as $key => $value) {
					$row[$key]['number']  = $value['number'].$value['id'];
					$rman = M('Distributor')->where(array('id'=>$value['recommendID']))->field('name,recommendID,levname')->find();
					$row[$key]['tname'] = $rman['name'];
					$row[$key]['tlevname'] = $rman['levname'];
				}
				$this->dist = $row['name'];
				$this->dista = $keyword;
				if($did != 0){
					if($rs = S($did)){
						foreach ($rs as $v){
							foreach ($v as $val){
								if($val['name'] == $row[0]['name'] && $val['phone'] == $row[0]['phone'] && $val['wechatnum'] == $row[0]['wechatnum']){
									$flag = true;
								}
							}
						}
					}else{
						$pid = $row[0]['pid'];
						$flag = $this->sonTree($pid,$did);
						$flag = session('flag');
					}
					if($flag !== true){
						$row = "";
					}
				}
		}else if($id == 3){
			$this->addr = $keyword;
			$map['address'] = array('like',"%$keyword%");
			$list = M('Distributor')->where($map)->select();
			if(is_array($list)){
				$row = M('Distributor')->field($field)->where($map)->select();
					foreach ($row as $key => $value) {
					$row[$key]['number']  = $value['number'].$value['id'];
					$rman = M('Distributor')->where(array('id'=>$value['recommendID']))->field('name,recommendID,levname')->find();
					$row[$key]['tname'] = $rman['name'];
					$row[$key]['tlevname'] = $rman['levname'];
				}
			}else{
				$row = "";
			}
		}else{//搜索审核人
			$this->audit = $keyword;
			$map = array(
					'name' => $keyword,
					'_logic' => 'or',
					'phone' => $keyword,
					'_logic' => 'or',
					'wechatnum' => $keyword
			);
			$list = M('Distributor')->where($map)->select();
			if($did != 0){
				if($rs = S($did)){
					foreach ($rs as $v){
						foreach ($v as $val){
							if($val['pname'] == $list[0]['name']){
								$flag = true;
							}
						}
					}
				}else{
					$pid = $list[0]['pid'];
					$flag = $this->sonTree($pid,$did);
					$flag = session('flag');
				}
				if($flag !== true){
					$list = "";
				}
				
			}
			if(is_array($list)){
				$row = M('Distributor')->field($field)->where(array('pname' => $list[0]['name']))->select();
					foreach ($row as $key => $value) {
					$row[$key]['number']  = $value['number'].$value['id'];
					$rman = M('Distributor')->where(array('id'=>$value['recommendID']))->field('name,recommendID,levname')->find();
					$row[$key]['tname'] = $rman['name'];
					$row[$key]['tlevname'] = $rman['levname'];
				}
			}else{
				$row = "";
			}
		}
		$count = count($row);
		$p = new Page($count,8);
		$row = array_splice($row,$p->firstRow,$p->listRows);
		$this->start = $p->firstRow;
		$this->page = $p->show();
		$this->row = $row;
		$this->level_name=C('LEVEL_NAME');
		$this->level_num=C('LEVEL_NUM');
		$this->display();
	}
	//查找代理是否属于当前联盟总代
	public function sonTree($pid,$did){
		$row = M('Distributor')->field('id,pid')->where(array('id' => $pid))->find();
		if(!empty($row)){
			if($row['id'] != $did){
				self::sonTree($row['pid'], $did);
			}else{
				session('flag',true);
				return true;
			}
		}else{
			session('flag',false);
			return false;
		}
	}
	
	//编辑代理
	public function edit(){
		$id = I('id');
		$field = "id,name,wechatnum,phone,email,idennum,address,number,start_time,end_time,time";
		$row = M('distributor')->field($field)->where(array('id' => $id))->find();
		if(empty($row['start_time'])){
			$row['start_time'] = $row['time'];
		}
		if(empty($row['end_time'])){
			$row['end_time'] = $row['time']+60*60*24*365;
		}
		$row['start_time'] = date("Y-m-d",$row['start_time']);
		$row['end_time'] = date("Y-m-d",$row['end_time']);
		$this->vo = $row;
		$this->display();
	}
	
	public function update(){
		$_POST['start_time'] = strtotime($_POST['start_time']);
		$_POST['end_time'] = strtotime($_POST['end_time']);
		$model = M('distributor');
		if(false == $model->create()){
			$this->error($model->getError());
		}
		if($model->save()){
			$this->success('编辑成功',U(GROUP_NAME . '/Manager/index',array('level' => 1)),1);

		}else{
			$this->error('编辑失败');
		}
	}
	public function xgmm(){
		$password = md5(123456);
		$data['password'] = $password;
		$save = M('distributor')->where(array('id'=>I('post.id')))->save($data);
		if($save){
			$this->ajaxReturn('1','JSON');
		}else{
			$this->ajaxReturn('2','JSON');
		}
	}
	//树形图
	public function tree()
	{
		$condition = array(
			"pid"=>0
		);
		$row = M('distributor')->where($condition)->select();
		foreach($row as $k => $v){
			$row[$k]['count'] = M('distributor')->where(array('pid' => $row[$k]['id']))->count();
		}
		$this->row = $row;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
	//搜索代理树
	public function searchTreeOne(){
		$receive_id = I('receive_id');
		if ($receive_id) {
			$condition = array(
				"id"=>I('receive_id')
			);
			$row = M('distributor')->where($condition)->find();
			$row['count'] = M('distributor')->where(array('pid' => $row['id']))->count();
			$this->managerOne = $row;
			$this->receive_id = I('receive_id');
		} else {
			$condition = array(
				"pid"=>0
			);
			$row = M('distributor')->where($condition)->select();
			foreach($row as $k => $v){
				$row[$k]['count'] = M('distributor')->where(array('pid' => $row[$k]['id']))->count();
			}
			$this->row = $row;
		}
		
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display('tree');
	}
	public function treeb()
	{
		$condition = array(
			"pid"=>0,
			"branch"=>2
		);
		$row = M('distributor')->where($condition)->select();
		foreach($row as $k => $v){
			$row[$k]['count'] = M('distributor')->where(array('pid' => $row[$k]['id']))->count();
		}
		$this->row = $row;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
	//查找下属
	public function treedirect(){
		$id = I('post.mid');
		$condition = array(
			"pid"=>$id
		);
		$distributor = M('distributor');
		$cont = $distributor->where($condition)->count();
		if($cont == 0){
			$this->ajaxReturn(1,'JSON');
		}
		$list = $distributor->where($condition)->order('level asc')->select();
		foreach($list as $k => $v){
			$list[$k]['count'] = M('distributor')->where(array('pid' => $list[$k]['id']))->count();
		}
		$this->ajaxReturn($list,'JSON');
	}
	//转移代理
	public function transmit(){
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
	public function replace(){
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
		public function referrer(){
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
	public function transmitb(){
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME_B');
		$this->display();
	}
	public function replaceb(){
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME_B');
		$this->display();
	}
	//转移下级经销商处理
	public function setup(){
		$o_id = I('post.o_id');
		$user_id = I('post.user_id');
		$distributor = M('distributor');
		$o_name = I('post.o_name');
		$user_name = I('post.user_name');
		$list = $distributor->where(array('id'=>$user_id))->field('tallestID')->find();
		$where = array(
			'pid' => $o_id,
			'bossname' => $o_name,
			'audited' => 1
		);
		$arr = array(
			'tallestID' => $list['tallestID'],
			'pid' => $user_id,
			'bossname' => $user_name
		);
		$pd = $distributor->where($where)->save($arr);
		if($pd){
			$this->ajaxReturn('1','json');
		}else{
			$this->ajaxReturn('2','json');
		}

	}
	//替换上级
	public function setupone(){
		$o_id = I('post.o_id');
		$user_id = I('post.user_id');
		$distributor = M('distributor');
		$o_name = I('post.o_name');
		$user_name = I('post.user_name');
		$list = $distributor->where(array('id'=>$user_id))->field('tallestID')->find();
		$where = array(
			'id' => $o_id,
			'name' => $o_name,
			'audited' => 1
		);

		$arr = array(
			'pid' => $user_id,
			'bossname' => $user_name
		);
		if($list['tallestID']==0){
			$arr['tallestID']=$user_id;
		}else{
			$arr['tallestID']=$list['tallestID'];
		}
		if($distributor->where($where)->save($arr)){
			$this->ajaxReturn('1','json');
		}else{
			$this->ajaxReturn('2','json');
		}
	}
	//改变招募状态
	public function zstatu(){
		$data['statu'] = I('post.statu');
		M('distributor')->where(array('id'=>I('post.id')))->save($data);
		if($data['statu'] == 1){
			$this->ajaxReturn('0','JSON');
		}else{
			$this->ajaxReturn('1','JSON');
		}
	}
	//禁用状态
	public function disable(){
		$data['disable'] = I('post.disable');
		M('distributor')->where(array('id'=>I('post.id')))->save($data);
		if($data['disable'] == 1){
			$this->ajaxReturn(1,'JSON');
		}else{
			$this->ajaxReturn(0,'JSON');
		}
	}

	public function detail(){
			$id=I('get.id');
			$manager = M('distributor')->where(array('id' => $id))->find();
			$most = M('distributor')->where(array('id' => $manager['tallestID']))->field('id','tallestID','name')->find();
			if(empty($most)){
				$manager['man'] = '总部';
			}else{
				$manager['man'] = $most['name'];
			}
			$manager['number']  = $manager['number'].$manager['id'];
			$manager['count1'] = M('distributor')->where(array('pid' => $manager['id']))->count('id');
			$manager['count2'] = M('distributor')->where(array('pid' => $manager['id'],'level'=>2))->count('id');
			$manager['count3'] = M('distributor')->where(array('pid' => $manager['id'],'level'=>3))->count('id');
			$manager['count4'] = M('distributor')->where(array('pid' => $manager['id'],'level'=>4))->count('id');
			$manager['count5'] = M('distributor')->where(array('pid' => $manager['id'],'level'=>5))->count('id');
			$manager['count6'] = M('distributor')->where(array('pid' => $manager['id'],'level'=>6))->count('id');
			
			$manager['count10'] = M('distributor')->where(array('recommendID' => $manager['id']))->count('id');
			$manager['count11'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>1))->count('id');
			$manager['count12'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>2))->count('id');
			$manager['count13'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>3))->count('id');
			$manager['count14'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>4))->count('id');
			$manager['count15'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>5))->count('id');
			$manager['count16'] = M('distributor')->where(array('recommendID' => $manager['id'],'level'=>6))->count('id');

			$manager['counta'] = M('order')->where(array('user_id'=>$manager['id'],'status'=>3))->count('distinct order_num');
			$manager['countb'] = M('order')->where(array('o_id'=>$manager['id'],'status'=>3))->count('distinct order_num');
			if(empty($manager['start_time'])){
			$manager['start_time'] = $manager['time'];
			}
			if(empty($manager['end_time'])){
			$manager['end_time'] = $manager['time']+3600*24*365;
			}
			$this->manager = $manager;
			$this->level_num=C('LEVEL_NUM');
			$this->level_name=C('LEVEL_NAME');
			$this->display();
		}
		public function number(){
			$vo = M('theme')->where(array('id'=>1))->find();
			$this->assign('vo',$vo);
			$this->display();
		}
		public function allTheame(){
			$this->display();
		}
		public function oneTheame(){
			$vo = M('theme')->where(array('id'=>1))->find();
			$this->assign('vo',$vo);
			$this->display('');
		}
		public function updateOneTheme(){
			$a = trim(I('number'));
			if(empty($a)){
				$this->error('不能留空');
			}
			$res = M('theme')->where(array('id'=>1))->setField('theme',$a);
			if($res){
				$this->ajaxReturn('1','json');
			}else{
				$this->ajaxReturn('0','json');
			}
		}
		public function updateAllTheme(){
			$a = trim(I('number'));
				if(empty($a)){
				$this->error('不能留空');
			}
			$res = M('distributor')->where(1)->setField('number',$a);
			if($res){
				$this->ajaxReturn('1','json');
			}else{
				$this->ajaxReturn('0','json');
			}
			
		}
	public function changereferer(){
		$o_id = I('post.o_id');
		$user_id = I('post.user_id');
		$distributor = M('distributor');
		$receive_id = I('post.receive_id');
		$receive_id2 = I('post.receive_id2');
		if(!empty($o_id)){
		$where = array('id' => $o_id,'audited' => 1);
		if(empty($user_id)){
			$this->ajaxReturn('2','json');
			exit();
		}
		$arr = array('recommendID' => $user_id);
	}else{
		$where = array('id' => $receive_id,'audited' => 1);
		if(empty($receive_id2)){
			$this->ajaxReturn('2','json');
			exit();
		}
		$arr = array('recommendID' => $receive_id2);

	}
	if($distributor->where($where)->save($arr)){
			$this->ajaxReturn('1','json');
		}else{
			$this->ajaxReturn('2','json');
		}
	}
	//代理之间关系树形图
	public function stree()
	{
		$distributor = M('distributor');
		$map['pid'] = 0;
		$list = $distributor->where($map)->field('id')->select();
		$otherlev = array();
		foreach ($list as $key => $value) {
			$otherlev[] = $value['id'];
		}
		$otherlev[] = 0;
		$condition['pid'] = array('in',$otherlev);
		$condition['audited'] = 1;
		$condition['disable'] = 0;
		
		$row = $distributor->where($condition)->field('name,id,level')->select();
		foreach($row as $k => $v){
			$row[$k]['count'] = $distributor->where(array('pid' => $row[$k]['id'],'disable'=>0,'audited'=>1))->count('id');
			$team = $this->getRecommends($v['id']);
			$row[$k]['team'] = explode(',', $team);
			$row[$k]['team'] = array_filter($row[$k]['team']);
			$row[$k]['num'] = count($row[$k]['team']);
		}
		$this->row = $row;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}
	//最高级查找下属
	public function streedirect(){
		$id = I('post.mid');
		$condition = array(
			"pid"=>$id,
			'disable'=>0,
			'audited'=>1
		);
		$distributor = M('distributor');
		$cont = $distributor->where($condition)->count();
		if($cont == 0){
			$this->ajaxReturn(1,'JSON');
		}
		$list = $distributor->where($condition)->select();
		foreach($list as $k => $v){
			$list[$k]['count'] = M('distributor')->where(array('pid' => $list[$k]['id'],'disable'=>0,'audited'=>1))->count('id');
			$team = $this->getRecommends($v['id']);
			$list[$k]['team'] = explode(',', $team);
			$list[$k]['team'] = array_filter($list[$k]['team']);
			$list[$k]['num'] = count($list[$k]['team']);
		}
		$this->ajaxReturn($list,'JSON');
	}
    //个人详情
	public function persondetail(){
		$id = I('id');
		$row = M('distributor')->where(array('id' => $id))->find();
		$row['number']  = $row['number'].$row['id'];
		if(empty($row['start_time'])){
			$row['start_time'] = $row['time'];
		}
		if(empty($row['end_time'])){
			$row['end_time'] = $row['time']+60*60*24*365;
		}
		$row['time'] = date("Y.m.d", $row['start_time']).'<br/>'.date("Y.m.d", $row['end_time']);
		$this->ajaxReturn($row,'JSON');
	}
	//最高级个人详情
	public function spersondetail_bak(){
		$id = I('id');
		$order = M('order');
		$distributor = M('Distributor');
		$where = array(
			'user_id'=>$id,
			'status'=>array('gt',1)
			);
		
			$total_num = 0;
			$total_price = 0;
			$orderlist = $order->where($map)->field('total_num,total_price')->select();
			foreach ($orderlist as $key => $value) {
				$total_num = $total_num+$value['total_num'];
				$total_price = $total_price+$value['total_price'];
			}
		$list=array();
		$list['total_num']=$total_num;
		$list['total_price']=$total_price;
		
		$this->ajaxReturn($list,'JSON');
	}
	//递归所有同级
	public function getRecommends ($sort_id)
	   {
	   	$distributor = M('distributor');
	       $result = $distributor->where(array('pid'=>$sort_id,'disable'=>0,'audited'=>1))->field('id')->select();
	 
	       if ($result)
	       { 
	           foreach ($result as $key=>$val)
	           {
	               $ids .= ','.$val['id'];
	               $ids .= $this->getRecommends ($val['id']);
	           }
	       }
	       return $ids;
	}
}
?>