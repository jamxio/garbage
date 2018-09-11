<?php
return [
	'app_debug' => true,
	'app_trace' => true,
	'show_error_msg' => true,
	'url_html_suffix' => 'java',

    //false意思是指单模块，multi是几（多）的意思吧？
    //如果改为false，则会使用当前目录下的controller、model、view等，index文件夹是模块的同名目录
    'app_multi_module' =>	true,
    /**自动绑定模块，即自动绑定入口文件同名模块,index[.php] bind-> index[module]
     * 否则需要显示defind('BIND_MODULE','module_name');
     * @example true|false;
     */
    'auto_bind_module' => true,

	'config_name_rule' => "配置参数以小写字母和下划线命名，例如 url_route_on 和url_convert；<p>",
];