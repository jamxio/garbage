<?php
namespace learn;
class Extend{
	private static $obj = null;
	private function __construct(){}
	private function __clone(){}
	public static function getIntance(){
		if(self::$obj==null){
			self::$obj = new self();
		}
		return self::$obj;
	}
	public function getStr(){
		return "类的文件名均以命名空间定义，并且命名空间的路径和类库文件所在路径一致<br>~/extend/learn/Extend<hr>";
	}
}
/**
* 与learn/ClassName.php中的类做测试
		echo((new \learn\ClassName())->getStrw());
		echo((new \learn\ClassName())->getStr());
*/
class ClassName
{
	public function getStr(){
		return 'learn/Extend.php下面的ClassName类';
	}
}