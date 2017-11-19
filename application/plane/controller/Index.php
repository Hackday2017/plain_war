<?php
namespace app\plane\controller;

namespace app\plane\controller;
use app\plane\model\UserModel;
use think\Controller;
use think\Request;
use think\Db;
use think\Session;

class Index extends Login
{
    // TODO 考虑缓存机制
    public function index()
    {
        return $this->fetch();
//        return '<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px;} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p> ThinkPHP V5<br/><span style="font-size:30px">十年磨一剑 - 为API开发设计的高性能框架</span></p><span style="font-size:22px;">[ V5.0 版本由 <a href="http://www.qiniu.com" target="qiniu">七牛云</a> 独家赞助发布 ]</span></div><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_bd568ce7058a1091"></thinkad>';
    }

    public function highscore()
    {
        return $this->fetch();
    }

    

    public function gethighscore()
    {
        $user = new UserModel();
        $rel = $user->highscore(0, 10);
        $highinfo = ($rel['code'] == 0) ? $rel['data'] : 'Fail';
        return $this->apireturn(0, '', $highinfo, 200);
    }

    public function getuserinfo()
    {
        $user = new UserModel();
        $plane_user = Session::get('plane_user');
        var_dump($plane_user);

    }

    public function updatescore(Request $request)
    {
        // TODO 对传入信息进行加密
        $postData = $request->post();
        $score = $postData['score'];
        $plane_user = Session::get('plane_user');
        $cardno = $plane_user['cardno'];
        $user = new UserModel();
        // score值大于数据库则更新
        $info = $user->userinfo($cardno);
        if ($score > $info['data']['score']) {
            $data = array(
                'score' => $score,
                'latest' => date("Y-m-d H:i:s", time())
            );
            $rel = $user->updatescore($cardno, $data);
            return $this->apireturn($rel['code'], $rel['msg'], $rel['data'], 200);
        }
        return $this->apireturn(0, '', '', 200);
    }




}
