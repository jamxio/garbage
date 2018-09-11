<?PHP
session_start();
	#--------------------------------------------------------------
	#	文字 gb2312、utf-8
	#--------------------------------------------------------------
//error_reporting (E_ALL);	
#error_reporting(0);
error_reporting(E_ALL & E_NOTICE);
ini_set('default_charset', "utf-8");
date_default_timezone_set('Asia/Shanghai');//定义时区
define('WEBPATH_DIR', str_replace("comn".DIRECTORY_SEPARATOR,'',dirname(__FILE__) . DIRECTORY_SEPARATOR)); //整站系统路径

$cookiedomain = '';
$cookiepath = '/';


$UPTYPE["myfiletype"] = array("jpg", "jpeg", "gif", "rar", "doc", "pdf", "pdg","txt","swf","png","xls");//可以上传的文件类型

define("THIS_DATETIME",time());//系统中用入插入数据库的日期时间格式

//##########################################
//邮箱的地址

$GLOBALS["smtpserver"] = "smtp.163.com";//
$GLOBALS["smtpserverport"] = 25;//
$GLOBALS["smtpusermail"] = "邮箱地址";//
$GLOBALS["smtpuser"] = "邮箱地址";//
$GLOBALS["smtppass"] = "111111";//
$GLOBALS["sendername"] ="=?UTF-8?B?".base64_encode("hihigame")."?=";

//##########################################

include_once(WEBPATH_DIR."comn/include/db.config.inc.php");//数据库配置信息
include_once(WEBPATH_DIR."comn/include/mysql.class.php");//数据库存操作
include_once(WEBPATH_DIR."comn/include/smtp.class.php");//发送邮件
include_once(WEBPATH_DIR."comn/include/zdefile.class.php");//文件处理
include_once(WEBPATH_DIR."comn/include/function.inc.php");//公共函数
include_once(WEBPATH_DIR."comn/include/data.function.inc.php");//数据公共函数

$GLOBALS["conn"] = new DB_ZDE();//定义公共的数据库连接
die('dds');
?>