<?php
    //@up_file 表单中的name属性；
    //@dir 定义保存目录4
    //@size 文件的大小限制
    //@oldset 原文件名称数据编码
    //@newset 文件名称转码目标，针对中文名称
    private function upload($up_file,$dir='./buy_show/',$accept_type=array('jpg', 'png', 'jpeg', 'bmp', 'pic'),$size=1048576,$oldset = "GBK", $newset = "UTF-8"){
        
        if($_FILES[$up_file]["error"] > 0){
            return array('code'=>'error','msg'=>$_FILES[$up_file]["error"]);
        }
        if (!file_exists($dir)) {
            mkdir(iconv($newset,$oldset,$dir), 0777, true);
        }//创建目录
        $upload_file = $_FILES[$up_file]['name'];
        $file_type = pathinfo($upload_file)['extension'];
        if(!in_array(strtolower($file_type),$accept_type)){
            return array('code'=>'type','type'=>$file_type);
        }
        $upload_size = $_FILES[$up_file]['size'];
        if($upload_size>$size){
            return array('code'=>'size','type'=>$upload_size);
        }
        $filename = $up_file. "_" .time().rand(1,9).".".$file_type;
        $fileurl = $dir.$filename;
        while(file_exists($fileurl)) {
            $filename = $up_file. "_" .time().rand(1,9).".".$file_type;
            $fileurl = $dir.$filename;
        }
        //文件移动
        if (move_uploaded_file($_FILES[$up_file]["tmp_name"], iconv($newtype, $oldtype, $fileurl))) {
            return array('code'=>'ok','furl'=>substr($fileurl,1));
        }
        return array('code'=>'false');
    }