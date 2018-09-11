<?php
class testAction extends Action{
	public function cache(){
		var_export(get_loaded_extensions());
		S('ddd','dddd',10);
		echo S('ddd');
	}
	public function cacheout(){
		echo S('ddd');
	}
}