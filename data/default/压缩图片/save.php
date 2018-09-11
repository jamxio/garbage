<?php
session_start();
if (isset($_POST['url'])) {
    $_SESSION['url'] = $_POST['url'];

    $img_content = $_SESSION['url'];// 图片内容
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $img_content, $result)) {
        $type = $result[2];
        $new_file = "./".session_id().".{$type}";
        if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $img_content)))) {
            echo $new_file;
        }
    }
} else {
    header('Content-Type:image/jpeg;');
    echo base64_decode(substr($_SESSION['url'], strlen('data:image/jpeg;base64,')));
    #header("Location:javascript:history.back();");
}