<?php
function str_rand($len){
	$str = 'aabcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ0123456789.';
	$str_len = strlen($str);
	$randpwd = '';
	for ($i = 0; $i < $len; $i++) 
	{ 
		$randpwd .= substr($str,mt_rand(1,$str_len),1); 
	}
	return $randpwd;
}


for($i=0;$i<1500;$i++){
	echo "<img src='https://img.alicdn.com/imgextra/i4/67622315/TB2".str_rand(16)."XX".str_rand(4)."Xa_!!676223115.jpg'/>";
}



?>
