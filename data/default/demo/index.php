<?php  
require_once "./phpexcel\Classes\PHPExcel.php";  
// Check prerequisites  
  
$reader = PHPExcel_IOFactory::createReader('Excel5'); //设置以Excel5格式(Excel97-2003工作簿)  
$PHPExcel = $reader->load("./1.xls"); // 载入excel文件  
$sheet = $PHPExcel->getSheet(0); // 读取第一個工作表  
$highestRow = $sheet->getHighestRow(); // 取得总行数  
$highestColumm = $sheet->getHighestColumn(); // 取得总列数  
  
/** 循环读取每个单元格的数据 */  
for ($row = 1; $row <= $highestRow; $row++)    //行号从1开始  
{  
    for ($column = 'A'; $column <= 'G'; $column++)  //列数是以A列开始  
    {  
        $dataset[] = $sheet->getCell($column.$row)->getValue();  
        echo $column.$row.":".$sheet->getCell($column.$row)->getValue()." | ";  
    }
    echo "<br/>";
}  
    echo $highestColumm;
?>