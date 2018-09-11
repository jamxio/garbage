<?php
namespace learn;
class NameOfClass{
	public function ruleName(){
		return "类文件采用驼峰法命名（首字母大写），其它文件采用小写+下划线命名；<br>
		learn/NameOfClass.php<hr>";
	}
}
class ClassFile{
	public function rule(){
		return "<b>类名和类文件名保持一致，统一采用驼峰法命名（首字母大写）；</b>
		<h4>~extend/learn/NameOfClass.php</h4>
		<br>
		<em>尽管在同一个类文件内定义多个类，可以实例化该类，但是，规范总得有，而且如果在一个类里面定义了一个类，在该类名的同名文件里再次定义该类，会造成混淆。ClassName.php就是如此。此处有疑问：最终会实例化那个类？</em><hr>
		";
	}
}