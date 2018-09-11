<?PHP
include_once("../comn/config.php");//引入公共配置文件


include_once("admin.smarty.class.php");//模板处理

$smarty = new admin_Smarty();


$smarty->assign("indexurl","../");
?>