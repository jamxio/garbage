<?php
/**
*	用户登录控制
*/
class CommonAction extends Action {

	public function _initialize() {
		/*if(!isset($_SESSION['aid'])) {
			echo "<script>window.top.location.href ='".__APP__."/Radmin/Login/index';</script>";
			exit();
			//$this->redirect(GROUP_NAME . '/Login/index');
		} */
	}
	public function exportExcel($expTitle,$expCellName,$expTableData){
		$xlsTitle = iconv('utf-8', 'gb2312', $expTitle);//文件名称
		$fileName = $_SESSION['account'].date('_YmdHis');//or $xlsTitle 文件名称可根据自己情况设定
		$cellNum = count($expCellName);
		$dataNum = count($expTableData);

		vendor("PHPExcel.PHPExcel");
			
		$objPHPExcel = new PHPExcel();
		$cellName = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ');

		$objPHPExcel->getActiveSheet(0)->mergeCells('A1:'.$cellName[$cellNum-1].'1');//合并单元格
		// $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1', $expTitle.'  Export time:'.date('Y-m-d H:i:s'));
		for($i=0;$i<$cellNum;$i++){
			$objPHPExcel->setActiveSheetIndex(0)->setCellValue($cellName[$i].'2', $expCellName[$i][1]);
		}
		// Miscellaneous glyphs, UTF-8
		for($i=0;$i<$dataNum;$i++){
			for($j=0;$j<$cellNum;$j++){
				$objPHPExcel->getActiveSheet(0)->setCellValue($cellName[$j].($i+3), $expTableData[$i][$expCellName[$j][0]]." ");
			}
		}

		header('pragma:public');
		header('Content-type:application/vnd.ms-excel;charset=utf-8;name="'.$xlsTitle.'.xls"');
		header("Content-Disposition:attachment;filename=$fileName.xls");//attachment新窗口打印inline本窗口打印
		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
		$objWriter->save('php://output');
		exit;
	}
	function expUser(){//导出Excel
		$xlsName  = "User";
		$xlsModel = M('distributor');
		if(I('get.pd') == 'manager'){
			$xlsCell  = array(
			array('id','编号'),
			array('name','姓名'),
			array('phone','手机号'),
			array('wechatnum','微信号'),
			array('idennum','身份证'),
			array('address','地址'),
			array('audname','状态'),
			array('levname','代理级别'),
			array('bossname','上级名称'),
			array('pname','审核人'),
			array('timea','授权时间')
			);
			$xlsData  = $xlsModel->where(array('level' => I('get.level')))->Field('id,name,phone,wechatnum,idennum,audited,levname,bossname,pname,address,time')->select();
			foreach ($xlsData as $k => $v)
			{
				$xlsData[$k]['idennum'] = " ".$xlsData[$k]['idennum'];
				//$xlsData[$k]['sex']=$v['sex']==1?'男':'女';
				if($xlsData[$k]['audited'] == 0){
					$xlsData[$k]['audname'] = "未审核";
				}else if($xlsData[$k]['audited'] == 2){
					$xlsData[$k]['audname'] = "待总部审核";
				}else{
					$xlsData[$k]['audname'] = "已审核";
				}
				$xlsData[$k]['timea'] = date("Y-m-d H:i:s", $xlsData[$k]['time']);
			}
			$this->exportExcel($xlsName,$xlsCell,$xlsData);
		}else{
			$order = M('Order');
			$templet = M('Templet');
			$xlsCell  = array(
			array('order_num','订单号'),
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
			$applyList = $order->order('time desc')->group('order_num')->limit($limit)->select();
			foreach ($applyList as $k => $v) {
				$list = $xlsModel->where(array('id' => $v['user_id']))->find();
				$ros = $xlsModel->where(array('name' => $list['bossname']))->find();
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
				}else{
					$applyList[$k]['sname'] = "已收货";
				}
				$applyList[$k]['row'] = $row;
				$applyList[$k]['timea'] = date("Y-m-d H:i:s", $applyList[$k]['time']);
			}
			$this->exportExcel($xlsName,$xlsCell,$applyList);
		}
	}
	/**
	 *
	 * 显示导入页面 ...
	 */

	/**实现导入excel
	 **/
	function impUser(){
		if (!empty($_FILES)) {
			import("@.ORG.UploadFile");
			$config=array(
                'allowExts'=>array('xlsx','xls'),
                'savePath'=>'./Public/upload/',
                'saveRule'=>'time',
			);
			$upload = new UploadFile($config);
			if (!$upload->upload()) {
				$this->error($upload->getErrorMsg());
			} else {
				$info = $upload->getUploadFileInfo();

			}

			vendor("PHPExcel.PHPExcel");
			$file_name=$info[0]['savepath'].$info[0]['savename'];
			$objReader = PHPExcel_IOFactory::createReader('Excel5');
			$objPHPExcel = $objReader->load($file_name,$encode='utf-8');
			$sheet = $objPHPExcel->getSheet(0);
			$highestRow = $sheet->getHighestRow(); // 取得总行数
			$highestColumn = $sheet->getHighestColumn(); // 取得总列数
			for($i=3;$i<=$highestRow;$i++)
			{
				$data['account']= $data['truename'] = $objPHPExcel->getActiveSheet()->getCell("B".$i)->getValue();
				$sex = $objPHPExcel->getActiveSheet()->getCell("C".$i)->getValue();
				// $data['res_id']    = $objPHPExcel->getActiveSheet()->getCell("D".$i)->getValue();
				$data['class'] = $objPHPExcel->getActiveSheet()->getCell("E".$i)->getValue();
				$data['year'] = $objPHPExcel->getActiveSheet()->getCell("F".$i)->getValue();
				$data['city']= $objPHPExcel->getActiveSheet()->getCell("G".$i)->getValue();
				$data['company']= $objPHPExcel->getActiveSheet()->getCell("H".$i)->getValue();
				$data['zhicheng']= $objPHPExcel->getActiveSheet()->getCell("I".$i)->getValue();
				$data['zhiwu']= $objPHPExcel->getActiveSheet()->getCell("J".$i)->getValue();
				$data['jibie']= $objPHPExcel->getActiveSheet()->getCell("K".$i)->getValue();
				$data['honor']= $objPHPExcel->getActiveSheet()->getCell("L".$i)->getValue();
				$data['tel']= $objPHPExcel->getActiveSheet()->getCell("M".$i)->getValue();
				$data['qq']= $objPHPExcel->getActiveSheet()->getCell("N".$i)->getValue();
				$data['email']= $objPHPExcel->getActiveSheet()->getCell("O".$i)->getValue();
				$data['remark']= $objPHPExcel->getActiveSheet()->getCell("P".$i)->getValue();
				$data['sex']=$sex=='男'?1:0;
				$data['res_id'] =1;

				$data['last_login_time']=0;
				$data['create_time']=$data['last_login_ip']=$_SERVER['REMOTE_ADDR'];
				$data['login_count']=0;
				$data['join']=0;
				$data['avatar']='';
				$data['password']=md5('123456');
				M('Member')->add($data);
					
			}
			$this->success('导入成功！');
		}else
		{
			$this->error("请选择上传的文件");
		}
	}
	//获取代理
	public function agent(){
		$m_search = toValid(I('term'));
		$where['name'] = array('LIKE','%'.$m_search.'%');
		$where['audited'] = 1;
        $list = M('Distributor')->field("id,name,levname,phone,level")->where($where)->select();
		$this->ajaxReturn($list,'JSON');
	}
}
?>