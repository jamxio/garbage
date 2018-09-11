<?php

class MessageAction extends Action
{

    public function accept()
    {

        #error_reporting(0);

        if ($_GET['echostr']) {

            $checksign = $this->checkSignature();

            if ($checksign) {

                echo $_GET['echostr'];

            } else {

                echo 'no';

            }

        } else if (1) {

            $xml = $this->get_xml();

            $data = $this->xml2arr($xml);

            file_put_contents('./log.txt', json_encode($data));

            $from = $data['FromUserName'];

            $data1['FromUserName'] = $data['ToUserName'];

            $data1['ToUserName'] = $from;

            $data1['MsgType'] = 'text';

            $data1['CreateTime'] = time();


            if ($data['MsgType'] == 'text') {

                if ($data['Content'] == "js") {

                    $data1['Content'] = '<a href="http://wx.jamxio.com/' . U('Wxjs/index') . '">点击进入</a>';

                } else {

                    $data1['Content'] = '你发的是普通消息：' . $data['Content'];

                }

                echo $echostr = $this->arr2xml($data1);

            } else if ($data['MsgType'] == 'event') {

                if ($data['Event'] == 'subscribe') {

                    $data1['Content'] = '谢谢您订阅';

                    echo $echostr = $this->arr2xml($data1);

                }

            } else if ($data['MsgType'] == 'image') {

                $data1['Content'] = '你发的是一张图片：<a href="' . $data['PicUrl'] . '">点击查看</a>';

                echo $echostr = $this->arr2xml($data1);

            } else if ($data['MsgType'] == 'voice') {

                $data1['Content'] = '你发的是一段语音内容，识别为：' . $data['Recognition']/*.''*/
                ;

                echo $echostr = $this->arr2xml($data1);

            } else if ($data['MsgType'] == 'video') {
                $url = "http://" . $_SERVER['HTTP_HOST'] . U('Index/show_video') . "?mid=" . $data['MediaId'] . "&imgid=" . $data['ThumbMediaId'];
                $data1['Content'] = '你发的是一个视频，<a href="' . $url . '">链接</a>;';

                echo $echostr = $this->arr2xml($data1);
            }

        } else {

            $postStr = file_get_contents("php://input", 'r');

            if (!empty($postStr)) {

                $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);

                $fromUsername = $postObj->FromUserName;

                $toUsername = $postObj->ToUserName;

                $keyword = trim($postObj->Content);

                $time = time();

                $textTpl = "<xml>

				<ToUserName><![CDATA[%s]]></ToUserName>

				<FromUserName><![CDATA[%s]]></FromUserName>

				<CreateTime>%s</CreateTime>

				<MsgType><![CDATA[%s]]></MsgType>

				<Content><![CDATA[%s]]></Content>				

				</xml>";#<FuncFlag>0<FuncFlag>

                if (!empty($keyword)) {

                    if ($keyword == 1) {

                        $contentStr = '数字1';

                    } elseif ($keyword == 2) {

                        $contentStr = '数字2';

                    } else {

                        $contentStr = '<a href="http://www.baidu.com">hello welcome to</a>';

                        #$contentStr = '111';

                    }

                    $msgType = "text";


                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);

                    echo $resultStr;

                } else {

                    echo '请输入1/2，系统会自动回复';

                }

            } else {

                echo '咋不说哈呢';

                exit;

            }

        }

    }

    private function checkSignature()
    {

        // you must define TOKEN by yourself

        #if (!defined("TOKEN")) {

        #throw new Exception('TOKEN is not defined!');

        #}


        $signature = $_GET["signature"];

        $timestamp = $_GET["timestamp"];

        $nonce = $_GET["nonce"];


        $token = 'jamxio';

        $tmpArr = array($token, $timestamp, $nonce);

        // use SORT_STRING rule

        sort($tmpArr, SORT_STRING);

        $tmpStr = implode($tmpArr);

        $tmpStr = sha1($tmpStr);


        if ($tmpStr == $signature) {

            return true;

        } else {

            return false;

        }

    }

    private function xml2arr($xml = '')
    {

        //禁止引用外部xml实体

        libxml_disable_entity_loader(true);

        $values = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), 'true');

        return $values;

    }

    private function arr2xml($arr)
    {

        $xml = "<xml>";

        foreach ($arr as $key => $val) {

            if (is_array($val)) {

                $xml .= "<" . $key . ">" . $this->arr2xml($val) . "</" . $key . ">";

            } else if ($val + 0 != 0 && $key != 'Content') { //

                $xml .= "<" . $key . ">" . $val . "</" . $key . ">";

            } else { //

                $xml .= "<" . $key . "><![CDATA[" . $val . "]]></" . $key . ">";

            }

        }

        $xml .= "</xml>";

        return $xml;

    }

    public function get_xml()
    {

        $xmldata = file_get_contents("php://input");

        return $xmldata;


        if ($GLOBALS['HTTP_RAW_POST_DATA'])

            echo $GLOBALS['HTTP_RAW_POST_DATA'];

    }

    //xml形式获取post的值curl

    public function send()

    {

        $header[] = 'Content-type: text/xml';//定义content-type为xml

        $xml = '<xml>

 <ToUserName><![CDATA[toUser]]></ToUserName>

 <FromUserName><![CDATA[fromUser]]></FromUserName>

 <CreateTime>1348831860</CreateTime>

 <MsgType><![CDATA[text]]></MsgType>

 <Content><![CDATA[this is a test]]></Content>

 <MsgId>1234567890123456</MsgId>

 </xml>';

        //$xml .= '<name>name</name>';

        //$xml .= '<age>14</age>';

        //$xml .= '</xml>';


        $url = 'http://wx.jamxio.com/index.php/Message/accept';

        $ch = curl_init(); //初始化curl

        curl_setopt($ch, CURLOPT_URL, $url);//设置链接

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//设置是否返回信息

        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);//设置HTTP头

        curl_setopt($ch, CURLOPT_POST, 1);//设置为POST方式

        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);//POST数据

        $response = curl_exec($ch);//接收返回信息

        if (curl_errno($ch)) {//出错则显示错误信息

            print curl_error($ch);

        }

        curl_close($ch); //关闭curl链接

        //$response可以显示到

        echo $response;//显示返回信息,

    }


    public function get()

    {

        /*$xmldata = file_get_contents("php://input");

        echo $xmldata;*/


        if ($GLOBALS['HTTP_RAW_POST_DATA'])

            echo $GLOBALS['HTTP_RAW_POST_DATA'];

    }

}

?>