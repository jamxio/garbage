<?php
/**
*	碧邦微商系统经销商管理系统
*/
class TempletAction extends /*Common*/Action
{
	//产品信息列表
	public function index()
	{
		$count = D('Templet')->count('id');
		if($count>0){
			import('ORG.Util.Page');
			$p = new Page($count,8);
			$limit= $p->firstRow . "," . $p->listRows;
			$list=D('Templet')->order('time desc')->limit($limit)->select();
			$page = $p->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}
		$this->pages = ceil($count/8);
		$this->display();
	}

	//添加产品信息
	public function add()
	{
		$sortlist = M('Tsort')->select();
		$this->sortlist = $sortlist;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->display();
	}

	public function insert()
	{   
		$attrname="";
		$attrvalue="";
		foreach ($_POST['attrname'] as $key => $value) {
			$attrname=$attrname.'##'.$value;
		}
		foreach ($_POST['attrvalue'] as $key => $value) {
			$attrvalue=$attrvalue.'##'.$value;
		}
		$attrname = ltrim($attrname,'##');
		$attrvalue = ltrim($attrvalue,'##');
		$disc = I('post.disc');
		$disc = stripslashes($disc);
		$disc = preg_replace("/&amp;/","&",$disc);
		$disc = preg_replace("/&quot;/","\"",$disc);
		$disc = preg_replace("/&lt;/","<",$disc);
		$disc = preg_replace("/&gt;/",">",$disc);
		$image = $this->upload();
		$data = array(
			'image' => $image,
			'name' => I('post.name'),
			//'score' => I('post.score'),
			'price' => I('post.price'),
			'price1' => I('post.price1'),
			'price2' => I('post.price2'),
			'price3' => I('post.price3'),
			'price4' => I('post.price4'),
			'price5' => I('post.price5'),
			'price6' => I('post.price6'),
			's_name' => $attrname,
			's_value' => $attrvalue,
			'time' => time(),
			'disc' => $disc,
			'state' => I('post.state'),
			'num' => I('post.num'),
			'dis' => I('post.dis'),
			'rebate' => I('post.rebate'),
			'typeid' => I('post.type')
			);
		$res = D('Templet')->add($data);
		if($res) {
			$this->success('产品信息添加成功',index);
		} else {
			$this->error('产品信息添加失败');
		}
	}

	//编辑产品信息
	public function edit()
	{
		$id = $_GET['id'];
		$row = D('Templet')->find($id);
		$sortlist = M('Tsort')->select();
		$this->sortlist = $sortlist;
		$this->row = $row;
		$this->level_num=C('LEVEL_NUM');
		$this->level_name=C('LEVEL_NAME');
		$this->s_name = explode('##', $row['s_name']);
		$this->s_value = explode('##', $row['s_value']);
		$this->moreLenght = count($this->s_name);
		$this->display();
	}

	public function update()
	{
		$attrname="";
		$attrvalue="";
		foreach ($_POST['attrname'] as $key => $value) {
			$attrname=$attrname.'##'.$value;
		}
		foreach ($_POST['attrvalue'] as $key => $value) {
			$attrvalue=$attrvalue.'##'.$value;
		}
		$attrname = ltrim($attrname,'##');
		$attrvalue = ltrim($attrvalue,'##');
		if($_FILES['image']['size'] == 0){
			$image = I('post.old_image');
		}else{
			$image = $this->upload();
		}
		$id =I('post.id');
		$disc = I('post.disc');
		$disc = stripslashes($disc);
		$disc = preg_replace("/&amp;/","&",$disc);
		$disc = preg_replace("/&quot;/","\"",$disc);
		$disc = preg_replace("/&lt;/","<",$disc);
		$disc = preg_replace("/&gt;/",">",$disc);
		$data = array(
			"id" => $id,
			"image" => $image,
			'name' => I('post.name'),
			//'score' => I('post.score'),
			'price' => I('post.price'),
			'price1' => I('post.price1'),
			'price2' => I('post.price2'),
			'price3' => I('post.price3'),
			'price4' => I('post.price4'),
			'price5' => I('post.price5'),
			'price6' => I('post.price6'),
			's_name' => $attrname,
			's_value' => $attrvalue,
			'disc' => $disc,
			'state' => I('post.state'),
			'num' => I('post.num'),
			'dis' => I('post.dis'),
			'rebate' => I('post.rebate'),
			'typeid' => I('post.type')
		);
		$res = D('Templet')->save($data);
		if($res === false) {
			$this->error("操作失败");
		} else {
			$this->success("操作成功",index);
		}
	}

	//删除产品信息
	public function delete()
	{
		$id = $_GET['id'];
		$dis = I('dis');
		if($dis==1){
			$res = D('Templet')->where(array('id' => $id))->save(array('dis'=>0));
			if($res) {
				$this->success('下架成功,该产品将会在代理后台订单下单模块消失',index);
			} else {
				$this->error('下架失败');
			}
		}else if($dis==0){
				$res = D('Templet')->where(array('id' => $id))->save(array('dis'=>1));
			if($res) {
				$this->success('上架成功,该产品将会在代理后台订单下单模块显示',index);
			} else {
				$this->error('上架失败');
			}
		}else{
				$res = D('Templet')->where(array('id' => $id))->delete();
			if($res) {
				$this->success('删除成功,该删除不可恢复，关联的信息也会丢失',index);
			} else {
				$this->error('上架失败');
			}
		}		
	}
	//产品分类列表
	public function sort(){
		$count = D('Tsort')->count('id');
		if($count>0){
			import('ORG.Util.Page');
			$p = new Page($count,8);
			$limit= $p->firstRow . "," . $p->listRows;
			$list=D('Tsort')->order('id desc')->limit($limit)->select();
			$page = $p->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}

		$this->start = $p->firstRow;
		$this->pages = ceil($count/8);
		$this->display();
	}
	//产品分类管理
	public function chgsort(){
		$this->sortid = I('get.id');
		$this->sortname = I('get.name');
		$this->display();
	}
	//产品分类保存
	public function savesort(){
		$sortid = I('post.sortid');
		$sortname = I('post.sortname');
		if($sortid){
			$result = M('tsort')->save(array('id'=>$sortid,'name'=>$sortname));
		}else{
			$result = M('tsort')->add(array('name'=>$sortname));
		}
		if($result){
			$this->success('保存成功！','sort',1);
		}else{
			$this->error('保存失败！');
		}
	}
	
	/**
	 * +-------------------------------------------------
	 * 上传图片
	 * +-------------------------------------------------
	 * @param string $name
	 * +-------------------------------------------------
	 * @return string $info(中文提示)
	 * +-------------------------------------------------
	 */
	function upload(){ 
		import('ORG.Net.UploadFile');
		$upload=new UploadFile();
		$upload->maxSize=1048576;
		$upload->allowExts=array('jpg', 'png', 'jpeg', 'bmp', 'pic');// 设置附件上传类型
		$upload->savePath='./img/';
		$upload->uploadReplace = false;//存在同名文件是否是覆盖
		//$upload->saveRule = 'saveuniq'; //文件名规则,尽量自定义
		//$upload->saveRule = $this->saveupload();
		/* $upload->thumb = true;//是否需要对图片文件进行缩略图处理，默认为false
		$upload->thumbType=1; //剪切
		$upload->thumbMaxWidth = '200';
		$upload->thumbMaxHeight = '200'; */
		$upload->thumbRemoveOrigin="true";
		$upload->autoSub=true;    //是否以子目录方式保存
		$upload->subType='date';  //可以设置为hash或date
		$upload->dateFormat='Ym';
		$upload->subType='date';  //可以设置为hash或date
		if(!$upload->upload()){
			$this->error($upload->getErrorMsg());
		}else{
				
			$info=$upload->getUploadFileInfo();
			$image = $info[0]['savepath'].$info[0]['savename'];
			return __ROOT__.substr($image, 1);
		}
	}
	
	//显示二维码
	public function show(){
		$this->level_name=C('LEVEL_NAME');
		$this->ym_domain=C('YM_DOMAIN');
		$this->display();
	}
	//查找是否有该产品的订单
	public function chack_has(){
		$row = I('get.proid');
		$row = intval(trim($row));
		$res = M('Order')->where(array('p_id'=>$row))->count();
		$this->ajaxReturn($res, 'json');
	}

	//将全部产品导出Excel
	public function exptemplet(){

		$list=D('Templet')->order('time desc')->select();

		$xlsName  = "templet";
		$xlsCell  = array(
			array('name','产品名称'),
			array('price','产品价格'),
			array('state','产品描述'),
			array('disc','产品介绍'),
			array('num','剩余库存'),
			array('time','添加时间'),
		);
		
		foreach ($list as $k => $v){
			if(!$v['num']){
				$list[$k]['num'] = 0;
			}
			$list[$k]['time'] = date("Y-m-d H:i:s",$v['time']);
		}
		//调用通用控制器中的导出excel函数
		$this->exportExcel($xlsName,$xlsCell,$list);
	}
}
?>