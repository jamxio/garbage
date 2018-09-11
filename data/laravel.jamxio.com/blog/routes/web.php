<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
#后面的会覆盖前面的；
#好像并不是覆盖，match和get互相覆盖，其他的好像不会，如get和get

//所有方法 any：post、put、get、delete、options
Route::any('foo', function () {
    //
});
Route::get('/', function () {
    return view('welcome');
});
//匹配请求方法
Route::match(['get', 'post'], '/', function () {
    //
});
//直接返回内容
Route::get('hello', function () {
    return 'hello jamxio';
});
//调度mvc
Route::get('/user', 'UserController@index');
//重定向
Route::redirect('/here', './user', 302);
//直接返回视图
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
//参数用花括号{}获取，参数不能有‘-’推荐"_"
Route::get('user/{id}', function ($id) {
    return 'User '.$id;
});
//正则表达式
Route::get('user/{name}', function ($name) {
    //
    return "your name is english_char";
})->where('name', '[A-Za-z]+');

Route::get('user/{id}', function ($id) {
    //
    return "your id is math_char";
})->where('id', '[0-9]+');

Route::get('user/{id}/{name}', function ($id, $name) {
    //
    return "your name is english_char and the id is mathchar";
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
//更多参数可以获取，应该需按顺序
Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
    return 'your posts is '.$postId.",and the comments is $commentId";
});
//可选参数
Route::get('optional/{name?}', function ($name = null) {
    return $name;
});

Route::get('optional/{name?}', function ($name = 'John') {
    return $name;
});
//全局正则约束
Route::get('global/{global}', function ($id) {
    // Only executed if {id} is numeric...
    return $id." and global need numeric,it decide in RouteServiceProvider::boot";
});
//路由命名
Route::get('profile/profile', function () {
    //
    return "this is profile1";
})->name('profile');
Route::get('profile/profile2','UserController@showProfile')->name('profile2');
Route::get('profile/testprofile', function () {
    //
    echo route('profile3', ['id' => 1]);
    return route('profile2');
});
Route::get('profile/{id}/profile', function ($id) {
    //
    return "i am profile3 your id is $id";
})->name('profile3');
