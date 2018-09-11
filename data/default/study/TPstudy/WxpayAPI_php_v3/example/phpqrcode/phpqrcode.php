<?php

/*
 * PHP QR Code encoder
 *
 * This file contains MERGED version of PHP QR Code library.
 * It was auto-generated from full version for your convenience.
 *
 * This merged version was configured to not requre any external files,
 * with disabled cache, error loging and weker but faster mask matching.
 * If you need tune it up please use non-merged version.
 *
 * For full version, documentation, examples of use please visit:
 *
 *    http://phpqrcode.sourceforge.net/
 *    https://sourceforge.net/projects/phpqrcode/
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */
 
 

/*
 * Version: 1.1.4
 * Build: 2010100721
 */



//---- qrconst.php -----------------------------





/*
 * PHP QR Code encoder
 *
 * Common constants
 *
 * Based on libqrencode C library distributed under LGPL 2.1
 * Copyright (C) 2006, 2007, 2008, 2009 Kentaro Fukuchi <fukuchi@megaui.net>
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */
 
	// Encoding modes
	 
	define('QR_MODE_NUL', -1);
	define('QR_MODE_NUM', 0);
	define('QR_MODE_AN', 1);
	define('QR_MODE_8', 2);
	define('QR_MODE_KANJI', 3);
	define('QR_MODE_STRUCTURE', 4);

	// Levels of error correction.

	define('QR_ECLEVEL_L', 0);
	define('QR_ECLEVEL_M', 1);
	define('QR_ECLEVEL_Q', 2);
	define('QR_ECLEVEL_H', 3);
	
	// Supported output formats
	
	define('QR_FORMAT_TEXT', 0);
	define('QR_FORMAT_PNG',  1);
	
	class qrstr {
		public static function set(&$srctab, $x, $y, $repl, $replLen = false) {
			$srctab[$y] = substr_replace($srctab[$y], ($replLen !== false)?substr($repl,0,$replLen):$repl, $x, ($replLen !== false)?$replLen:strlen($repl));
		}
	}	



//---- merged_config.php -----------------------------




/*
 * PHP QR Code encoder
 *
 * Config file, tuned-up for merged verion
 */
     
    define('QR_CACHEABLE', false);       // use cache - more disk reads but less CPU power, masks and format templates are stored there
    define('QR_CACHE_DIR', false);       // used when QR_CACHEABLE === true
    define('QR_LOG_DIR', false);         // default error logs dir   
    
    define('QR_FIND_BEST_MASK', true);                                                          // if true, estimates best mask (spec. default, but extremally slow; set to false to significant performance boost but (propably) worst quality code
    define('QR_FIND_FROM_RANDOM', 2);                                                       // if false, checks all masks available, otherwise value tells count of masks need to be checked, mask id are got randomly
    define('QR_DEFAULT_MASK', 2);                                                               // when QR_FIND_BEST_MASK === false
                                                  
    define('QR_PNG_MAXIMUM_SIZE',  1024);                                                       // maximum allowed png image width (in pixels), tune to make sure GD and PHP can handle such big images
                                                  



//---- qrtools.php -----------------------------




/*
 * PHP QR Code encoder
 *
 * Toolset, handy and debug utilites.
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */

    class QRtools {
    
        //----------------------------------------------------------------------
        public static function binarize($frame)
        {
            $len = count($frame);
            foreach ($frame as &$frameLine) {
                
                for($i=0; $i<$len; $i++) {
                    $frameLine[$i] = (ord($frameLine[$i])&1)?'1':'0';
                }
            }
            
            return $frame;
        }
        
        //----------------------------------------------------------------------
        public static function tcpdfBarcodeArray($code, $mode = 'QR,L', $tcPdfVersion = '4.5.037')
        {
            $barcode_array = array();
            
            if (!is_array($mode))
                $mode = explode(',', $mode);
                
            $eccLevel = 'L';
                
            if (count($mode) > 1) {
                $eccLevel = $mode[1];
            }
                
            $qrTab = QRcode::text($code, false, $eccLevel);
            $size = count($qrTab);
                
            $barcode_array['num_rows'] = $size;
            $barcode_array['num_cols'] = $size;
            $barcode_array['bcode'] = array();
                
            foreach ($qrTab as $line) {
                $arrAdd = array();
                foreach(str_split($line) as $char)
                    $arrAdd[] = ($char=='1')?1:0;
                $barcode_array['bcode'][] = $arrAdd;
            }
                    
            return $barcode_array;
        }
        
        //----------------------------------------------------------------------
        public static function clearCache()
        {
            self::$frames = array();
        }
        
        //----------------------------------------------------------------------
        public static function buildCache()
        {
			QRtools::markTime('before_build_cache');
			
			$mask = new QRmask();
            for ($a=1; $a <= QRSPEC_VERSION_MAX; $a++) {
                $frame = QRspec::newFrame($a);
                if (QR_IMAGE) {
                    $fileName = QR_CACHE_DIR.'frame_'.$a.'.png';
                    QRimage::png(self::binarize($frame), $fileName, 1, 0);
                }
				
				$width = count($frame);
				$bitMask = array_fill(0, $width, array_fill(0, $width, 0));
				for ($maskNo=0; $maskNo<8; $maskNo++)
					$mask->makeMaskNo($maskNo, $width, $frame, $bitMask, true);
            }
			
			QRtools::markTime('after_build_cache');
        }

        //----------------------------------------------------------------------
        public static function log($outfile, $err)
        {
            if (QR_LOG_DIR !== false) {
                if ($err != '') {
                    if ($outfile !== false) {
                        file_put_contents(QR_LOG_DIR.basename($outfile).'-errors.txt', date('Y-m-d H:i:s').': '.$err, FILE_APPEND);
                    } else {
                        file_put_contents(QR_LOG_DIR.'errors.txt', date('Y-m-d H:i:s').': '.$err, FILE_APPEND);
                    }
                }    
            }
        }
        
        //----------------------------------------------------------------------
        public static function dumpMask($frame) 
        {
            $width = count($frame);
            for($y=0;$y<$width;$y++) {
                for($x=0;$x<$width;$x++) {
                    echo ord($frame[$y][$x]).',';
                }
            }
        }
        
        //----------------------------------------------------------------------
        public static function markTime($markerId)
        {
            list($usec, $sec) = explode(" ", microtime());
            $time = ((float)$usec + (float)$sec);
            
            if (!isset($GLOBALS['qr_time_bench']))
                $GLOBALS['qr_time_bench'] = array();
            
            $GLOBALS['qr_time_bench'][$markerId] = $time;
        }
        
        //----------------------------------------------------------------------
        public static function timeBenchmark()
        {
            self::markTime('finish');
        
            $lastTime = 0;
            $startTime = 0;
            $p = 0;

            echo '<table cellpadding="3" cellspacing="1">
                    <thead><tr style="border-bottom:1px solid silver"><td colspan="2" style="text-align:center">BENCHMARK</td></tr></thead>
                    <tbody>';

            foreach($GLOBALS['qr_time_bench'] as $markerId=>$thisTime) {
                if ($p > 0) {
                    echo '<tr><th style="text-align:right">till '.$markerId.': </th><td>'.number_format($thisTime-$lastTime, 6).'s</td></tr>';
                } else {
                    $startTime = $thisTime;
                }
                
                $p++;
                $lastTime = $thisTime;
            }
            
            echo '</tbody><tfoot>
                <tr style="border-top:2px solid black"><th style="text-align:right">TOTAL: </th><td>'.number_format($lastTime-$startTime, 6).'s</td></tr>
            </tfoot>
            </table>';
        }
        
    }
    
    //##########################################################################
    
    QRtools::markTime('start');
    



//---- qrspec.php -----------------------------




/*
 * PHP QR Code encoder
 *
 * QR Code specifications
 *
 * Based on libqrencode C library distributed under LGPL 2.1
 * Copyright (C) 2006, 2007, 2008, 2009 Kentaro Fukuchi <fukuchi@megaui.net>
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * The following data / specifications are taken from
 * "Two dimensional symbol -- QR-code -- Basic Specification" (JIS X0510:2004)
 *  or
 * "Automatic identification and data capture techniques -- 
 *  QR Code 2005 bar code symbology specification" (ISO/IEC 18004:2006)
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */
 
    define('QRSPEC_VERSION_MAX', 40);
    define('QRSPEC_WIDTH_MAX',   177);

    define('QRCAP_WIDTH',        0);
    define('QRCAP_WORDS',        1);
    define('QRCAP_REMINDER',     2);
    define('QRCAP_EC',           3);

    class QRspec {
    
        public static $capacity = array(
            array(  0,    0, 0, array(   0,    0,    0,    0)),
            array( 21,   26, 0, array(   7,   10,   13,   17)), // 1
            array( 25,   44, 7, array(  10,   16,   22,   28)),
            array( 29,   70, 7, array(  15,   26,   36,   44)),
            array( 33,  100, 7, array(  20,   36,   52,   64)),
            array( 37,  134, 7, array(  26,   48,   72,   88)), // 5
            array( 41,  172, 7, array(  36,   64,   96,  112)),
            array( 45,  196, 0, array(  40,   72,  108,  130)),
            array( 49,  242, 0, array(  48,   88,  132,  156)),
            array( 53,  292, 0, array(  60,  110,  160,  192)),
            array( 57,  346, 0, array(  72,  130,  192,  224)), //10
            array( 61,  404, 0, array(  80,  150,  224,  264)),
            array( 65,  466, 0, array(  96,  176,  260,  308)),
            array( 69,  532, 0, array( 104,  198,  288,  352)),
            array( 73,  581, 3, array( 120,  216,  320,  384)),
            array( 77,  655, 3, array( 132,  240,  360,  432)), //15
            array( 81,  733, 3, array( 144,  280,  408,  480)),
            array( 85,  815, 3, array( 168,  308,  448,  532)),
            array( 89,  901, 3, array( 180,  338,  504,  588)),
            array( 93,  991, 3, array( 196,  364,  546,  650)),
            array( 97, 1085, 3, array( 224,  416,  600,  700)), //20
            array(101, 1156, 4, array( 224,  442,  644,  750)),
            array(105, 1258, 4, array( 252,  476,  690,  816)),
            array(109, 1364, 4, array( 270,  504,  750,  900)),
            array(113, 1474, 4, array( 300,  560,  810,  960)),
            array(117, 1588, 4, array( 312,  588,  870, 1050)), //25
            array(121, 1706, 4, array( 336,  644,  952, 1110)),
            array(125, 1828, 4, array( 360,  700, 1020, 1200)),
            array(129, 1921, 3, array( 390,  728, 1050, 1260)),
            array(133, 2051, 3, array( 420,  784, 1140, 1350)),
            array(137, 2185, 3, array( 450,  812, 1200, 1440)), //30
            array(141, 2323, 3, array( 480,  868, 1290, 1530)),
            array(145, 2465, 3, array( 510,  924, 1350, 1620)),
            array(149, 2611, 3, array( 540,  980, 1440, 1710)),
            array(153, 2761, 3, array( 570, 1036, 1530, 1800)),
            array(157, 2876, 0, array( 570, 1064, 1590, 1890)), //35
            array(161, 3034, 0, array( 600, 1120, 1680, 1980)),
            array(165, 3196, 0, array( 630, 1204, 1770, 2100)),
            array(169, 3362, 0, array( 660, 1260, 1860, 2220)),
            array(173, 3532, 0, array( 720, 1316, 1950, 2310)),
            array(177, 3706, 0, array( 750, 1372, 2040, 2430)) //40
        );
        
        //----------------------------------------------------------------------
        public static function getDataLength($version, $level)
        {
            return self::$capacity[$version][QRCAP_WORDS] - self::$capacity[$version][QRCAP_EC][$level];
        }
        
        //----------------------------------------------------------------------
        public static function getECCLength($version, $level)
        {
            return self::$capacity[$version][QRCAP_EC][$level];
        }
        
        //----------------------------------------------------------------------
        public static function getWidth($version)
        {
            return self::$capacity[$version][QRCAP_WIDTH];
        }
        
        //----------------------------------------------------------------------
        public static function getRemainder($version)
        {
            return self::$capacity[$version][QRCAP_REMINDER];
       