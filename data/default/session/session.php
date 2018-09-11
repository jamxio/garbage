<?php
if(!isset($_GET['id']))exit('无id');
session_id($_GET['id']);
session_start();
$_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];