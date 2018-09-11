<?php
/**
*	PCS经销商管理系统
*/
class StockAction extends Action
{
	//大中标签出库记录
	public function stock()
	{
		$type = I('get.type');
		if($type == 'b'){
			$map['statusbm'] ='b';
			//$map['type'] = 'big';
		}else if($type == 'm'){
			$map['statusbm'] ='m';
			//$map['type'] = 'm';
		}else if($type == 'system'){
			$map['status'] ='system';
			//$map['type'] = 'm';
		}
		/* $t = 'templet';
		$d = 'distributor';
		$p = 'product';
		$field = "$t.name,$d" */
		$count = M('Product')->where($map)->count('id');
		if($count>0){
			import('ORG.Util.Page');
			$p = new Page($count,20);
			$limit= $p->firstRow . "," . $p->listRows;
			$field = "id,send_id,receive_id,templet_id,ptag_name,mbeg,mend,product_num,orderNumber,time";
			$list=M('Product')->field($field)->where($map)->order('time desc')->limit($limit)->select();
				//分页跳转的时候保证查询条件
				foreach ($map as $key => $val) {
					//urlencode编码url字符串
					if (!is_array($val)) {
						$p->parameter .= "$key=" . urlencode($val) . "&";
					}
				}
			//分页显示
			$page = $p->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}
		/*if($type == 'big'){
			$this->display('Stock/bigstock');
		}else if($type == 'm'){
			$this->display('Stock/mstock');
		}else if($type == 'system'){*/
			$this->statusbm = $map['statusbm'];
			$this->display('Stock/systemlog');
		/*}*/
	}
	public function stockbj(){
		$vid = I('vid');
		$vid = substr($vid,1);
		$managers = explode('_',$vid);
		$this->vid=$managers;
		$this->display();
	}
	public function clstockbj(){
		$vid = I('vvid');
		$keyword = I('keyword');
		foreach($vid as $m){
			$list = M('product')->where(array('id'=>$m))->field('receive_id')->find();
			if($list['receive_id'] == $keyword){
				$this->error('存在收货人相同的标签！');
			}
		}
		$arr['receive_id'] = $keyword;
		foreach($vid as $m){
			M('product')->where(array('id'=>$m))->save($arr);
		}
		$this->success('成功修改收货人！');
	}
	public function systemls()
	{
		$map['pdls'] = 1;
		$count = M('Product')->where($map)->count('id');
		if($count>0){
			import('ORG.Util.Page');
			$p = new Page($count,20);
			$limit= $p->firstRow . "," . $p->listRows;
			$field = "id,send_id,receive_id,templet_id,ptag_name,mbeg,mend,product_num,orderNumber,time,name,phone";
			$list=M('Product')->field($field)->where($map)->order('time desc')->limit($limit)->select();
				//分页跳转的时候保证查询条件
				foreach ($map as $key => $val) {
					//urlencode编码url字符串
					if (!is_array($val)) {
						$p->parameter .= "$key=" . urlencode($val) . "&";
					}
				}
			//分页显示
			$page = $p->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}
			$this->statusbm = $map['statusbm'];
			$this->display();
	}
	//系统大标出库
	public function systemBigStock(){
		//$where['pid'] = 0;
		//$where['level'] = 1;
		//$list = M('Distributor')->field("id,name")->where(array('level' => 1,'audited' => 1))->select();
		$templet = M('Templet')->field("id,name")->select();
		$this->templet = $templet;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		//$this->list = $list;
		$this->display();	
	}

	//系统小标出库
	public function systemMStock(){
		$templet = M('Templet')->field("id,name")->select();
		$this->templet = $templet;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();	
	}
	
	//获取大标签
	public function BigPtag(){
		$ptag_name = I('post.m_url');
		$field = 'ptag_name,ptag_beg,ptag_end,ptag_total';
		$row = M('Ptag')->field($field)->where(array('ptag_name' => $ptag_name))->find();
			/* $m_row = array(
					'ptag_name' => 0000000001,
					'ptag_beg' => 10000000001,
					'ptag_end' => 10000000006,
					'ptag_total' => 6,
			); */
		$this->ajaxReturn($row,'JSON');
	}

	//获取小标签
	public function mPtag(){
		$mtag_name = I('post.m_url');
		$row = M('Mtag')->field("mtag_name")->where(array('mtag_name' => $mtag_name))->find();
		$this->ajaxReturn($row,'JSON');
	}
	
	//获取模板
	public function templet(){
		$m_search = toValid(I('term'));
		$where['name'] = array('LIKE','%'.$m_search.'%');
        $list = D('Templet')->field("id,name")->where($where)->limit(0,12)->select();
		$this->ajaxReturn($list,'JSON');
	}
	
	//确定大标出库
	public function e_bigStock(){
		//var_dump($_POST);die;
		$pbeg = I('pbeg');
		$m_pend = I('pend');
		$ptag_name = I('ptag_name'); 
		$product = M('Product');
		if(!$ptag_name){
			$this->error('标签不能为空!');
		}
		//同一标签不能重复出库
		$ptag_count = array_count_values($ptag_name); 
		foreach ($ptag_count as $v){
			if($v>1){
				$this->error("不能有重复标签！");
				break;
			}
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
		$count_tag = count($pbeg);
		for($j = 0;$j < $count_tag;$j ++){
			$where['ptag_name'] = $ptag_name[$j];
			$where['status'] = 'system';
			$count = $product->where($where)->count('id');
			if($count>0){
				$this->error("该标签已经出库,不能重复出库！");
				break;
			}
			$wherea["mbeg"]= array('elt',$pbeg[$j]);//ok
			$wherea["mend"]= array('egt',$pbeg[$j]);//ok
			$wherea["statusbm"]= 'm';//ok
			$listcont = $product->where($wherea)->count();
			if($listcont > 0){
				$this->error("该标签已经出库,不能重复出库！");
				break;
			}
			$wherea["mbeg"]= array('elt',$m_pend[$j]);//ok
			$wherea["mend"]= array('egt',$m_pend[$j]);//ok
			$wherea["statusbm"]= 'm';//ok
			$listcont = $product->where($wherea)->count();
			if($listcont > 0){
				$this->error("该标签已经出库,不能重复出库！");
				break;
			}
		}
		$m_bid = toValid(I('templet_id'));
    	$m_agent_id = toValid(I('receive_id'));
    	$m_templet_id = toValid(I('templet_id'));
    	if(!$m_agent_id){
    		$this->error('代理不能为空!');
    	}
    	if(!$m_templet_id){
    		$m_templet_id = 1;
    	}
    	$m_product = M('Product');
    	if($m_product->create()){
    		$m_pbeg = $pbeg;
    		$m_ptag_name = $ptag_name;
    		$m_product_num = I('product_num');
    		for($i = 0;$i < $count_tag;$i ++){
    			$data = array(
    				'send_id' => 0,
    				'receive_id' => $m_agent_id,
    				'templet_id' => $m_templet_id,
    				'ptag_name' => $m_ptag_name[$i],
    				'mbeg' => $m_pbeg[$i],
    				'mend' => $m_pend[$i],
    				'product_num' => $m_product_num[$i],
    				'orderNumber' => 0,
    				'time' => time(),
    				'status' => 'system',
    				'pid' => 0,
    				'statusbm' => 'b'
    			);
    			
    			$m_result[] = $m_product->add($data);
    		}
    		if(count($m_result) == $count_tag && count($m_result) > 0){
    			$this->success("出库成功！",'stock/?type=system');
    		}else{
    			$this->error("出库失败！");
    		}
    	}else{
    		$this->error($m_product->getError());
    	}
	}
	//小标出库
	public function m_mStock(){
		$pbeg = I('pbeg');
		$m_pend = I('pend');
		//同一标签不能重复出库                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
		$count_tag = count($pbeg);
		$product = M('Product');
		//$list = M('Product')->where('send_id=0')->field('mbeg,mend')->select();
		for($j = 0;$j < $count_tag;$j ++){
			if($pbeg[$j] == $m_pend[$j]){
				$where["mbeg"]= array('elt',$pbeg[$j]);//ok
				$where["mend"]= array('egt',$pbeg[$j]);//ok
				$listcont = $product->where($where)->count();
				if($listcont > 0){
					$this->error("该标签已经出库,不能重复出库！");
					break;
				}
			}else{
				$where["mbeg"]= array('elt',$pbeg[$j]);//ok
				$where["mend"]= array('egt',$pbeg[$j]);//ok
				$listcont = $product->where($where)->count();
				if($listcont > 0){
					$this->error("该标签已经出库,不能重复出库！");
					break;
				}
				$where["mbeg"]= array('elt',$m_pend[$j]);//ok
				$where["mend"]= array('egt',$m_pend[$j]);//ok
				$listcont = $product->where($where)->count();
				if($listcont > 0){
					$this->error("该标签已经出库,不能重复出库！");
					break;
				}
			}
			if($m_pend[$j] == "" || $pbeg[$j] == ""){
				$this->error("标签不能为空！");
				break;
			}
			$count = M('Mtag')->where(array('mtag_name' => $m_pend[$j]))->count('mtag_id');
			$counta = M('Mtag')->where(array('mtag_name' => $pbeg[$j]))->count('mtag_id');
			if($count == 0 || $counta == 0){
				$this->error("该标签不存在！");
				break;
			}
		}
		//$m_bid = toValid(I('templet_id'));
    	$m_agent_id = toValid(I('receive_id'));
    	$m_templet_id = toValid(I('templet_id'));
    	if(!$m_agent_id){
    		$this->error('代理不能为空!');
    	}
    	if(!$m_templet_id){
    		$m_templet_id = 1;
    	}
    	$m_product = M('Product');
    	if($m_product->create()){
    		$m_pbeg = $pbeg;
    		//$m_product_num = I('product_num');
    		for($i = 0;$i < $count_tag;$i ++){
    			$m_product_num[$i] = $m_pend[$i]-$m_pbeg[$i]+1;
    			$data = array(
    				'send_id' => 0,
    				'receive_id' => $m_agent_id,
    				'templet_id' => $m_templet_id,
    				'mbeg' => $m_pbeg[$i],
    				'mend' => $m_pend[$i],
    				'product_num' => $m_product_num[$i],
    				'orderNumber' => 0,
    				'time' => time(),
    				'status' => 'system',
    				'pid' => 0,
    				'statusbm' => 'm'
    			);
    			$m_result[] = $m_product->add($data);
    		}
    		if(count($m_result) == $count_tag && count($m_result) > 0){
    			$this->success("出库成功！",'stock/?type=system');
    		}else{
    			$this->error("出库失败！");
    		}
    		
    	}else{
    		$this->error($m_product->getError());
    	}
	}
	//确定大标出库
	public function e_mStock(){
		$ptag_name = I('mtag_name');   
		if(!$ptag_name){
			$this->error('标签不能为空!');
		}
		//同一标签不能重复出库
		$ptag_count = array_count_values($ptag_name); 
		foreach ($ptag_count as $v){
			if($v>1){
				$this->error("不能有重复标签！");
				break;
			}
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
		$count_tag = count($ptag_name);
		for($j = 0;$j < $count_tag;$j ++){
			$where['ptag_name'] = $ptag_name[$j];
			$where['status'] = 'system';
			$count = M('Product')->where($where)->count('id');
			if($count>0){
				$this->error("该标签已经出库,不能重复出库！");
				break;
			}
		}
		$m_bid = toValid(I('templet_id'));
    	$m_agent_id = toValid(I('receive_id'));
    	$m_templet_id = toValid(I('templet_id'));
    	if(!$m_agent_id){
    		$this->error('代理不能为空!');
    	}
    	if(!$m_templet_id){
    		$m_templet_id = 1;
    	}
    	$m_product = M('Product');
    	if($m_product->create()){
    		for($i = 0;$i < $count_tag;$i ++){
    			$data = array(
    				'send_id' => 0,
    				'receive_id' => $m_agent_id,
    				'templet_id' => $m_templet_id,
    				'ptag_name' => $ptag_name[$i],
    				'product_num' => 1,
    				'orderNumber' => 0,
    				'time' => time(),
    				'status' => 'system',
    				'pid' => 0	
    			);
    			
    			$m_result[] = $m_product->add($data);
    		}
    		if(count($m_result) == $count_tag && count($m_result) > 0){
    			$this->success("出库成功！",'stock/?type=system');
    		}else{
    			$this->error("出库失败！");
    		}
    		
    	}else{
    		$this->error($m_product->getError());
    	}
	}
	
	
	public function getAgent(){
		$level = I("level");
		$list = M('Distributor')->field("id,name")->where(array('level' => $level,'audited' => 1))->select();
		if($list){
			$this->ajaxReturn($list,'json');
		}else{
			$this->ajaxReturn('none','json');
		}
	}
	public function freeze(){
		$this->display();
	}
	//冻结标签
	public function dongjie(){
		$mtag = I('mtag');
		$cont = M('code')->where(array('mtag' => $mtag))->count();
		if($cont != 0){
			$add['freeze'] = 1;
			if(M('code')->where(array('mtag' => $mtag))->save($add)){
				$this->ajaxReturn(2,'JSON');
			}else{
				$this->ajaxReturn(3,'JSON');
			}
		}else{
			$this->ajaxReturn(1,'JSON');
		}
		/*if()*/
	}
	//解冻标签
	public function jiedong(){
		$mtag = I('mtag');
		$cont = M('code')->where(array('mtag' => $mtag))->count();
		if($cont != 0){
			$add['freeze'] = 0;
			if(M('code')->where(array('mtag' => $mtag))->save($add)){
				$this->ajaxReturn(2,'JSON');
			}else{
				$this->ajaxReturn(3,'JSON');
			}
		}else{
			$this->ajaxReturn(1,'JSON');
		}
	}
	public function search(){
		$type = I('get.type');
		$typea = I('get.typea');
		$beg = I('get.beg');
		$end = I('get.end');
		$start_time = I('get.start_time');
		$end_time = I('get.end_time');
		if(!is_numeric($start_time) && !is_numeric($end_time)){
			$start_time = strtotime($start_time);
			$end_time = strtotime($end_time)+86399;
		}
		$keyword = I('get.keyword');
		$keyword3 = I('get.keyword3');
		//echo $keyword;
		//$keyword = iconv("gbk","utf-8",$keyword);
		$d = 'distributor';
		$p = 'product';
		$t = 'templet';
		$field = "$p.id,$p.ptag_name,$p.send_id,$p.mbeg,$p.mend,$p.product_num,$p.time,$p.pdls,$p.templet_id,$t.name as tname,$d.name as dname";
		$join1 = "$d on $p.receive_id=$d.id";
		$join2 = "$t on $p.templet_id=$t.id";
		$order = "$p.time desc";
		//系统出库记录查询
		if($type == 'systemtag'){
			if($typea == 'b'){
				$condition = array(
					'type' => 'systemtag',
					'beg' => $beg,
					'end' => $end
				);
				$where = "$p.statusbm='b' and $p.ptag_name>=$beg and $p.ptag_name<=$end and $p.pdls=1";
				$count = M($p)->where($where)->count('id');
				//$condition['statusbm'] = 'b';
			}else if($typea == 'm'){
				$condition = array(
					'type' => 'systemtag',
					'keyword3' => $keyword3
				);
				$where = "$p.mend>=$keyword3 and $p.mbeg<=$keyword3 and $p.pdls=1";
				$count = M($p)->where($where)->count('id');
				if($count == 0){
					$where = "$p.ptag_name=$keyword3 and $p.pdls=1";
					$count = M($p)->where($where)->count('id');
				}
				//$condition['statusbm'] = 'm';
			}else{
				$condition = array(
					'type' => 'systemtag',
					'beg' => $beg,
					'end' => $end
				);
				$where = "$p.status='system' and $p.ptag_name>=$beg and $p.ptag_name<=$end and $p.pdls=1";
				$count = M($p)->where($where)->count('id');
			}
			//$where = "$p.status='system' and $p.ptag_name>=$beg and $p.ptag_name<=$end";	
		}else if($type == 'systemtime'){
			$condition = array(
				'type' => 'systemtime',
				'start_time' => $start_time,
				'end_time' => $end_time
			);
			$where = "$p.time>=$start_time and $p.time<=$end_time and $p.pdls=1";
			//$where = "$p.status='system' and $p.time>=$start_time and $p.time<=$end_time";
			$count = M($p)->where($where)->count('id');
				
		}else if($type == 'systemagent'){
			$condition = array(
				'type' => 'systemagent',
				'keyword' => $keyword
			);
			$map = array(
					'name' => $keyword,
					'_logic' => 'OR',
					'phone' => $keyword,
					'_logic' => 'OR',
					'wechatnum' => $keyword
			);
			$agent_id = M($d)->where($map)->getField('id');
			$where["$p.send_id"] = $agent_id;
			$where["$p.pdls"] = 1;
			$count = M($p)->where($where)->count('id');
		}
		if($count>0){
			import('ORG.Util.Page');
			$pg = new Page($count,20);
			$limit= $pg->firstRow . "," . $pg->listRows;
			//var_dump($where);
			$list = M($p)->field($field)->where($where)->join($join1)->join($join2)->order($order)->limit($limit)->select();
			//分页跳转的时候保证查询条件
			foreach ($condition as $key => $val) {
				//urlencode编码url字符串
				if (!is_array($val)) {
					$pg->parameter .= "$key=" . urlencode($val) . "&";
				}
			}
			//分页显示
			$page = $pg->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}
		$this->typea=$typea;
		$this->display('systemls');
	}
}
?>