<?php
namespace app\index\controller;
use \think\Controller;
class MyClass{
	public static function test(){
		echo "应用类库的根命名空间统一为app（不建议更改，可以设置app_namespace配置参数更改，V5.0.8版本开始使用APP_NAMESPACE常量定义）；
		例如：app\index\controller\Index和app\index\model\User。<p>
		应用类库指在应用中独有的。在app_path里定义类则命名空间需统一；
		<hr>";
	} 
}
//类库Controller用驼峰法
class Index extends Controller{
	private $attr = "属性的命名使用驼峰法（首字母小写），例如 tableName、instance；<p><b>驼峰法就是单词分割不用空格，用ucfirst()<em></b></em><hr>";
	public function testReturn(){
		return $this->fetch('testReturn');
	}
	private function methodName(){
		echo "方法的命名使用驼峰法（首字母小写），例如 getUserName；<br>与类不同的是首字母大小写<hr/>";
	}
	//The magic method __call() must have public visibility and cannot be static
	public function __call($m,$a){
		//检查模板是否存在
		if((new \think\view\driver\Think())->exists($m))
		return view($m);
		echo "以双下划线“__”打头的函数或方法作为魔术方法，例如 __call 和 __autoload；<br>";
		echo "<p>
			__call() 方法就是会处理不存在的函数，
			应该是被tp以_empty()方法重写了；
		</p>";
		//居然不能自动分开中文变量
		echo "/Index/Index/__call:{$m}方法不存在，你输入的参数是:";
		dump($a);
		if(function_exists($this->_empty())){
			$this->_empty();
		}
	}
	//魔术方法在哪的会显示蓝色，为关键字
	public function __autoload(){
		static $already = false;
		//可用spl_autoload_register('self::__autoload');
		//注册类自动加载函数队列。即所有注册的函数会被执行
		if(!$already){
			$already =true;
			echo '<b>在Index/Index/__autoload</b><br>';
		}
	}
	//构造对象
	public function __construct(){
		parent::__construct();
	}
	//克隆对象
	public function __clone(){

	}
	public function _empty(){
		echo '_empty():不是重写，而是利用__call调用_empty<p/>';
	}
	public function footer(){
		$page = input('page')?input('page'):0;
		$page_p = $page>0?($page-1):'';
		$page_n = intval($page)+1;
		return view('footer',['page_p'=>$page_p,'page_n'=>$page_n]);
	}
	public function index(){
		if(input('page')>0){
			$action = 'index'.input('page');
			try{
				$this->$action($action);
			}catch(Exception $e){
				echo $e>getMessage();
			}
			return;
			#die(header("Location:".url($action).'?page='.$page));
		}
		print('<h1>开发规范！</h1>');
		//视图实例化
		//如果是return，将直接返回
		echo $this->fetch('index',['html'=>'目录使用小写_，例如Index模块的目录为index，视图在view/index<hr>']);
		echo name_function();
		//单例模式
		echo \learn\Extend::getIntance()->getStr();
		echo (new \learn\NameOfClass())->ruleName();
		echo (new \learn\ClassFile)->rule();
		echo $this->testReturn();
		echo name_rule();
		$this->methodName();
		echo $this->attr;
		$k = 'ss';
		$this->noMethod($k,3);
		//这里先注销其他自动加载函数
		$functions = spl_autoload_functions();
		$i = 0;
		foreach($functions as $function) {
			$i++;
			#spl_autoload_unregister($function);
			echo "已注册的自动加载函数<{$i}>：";
			dump($function);
		}
		#spl_autoload_register('self::__autoload');
		spl_autoload_register(array(__CLASS__,'__autoload'));
		spl_autoload_register('__autoload');
		//这句将引起错误，因为最终需执行think\loader
		new \noClass();
		spl_autoload_unregister('self::__autoload');
		spl_autoload_unregister('__autoload');
		define('CONST_RULE',"<em>常量以大写字母和下划线命名，例如 APP_PATH和 THINK_PATH；</em><br>");
		echo CONST_RULE;
		echo config('config_name_rule');
		echo "数据<b>表</b>和<b>字段</b>采用小写加下划线方式命名，并注意字段名不要以下划线开头，例如 think_user 表和 user_name字段，不建议使用驼峰和中文作为数据表字段命名。
		<p>as i say:因为模型的命名要用驼峰法替代下划线，所以数据表有驼峰法会混淆！！！<hr>";
		$myobj = new MyClass();
		$myobj->test();
		echo "<p><pre>请避免使用PHP保留字（保留字列表参见 
		<a href='http://php.net/manual/zh/reserved.keywords.php'>http://php.net/manual/zh/reserved.keywords.php</a>
		 ）作为常量、类名和方法名，以及命名空间的命名，否则会造成系统错误。</pre></p>";
		return $this->footer();
	}
	public function index1($name=''){
		echo $this->fetch($name);
		return $this->footer();
	}
	public function index2($name='sdsd'){
	    $data = model('Index2')->index();
		return $this->fetch('',['data'=>$data]);
	}
}