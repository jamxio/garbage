<?php
//正则表达式学习
header("Content-Type:text/html;charset=utf-8");
$str = "请使用正则表达式，能够把以下形如文本：$12,2,1,22,s$20,055,124.$122,122,200.49、$1,999.00、$99、50.00美元1sd1585,500.00美元，从一段字符串中快速匹配提取出来。";
$rule = '/\$\d{1,3}(,\d{3})*(\.\d{2})?|\d{1,3}(,\d{3})*(\.\d{2})?美元/';
preg_match_all($rule,$str,$arr1);
print_r($arr1[0]);
echo PHP_VERSION;
