<?php
session_start();
echo session_id(),'<br/>';
echo session_name()."<br/>";
?>
<script type="text/javascript">document.write(document.cookie);</script>
<?php
echo ("<br>");
var_dump($_SESSION);