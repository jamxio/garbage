#!/usr/local/php/bin/php
<?php
function msectime()  
  {  
      list($msec, $sec) = explode(' ', microtime());  
      return (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);  
  }

$start_time = msectime();
$sushu = array();

$v = 1000001;

while($v-- >2){
	$sqrt_v = sqrt($v);
	$is_heshu = false;
	for ($i= 2; $i <= $sqrt_v; $i++) { 
		if($v%$i==0){
			$is_heshu = true;
			break;
		}
	}
	if(!$is_heshu){
		$sushu[] = $v;
	}
}
$end_time = msectime();


print_r($sushu);
echo 'the program use ',$end_time-$start_time,'毫秒';