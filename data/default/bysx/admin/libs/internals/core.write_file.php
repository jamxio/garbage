<?php
/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */

/**
 * write out a file to disk
 *
 * @param string $filename
 * @param string $contents
 * @param boolean $create_dirs
 * @return boolean
 */
function smarty_core_write_file($params, &$smarty)
{
    $_dirname = dirname($params['filename']);

    if ($params['create_dirs']) {
        $_params = array('dir' => $_dirname);
        require_once(SMARTY_CORE_DIR . 'core.create_dir_structure.php');
        smarty_core_create_dir_structure($_params, $smarty);
    }

    // write to tmp file, then rename it to avoid file locking race condition
    $_tmp_file = tempnam($_dirname, 'wrt');

    if (!($fd = @fopen($_tmp_file, 'wb'))) {
        $_tmp_file = $_dirname . DIRECTORY_SEPARATOR . uniqid('wrt');
        if (!($fd = @fopen($_tmp_file, 'wb'))) {
            $smarty->trigger_error("problem writing temporary file '$_tmp_file'");
            return false;
        }
    }
	
	if(!empty($smarty->themes_dir))
	{	
		$tmp_dir = $smarty->themes_dir;
		$source = $params['contents'];
		
		/* 修正css,js,images的路径,只修正css/,而./css保留用于与PHP文件同目录的情况,js,images也一样处理 */
		$source = preg_replace('/(<link\shref=["|\'])(css\/)?([a-z0-9A-Z_\/]+\.css["|\']\srel=["|\']stylesheet["|\']\stype=["|\']text\/css["|\'])/i','\1' . $tmp_dir . '\2\3', $source);
		$source = preg_replace('/(<script\s(?:(?:type|language)=["|\'](?:text\/)?javascript["|\']\s){0,2}src=["|\'])(js\/[a-z0-9A-Z_\-\.\/]+\.(?:js|vbs)["|\'](?:\s(?:type|language)=["|\'](?:text\/)?javascript["|\']){0,2}><\/script>)/i', '\1' . $tmp_dir . '\2', $source);
		
		$pattern = array(
			'/((?:background|src)\s*=\s*["|\'])((?:images|img)\/.*?["|\'])/is', // 在images前加上 $tmp_dir
			'/((?:background|background-image):\s*?url\()((?:images|img)\/)/is' // 在images前加上 $tmp_dir
			);
		$replace = array(
			'\1' . $tmp_dir . '\2',
			'\1' . $tmp_dir . '\2'
			);
		$params['contents'] = preg_replace($pattern, $replace, $source);
	}
	
    fwrite($fd, $params['contents']);
    fclose($fd);

    if (DIRECTORY_SEPARATOR == '\\' || !@rename($_tmp_file, $params['filename'])) {
        // On platforms and filesystems that cannot overwrite with rename() 
        // delete the file before renaming it -- because windows always suffers
        // this, it is short-circuited to avoid the initial rename() attempt
        @unlink($params['filename']);
        @rename($_tmp_file, $params['filename']);
    }
    @chmod($params['filename'], $smarty->_file_perms);

    return true;
}

/* vim: set expandtab: */

?>