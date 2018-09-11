<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/3
 * Time: 17:04
 */

namespace App\Http\Controllers;


class UserController
{
    public function index(){
        return "this is your user route's map to user@index";
    }
    public function showProfile(){
        return redirect()->route('profile');
    }
}