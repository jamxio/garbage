<?php
/**
 * 生成mysql数据字典
 */
error_reporting(0);
//配置数据库
$dbserver   = "";
$dbusername = "";
$dbpassword = "";
$database   = "fxm";

Header( "Content-type:   application/octet-stream ");
Header( "Accept-Ranges:   bytes ");
header( "Content-Disposition:   attachment;   filename=$database.docx ");
header( "Expires:   0 ");
header( "Cache-Control:   must-revalidate,   post-check=0,   pre-check=0 ");
header( "Pragma:   public ");

//其他配置
$mysql_conn = @mysql_connect("$dbserver", "$dbusername", "$dbpassword") or die("Mysql connect is error.");
@mysql_select_db($database, $mysql_conn);
@mysql_query('SET NAMES utf8', $mysql_conn);
$table_result = mysql_query('show tables', $mysql_conn);

$no_show_table = array();    //不需要显示的表
$no_show_field = array();   //不需要显示的字段

//取得所有的表名
while($row = mysql_fetch_array($table_result)){
    if(!in_array($row[0],$no_show_table)){
        $tables[]['TABLE_NAME'] = $row[0];
    }
}
//循环取得所有表的备注及表中列消息
foreach ($tables as $k=>$v) {
    $sql  = 'SELECT * FROM ';
    $sql .= 'INFORMATION_SCHEMA.TABLES ';
    $sql .= 'WHERE ';
    $sql .= "table_name = '{$v['TABLE_NAME']}'  AND table_schema = '{$database}'";
    $table_result = mysql_query($sql, $mysql_conn);
    while ($t = mysql_fetch_array($table_result) ) {
        $tables[$k]['TABLE_COMMENT'] = $t['TABLE_COMMENT'];
    }

    $sql  = 'SELECT * FROM ';
    $sql .= 'INFORMATION_SCHEMA.COLUMNS ';
    $sql .= 'WHERE ';
    $sql .= "table_name = '{$v['TABLE_NAME']}' AND table_schema = '{$database}'";

    $fields = array();
    $field_result = mysql_query($sql, $mysql_conn);
    while ($t = mysql_fetch_array($field_result) ) {
        $fields[] = $t;
    }
    $tables[$k]['COLUMN'] = $fields;
}
mysql_close($mysql_conn);
echo
'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>';
?>
<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
    <pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
            <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
                <Relationship Id="rId4"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
                              Target="word/document.xml"/>
                <Relationship Id="rId2"
                              Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
                              Target="docProps/core.xml"/>
                <Relationship Id="rId1"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
                              Target="docProps/app.xml"/>
                <Relationship Id="rId3"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"
                              Target="docProps/custom.xml"/>
            </Relationships>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/_rels/document.xml.rels"
              pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
            <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
                <Relationship Id="rId5"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable"
                              Target="fontTable.xml"/>
                <Relationship Id="rId4"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml"
                              Target="../customXml/item1.xml"/>
                <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
                              Target="theme/theme1.xml"/>
                <Relationship Id="rId2"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings"
                              Target="settings.xml"/>
                <Relationship Id="rId1"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
                              Target="styles.xml"/>
            </Relationships>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/document.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">
        <pkg:xmlData>
            <w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
                        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                        xmlns:o="urn:schemas-microsoft-com:office:office"
                        xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                        xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
                        xmlns:v="urn:schemas-microsoft-com:vml"
                        xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
                        xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
                        xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                        xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
                        xmlns:w10="urn:schemas-microsoft-com:office:word"
                        xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
                        xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
                        xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
                        xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
                        xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
                        xmlns:wpsCustomData="http://www.wps.cn/officeDocument/2013/wpsCustomData"
                        mc:Ignorable="w14 w15 wp14">
                <w:body>
                    <w:p>
                        <w:pPr>
                            <w:jc w:val="center"/>
                            <w:rPr>
                                <w:sz w:val="30"/>
                                <w:szCs w:val="30"/>
                            </w:rPr>
                        </w:pPr>
                        <w:r>
                            <w:rPr>
                                <w:sz w:val="32"/>
                                <w:szCs w:val="32"/>
                            </w:rPr>
                            <w:t><?php echo $database;?></w:t>
                        </w:r>
                        <w:r>
                            <w:rPr>
                                <w:rFonts w:hint="eastAsia"/>
                                <w:sz w:val="32"/>
                                <w:szCs w:val="32"/>
                            </w:rPr>
                            <w:t>数据库文档</w:t>
                        </w:r>
                    </w:p>
                    <?php
                    //循环所有表
                    foreach ($tables as $k=>$v) {
                        ?>
                        <w:p>
                            <w:pPr>
                                <w:rPr>
                                    <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:color w:val="333333"/>
                                    <w:szCs w:val="21"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                            </w:pPr>
                        </w:p>
                        <w:p>
                            <w:pPr>
                                <w:rPr>
                                    <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:b/>
                                    <w:bCs/>
                                    <w:color w:val="333333"/>
                                    <w:sz w:val="28"/>
                                    <w:szCs w:val="28"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                            </w:pPr>
                            <w:r>
                                <w:rPr>
                                    <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:b/>
                                    <w:bCs/>
                                    <w:color w:val="333333"/>
                                    <w:sz w:val="28"/>
                                    <w:szCs w:val="28"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                                <w:t><?php echo $k + 1;?></w:t>
                            </w:r>
                            <w:r>
                                <w:rPr>
                                    <w:rFonts w:hint="eastAsia" w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:b/>
                                    <w:bCs/>
                                    <w:color w:val="333333"/>
                                    <w:sz w:val="28"/>
                                    <w:szCs w:val="28"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                                <w:t>、<?php echo $v['TABLE_COMMENT'];?>（</w:t>
                            </w:r>
                            <w:r>
                                <w:rPr>
                                    <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:b/>
                                    <w:bCs/>
                                    <w:color w:val="333333"/>
                                    <w:sz w:val="28"/>
                                    <w:szCs w:val="28"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                                <w:t><?php echo $v['TABLE_NAME'];?></w:t>
                            </w:r>
                            <w:r>
                                <w:rPr>
                                    <w:rFonts w:hint="eastAsia" w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                    <w:b/>
                                    <w:bCs/>
                                    <w:color w:val="333333"/>
                                    <w:sz w:val="28"/>
                                    <w:szCs w:val="28"/>
                                    <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                </w:rPr>
                                <w:t>）</w:t>
                            </w:r>
                        </w:p>
                        <w:tbl>
                            <w:tblPr>
                                <w:tblStyle w:val="3"/>
                                <w:tblW w:w="8460" w:type="dxa"/>
                                <w:tblInd w:w="0" w:type="dxa"/>
                                <w:tblBorders>
                                    <w:top w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    <w:left w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    <w:bottom w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    <w:right w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    <w:insideH w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    <w:insideV w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                </w:tblBorders>
                                <w:tblLayout w:type="fixed"/>
                                <w:tblCellMar>
                                    <w:top w:w="0" w:type="dxa"/>
                                    <w:left w:w="108" w:type="dxa"/>
                                    <w:bottom w:w="0" w:type="dxa"/>
                                    <w:right w:w="108" w:type="dxa"/>
                                </w:tblCellMar>
                            </w:tblPr>
                            <w:tblGrid>
                                <w:gridCol w:w="1130"/>
                                <w:gridCol w:w="1490"/>
                                <w:gridCol w:w="1328"/>
                                <w:gridCol w:w="1394"/>
                                <w:gridCol w:w="1472"/>
                                <w:gridCol w:w="1646"/>
                            </w:tblGrid>
                            <w:tr>
                                <w:tblPrEx>
                                    <w:tblBorders>
                                        <w:top w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                        <w:left w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                        <w:bottom w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                        <w:right w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                        <w:insideH w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                        <w:insideV w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                    </w:tblBorders>
                                    <w:tblLayout w:type="fixed"/>
                                    <w:tblCellMar>
                                        <w:top w:w="0" w:type="dxa"/>
                                        <w:left w:w="108" w:type="dxa"/>
                                        <w:bottom w:w="0" w:type="dxa"/>
                                        <w:right w:w="108" w:type="dxa"/>
                                    </w:tblCellMar>
                                </w:tblPrEx>
                                <w:trPr>
                                    <w:trHeight w:val="532" w:hRule="atLeast"/>
                                </w:trPr>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1130" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>字段名</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1490" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>数据类型</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1328" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>默认值</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1394" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>允许非空</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1472" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>自动递增</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="1646" w:type="dxa"/>
                                        <w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>
                                    </w:tcPr>
                                    <w:p>
                                        <w:pPr>
                                            <w:spacing w:line="390" w:lineRule="atLeast"/>
                                            <w:jc w:val="center"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:hint="eastAsia" w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                <w:b/>
                                                <w:bCs/>
                                                <w:color w:val="000000"/>
                                                <w:szCs w:val="21"/>
                                            </w:rPr>
                                            <w:t>备注</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <?php
                            foreach ($v['COLUMN'] as $f) {
                                if(@!is_array($no_show_field[$v['TABLE_NAME']])){
                                    $no_show_field[$v['TABLE_NAME']] = array();
                                }
                                if(!in_array($f['COLUMN_NAME'],$no_show_field[$v['TABLE_NAME']])){
                                    ?>
                                    <w:tr>
                                        <w:tblPrEx>
                                            <w:tblBorders>
                                                <w:top w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                                <w:left w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                                <w:bottom w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                                <w:right w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                                <w:insideH w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                                <w:insideV w:val="single" w:color="DBDBDB" w:sz="4" w:space="0"/>
                                            </w:tblBorders>
                                            <w:tblLayout w:type="fixed"/>
                                            <w:tblCellMar>
                                                <w:top w:w="0" w:type="dxa"/>
                                                <w:left w:w="108" w:type="dxa"/>
                                                <w:bottom w:w="0" w:type="dxa"/>
                                                <w:right w:w="108" w:type="dxa"/>
                                            </w:tblCellMar>
                                        </w:tblPrEx>
                                        <w:trPr>
                                            <w:trHeight w:val="621" w:hRule="atLeast"/>
                                        </w:trPr>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1130" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                </w:pPr>
                                                <w:r>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                    <w:t><?php echo $f['COLUMN_NAME'];?></w:t>
                                                </w:r>
                                            </w:p>
                                        </w:tc>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1490" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                </w:pPr>
                                                <w:r>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                    <w:t><?php echo $f['COLUMN_TYPE'];?></w:t>
                                                </w:r>
                                            </w:p>
                                        </w:tc>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1328" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:jc w:val="center"/>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                    <w:t><?php echo $f['COLUMN_DEFAULT'];?></w:t>
                                                </w:pPr>
                                            </w:p>
                                        </w:tc>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1394" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:jc w:val="center"/>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                </w:pPr>
                                                <w:r>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="微软雅黑" w:hAnsi="微软雅黑" w:cs="宋体"/>
                                                        <w:color w:val="000000"/>
                                                        <w:szCs w:val="21"/>
                                                    </w:rPr>
                                                    <w:t><?php echo $f['IS_NULLABLE'];?></w:t>
                                                </w:r>
                                            </w:p>
                                        </w:tc>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1472" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:jc w:val="center"/>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                </w:pPr>
                                                <w:r>
                                                    <w:rPr>
                                                        <w:rFonts w:hint="eastAsia" w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                    <w:t><?php echo ($f['EXTRA']=='auto_increment'?'是':' ');?></w:t>
                                                </w:r>
                                            </w:p>
                                        </w:tc>
                                        <w:tc>
                                            <w:tcPr>
                                                <w:tcW w:w="1646" w:type="dxa"/>
                                            </w:tcPr>
                                            <w:p>
                                                <w:pPr>
                                                    <w:rPr>
                                                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                </w:pPr>
                                                <w:r>
                                                    <w:rPr>
                                                        <w:rFonts w:hint="eastAsia" w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                                        <w:color w:val="333333"/>
                                                        <w:szCs w:val="21"/>
                                                        <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                                                    </w:rPr>
                                                    <w:t><?php echo $f['COLUMN_COMMENT'];?></w:t>
                                                </w:r>
                                            </w:p>
                                        </w:tc>
                                    </w:tr>
                                    <?php
                                }
                            }
                            ?>
                        </w:tbl>
                        <?php
                    }
                    ?>
                    <w:p>
                        <w:pPr>
                            <w:rPr>
                                <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                                <w:color w:val="333333"/>
                                <w:szCs w:val="21"/>
                                <w:shd w:val="clear" w:color="auto" w:fill="F9F9F9"/>
                            </w:rPr>
                        </w:pPr>
                    </w:p>
                    <w:sectPr>
                        <w:pgSz w:w="11906" w:h="16838"/>
                        <w:pgMar w:top="1440" w:right="1800" w:bottom="1440" w:left="1800" w:header="851" w:footer="992"
                                 w:gutter="0"/>
                        <w:cols w:space="425" w:num="1"/>
                        <w:docGrid w:type="lines" w:linePitch="312" w:charSpace="0"/>
                    </w:sectPr>
                </w:body>
            </w:document>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/customXml/_rels/item1.xml.rels"
              pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
            <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
                <Relationship Id="rId1"
                              Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps"
                              Target="itemProps1.xml"/>
            </Relationships>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/customXml/item1.xml" pkg:contentType="application/xml">
        <pkg:xmlData>
            <s:customData xmlns="http://www.wps.cn/officeDocument/2013/wpsCustomData"
                          xmlns:s="http://www.wps.cn/officeDocument/2013/wpsCustomData">
                <customSectProps>
                    <customSectPr/>
                </customSectProps>
            </s:customData>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/customXml/itemProps1.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.customXmlProperties+xml">
        <pkg:xmlData>
            <ds:datastoreItem ds:itemID="{B1977F7D-205B-4081-913C-38D41E755F92}"
                              xmlns:ds="http://schemas.openxmlformats.org/officeDocument/2006/customXml">
                <ds:schemaRefs>
                    <ds:schemaRef ds:uri="http://www.wps.cn/officeDocument/2013/wpsCustomData"/>
                </ds:schemaRefs>
            </ds:datastoreItem>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/docProps/app.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.extended-properties+xml">
        <pkg:xmlData>
            <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
                        xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
                <Template>Normal_Wordconv.dotm</Template>
                <Pages>2</Pages>
                <Words>92</Words>
                <Characters>526</Characters>
                <Lines>0</Lines>
                <Paragraphs>0</Paragraphs>
                <TotalTime>11</TotalTime>
                <ScaleCrop>false</ScaleCrop>
                <LinksUpToDate>false</LinksUpToDate>
                <CharactersWithSpaces>0</CharactersWithSpaces>
                <Application>WPS Office_10.1.0.7346_F1E327BC-269C-435d-A152-05C5408002CA</Application>
                <DocSecurity>0</DocSecurity>
            </Properties>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/docProps/core.xml"
              pkg:contentType="application/vnd.openxmlformats-package.core-properties+xml">
        <pkg:xmlData>
            <cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
                               xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"
                               xmlns:dcmitype="http://purl.org/dc/dcmitype/"
                               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <dcterms:created xsi:type="dcterms:W3CDTF">2014-10-29T12:08:00Z</dcterms:created>
                <dc:creator>Shaoling</dc:creator>
                <cp:lastModifiedBy>Administrator</cp:lastModifiedBy>
                <dcterms:modified xsi:type="dcterms:W3CDTF">2018-05-09T03:30:52Z</dcterms:modified>
                <cp:revision>2</cp:revision>
            </cp:coreProperties>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/docProps/custom.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.custom-properties+xml">
        <pkg:xmlData>
            <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties"
                        xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
                <property fmtid="{D5CDD505-2E9C-101B-9397-08002B2CF9AE}" pid="2" name="KSOProductBuildVer">
                    <vt:lpwstr>2052-10.1.0.7346</vt:lpwstr>
                </property>
            </Properties>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/fontTable.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml">
        <pkg:xmlData>
            <w:fonts xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                     xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                     xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" mc:Ignorable="w14">
                <w:font w:name="Times New Roman">
                    <w:panose1 w:val="02020603050405020304"/>
                    <w:charset w:val="00"/>
                    <w:family w:val="roman"/>
                    <w:pitch w:val="variable"/>
                    <w:sig w:usb0="20007A87" w:usb1="80000000" w:usb2="00000008" w:usb3="00000000" w:csb0="000001FF"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="宋体">
                    <w:panose1 w:val="02010600030101010101"/>
                    <w:charset w:val="86"/>
                    <w:family w:val="auto"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="00000003" w:usb1="288F0000" w:usb2="00000006" w:usb3="00000000" w:csb0="00040001"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="Wingdings">
                    <w:panose1 w:val="05000000000000000000"/>
                    <w:charset w:val="02"/>
                    <w:family w:val="auto"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="00000000" w:usb1="00000000" w:usb2="00000000" w:usb3="00000000" w:csb0="80000000"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="Arial">
                    <w:panose1 w:val="020B0604020202020204"/>
                    <w:charset w:val="01"/>
                    <w:family w:val="swiss"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="E0002AFF" w:usb1="C0007843" w:usb2="00000009" w:usb3="00000000" w:csb0="400001FF"
                           w:csb1="FFFF0000"/>
                </w:font>
                <w:font w:name="黑体">
                    <w:panose1 w:val="02010609060101010101"/>
                    <w:charset w:val="86"/>
                    <w:family w:val="auto"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="800002BF" w:usb1="38CF7CFA" w:usb2="00000016" w:usb3="00000000" w:csb0="00040001"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="Courier New">
                    <w:panose1 w:val="02070309020205020404"/>
                    <w:charset w:val="01"/>
                    <w:family w:val="modern"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="E0002AFF" w:usb1="C0007843" w:usb2="00000009" w:usb3="00000000" w:csb0="400001FF"
                           w:csb1="FFFF0000"/>
                </w:font>
                <w:font w:name="Symbol">
                    <w:panose1 w:val="05050102010706020507"/>
                    <w:charset w:val="02"/>
                    <w:family w:val="roman"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="00000000" w:usb1="00000000" w:usb2="00000000" w:usb3="00000000" w:csb0="80000000"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="Calibri">
                    <w:panose1 w:val="020F0502020204030204"/>
                    <w:charset w:val="00"/>
                    <w:family w:val="swiss"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="E10002FF" w:usb1="4000ACFF" w:usb2="00000009" w:usb3="00000000" w:csb0="2000019F"
                           w:csb1="00000000"/>
                </w:font>
                <w:font w:name="Arial">
                    <w:panose1 w:val="020B0604020202020204"/>
                    <w:charset w:val="00"/>
                    <w:family w:val="swiss"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="E0002AFF" w:usb1="C0007843" w:usb2="00000009" w:usb3="00000000" w:csb0="400001FF"
                           w:csb1="FFFF0000"/>
                </w:font>
                <w:font w:name="微软雅黑">
                    <w:panose1 w:val="020B0503020204020204"/>
                    <w:charset w:val="86"/>
                    <w:family w:val="swiss"/>
                    <w:pitch w:val="default"/>
                    <w:sig w:usb0="80000287" w:usb1="280F3C52" w:usb2="00000016" w:usb3="00000000" w:csb0="0004001F"
                           w:csb1="00000000"/>
                </w:font>
            </w:fonts>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/settings.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml">
        <pkg:xmlData>
            <w:settings xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                        xmlns:o="urn:schemas-microsoft-com:office:office"
                        xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                        xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
                        xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w10="urn:schemas-microsoft-com:office:word"
                        xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                        xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
                        xmlns:sl="http://schemas.openxmlformats.org/schemaLibrary/2006/main" mc:Ignorable="w14">
                <w:zoom w:percent="110"/>
                <w:doNotDisplayPageBoundaries w:val="1"/>
                <w:embedSystemFonts/>
                <w:documentProtection w:enforcement="0"/>
                <w:defaultTabStop w:val="420"/>
                <w:drawingGridVerticalSpacing w:val="156"/>
                <w:noPunctuationKerning w:val="1"/>
                <w:characterSpacingControl w:val="compressPunctuation"/>
                <w:noLineBreaksAfter w:lang="zh-CN" w:val="$([{£¥·‘“〈《「『【〔〖〝﹙﹛﹝＄（．［｛￡￥"/>
                <w:noLineBreaksBefore w:lang="zh-CN"
                                      w:val="!%),.:;&gt;?]}¢¨°·ˇˉ―‖’”…‰′″›℃∶、。〃〉》」』】〕〗〞︶︺︾﹀﹄﹚﹜﹞！＂％＇），．：；？］｀｜｝～￠"/>
                <w:compat>
                    <w:spaceForUL/>
                    <w:balanceSingleByteDoubleByteWidth/>
                    <w:doNotLeaveBackslashAlone/>
                    <w:ulTrailSpace/>
                    <w:doNotExpandShiftReturn/>
                    <w:adjustLineHeightInTable/>
                    <w:doNotWrapTextWithPunct/>
                    <w:doNotUseEastAsianBreakRules/>
                    <w:useFELayout/>
                    <w:useNormalStyleForList/>
                    <w:doNotUseIndentAsNumberingTabStop/>
                    <w:useAltKinsokuLineBreakRules/>
                    <w:allowSpaceOfSameStyleInTable/>
                    <w:doNotSuppressIndentation/>
                    <w:doNotAutofitConstrainedTables/>
                    <w:autofitToFirstFixedWidthCell/>
                    <w:underlineTabInNumList/>
                    <w:displayHangulFixedWidth/>
                    <w:splitPgBreakAndParaMark/>
                    <w:doNotVertAlignCellWithSp/>
                    <w:doNotBreakConstrainedForcedTable/>
                    <w:doNotVertAlignInTxbx/>
                    <w:useAnsiKerningPairs/>
                    <w:cachedColBalance/>
                    <w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word"
                                     w:val="11"/>
                </w:compat>
                <w:rsids>
                    <w:rsidRoot w:val="00067440"/>
                    <w:rsid w:val="00067440"/>
                    <w:rsid w:val="007352FF"/>
                    <w:rsid w:val="00966A37"/>
                    <w:rsid w:val="009A25D9"/>
                    <w:rsid w:val="00C279DE"/>
                    <w:rsid w:val="03177493"/>
                    <w:rsid w:val="043976FB"/>
                    <w:rsid w:val="04ED0465"/>
                    <w:rsid w:val="05802F4A"/>
                    <w:rsid w:val="09222A7F"/>
                    <w:rsid w:val="09B5004D"/>
                    <w:rsid w:val="0AE13AF9"/>
                    <w:rsid w:val="0C0471E6"/>
                    <w:rsid w:val="0D8C569C"/>
                    <w:rsid w:val="0D907344"/>
                    <w:rsid w:val="0EBF7422"/>
                    <w:rsid w:val="0EFF32F0"/>
                    <w:rsid w:val="12481E3C"/>
                    <w:rsid w:val="124F6444"/>
                    <w:rsid w:val="13E026CB"/>
                    <w:rsid w:val="14C12D7A"/>
                    <w:rsid w:val="15AB3DB3"/>
                    <w:rsid w:val="15B204BF"/>
                    <w:rsid w:val="160713AC"/>
                    <w:rsid w:val="1BA35FE0"/>
                    <w:rsid w:val="1C9646A1"/>
                    <w:rsid w:val="224C5B5A"/>
                    <w:rsid w:val="22DA40BC"/>
                    <w:rsid w:val="248C3517"/>
                    <w:rsid w:val="25CA204E"/>
                    <w:rsid w:val="26E8212B"/>
                    <w:rsid w:val="27794DB2"/>
                    <w:rsid w:val="29AF7DB5"/>
                    <w:rsid w:val="2A0F3521"/>
                    <w:rsid w:val="2CA16533"/>
                    <w:rsid w:val="2DB14D64"/>
                    <w:rsid w:val="2F531993"/>
                    <w:rsid w:val="311D3716"/>
                    <w:rsid w:val="36283225"/>
                    <w:rsid w:val="37D752D7"/>
                    <w:rsid w:val="382C5007"/>
                    <w:rsid w:val="3AAA183B"/>
                    <w:rsid w:val="3E5757EB"/>
                    <w:rsid w:val="3F762775"/>
                    <w:rsid w:val="476F0E1A"/>
                    <w:rsid w:val="487E31B8"/>
                    <w:rsid w:val="4A563B69"/>
                    <w:rsid w:val="4DE438DE"/>
                    <w:rsid w:val="4F21422F"/>
                    <w:rsid w:val="50DB6AA8"/>
                    <w:rsid w:val="527D489B"/>
                    <w:rsid w:val="536E59C3"/>
                    <w:rsid w:val="53D077D1"/>
                    <w:rsid w:val="544E03A8"/>
                    <w:rsid w:val="55B72479"/>
                    <w:rsid w:val="576C4CE1"/>
                    <w:rsid w:val="57B60F6F"/>
                    <w:rsid w:val="5AD01BC1"/>
                    <w:rsid w:val="5B724DD7"/>
                    <w:rsid w:val="5E940365"/>
                    <w:rsid w:val="5EFC6BC6"/>
                    <w:rsid w:val="605548AF"/>
                    <w:rsid w:val="606402EA"/>
                    <w:rsid w:val="61966B9D"/>
                    <w:rsid w:val="62F57C90"/>
                    <w:rsid w:val="631D7024"/>
                    <w:rsid w:val="643A7441"/>
                    <w:rsid w:val="650E4774"/>
                    <w:rsid w:val="65802C48"/>
                    <w:rsid w:val="67D4478E"/>
                    <w:rsid w:val="68304CF6"/>
                    <w:rsid w:val="6E8470B6"/>
                    <w:rsid w:val="6F5A572D"/>
                    <w:rsid w:val="6FC76D7D"/>
                    <w:rsid w:val="715F3B0C"/>
                    <w:rsid w:val="77E81BE8"/>
                    <w:rsid w:val="786E3670"/>
                    <w:rsid w:val="793D342F"/>
                    <w:rsid w:val="7A103838"/>
                    <w:rsid w:val="7B726792"/>
                </w:rsids>
                <m:mathPr>
                    <m:mathFont m:val="Cambria Math"/>
                    <m:brkBin m:val="before"/>
                    <m:brkBinSub m:val="--"/>
                    <m:smallFrac m:val="0"/>
                    <m:dispDef/>
                    <m:lMargin m:val="0"/>
                    <m:rMargin m:val="0"/>
                    <m:defJc m:val="centerGroup"/>
                    <m:wrapIndent m:val="1440"/>
                    <m:intLim m:val="subSup"/>
                    <m:naryLim m:val="undOvr"/>
                </m:mathPr>
                <w:doNotAutoCompressPictures/>
                <w:uiCompat97To2003/>
                <w:themeFontLang w:val="en-US" w:eastAsia="zh-CN"/>
                <w:clrSchemeMapping w:bg1="light1" w:t1="dark1" w:bg2="light2" w:t2="dark2" w:accent1="accent1"
                                    w:accent2="accent2" w:accent3="accent3" w:accent4="accent4" w:accent5="accent5"
                                    w:accent6="accent6" w:hyperlink="hyperlink"
                                    w:followedHyperlink="followedHyperlink"/>
                <w:doNotIncludeSubdocsInStats/>
            </w:settings>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/styles.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml">
        <pkg:xmlData>
            <w:styles xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                      xmlns:o="urn:schemas-microsoft-com:office:office"
                      xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                      xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
                      xmlns:v="urn:schemas-microsoft-com:vml"
                      xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                      xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
                      xmlns:w10="urn:schemas-microsoft-com:office:word"
                      xmlns:sl="http://schemas.openxmlformats.org/schemaLibrary/2006/main" mc:Ignorable="w14">
                <w:docDefaults>
                    <w:rPrDefault>
                        <w:rPr>
                            <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="宋体"
                                      w:cs="Times New Roman"/>
                        </w:rPr>
                    </w:rPrDefault>
                </w:docDefaults>
                <w:latentStyles w:count="260" w:defQFormat="0" w:defUnhideWhenUsed="1" w:defSemiHidden="1"
                                w:defUIPriority="99" w:defLockedState="0">
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0"
                                    w:name="Normal"/>
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0"
                                    w:name="heading 1" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 2" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 3" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 4" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 5" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 6" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 7" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 8" w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="heading 9" w:locked="1"/>
                    <w:lsdException w:uiPriority="99" w:name="index 1"/>
                    <w:lsdException w:uiPriority="99" w:name="index 2"/>
                    <w:lsdException w:uiPriority="99" w:name="index 3"/>
                    <w:lsdException w:uiPriority="99" w:name="index 4"/>
                    <w:lsdException w:uiPriority="99" w:name="index 5"/>
                    <w:lsdException w:uiPriority="99" w:name="index 6"/>
                    <w:lsdException w:uiPriority="99" w:name="index 7"/>
                    <w:lsdException w:uiPriority="99" w:name="index 8"/>
                    <w:lsdException w:uiPriority="99" w:name="index 9"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 1"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 2"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 3"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 4"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 5"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 6"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 7"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 8"/>
                    <w:lsdException w:uiPriority="39" w:name="toc 9"/>
                    <w:lsdException w:uiPriority="99" w:name="Normal Indent"/>
                    <w:lsdException w:uiPriority="99" w:name="footnote text"/>
                    <w:lsdException w:uiPriority="99" w:name="annotation text"/>
                    <w:lsdException w:uiPriority="99" w:name="header"/>
                    <w:lsdException w:uiPriority="99" w:name="footer"/>
                    <w:lsdException w:uiPriority="99" w:name="index heading"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="0" w:name="caption" w:locked="1"/>
                    <w:lsdException w:uiPriority="99" w:name="table of figures"/>
                    <w:lsdException w:uiPriority="99" w:name="envelope address"/>
                    <w:lsdException w:uiPriority="99" w:name="envelope return"/>
                    <w:lsdException w:uiPriority="99" w:name="footnote reference"/>
                    <w:lsdException w:uiPriority="99" w:name="annotation reference"/>
                    <w:lsdException w:uiPriority="99" w:name="line number"/>
                    <w:lsdException w:uiPriority="99" w:name="page number"/>
                    <w:lsdException w:uiPriority="99" w:name="endnote reference"/>
                    <w:lsdException w:uiPriority="99" w:name="endnote text"/>
                    <w:lsdException w:uiPriority="99" w:name="table of authorities"/>
                    <w:lsdException w:uiPriority="99" w:name="macro"/>
                    <w:lsdException w:uiPriority="99" w:name="toa heading"/>
                    <w:lsdException w:uiPriority="99" w:name="List"/>
                    <w:lsdException w:uiPriority="99" w:name="List Bullet"/>
                    <w:lsdException w:uiPriority="99" w:name="List Number"/>
                    <w:lsdException w:uiPriority="99" w:name="List 2"/>
                    <w:lsdException w:uiPriority="99" w:name="List 3"/>
                    <w:lsdException w:uiPriority="99" w:name="List 4"/>
                    <w:lsdException w:uiPriority="99" w:name="List 5"/>
                    <w:lsdException w:uiPriority="99" w:name="List Bullet 2"/>
                    <w:lsdException w:uiPriority="99" w:name="List Bullet 3"/>
                    <w:lsdException w:uiPriority="99" w:name="List Bullet 4"/>
                    <w:lsdException w:uiPriority="99" w:name="List Bullet 5"/>
                    <w:lsdException w:uiPriority="99" w:name="List Number 2"/>
                    <w:lsdException w:uiPriority="99" w:name="List Number 3"/>
                    <w:lsdException w:uiPriority="99" w:name="List Number 4"/>
                    <w:lsdException w:uiPriority="99" w:name="List Number 5"/>
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0" w:name="Title"
                                    w:locked="1"/>
                    <w:lsdException w:uiPriority="99" w:name="Closing"/>
                    <w:lsdException w:uiPriority="99" w:name="Signature"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="99" w:name="Default Paragraph Font"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text Indent"/>
                    <w:lsdException w:uiPriority="99" w:name="List Continue"/>
                    <w:lsdException w:uiPriority="99" w:name="List Continue 2"/>
                    <w:lsdException w:uiPriority="99" w:name="List Continue 3"/>
                    <w:lsdException w:uiPriority="99" w:name="List Continue 4"/>
                    <w:lsdException w:uiPriority="99" w:name="List Continue 5"/>
                    <w:lsdException w:uiPriority="99" w:name="Message Header"/>
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0"
                                    w:name="Subtitle" w:locked="1"/>
                    <w:lsdException w:uiPriority="99" w:name="Salutation"/>
                    <w:lsdException w:uiPriority="99" w:name="Date"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text First Indent"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text First Indent 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Note Heading"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text Indent 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Body Text Indent 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Block Text"/>
                    <w:lsdException w:uiPriority="99" w:name="Hyperlink"/>
                    <w:lsdException w:uiPriority="99" w:name="FollowedHyperlink"/>
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0" w:name="Strong"
                                    w:locked="1"/>
                    <w:lsdException w:qFormat="1" w:unhideWhenUsed="0" w:uiPriority="0" w:semiHidden="0"
                                    w:name="Emphasis" w:locked="1"/>
                    <w:lsdException w:uiPriority="99" w:name="Document Map"/>
                    <w:lsdException w:uiPriority="99" w:name="Plain Text"/>
                    <w:lsdException w:uiPriority="99" w:name="E-mail Signature"/>
                    <w:lsdException w:uiPriority="99" w:name="Normal (Web)"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Acronym"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Address"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Cite"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Code"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Definition"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Keyboard"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Preformatted"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Sample"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Typewriter"/>
                    <w:lsdException w:uiPriority="99" w:name="HTML Variable"/>
                    <w:lsdException w:qFormat="1" w:uiPriority="99" w:name="Normal Table"/>
                    <w:lsdException w:uiPriority="99" w:name="annotation subject"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Simple 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Simple 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Simple 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Classic 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Classic 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Classic 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Classic 4"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Colorful 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Colorful 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Colorful 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Columns 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Columns 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Columns 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Columns 4"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Columns 5"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 4"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 5"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 6"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 7"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Grid 8"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 4"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 5"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 6"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 7"/>
                    <w:lsdException w:uiPriority="99" w:name="Table List 8"/>
                    <w:lsdException w:uiPriority="99" w:name="Table 3D effects 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table 3D effects 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table 3D effects 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Contemporary"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Elegant"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Professional"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Subtle 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Subtle 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Web 1"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Web 2"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Web 3"/>
                    <w:lsdException w:uiPriority="99" w:name="Balloon Text"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="99" w:semiHidden="0" w:name="Table Grid"/>
                    <w:lsdException w:uiPriority="99" w:name="Table Theme"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0" w:name="Light Shading"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0" w:name="Light List"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0" w:name="Light Grid"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0" w:name="Medium Shading 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0" w:name="Medium Shading 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0" w:name="Medium List 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0" w:name="Medium List 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0" w:name="Medium Grid 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0" w:name="Medium Grid 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0" w:name="Medium Grid 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0" w:name="Dark List"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0" w:name="Colorful Shading"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0" w:name="Colorful List"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0" w:name="Colorful Grid"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 1"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 2"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 3"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 4"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 5"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="60" w:semiHidden="0"
                                    w:name="Light Shading Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="61" w:semiHidden="0"
                                    w:name="Light List Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="62" w:semiHidden="0"
                                    w:name="Light Grid Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="63" w:semiHidden="0"
                                    w:name="Medium Shading 1 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="64" w:semiHidden="0"
                                    w:name="Medium Shading 2 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="65" w:semiHidden="0"
                                    w:name="Medium List 1 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="66" w:semiHidden="0"
                                    w:name="Medium List 2 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="67" w:semiHidden="0"
                                    w:name="Medium Grid 1 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="68" w:semiHidden="0"
                                    w:name="Medium Grid 2 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="69" w:semiHidden="0"
                                    w:name="Medium Grid 3 Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="70" w:semiHidden="0"
                                    w:name="Dark List Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="71" w:semiHidden="0"
                                    w:name="Colorful Shading Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="72" w:semiHidden="0"
                                    w:name="Colorful List Accent 6"/>
                    <w:lsdException w:unhideWhenUsed="0" w:uiPriority="73" w:semiHidden="0"
                                    w:name="Colorful Grid Accent 6"/>
                </w:latentStyles>
                <w:style w:type="paragraph" w:default="1" w:styleId="1">
                    <w:name w:val="Normal"/>
                    <w:qFormat/>
                    <w:uiPriority w:val="0"/>
                    <w:pPr>
                        <w:widowControl w:val="0"/>
                        <w:jc w:val="both"/>
                    </w:pPr>
                    <w:rPr>
                        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="宋体" w:cs="Times New Roman"/>
                        <w:kern w:val="2"/>
                        <w:sz w:val="21"/>
                        <w:szCs w:val="24"/>
                        <w:lang w:val="en-US" w:eastAsia="zh-CN" w:bidi="ar-SA"/>
                    </w:rPr>
                </w:style>
                <w:style w:type="character" w:default="1" w:styleId="2">
                    <w:name w:val="Default Paragraph Font"/>
                    <w:semiHidden/>
                    <w:uiPriority w:val="99"/>
                </w:style>
                <w:style w:type="table" w:default="1" w:styleId="3">
                    <w:name w:val="Normal Table"/>
                    <w:semiHidden/>
                    <w:unhideWhenUsed/>
                    <w:qFormat/>
                    <w:uiPriority w:val="99"/>
                    <w:tblPr>
                        <w:tblLayout w:type="fixed"/>
                        <w:tblCellMar>
                            <w:top w:w="0" w:type="dxa"/>
                            <w:left w:w="108" w:type="dxa"/>
                            <w:bottom w:w="0" w:type="dxa"/>
                            <w:right w:w="108" w:type="dxa"/>
                        </w:tblCellMar>
                    </w:tblPr>
                </w:style>
                <w:style w:type="table" w:styleId="4">
                    <w:name w:val="Table Grid"/>
                    <w:basedOn w:val="3"/>
                    <w:uiPriority w:val="99"/>
                    <w:pPr>
                        <w:widowControl w:val="0"/>
                        <w:jc w:val="both"/>
                    </w:pPr>
                    <w:rPr>
                        <w:kern w:val="0"/>
                        <w:sz w:val="20"/>
                        <w:szCs w:val="20"/>
                    </w:rPr>
                    <w:tblPr>
                        <w:tblBorders>
                            <w:top w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                            <w:left w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                            <w:bottom w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                            <w:right w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                            <w:insideH w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                            <w:insideV w:val="single" w:color="auto" w:sz="4" w:space="0"/>
                        </w:tblBorders>
                        <w:tblLayout w:type="fixed"/>
                        <w:tblCellMar>
                            <w:top w:w="0" w:type="dxa"/>
                            <w:left w:w="108" w:type="dxa"/>
                            <w:bottom w:w="0" w:type="dxa"/>
                            <w:right w:w="108" w:type="dxa"/>
                        </w:tblCellMar>
                    </w:tblPr>
                </w:style>
            </w:styles>
        </pkg:xmlData>
    </pkg:part>
    <pkg:part pkg:name="/word/theme/theme1.xml"
              pkg:contentType="application/vnd.openxmlformats-officedocument.theme+xml">
        <pkg:xmlData>
            <a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
                <a:themeElements>
                    <a:clrScheme name="Office">
                        <a:dk1>
                            <a:sysClr val="windowText" lastClr="000000"/>
                        </a:dk1>
                        <a:lt1>
                            <a:sysClr val="window" lastClr="FFFFFF"/>
                        </a:lt1>
                        <a:dk2>
                            <a:srgbClr val="1F497D"/>
                        </a:dk2>
                        <a:lt2>
                            <a:srgbClr val="EEECE1"/>
                        </a:lt2>
                        <a:accent1>
                            <a:srgbClr val="4F81BD"/>
                        </a:accent1>
                        <a:accent2>
                            <a:srgbClr val="C0504D"/>
                        </a:accent2>
                        <a:accent3>
                            <a:srgbClr val="9BBB59"/>
                        </a:accent3>
                        <a:accent4>
                            <a:srgbClr val="8064A2"/>
                        </a:accent4>
                        <a:accent5>
                            <a:srgbClr val="4BACC6"/>
                        </a:accent5>
                        <a:accent6>
                            <a:srgbClr val="F79646"/>
                        </a:accent6>
                        <a:hlink>
                            <a:srgbClr val="0000FF"/>
                        </a:hlink>
                        <a:folHlink>
                            <a:srgbClr val="800080"/>
                        </a:folHlink>
                    </a:clrScheme>
                    <a:fontScheme name="Office">
                        <a:majorFont>
                            <a:latin typeface="Cambria"/>
                            <a:ea typeface=""/>
                            <a:cs typeface=""/>
                            <a:font script="Jpan" typeface="ＭＳ ゴシック"/>
                            <a:font script="Hang" typeface="맑은 고딕"/>
                            <a:font script="Hans" typeface="宋体"/>
                            <a:font script="Hant" typeface="新細明體"/>
                            <a:font script="Arab" typeface="Times New Roman"/>
                            <a:font script="Hebr" typeface="Times New Roman"/>
                            <a:font script="Thai" typeface="Angsana New"/>
                            <a:font script="Ethi" typeface="Nyala"/>
                            <a:font script="Beng" typeface="Vrinda"/>
                            <a:font script="Gujr" typeface="Shruti"/>
                            <a:font script="Khmr" typeface="MoolBoran"/>
                            <a:font script="Knda" typeface="Tunga"/>
                            <a:font script="Guru" typeface="Raavi"/>
                            <a:font script="Cans" typeface="Euphemia"/>
                            <a:font script="Cher" typeface="Plantagenet Cherokee"/>
                            <a:font script="Yiii" typeface="Microsoft Yi Baiti"/>
                            <a:font script="Tibt" typeface="Microsoft Himalaya"/>
                            <a:font script="Thaa" typeface="MV Boli"/>
                            <a:font script="Deva" typeface="Mangal"/>
                            <a:font script="Telu" typeface="Gautami"/>
                            <a:font script="Taml" typeface="Latha"/>
                            <a:font script="Syrc" typeface="Estrangelo Edessa"/>
                            <a:font script="Orya" typeface="Kalinga"/>
                            <a:font script="Mlym" typeface="Kartika"/>
                            <a:font script="Laoo" typeface="DokChampa"/>
                            <a:font script="Sinh" typeface="Iskoola Pota"/>
                            <a:font script="Mong" typeface="Mongolian Baiti"/>
                            <a:font script="Viet" typeface="Times New Roman"/>
                            <a:font script="Uigh" typeface="Microsoft Uighur"/>
                        </a:majorFont>
                        <a:minorFont>
                            <a:latin typeface="Calibri"/>
                            <a:ea typeface=""/>
                            <a:cs typeface=""/>
                            <a:font script="Jpan" typeface="ＭＳ 明朝"/>
                            <a:font script="Hang" typeface="맑은 고딕"/>
                            <a:font script="Hans" typeface="宋体"/>
                            <a:font script="Hant" typeface="新細明體"/>
                            <a:font script="Arab" typeface="Arial"/>
                            <a:font script="Hebr" typeface="Arial"/>
                            <a:font script="Thai" typeface="Cordia New"/>
                            <a:font script="Ethi" typeface="Nyala"/>
                            <a:font script="Beng" typeface="Vrinda"/>
                            <a:font script="Gujr" typeface="Shruti"/>
                            <a:font script="Khmr" typeface="DaunPenh"/>
                            <a:font script="Knda" typeface="Tunga"/>
                            <a:font script="Guru" typeface="Raavi"/>
                            <a:font script="Cans" typeface="Euphemia"/>
                            <a:font script="Cher" typeface="Plantagenet Cherokee"/>
                            <a:font script="Yiii" typeface="Microsoft Yi Baiti"/>
                            <a:font script="Tibt" typeface="Microsoft Himalaya"/>
                            <a:font script="Thaa" typeface="MV Boli"/>
                            <a:font script="Deva" typeface="Mangal"/>
                            <a:font script="Telu" typeface="Gautami"/>
                            <a:font script="Taml" typeface="Latha"/>
                            <a:font script="Syrc" typeface="Estrangelo Edessa"/>
                            <a:font script="Orya" typeface="Kalinga"/>
                            <a:font script="Mlym" typeface="Kartika"/>
                            <a:font script="Laoo" typeface="DokChampa"/>
                            <a:font script="Sinh" typeface="Iskoola Pota"/>
                            <a:font script="Mong" typeface="Mongolian Baiti"/>
                            <a:font script="Viet" typeface="Arial"/>
                            <a:font script="Uigh" typeface="Microsoft Uighur"/>
                        </a:minorFont>
                    </a:fontScheme>
                    <a:fmtScheme name="Office">
                        <a:fillStyleLst>
                            <a:solidFill>
                                <a:schemeClr val="phClr"/>
                            </a:solidFill>
                            <a:gradFill rotWithShape="1">
                                <a:gsLst>
                                    <a:gs pos="0">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="50000"/>
                                            <a:satMod val="300000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="35000">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="37000"/>
                                            <a:satMod val="300000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="100000">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="15000"/>
                                            <a:satMod val="350000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                </a:gsLst>
                                <a:lin ang="16200000" scaled="1"/>
                            </a:gradFill>
                            <a:gradFill rotWithShape="1">
                                <a:gsLst>
                                    <a:gs pos="0">
                                        <a:schemeClr val="phClr">
                                            <a:shade val="51000"/>
                                            <a:satMod val="130000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="80000">
                                        <a:schemeClr val="phClr">
                                            <a:shade val="93000"/>
                                            <a:satMod val="130000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="100000">
                                        <a:schemeClr val="phClr">
                                            <a:shade val="94000"/>
                                            <a:satMod val="135000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                </a:gsLst>
                                <a:lin ang="16200000" scaled="0"/>
                            </a:gradFill>
                        </a:fillStyleLst>
                        <a:lnStyleLst>
                            <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                                <a:solidFill>
                                    <a:schemeClr val="phClr">
                                        <a:shade val="95000"/>
                                        <a:satMod val="105000"/>
                                    </a:schemeClr>
                                </a:solidFill>
                                <a:prstDash val="solid"/>
                            </a:ln>
                            <a:ln w="25400" cap="flat" cmpd="sng" algn="ctr">
                                <a:solidFill>
                                    <a:schemeClr val="phClr"/>
                                </a:solidFill>
                                <a:prstDash val="solid"/>
                            </a:ln>
                            <a:ln w="38100" cap="flat" cmpd="sng" algn="ctr">
                                <a:solidFill>
                                    <a:schemeClr val="phClr"/>
                                </a:solidFill>
                                <a:prstDash val="solid"/>
                            </a:ln>
                        </a:lnStyleLst>
                        <a:effectStyleLst>
                            <a:effectStyle>
                                <a:effectLst>
                                    <a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0">
                                        <a:srgbClr val="000000">
                                            <a:alpha val="38000"/>
                                        </a:srgbClr>
                                    </a:outerShdw>
                                </a:effectLst>
                            </a:effectStyle>
                            <a:effectStyle>
                                <a:effectLst>
                                    <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
                                        <a:srgbClr val="000000">
                                            <a:alpha val="35000"/>
                                        </a:srgbClr>
                                    </a:outerShdw>
                                </a:effectLst>
                            </a:effectStyle>
                            <a:effectStyle>
                                <a:effectLst>
                                    <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
                                        <a:srgbClr val="000000">
                                            <a:alpha val="35000"/>
                                        </a:srgbClr>
                                    </a:outerShdw>
                                </a:effectLst>
                                <a:scene3d>
                                    <a:camera prst="orthographicFront">
                                        <a:rot lat="0" lon="0" rev="0"/>
                                    </a:camera>
                                    <a:lightRig rig="threePt" dir="t">
                                        <a:rot lat="0" lon="0" rev="1200000"/>
                                    </a:lightRig>
                                </a:scene3d>
                                <a:sp3d>
                                    <a:bevelT w="63500" h="25400"/>
                                </a:sp3d>
                            </a:effectStyle>
                        </a:effectStyleLst>
                        <a:bgFillStyleLst>
                            <a:solidFill>
                                <a:schemeClr val="phClr"/>
                            </a:solidFill>
                            <a:gradFill rotWithShape="1">
                                <a:gsLst>
                                    <a:gs pos="0">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="40000"/>
                                            <a:satMod val="350000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="40000">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="45000"/>
                                            <a:shade val="99000"/>
                                            <a:satMod val="350000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="100000">
                                        <a:schemeClr val="phClr">
                                            <a:shade val="20000"/>
                                            <a:satMod val="255000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                </a:gsLst>
                                <a:path path="circle">
                                    <a:fillToRect l="50000" t="-80000" r="50000" b="180000"/>
                                </a:path>
                            </a:gradFill>
                            <a:gradFill rotWithShape="1">
                                <a:gsLst>
                                    <a:gs pos="0">
                                        <a:schemeClr val="phClr">
                                            <a:tint val="80000"/>
                                            <a:satMod val="300000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                    <a:gs pos="100000">
                                        <a:schemeClr val="phClr">
                                            <a:shade val="30000"/>
                                            <a:satMod val="200000"/>
                                        </a:schemeClr>
                                    </a:gs>
                                </a:gsLst>
                                <a:path path="circle">
                                    <a:fillToRect l="50000" t="50000" r="50000" b="50000"/>
                                </a:path>
                            </a:gradFill>
                        </a:bgFillStyleLst>
                    </a:fmtScheme>
                </a:themeElements>
                <a:objectDefaults/>
            </a:theme>
        </pkg:xmlData>
    </pkg:part>
</pkg:package>
