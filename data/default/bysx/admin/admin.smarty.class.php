<?PHP
include_once("libs/Smarty.class.php");
class admin_Smarty extends Smarty {

	function admin_Smarty() {
		$this->template_dir = './templates/';//模板地址
		$this->themes_dir = './templates/';//图片以及JS等文件的修正地址
		$this->compile_dir = 'templates_c/';
		$this->config_dir = 'configs/';
		$this->caching = false;
		$this->force_compile = true;
	}

}



?>