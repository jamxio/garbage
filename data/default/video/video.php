<?php
error_reporting(0);

function PutMovie($file) {

    header("Content-type: video/mp4");

    header("Accept-Ranges: bytes");

     

    $size = filesize($file);

    if(isset($_SERVER['HTTP_RANGE'])){

        header("HTTP/1.1 206 Partial Content");

        list($name, $range) = explode("=", $_SERVER['HTTP_RANGE']);

        list($begin, $end) =explode("-", $range);

        if($end == 0) $end = $size - 1;

    }

    else {

        $begin = 0; $end = $size - 1;

    }

    header("Content-Length: " . ($end - $begin + 1));

    #header("Content-Disposition: filename=".basename(',!\e/$#.exe'));

    header("Content-Range: bytes ".$begin."-".$end."/".$size);

 

    $fp = fopen($file, 'rb');

    fseek($fp, $begin);

    while(!feof($fp)) {

        $p = min(1024, $end - $begin + 1);

        $begin += $p;

        echo fread($fp, $p);

        if($begin>$end){

            break;

        }

    }

    fclose($fp);

}

if($_SERVER["HTTP_REFERER"]=='http://lu.jamxio.com/video/'||$_SERVER["HTTP_REFERER"]=='http://lu.jamxio.com/video/index.html'){
/*header("Location:http://lu.jamxio.com/video/jamxio.mp4",302);
die();*/
    PutMovie("jamxio.php");



}else

    ob_clean();

    header("HTTP/1.1 204 No Content");

?>

