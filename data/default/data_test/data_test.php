<?php
$img_data = file_get_contents('test.png');
if($_GET['type']==1){
    $encode_img_data = base64_encode($img_data);
    echo "<img src='data:image/png;base64,$encode_img_data'/>";
}else{
    header("Content-Type:image/png;");
    echo $img_data;
}
