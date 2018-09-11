<?php
/*namespace Org\Net;*/
/**
 * Created by PhpStorm.
 * User: StandOpen
 * Date: 15-1-7
 * Time: 9:41
 */
class OrderPush
{
    protected $appid;
    protected $secrect;
    protected $accessToken;
    function  __construct($appid, $secrect)
    {
        $this->appid = $appid;
        $this->secrect = $secrect;
        $this->accessToken = $this->getToken($appid, $secrect);
    }
    /**
     * ����post����
     * @param string $url
     * @param string $param
     * @return bool|mixed
     */
    function request_post($url = '', $param = '')
    {
        if (empty($url) || empty($param)) {
            return false;
        }
        $postUrl = $url;
        $curlPost = $param;
        //var_dump($curlPost);
        /*$ch = curl_init(); //��ʼ��curl
        curl_setopt($ch, CURLOPT_URL, $postUrl); //ץȡָ����ҳ
        curl_setopt($ch, CURLOPT_HEADER, 0); //����header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Ҫ����Ϊ�ַ������������Ļ��
        curl_setopt($ch, CURLOPT_POST, 1); //post�ύ��ʽ
        curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
        $data = curl_exec($ch); //����curl*/

        $ch = curl_init($postUrl);    
        curl_setopt($ch, CURLOPT_HEADER, 0);    
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);    
        curl_setopt($ch, CURLOPT_POST, 1);    
        curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);  
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        $data = curl_exec($ch);    

        //var_dump($data);echo "<br />";echo "<br />";
        curl_close($ch);
        return $data;
    }
    /**
     * ����get����
     * @param string $url
     * @return bool|mixed
     */
    function request_get($url = '')
    {
        if (empty($url)) {
            return false;
        }
        /*$ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);*/

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURL_SSLVERSION_SSL, 2);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        $data = curl_exec($ch);
        //var_dump($data);
        curl_close($ch);
        return $data;
    }
    /**
     * @param $appid
     * @param $appsecret
     * @return mixed
     * ��ȡtoken
     */
    protected function getToken($appid, $appsecret)
    {
        if (S($appid)) {
            $access_token = S($appid);
        } else {
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" . $appid . "&secret=" . $appsecret;
            $token = $this->request_get($url);
            $token = json_decode(stripslashes($token));
            $arr = json_decode(json_encode($token), true);
            $access_token = $arr['access_token'];

            S($appid, $access_token, 3000);
        }

        return $access_token;
    }
    /**
     * �����Զ����ģ����Ϣ
     * @param $touser
     * @param $template_id
     * @param $url
     * @param $data
     * @param string $topcolor
     * @return bool
     */
    public function doSend($touser, $template_id, $url, $data, $topcolor = '#7B68EE')
    {
        /*
         * data=>array(
                'first'=>array('value'=>urlencode("����,���ѹ���ɹ�"),'color'=>"#743A3A"),
                'name'=>array('value'=>urlencode("��Ʒ��Ϣ:΢ʱ����ӰƱ"),'color'=>'#EEEEEE'),
                'remark'=>array('value'=>urlencode('������Ч!����Ϊ:1231313'),'color'=>'#FFFFFF'),
            )
         */
        $template = array(
            'touser' => $touser,
            'template_id' => $template_id,
            'url' => $url,
            'topcolor' => $topcolor,
            'data' => $data
        );
        $json_template = json_encode($template);
        //var_dump($json_template);
        $url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" . $this->accessToken;
        //var_dump($url);die();
        $dataRes = $this->request_post($url, urldecode($json_template));
        //modify by jamxio on 5/16 ��
        $dataRes = json_decode($dataRes,true);
        if ($dataRes['errcode'] == 0) {
            return true;
        } else {
            return false;
        }
    }
}