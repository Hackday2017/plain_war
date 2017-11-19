<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/19
 * Time: 0:53
 */
namespace app\plane\Controller;
use think\Controller;
use think\Request;
use think\Db;
use think\Session;

class Base extends Controller
{
    function __construct() {
        Session::init();
        parent::__construct();
    }

    function MessageBox($message, $goto = '') {
        echo "<script type=\"text/javascript\">\n";
        echo "alert('{$message}');\n";
        if (intval($goto))
            echo "window.history.go({$goto});\n";
        else if ($goto != '')
            echo "document.location='{$goto}';\n";
        echo "</script>";
        exit();
    }

    /**
     * 接口返回格式
     * @param $errcode
     * @param $errmsg
     * @param $data
     * @param $status
     * @return \think\response\Json
     */
    protected function apireturn($errcode, $errmsg, $data, $status)
    {
        return json([
            'errcode' => $errcode,
            'errmsg' => $errmsg,
            'data' => $data
        ], $status);
    }
}


