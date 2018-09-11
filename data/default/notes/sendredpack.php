<?php
/**************
*date:2017-5-8
*
*author:jamxio
*
***************/
class SENDREDPACK  {
     private $openid;
     private $money;
     private $billno;
     private $rp_config;
     private $type;

      /*微信接口所需参数    
                    $act_name,//活动名称  、                             $appId,//公众账号appid 、      $client_ip,//调用接口的机器Ip地址
                   $consume_mch_id,//扣钱方mchid ，否、       $mch_billno,//商户订单号 、     $mch_id,//商户号  
                   $msgappid,//触达用户appid，否、                 $nonce_str,//随机字符串 、      $re_openid,//用户openid  
                   $remark,//备注、 $risk_info,//活动信息，否、 $scene_id,//场景id ，否、        $send_name,//商户名称  
                   $sub_mch_id,//子商户号 ，否、                      $total_amount,//付款金额 、   $total_num,//红包发放总人数 
                   $wishing,//红包祝福语 、                                $amt_type,//裂变红包专用参数ALL_RAND
                   //以下参数不参与ascll码排序
                   $key,//key密钥、   $sign;//加密后的签名
      */             
      /********************
      *@param openid :收红包的用户openid，获取openid的方法通常封装在其他类
      *
      *@param money :发送红包的金额，具体看发多大的红包，构造对象前定义
      * 
      *@param billno :生成红包对象时必须订单号，unique
      *
      * @param rp_config :微信红包的接口配置，在config配置文件中配置，或者业务逻辑定义，
      * $rp_config = array(
            'act_name'=>'',
            'client_ip'=>'',
            'consume_mch_id'=>'',
            'mch_id'=>'',
            'msgappid'=>'',
            'remark'=>'',
            'risk_info'=>'',
            'scene_id'=>'',
            'send_name'=>'',
            'sub_mch_id'=>'',
            'total_num'=>'',
            'wishing'=>'',
            'wxappid'=>'',
            'amt_type'=>'ALL_RAND',//裂变红包专用参数
            'key'=>'',
            'cert_dir'=>'';//证书的路径，微信支付需要证书
         );
      * @param type : 红包的类型，1普通红包，2裂变红包
     ********************/
      public static $static_obj = null;
      public static  function createsingle($openid, $money, $billno, $rp_config,$type=1){
            if(!self::$static_obj){
                  self::$static_obj = new self();
            }
            self::$static_obj->openid = $openid;
            self::$static_obj->money = $money;
            self::$static_obj->billno = $billno;
            self::$static_obj->rp_config = $rp_config;
            self::$static_obj->type = $type;
            return self::$static_obj;
      }
      private function __construct() {
      }
      //发送红包的对象入口
      public function rp_result(){

            #以下语句会导致重新获取随机字符串，导致与签名中的不一样，所以需要返回getsign()中的参数组
            //$par_arr = $this->get_par_arr();
            if($this->type==2){
                   $url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendgroupredpack";//
                   if($this->rp_config['amt_type']==''){
                        $this->rp_config['amt_type']='ALL_RAND';
                   } 
                   if($this->rp_config['total_num']<3){//裂变红包人数至少为3
                        $this->rp_config['total_num']= 3;
                   }
            }else{
                  $url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";//$stype=1
                  $this->rp_config['amt_type'] = '';//普通红包接口没有这个参数，要置空
                  $this->rp_config['total_num'] = 1;
            }

            $signarr = $this->getSign();
            $par_arr =$signarr[1]; 
            $par_arr['sign'] = $signarr[0]; 
            #dump($par_arr);
            $post_data = $this->arr2xml($par_arr);
            #echo $post_data;
            $cert_dir = $this->rp_config['cert_dir'];

            $returnxml = $this->httpPost($url,$post_data,$cert_dir);
            $returnarr = $this->xmlToArray($returnxml);
            return $returnarr;
      }
      //将XML转为array
      function xmlToArray($xml)
      {    
            //禁止引用外部xml实体
            libxml_disable_entity_loader(true);
            $values = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);        
            return $values;
      }
      //数组数据转成xml格式
      private function arr2xml($arr){
            $xml = "<xml>"; //递归应避免再次加入标签对<xml>，此处进行一维数组的转换，没有影响
            foreach ($arr as $key=>$val){ 
                   if(is_array($val)){ 
                        $xml.="<".$key.">".arr2xml($val)."</".$key.">"; 
                   }else{ //
                        $xml.="<".$key."><![CDATA[".$val."]]></".$key.">"; 
                   } 
             } 
            $xml.="</xml>"; 
            return $xml;
      }
      //生成noncestr随机字符串
      private function createNonceStr($length = 16) {
            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            $str = "";
            for ($i = 0; $i < $length; $i++) {
              $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
            }
            return $str;
      }
      //生成参数组
       private function get_par_arr(){
              $arr = $this->rp_config;
              $arr['re_openid'] = $this->openid;
              $arr['total_amount'] = $this->money;
              $arr['mch_billno'] = $this->billno;
              $arr['nonce_str'] = $this->createNonceStr();
              //去除为空的参数
              foreach ($arr as $key => $value) {
                    if(trim($value)==''){
                      unset($arr[$key]);
                    }
              }
                 unset($arr['cert_dir']);
                 return $arr;
             }
        //生成签名后的参数组和签名
      private function getSign() {
            $arr = $this->get_par_arr();
            unset($arr['key']);
            ksort($arr);
            $stringA ='';
            foreach($arr as $key => $value){
               $stringA .=$key.'='.$value.'&';
            }
            $SignTemp = $stringA.'key='.$this->rp_config['key'];
            #echo $SignTemp;
             
            $sign= md5($SignTemp);
            $sign= strtoupper($sign);
            
            return array($sign,$arr);
        }
      //post请求微信红包接口
      private function httpPost($url,$post_data,$cert_dir,$aHeader=array()) {
            $ch = curl_init();
            //超时时间
            curl_setopt($ch,CURLOPT_TIMEOUT,500);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
            //这里设置代理，如果有的话
            //curl_setopt($ch,CURLOPT_PROXY, '10.206.30.98');
            //curl_setopt($ch,CURLOPT_PROXYPORT, 8080);
            //curl_setopt($ch,CURLOPT_URL,$url);

            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
            curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
            
            //以下两种方式需选择一种
            
            //第一种方法，cert 与 key 分别属于两个.pem文件
            //默认格式为PEM，可以注释
            curl_setopt($ch,CURLOPT_SSLCERTTYPE,'PEM');
            curl_setopt($ch,CURLOPT_SSLCERT,$cert_dir.'apiclient_cert.pem');
            //默认格式为PEM，可以注释
            curl_setopt($ch,CURLOPT_SSLKEYTYPE,'PEM');
            curl_setopt($ch,CURLOPT_SSLKEY,$cert_dir.'apiclient_key.pem');
            curl_setopt($ch,CURLOPT_CAINFO,$cert_dir.'rootca.pem');
            #die($cert_dir.'apiclient_key.pem');
           
            //第二种方式，两个文件合成一个.pem文件
            //curl_setopt($ch,CURLOPT_SSLCERT,getcwd().'/all.pem');
            if( count($aHeader) >= 1 ){
                  curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
            }
           
            curl_setopt($ch,CURLOPT_POST, 1);
            curl_setopt($ch,CURLOPT_POSTFIELDS,$post_data); 
            curl_setopt($ch,CURLOPT_URL,$url);
            // $data = curl_exec($ch);
            // die($data);
            //这里才是请求发起处，此前的除了init都是配置，顺序无规定
            $data = curl_exec($ch);
            if($data){
                  curl_close($ch);
                  return $data;
            }
            else { //经测试，如果进入这个分支，首选检查证书配置setopt
                  $error = curl_errno($ch);
                  echo "call faild, errorCode:$error\n"; 
                  curl_close($ch);
                  return false;
            }
      }
}

?>

