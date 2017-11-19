<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/19
 * Time: 0:51
 */

namespace app\plane\controller;
use app\plane\model\UserModel;
use think\Controller;
use think\Request;
use think\Db;
use think\Session;

class Login extends Base
{
    function __construct() {
        parent::__construct();
    }

    public function index()
    {
        return $this->fetch();
    }

    public function register()
    {
        return $this->fetch();
    }

    public function adduser(Request $request)
    {
        $postDate = $request->post();
//        var_dump($postDate);exit;
        $cardno = $postDate['cardno'];
        $name = $postDate['name'];
        $gender = empty($postDate['gender']) ? 0 : $postDate['gender'];
        $school = empty($postDate['school']) ? '武小理' :$postDate['school'];
        $major = empty($postDate['major']) ? '' : $postDate['major'];
        $create = date("Y-m-d H:i:s", time());

        $userinfo = array(
            'cardno' => $cardno,
            'name' => $name,
            'gender' => $gender,
            'school' => $school,
            'major' => $major,
            'create' => $create,
            'latest' =>$create
        );
        $user = new UserModel();
        $rel = $user->useradd($userinfo);
        return $this->apireturn($rel['code'], $rel['msg'], $rel['data'], 200);
    }

    public function oklogin(Request $request)
    {
        $postDate = $request->post();
        $cardno = $postDate['cardno'];
        $score = empty($postDate['score']) ? 0 : $postDate['score'];
        $user = new UserModel();
        // score值不为0则上传
        if ($score != 0) {
            $info = $user->userinfo($cardno);
            if ($score > $info['data']['score']) {
                $data = array(
                    'score' => $score,
                    'latest' => date("Y-m-d H:i:s", time())
                );
                $result = $user->updatescore($cardno, $data);
            }
        }

        $rel = $user->userinfo($cardno);
        Session::set('plane_user', $rel['data']);
        return $this->apireturn($rel['code'], $rel['msg'], $rel['data'], 200);
    }

    public function wechat() {
        $url = '';
        header('location: http://ias.sso.wutnews.net/portal.php?posturl=XXXX.net/plane/login/ias&continueurl='.$url);
    }


    public function msign() {
        // 从掌理登陆时记录卡号和姓名
        $info = json_decode(urldecode($_SERVER['HTTP_M_SIGN']), true);
        if(!$info) exit('授权被拒绝');
        //if(!$this->check($info)) exit('签名验证错误');
        //TODO 微信登录
//        if(empty($info['cardNo'])) {
//            $this->wechat();
//            exit;
//        }
        $user = new UserModel();
        $rel = $user->userinfo($info['cardNo']);
        $userinfo = $rel['data'];
        if ($rel['code'] != 0) {
            $create = date("Y-m-d H:i:s", time());
            $userinfo = array(
                'cardno' => $info['cardNo'],
                'name' => $info['realName'],
                'gender' => $info['gender'] == 1 ? 1 : 2,
                'school' => '武小理',
                'major' => $info['dept']['name'],
                'create' => $create,
                'latest' =>$create
            );
            $user->useradd($userinfo);
        }
        Session::set('plane_user', $userinfo);
        $this->assign('userinfo', $userinfo);
        return $this->fetch('index/index');
    }



}
