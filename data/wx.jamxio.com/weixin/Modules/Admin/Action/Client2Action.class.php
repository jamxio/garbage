<?php
class Client2Action extends Action {

	public function index(){
		$this->display();
	}

	// 登录
	public function login(){;
		$admin = M('admin')->where(array('username' => I('username')))->find();

		//用户名或密码错误
		if(!$admin || $admin['password']!=md5(I('password'))) {
			//$this->error('用户名或密码错误！');
			echo "<script>";
			echo "alert('用户名或密码错误！');history.back(-1);";
			echo "</script>";
		} else {   //登录成功
			//session记录
			session('aid',$admin['id']);
			session('aname',$admin['username']);
			if (I('remember')) {
				setcookie("username",$admin['username'],time()+30*24*3600);
			}
			$this->redirect('scan');
		}
	}

	// 扫描页
	public function scan(){
		//测试修改处20160126
		if(!$_SESSION['aname']){
			$this->redirect('index');
			exit();
		}else{
			$this->level_name = C('LEVEL_NAME');
			$this->level_num = C('LEVEL_NUM');
			$this->templet = M('templet')->select();
			$this->display();
		}
	}

	//手机发货
	public function phoneStock(){	
		if(!IS_AJAX) {
			halt("页面不存在");
		}
		
		$ptag = I('ptag');
		$status = I('status');
		$receive_id = I('receive_id');
		$templet_id = I('templet_id');
		$ptagList = explode('|',$ptag);
		array_shift($ptagList);
		$statusList = explode('|',$status);
		array_shift($statusList);
		$model = M('Ptag');
		$product = M('Product');

		$count_tag = count($ptagList);
		for($j = 0;$j < $count_tag;$j ++){
			$where['ptag_name'] = $ptagList[$j];
			$where['status'] = 'system';
			$count = $product->where($where)->count('id');//大标重复出库
			$notp = $model->where("ptag_name = $ptagList[$j] or (ptag_beg <= $ptagList[$j] and ptag_end >= $ptagList[$j])")->find();
			if (!$notp) {
				//判断是否为正确标签
				$this->ajaxReturn('wrong','json');
			}
			if($count == 0){//小标重复出库
				$wherea["mbeg"]= array('elt',$where['ptag_name']);//ok
				$wherea["mend"]= array('egt',$where['ptag_name']);//ok
				$count = $product->where($wherea)->count('id');
				if($count == 0&&$notp['ptag_name']==$ptagList[$j]){//大标中有小标已出库
					$kaishi = $notp['ptag_beg'];
					$jieshu = $notp['ptag_end'];
					$count = $product->where(array('mbeg'=>array('between',"$kaishi,$jieshu")))->count('id');
					$count == 0 || $this->ajaxReturn('litrepeat','json');
				}
			}
			if($count>0){
				//标签不能重复出库
				$this->ajaxReturn('repeat','json');
			}
		}
		$successnum = 0;
		//标签写入数据库
		
		#die(var_dump($status));
		foreach($ptagList as $k => $v) {
			//找到小标签
			$row = $model->field('ptag_beg,ptag_end,ptag_total')->where(array('ptag_name' => $v))->find();
			if ($row) {
				$statusbm = 'b';
			}else {
				$statusbm = 'm';
				$row['ptag_total'] = 1;
				$row['ptag_beg'] = $v;
				$row['ptag_end'] = $v;
				$v = 0;
			}
			$data = array(
    				'send_id' => 0,
    				'receive_id' => $receive_id,
    				'templet_id' => $templet_id,
    				'ptag_name' => $v,
    				'mbeg' => $row['ptag_beg'],
    				'mend' => $row['ptag_end'],
    				'product_num' =>  $row['ptag_total'],
    				'orderNumber' => 0,
    				'time' => time(),
    				'status' => 'system',
    				'pid' => 0,
    				'statusbm' => $statusbm,
    				'remark' =>'无'	
			);
			$res = $product->add($data);
			// if($successnum==1)
			// 	die(M()->getLastSql());
			if($res){
				$successnum++;
			}
		}
			
		if($successnum==$count_tag){
			$this->ajaxReturn('success','JSON');
		}else if(!$successnum){
			$this->ajaxReturn('error','JSON');
		}else{
			$this->ajaxReturn('less','JSON');			
		}
	}
	public function getAgent(){
		$level = I("level");
		$map['level'] = $level;
		//error_log($map['level'],3,'bb.log');
		$map['audited'] = 1;
		//$list = M('Distributor')->field("id,name")->where($map)->find();
		$list = M('Distributor')->field("id,name")->where($map)->select();
		
		if($list){
			$this->ajaxReturn($list,'json');
		}else{
			$this->ajaxReturn('none','json');
		}
	}

	// 获得标签
	public function getTag(){
		$res = I('post.result');
		$tag = substr($res,-12);
		$row = M('ptag')->where(array('ptag_name'=>$tag))->find();
		if($row){
			$bool = M('Tag_mac')->where('tag='.$tag)->getField('mac');
			if(!$bool){
				$this->ajaxReturn('haven','json');
			}else{
				$this->ajaxReturn('can','json');				
			}
		}else{
			$this->ajaxReturn('error','json');
		}	 	
	}
	//获取大标签
	public function BigPtag(){
		$ptag_name = I('post.m_url');
		$field = 'ptag_name,ptag_beg,ptag_end,ptag_total';
		$row = M('Ptag')->field($field)->where(array('ptag_name' => $ptag_name))->find();
		if($row){
			$bool = M('Tag_mac')->where('tag >='.$row['ptag_beg'].' and tag<='.$row['ptag_end'])->count('mac');
			if($bool<$row['ptag_total']){
				$this->ajaxReturn('haven','json');
			}else{
				$this->ajaxReturn('can','json');
			}
		}else{
			$this->ajaxReturn('error','json');
		}
	}

	//获取收货代理
	public function agent(){
		$m_search = toValid(I('term'));
		$where['name'] = array('LIKE','%'.$m_search.'%');
		$where['audited'] = 1;
	    	$list = M('Distributor')->field("id,name,levname")->where($where)->select();
	    	#die(M()->getLastSql());
		$this->ajaxReturn($list,'JSON');
	}

	public function Client(){

		$this->display();
	}
	
}


?>