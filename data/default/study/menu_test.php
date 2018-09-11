<?php
/*
一.按照给定菜单(menu)和订单(order)，计算订单价格总和
*/
error_reporting(E_ALL);
$menu = '[
			{"type_id":1,"name":"大菜","food":[
											{"food_id":1,"name":"鱼香肉丝","price":"10"},
											{"food_id":2,"name":"红烧肉","price":"11"},
											{"food_id":3,"name":"香辣粉","price":"12"}
											]},
			{"type_id":2,"name":"中菜","food":[
											{"food_id":4,"name":"小炒肉","price":"13"},
											{"food_id":5,"name":"云吞","price":"14"}
											]},
			{"type_id":3,"name":"小菜","food":[
											{"food_id":6,"name":"雪糕","price":"15"},
											{"food_id":7,"name":"黄瓜","price":"16"}
											]}	    
		]';

/*
*/

//num系数量
$order = '[{"food_id":1,"num":2},{"food_id":3,"num":1},{"food_id":6,"num":2},{"food_id":7,"num":1}]';

//菜单数组
$menu_arr = json_decode($menu,true);
//订单数组
$order_arr = json_decode($order,true);

$order_food_num = array();
foreach ($order_arr as $v){
    $order_food_num[$v['food_id']] = $v['num'];
}

//订单价格初始化
$order_price = 0;

foreach ($menu_arr as $v){
    foreach ($v['food'] as $fv) {
        if (!isset($order_food_num[$fv['food_id']])) {
            continue;
        }
        $order_price += $order_food_num[$fv['food_id']] * $fv['price'];
    }
}
echo "订单价格总和为：{$order_price}元","<br/>";


/*
二.设计一个类Menu，实现以下功能：
1. 设定菜单，每个实例必须有且只有一个菜单(json字符串，结构如上题)
2. 方法calculate, 输入订单后(json字符串，结构如上题), 输出格价
3. 方法discount, 可设定折扣，输出格价时自动计算折扣
4. 静态方法counter。输出calculate方法被调用的次数
5. 将结果发送到247828058@qq.com，邮件标题写上姓名，谢谢！
*/
/*
 * Menu::create_menu($menu);
 */
class Menu{
    private static $menu_obj = null,$cal_num = 0;
    public $menu_info,$order_price = 0;
    /*
     *
     */
    private function __construct(){
    }
    public static function create_menu($menu_json){
        $menu_arr = json_decode($menu_json,true);
        if(empty($menu_arr))
            throw new Exception("your menu is wrong!");

        if(self::$menu_obj == null){
            self::$menu_obj = new self();
        }
        self::$menu_obj->menu_info = $menu_arr;
        return self::$menu_obj;
    }
    public function calculate($order_json){
        self::$cal_num ++;
        $order_arr = json_decode($order_json,true);
        if(empty($order_arr)){
            throw new Exception("your order is wrong!");
        }
        $order_food_num = array();
        foreach ($order_arr as $v){
            $order_food_num[$v['food_id']] = $v['num'];
        }

        //订单价格初始化
        $order_price = 0;

        foreach ($this->menu_info as $v){
            foreach ($v['food'] as $fv) {
                if (!isset($order_food_num[$fv['food_id']])) {
                    continue;
                }
                $order_price += $order_food_num[$fv['food_id']] * $fv['price'];
            }
        }
        $this->order_price = $order_price;
        return $order_price;
    }
    public function discount($disc = 10){
        if($disc<0 || $disc>10){
            throw new Exception("your discount is wrong!");
        }
        return $this->order_price*$disc/10;
    }
    public static function counter(){
        return self::$cal_num;
    }
}
try{
        $menu_obj = Menu::create_menu($menu);
        var_dump($menu_obj);echo "<br/>";
        $menu_obj2 = Menu::create_menu($menu);
        var_dump($menu_obj2);echo "<br/>";
        echo $menu_obj->calculate($ord),"<br/>";
        echo $menu_obj->discount(7.5),"<br/>";
        echo $menu_obj::counter();    
}catch(Exception $e){
    echo $e;
}
