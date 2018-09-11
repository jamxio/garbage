<?php

class WxjsAction extends Action{

	public function index(){

		vendor('wxapi.wxapi');

		$wxapi = new WxApi();

		$jspar = $wxapi->wxJsapiPackage();

		$this->jspar = json_encode($jspar);

		$this->display();

	}
	public function getJSON(){
		if(!IS_AJAX){
			die('nonono');
		}

		vendor('wxapi.wxapi');

		$wxapi = new WxApi();

		$jspar = $wxapi->wxJsapiPackage($_SERVER['HTTP_REFERER']);

		$this->ajaxReturn($jspar);

	}

}

?>