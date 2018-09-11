<?php
//反射类的使用
trait myTrait{
    public function publics(){
        $attr = get_class_vars(static::class);
        foreach ($attr as $k=>$v){
            $theReflect = new ReflectionProperty(static::class,$k);
            if(!$theReflect->isPublic()){
                unset($attr[$k]);
            }
        }
        return $attr;
    }
    public function __get($name){
        return false;
    }
}
class User
{
    public $name = "kingmax";
    private $_age = 30;

    use myTrait;
}

$User = new User();
$data = $User->publics();
print_r($data);