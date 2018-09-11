<?php
error_reporting(E_ALL);
// 定义应用目录
define('APP_PATH', __DIR__ . '/../atplearn/');
// 绑定到index模块
define('BIND_MODULE','index');
// 加载框架引导文件
require __DIR__ . '/../thinkphp/start.php';