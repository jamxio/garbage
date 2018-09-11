<?php
namespace app\controller;
class Index{
    public function index(){
        return "单模块也不错！<pre>TP5很不错,不用继承，不用echo，return就输出内容，而且可以有效的防止之前的\$this->display();后面的程序继续执行</pre>但是却不能在method中输出后方便地ob_get_contents();";
    }
    public function _empty(){
        return "你可能需要修改APP_PATH下的config.php：'app_multi_module' =>	true,目前是单模块";
    }
}