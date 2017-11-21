<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/19
 * Time: 1:10
 */

// TODO 登录验证&信息获取
// TODO 信息更新
// TODO 得分排名高分榜

namespace app\plane\model;

use think\exception\PDOException;
use think\Model;

class UserModel  extends Model
{
    protected $name = 'plane_user';

    /**
     * 增加新用户数据入数据库
     * @param $data
     * @return array
     */
    public function useradd($data)
    {
        try {
            $info = $this->strict(false)->insert($data);
            if ($info === false) {
                return ['code' => -1, 'msg' => $this->getError(), 'data' => $info];
            } else {
                return ['code' => 0, 'msg' => 'Success', 'data' => $info];
            }
        } catch (PDOException $e) {
            return ['code' => -1, 'msg' => $e->getMessage(), 'data' => ''];
        }
    }

    /**
     * 获取指定卡号的用户信息
     * @param $cardno
     * @return array
     */
    public function userinfo($cardno)
    {
        try {
            $info = $this->where('cardno', '=', $cardno)->find();
            if ($info === false || empty($info)) {
                return ['code' => -1, 'msg' => $this->getError(), 'data' => $info];
            } else {
                return ['code' => 0, 'msg' => 'Success', 'data' => $info];
            }
        } catch (PDOException $e) {
            return ['code' => -1, 'msg' => $e->getMessage(), 'data' => ''];
        }
    }

    /**
     * 更新userid的信息
     * @param $cardno
     * @param $data
     * @return array
     */
    public function updatescore($cardno, $data)
    {
        try {
            $info = $this
                ->where('cardno', '=', $cardno)
                ->update($data);
            if ($info === false) {
                return ['code' => -1, 'msg' => $this->getError(), 'data' => $info];
            } else {
                return ['code' => 0, 'msg' => 'Success', 'data' => $info];
            }
        } catch (PDOException $e) {
            return ['code' => -1, 'msg' => $e->getMessage(), 'data' => ''];
        }
    }
    
    /**
     * 获取高分榜
     * @param $offset
     * @param $limit
     * @return array
     */
    public function highscore($offset, $limit)
    {
        try {
            $info = $this->order('score desc')
                ->limit($offset, $limit)
                ->select();
            if ($info === false || empty($info)) {
                return ['code' => -1, 'msg' => $this->getError(), 'data' => $info];
            } else {
                return ['code' => 0, 'msg' => 'Success', 'data' => $info];
            }
        } catch (PDOException $e) {
            return ['code' => -1, 'msg' => $e->getMessage(), 'data' => ''];
        }
    }


}




