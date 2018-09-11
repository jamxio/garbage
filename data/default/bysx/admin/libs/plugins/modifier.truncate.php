<?php
/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */


/**
 * Smarty truncate modifier plugin
 *
 * Type:     modifier<br>
 * Name:     truncate<br>
 * Purpose:  Truncate a string to a certain length if necessary,
 *           optionally splitting in the middle of a word, and
 *           appending the $etc string or inserting $etc into the middle.
 * @link http://smarty.php.net/manual/en/language.modifier.truncate.php
 *          truncate (Smarty online manual)
 * @author   Monte Ohrt <monte at ohrt dot com>
 * @param string
 * @param integer
 * @param string
 * @param boolean
 * @param boolean
 * @return string
 */
function smarty_modifier_truncate($string, $length = 80, $etc = '...',
                                  $break_words = false, $middle = false)
{
    if ($length == 0)return '';

    if (strlen($string) > $length) {
        $length -= min($length, strlen($etc));
        if (!$break_words && !$middle) {
            //$string = preg_replace('/\s+?(\S+)?$/', '', mb_substr($string, 0, $length+1,"utf8"));
			$string = preg_replace('/\s+?(\S+)?$/', '', smarty_cutstr($string,$length+1));
        }
		
/*        if(!$middle) {
            return mb_substr($string, 0, $length,"utf8") . $etc;
        } else {
            return mb_substr($string, 0, $length/2,"utf8") . $etc . mb_substr($string, -$length/2,"utf8");
        }*/
		//by ddcai 2009-04-21修改
		if(!$middle) {
			return smarty_cutstr($string,$length).$etc;
		} else {
			return smarty_cutstr($string,$length/2) . $etc . smarty_cutstr($string, -$length/2);
		}
    } else {
        return $string;
    }
}

//by ddcai 2009-04-21 增加
function smarty_cutstr($string, $length) {
/*
功能:按长度截取字符串
$string, $length, $dot,$charset
字符串,要取长度,截断符,编码
*/
	if(strlen($string) <= $length) {
		return $string;
	}

	$string = str_replace(array('&amp;', '&quot;', '&lt;', '&gt;'), array('&', '"', '<', '>'), $string);

	$strcut = '';

		$n = $tn = $noc = 0;
		while($n < strlen($string)) {

			$t = ord($string[$n]);
			if($t == 9 || $t == 10 || (32 <= $t && $t <= 126)) {
				$tn = 1; $n++; $noc++;
			} elseif(194 <= $t && $t <= 223) {
				$tn = 2; $n += 2; $noc += 2;
			} elseif(224 <= $t && $t <= 239) {
				$tn = 3; $n += 3; $noc += 2;
			} elseif(240 <= $t && $t <= 247) {
				$tn = 4; $n += 4; $noc += 2;
			} elseif(248 <= $t && $t <= 251) {
				$tn = 5; $n += 5; $noc += 2;
			} elseif($t == 252 || $t == 253) {
				$tn = 6; $n += 6; $noc += 2;
			} else {
				$n++;
			}

			if($noc >= $length) {
				break;
			}
		}
		if($noc > $length) {
			$n -= $tn;
		}
		$strcut = substr($string, 0, $n);
		
	$strcut = str_replace(array('&', '"', '<', '>'), array('&amp;', '&quot;', '&lt;', '&gt;'), $strcut);

	return $strcut;
}

/* vim: set expandtab: */

?>
