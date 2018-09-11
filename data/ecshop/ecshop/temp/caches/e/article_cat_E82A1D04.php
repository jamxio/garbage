<?php exit;?>a:3:{s:8:"template";a:8:{i:0;s:58:"/data/wwwroot/ecshop/ecshop/themes/default/article_cat.dwt";i:1;s:66:"/data/wwwroot/ecshop/ecshop/themes/default/library/page_header.lbi";i:2;s:62:"/data/wwwroot/ecshop/ecshop/themes/default/library/ur_here.lbi";i:3;s:66:"/data/wwwroot/ecshop/ecshop/themes/default/library/filter_attr.lbi";i:4;s:66:"/data/wwwroot/ecshop/ecshop/themes/default/library/price_grade.lbi";i:5;s:62:"/data/wwwroot/ecshop/ecshop/themes/default/library/history.lbi";i:6;s:60:"/data/wwwroot/ecshop/ecshop/themes/default/library/pages.lbi";i:7;s:66:"/data/wwwroot/ecshop/ecshop/themes/default/library/page_footer.lbi";}s:7:"expires";i:1535673425;s:8:"maketime";i:1535669825;}<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="Generator" content="ECSHOP v3.6.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="" />
<meta name="Description" content="网店帮助分类" />
<title>网店帮助分类_系统分类_ECSHOP演示站 - Powered by ECShop</title>
<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" href="animated_favicon.gif" type="image/gif" />
<link href="themes/default/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/common.js"></script></head>
<body>
<script type="text/javascript">
var process_request = "正在处理您的请求...";
</script>
<div class="top-bar">
  <div class="fd_top fd_top1">
    <div class="bar-left">
          <div class="top_menu1"> <script type="text/javascript" src="js/transport.js"></script><script type="text/javascript" src="js/utils.js"></script> <font id="ECS_MEMBERZONE">45ea207d7a2b68c49582d2d22adf953amember_info|a:1:{s:4:"name";s:11:"member_info";}45ea207d7a2b68c49582d2d22adf953a </font> </div>
    </div>
    <div class="bar-cart">
      <div class="fl cart-yh">
        <a href="user.php" class="">用户中心</a>
      </div>
             <div class="cart" id="ECS_CARTINFO"> 45ea207d7a2b68c49582d2d22adf953acart_info|a:1:{s:4:"name";s:9:"cart_info";}45ea207d7a2b68c49582d2d22adf953a </div>
    </div>
  </div>
</div>
<div class="nav-menu">
  <div class="wrap">
    <div class="logo"><a href="index.php" name="top"><img src="themes/default/images/logo.gif" /></a></div>
    <div id="mainNav" class="clearfix maxmenu">
      <div class="m_left">
      <ul>
        <li><a href="index.php" class="cur">首页</a></li>
                        <li><a href="category.php?id=16" 
        
                    >服装</a></li>
                                        <li><a href="category.php?id=22" 
        
                    >移动电源</a></li>
                                        <li><a href="category.php?id=25" 
        
                    >数码时尚</a></li>
                                        <li><a href="category.php?id=26" 
        
                    >家用电器</a></li>
                                        <li><a href="category.php?id=25" 
        
                    >数码时尚</a></li>
                              </ul>
      </div>
    </div>
    <div class="serach-box">
      <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()" class="f_r">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="135"><input name="keywords" type="text" id="keyword" value="" class="B_input"  /></td>
            <td><input name="imageField" type="submit" value="搜索" class="go" style="cursor:pointer;" /></td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</div>
<div class="clear0 "></div>
<div class="block box">
 <div id="ur_here">
  <div class="path"><div>当前位置: <a href=".">首页</a> <code>&gt;</code> <a href="article_cat.php?id=1">系统分类</a> <code>&gt;</code> <a href="article_cat.php?id=3">网店帮助分类</a></div></div> </div>
</div>
<div class="blank"></div>
<div class="block clearfix">
  
  <div class="AreaL">
    
 
  
    
     
<div class="box" id='history_div'>
 <div class="box_1">
  <h3><span>浏览历史</span></h3>
  <div class="boxCenterList clearfix" id='history_list'>
    45ea207d7a2b68c49582d2d22adf953ahistory|a:1:{s:4:"name";s:7:"history";}45ea207d7a2b68c49582d2d22adf953a  </div>
 </div>
</div>
 <div class="clear10"></div>
<script type="text/javascript">
if (document.getElementById('history_list').innerHTML.replace(/\s/g,'').length<1)
{
    document.getElementById('history_div').style.display='none';
}
else
{
    document.getElementById('history_div').style.display='block';
}
function clear_history()
{
Ajax.call('user.php', 'act=clear_history',clear_history_Response, 'GET', 'TEXT',1,1);
}
function clear_history_Response(res)
{
document.getElementById('history_list').innerHTML = '您已清空最近浏览过的商品';
}
</script>  </div>
  
  
  <div class="AreaR">
   <div class="box">
   <div class="box_1">
    <h3><span>文章列表</span></h3>
    <div class="boxCenterList">
          <form action="" name="search_form" method="post" class="article_search">
        <input name="keywords" type="text" id="requirement" value="" class="inputBg" />
        <input name="id" type="hidden" value="3" />
        <input name="cur_url" id="cur_url" type="hidden" value="" />
        <input type="submit" value="立即搜索" class="bnt_blue_1" />
      </form>
      <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
      <tr>
        <th bgcolor="#ffffff">文章标题</th>
          <th bgcolor="#ffffff">作者</th>
          <th bgcolor="#ffffff">添加日期</th>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=23" title="产品质量保证 " class="f6">产品质量保证</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=12" title="如何分辨原装电池" class="f6">如何分辨原装电池</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=26" title="投诉与建议 " class="f6">投诉与建议</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=25" title="选机咨询 " class="f6">选机咨询</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=24" title="网站故障报告" class="f6">网站故障报告</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=22" title="售后服务保证 " class="f6">售后服务保证</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=21" title="退换货原则" class="f6">退换货原则</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=20" title="我的订单" class="f6">我的订单</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=19" title="我的收藏" class="f6">我的收藏</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
            <tr>
        <td bgcolor="#ffffff"><a href="article.php?id=18" title="资金管理" class="f6">资金管理</a></td>
          <td bgcolor="#ffffff">ECSHOP</td>
          <td bgcolor="#ffffff" align="center">2009-05-18</td>
        </tr>
          </table>
    </div>
   </div>
  </div>
  <div class="blank5"></div>
   <div class="page-form clearfix">
<form name="selectPageForm" action="/article_cat.php" method="get">
    
  <div id="pager" class="pagebar">
                        <span class="lis page_now">1</span>
                <a href="article_cat.php?id=3&amp;page=2" class="lis">2</a>
                    <a class="next" href="article_cat.php?id=3&amp;page=2">下一页</a>
              </div>
  
  </form>
<script type="Text/Javascript" language="JavaScript">
<!--
function selectPage(sel)
{
  sel.form.submit();
}
//-->
</script>
</div>  </div>  
  
</div>
<div class="blank"></div>
<div class="foot-body">
  <div class="bads"><img src="themes/default/images/bottom.jpg"></div>
  <div class="clear10"></div>
  
     <div class="foot-help">
                      <dl>
          <dt class="xs-1">新手上路 </dt>
                      <dd><a href="article.php?id=9" target="_blank" title="售后流程">售后流程</a></dd>
                    <dd><a href="article.php?id=10" target="_blank" title="购物流程">购物流程</a></dd>
                    <dd><a href="article.php?id=11" target="_blank" title="订购方式">订购方式</a></dd>
           
        </dl>
         
                        <dl>
          <dt class="xs-2">手机常识 </dt>
                      <dd><a href="article.php?id=12" target="_blank" title="如何分辨原装电池">如何分辨原装电池</a></dd>
                    <dd><a href="article.php?id=13" target="_blank" title="如何分辨水货手机 ">如何分辨水货手机</a></dd>
                    <dd><a href="article.php?id=14" target="_blank" title="如何享受全国联保">如何享受全国联保</a></dd>
           
        </dl>
         
                        <dl>
          <dt class="xs-3">配送与支付 </dt>
                      <dd><a href="article.php?id=15" target="_blank" title="货到付款区域">货到付款区域</a></dd>
                    <dd><a href="article.php?id=16" target="_blank" title="配送支付智能查询 ">配送支付智能查询</a></dd>
                    <dd><a href="article.php?id=17" target="_blank" title="支付方式说明">支付方式说明</a></dd>
           
        </dl>
         
                        <dl>
          <dt class="xs-4">会员中心</dt>
                      <dd><a href="article.php?id=18" target="_blank" title="资金管理">资金管理</a></dd>
                    <dd><a href="article.php?id=19" target="_blank" title="我的收藏">我的收藏</a></dd>
                    <dd><a href="article.php?id=20" target="_blank" title="我的订单">我的订单</a></dd>
           
        </dl>
         
                 
                 
         
        <div class="foot-weixin">
          <div class="weixin-txt">关注demo微信</div>
          <div class="weixin-pic">
            <img src="themes/default/images/weixin.jpg">
          </div>
        </div>
    </div>
     
    
   
  
  <div class="blank"></div>
  
<div class="footer_info"> &copy; 2005-2018 ECSHOP 版权所有，并保留所有权利。       <br />
      <a href="http://xyunqi.com/products/ecshop?from=nav" target="_blank" style=" font-family:Verdana; font-size:11px;">Powered&nbsp;by&nbsp;<strong><span style="color: #3366FF">ECShop</span>&nbsp;<span style="color: #FF9966">v3.6.0</span></strong></a>&nbsp;<a href="http://www.ecshop.com/license.php?product=ecshop_b2c&url=http%3A%2F%2Fecshop.jamxio.com%2F" target="_blank"
>&nbsp;&nbsp;Licensed</a><br />
            <div>ICP备案证书号:<a href="http://www.miibeian.gov.cn/" target="_blank"></a></div>
    </div>
  <div class="clear10"></div>
</div>
 
 
</body>
<script type="text/javascript">
document.getElementById('cur_url').value = window.location.href;
</script>
</html>
