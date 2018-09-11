<?php
namespace app\index\controller;

class Hello
{
    public function index($id)
    {
        return 'hey i am hello:' . $id;
    }
}