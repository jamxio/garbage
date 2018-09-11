<?php
class DistributorModel extends Model{
    //高级算法
    /**
     * @param int $id 经销商id ，通常用$_SESSION['managerid'];
     * @param null $need 重用配置，根据需要返回变量$all_sub或$sbdn_level，         *
     * @return array 默认返回数组，包含'subordinate'=>$all_sub,'sub_level' => $sbdn_level
     */
    public function find_by_pid($id,$need=null){
        if(!$id){
            return 'no id';
        }elseif($id == 'all'){
            $id = 0;
        }
        if (0&&S($id.'-tree')) {
            $children = S($id.'-tree');
            $all_sub = json_decode($children,true);
            $sbdn_level = S($id.'-level');
            if(!$need) {
                return array('subordinate' => $all_sub, 'sub_level' => $sbdn_level);
            }else{
                return $$need;
            }
        }
        //这个将存入所有遍历的代理
        $subordinate = $this->where(array('pid'=>$id))->order('level')->getField('id,id,name,levname,level,pid');

        $all_sub = array();
        $sbdn_level = array();

        $pid = array();

        #$sub_num = 0;
        //组装初代下属
        foreach ($subordinate as $key => $value){
            //当前遍历的直接上级id
            $pid []= $value['id'];
            //我的团队所有代理按等级划分，目前为直属
            $sbdn_level[$value['level']] []= $value['id'];
            unset($value['level']);
            unset($value['pid']);

            /*$all_sub []= $value;
            $subordinate[$key]['p'] = & $all_sub[$sub_num ++];*/
            //装入直接下级数组
            $all_sub [$value['id']]= $value;
            //用p引用指向当前$value['id']的信息在$all_sub中的节点位置，
            //注意$key==$value['id']，subordinate中每一元素都有个p记录自己在m叉树all_sub的位置
            $subordinate[$key]['p'] = & $all_sub[$value['id']];
            $subordinate[$key]['p']['url'] = 'url_herf';
            $subordinate[$key]['p']['num'] = 0;
            $subordinate[$key]['p']['list'] = array();
        }
        while(!empty($pid)){
            $now_sbdn = $this->where(array('pid'=>array('in',$pid)))->order('pid,level')->getField('id,id,name,levname,level,pid');
            $pid = array();
            #$now_pid = 0;
            foreach($now_sbdn as $k => $v){
                //如果已遍历则跳过
                if(isset($subordinate[$k])){
                    unset($now_sbdn[$k]);
                }else{
                    /*if($now_pid != $v['pid']){
                        $sub_num = 0;
                    }*/
                    //当前遍历的直接上级id
                    $pid []= $v['id'];
                    $subordinate[$k] = $v;
                    //$id的团队所有代理按等级划分，目前在深层
                    $sbdn_level[$v['level']] []= $v['id'];
                    unset($v['level']);
                    $now_pid = $v['pid'];
                    unset($v['pid']);

                    /*$subordinate[$now_pid]['p']['list'] []= $v;
                    $subordinate[$k]['p'] = & $subordinate[$now_pid]['p']['list'][$sub_num ++];*/
                    //装入深层队内代理所属上级的数组list,每装入一个代理，上级的num属性即会加1；
                    $subordinate[$now_pid]['p']['list'][$v['id']] = $v;
                    $subordinate[$now_pid]['p']['num']++;
                    //用p引用指向当前$v['id']在subordinate(亦是all_sub)中的节点位置，
                    //注意$k==$v['id']，subordinate中每一元素都有个p记录自己在m叉树all_sub的位置
                    $subordinate[$k]['p'] = & $subordinate[$now_pid]['p']['list'][$v['id']];
                    $subordinate[$k]['p']['url'] = 'url_herf';
                    $subordinate[$k]['p']['num'] = 0;
                    $subordinate[$k]['p']['list'] = array();
                }
            }
        }
        #dump($subordinate);
        //销毁m叉树
        //引用数组的价值已利用，被过桥抽板，
        //其实是我未知引用会给json_encode带来什么影响的情况之下，清理内存
        unset($subordinate);
        /*dump($all_sub);
        die();*/
        $children = json_encode($all_sub);
        S($id.'-tree',$children,1000);
        S($id.'-level',$sbdn_level,1000);
        if(!$need) {
            return array('subordinate' => $all_sub, 'sub_level' => $sbdn_level);
        }else{
            return $$need;
        }
    }
}