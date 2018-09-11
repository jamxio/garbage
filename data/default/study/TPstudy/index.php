<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2014 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用入口文件
session_start();
// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
define('APP_DEBUG',true);

//绑定Admin模块到当前入口文件以生成模块；
//define('BIND_MODULE','Admin');
//反注释掉应用目录会加一个admin文件夹，里面有默认架构，即mvc

// 定义应用目录
define('APP_PATH','./Application/');
//定义安全文件防止目录信息泄露
#define('DIR_SECURE_FILENAME', 'index.html');
define('WX_PATH',dirname(__FILE__).'/Application/Common/');
echo WX_PATH;
// 引入ThinkPHP入口文件
require './ThinkPHP/ThinkPHP.php';

// 亲^_^ 后面不需要任何代码了 就是如此简单