import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import bumenxinxi from '@/views/modules/bumenxinxi/list'
    import yuangong from '@/views/modules/yuangong/list'
    import peixunxinxi from '@/views/modules/peixunxinxi/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import yuangongqingjia from '@/views/modules/yuangongqingjia/list'
    import yuangonggongzi from '@/views/modules/yuangonggongzi/list'
    import zhiwuxinxi from '@/views/modules/zhiwuxinxi/list'
    import jiangchengxinxi from '@/views/modules/jiangchengxinxi/list'
    import jiabanshenqing from '@/views/modules/jiabanshenqing/list'
    import kaoqindaka from '@/views/modules/kaoqindaka/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/bumenxinxi',
        name: '部门信息',
        component: bumenxinxi
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/peixunxinxi',
        name: '培训信息',
        component: peixunxinxi
      }
      ,{
	path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }
      ,{
	path: '/yuangongqingjia',
        name: '员工请假',
        component: yuangongqingjia
      }
      ,{
	path: '/yuangonggongzi',
        name: '员工工资',
        component: yuangonggongzi
      }
      ,{
	path: '/zhiwuxinxi',
        name: '职务信息',
        component: zhiwuxinxi
      }
      ,{
	path: '/jiangchengxinxi',
        name: '奖惩信息',
        component: jiangchengxinxi
      }
      ,{
	path: '/jiabanshenqing',
        name: '加班申请',
        component: jiabanshenqing
      }
      ,{
	path: '/kaoqindaka',
        name: '考勤打卡',
        component: kaoqindaka
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
