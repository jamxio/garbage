<?php
$a = 1;
$b = 1235;
$c = $a.'shind';
$d = ['b'=>$c];
xdebug_debug_zval('a');

echo PHP_EOL;
xdebug_debug_zval('b');

echo PHP_EOL;
xdebug_debug_zval('c');
echo PHP_EOL;
xdebug_debug_zval('d');
echo PHP_EOL;
$h = 'aaa';
$g = 'aa';
xdebug_debug_zval('h');
xdebug_debug_zval('g');
$g .= 'a';
xdebug_debug_zval('g');
xdebug_debug_zval('h');
phpinfo();