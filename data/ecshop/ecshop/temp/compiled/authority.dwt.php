<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en"><head>
<meta name="Generator" content="ECSHOP v3.6.0" />
  <meta charset="UTF-8">
  <title>Eshop</title>
</head>
<body>
<style>
  body{
    margin: 0;
    background: url(admin/images/icloud-bg.png) no-repeat;
    -webkit-background-size: contain;
    background-size: cover;
    font-family: Microsoft Yahei,"Arial";
  }

  /*login page --by evelyn*/

  .login-hd{
    padding: 40px 0 40px 50px;
  }
  .center-wrap{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .center-wrap .bd-logo p{
    color: #7f8084;
  }
  .center-wrap .bd-logo img {
    width: 206px;
    height: 65px;
  }
  .login-panel {
    width: 500px;
    background: rgba(255,255,255,.85);
    border: none;
    border-radius: 0;
    color: #A1A1A1;
    padding: 35px 25px 20px;
    overflow: hidden;
    margin-top: 50px;
  }
  .login-panel input[type=text], .login-panel input[type=password] {
    -webkit-appearance: none;
    font-family: Microsoft Yahei;
    border: none;
    background-color: #fff;
    color: #8a8a8a;
    width: 100%;
    height: 48px;
    line-height: 49px;
    text-indent: 50px;
    box-shadow: inset 30px 30px 0 20px #fff;
  }
  .login-panel .bside input[type="checkbox"] {
    float: left;
    width: 15px;
    height: 15px;
    margin: 2px 8px 0 0;
  }
  .login-panel .bside label {
    color: #666;
    float: left;
  }
  .login-panel .bside a {
    font-size: 12px;
    color: #7e7e7e;
    float: right;
    text-decoration: none;
    display: inline-block;
    text-align: right;
  }
  .login-cloud{
    margin: 0 auto;
    width: 300px;
    padding: 15px 25px 20px;
    background: rgba(112,120,140,.75);
  }
  .login-cloud .hd{
    position: relative;
    color: #fff;
    line-height: 2;
  }
  .login-cloud .hd span{
    color: #c2bfbd;
  }
  .login-cloud img{
    width: 100%;
    cursor: pointer;
  }
  .login-panel .main{
    border-radius: 5px;
    overflow: hidden;
    height: 450px;
  }
  .copy-right{
    position: fixed;
    width: 100%;
    color: #efefef;
    bottom: 30px;
    font-size: 12px;
    text-align: center;
  }
  .login-panel .panel-cross{
    text-align: right;
    padding-bottom:5px;
  }
  .login-panel .panel-cross a{
    color: #7e7e7e;
    text-decoration:none;
  }
</style>
  <div class="login-hd">
    <img src="admin/images/shopex.png" alt="shopex" class="logo">
  </div>
  <div class="center-wrap">
    <div class="bd-logo">
      <img src="admin/images/icloud-logo.png" width="373" height="103" border="0" alt="ECSHOP"><br>
      <p class="wbd-logo-p">帮助中小企业快速开启电子商务</p>
    </div>
    <div class="login-panel">
      <div class="panel-cross"><a href="install/index.php?step=done">跳过授权</a></div>
      <div class="main">
        <iframe id="loginFrame" src="<?php echo $this->_var['authority_url']; ?>" height="450" width="500" frameborder="0" scrolling="no"></iframe>
      </div>
     </div>
  </div>
  <div class="copy-right">&copy; 2003-2015 ShopEx,Inc.All rights reserved.</div>

</body>
</html>