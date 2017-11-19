<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

//return [
//    '__pattern__' => [
//        'name' => '\w+',
//    ],
//    '[hello]'     => [
//        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
//        ':name' => ['index/hello', ['method' => 'post']],
//    ],
//];

//use think\Route;
////Route::rule('hello/[:name]', 'index/hello');
//Route::rule(':version/user/read/:id','api/:version.User/read');
//Route::rule(':version/user/add','api/:version.User/add');
//Route::resource('blogs','index/blog');
//
//Route::rule(':version/nodes/index','api/:version.Nodes/index');
//Route::rule(':version/nodes/nodes','api/:version.Nodes/nodes');

//return [
//    // 添加路由规则 路由到 index控制器的hello操作方法
//    'hello/[:name]' => 'index/hello',
//];

//return [
//    '[blog]' => [
//        ':year/:month' => ['blog/archive', ['method' => 'get'], ['year' => '\d{4}', 'month' => '\d{2}']],
//        ':id'          => ['blog/get', ['method' => 'get'], ['id' => '\d+']],
//        ':name'        => ['blog/read', ['method' => 'get'], ['name' => '\w+']],
//    ],
//];

//return [
//    // 全局变量规则定义
//    '__pattern__'         => [
//        'name'  => '\w+',
//        'id'    => '\d+',
//        'year'  => '\d{4}',
//        'month' => '\d{2}',
//    ],
//    // 路由规则定义
//    'blog/:id'            => 'blog/get',
//    'blog/:name'          => 'blog/read',
//    'blog-<year>-<month>' => 'blog/archive',//支持http://localhost/E6/public/blog-2015-05
//];

//return [
//    'hello/:name' =>['index/hello',[],['name'=>'\w+']],
//];

//return [
//    // 全局变量规则定义
//    '__pattern__'         => [
//        'id'    => '\d+',
//    ],
//    'user/index'      => 'index/user/index',
//    'user/create'     => 'index/user/create',
//    'user/add'        => 'index/user/add',
//    'user/add_list'   => 'index/user/addList',
//    'user/update/:id' => 'index/user/update',
//    'user/delete/:id' => 'index/user/delete',
//    'user/read/[:id]' => 'index/user/read',
//];


