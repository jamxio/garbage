<?php
/**
*	缇姿兰微商系统经销商管理系统
*/
class TempletAction extends CommonAction
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
				//分页跳转的时候保证查询条件
				/* foreach ($map as $key => $val) {
					//urlencode编码url字符串
					if (!is_array($val)) {
						$p->parameter .= "$key=" . urlencode($val) . "&";
					}
				} */
			//分页显示
			$page = $p->show();
			//模板赋值显示
			$this->assign('list', $list);
			$this->assign("page", $page);
		}
		$this->display();
	}

	//添加产品信息
	public function add()
	{
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
			'state' => I('post.state')
			'dis' => I('post.product_status'),
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
			'state' => I('post.state')
			'dis' => I('post.product_status'),
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
		$res = D('Templet')->where(array('id' => $id))->delete();
		if($res) {
			$this->success('删除成功',index);
		} else {
			$this->error('删除失败');
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
		//$upload->maxSize=3145728;
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
}
?>