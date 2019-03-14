import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyVue from '@/components/MyVue'
import MyVue1 from '@/components/MyVue1'
import MyVue2 from '@/components/MyVue2'
import params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'XXXXXXX',
      component: {
        default: HelloWorld,
          left:MyVue1,
          right:MyVue2
      }
    },
    {
      path: '/MyVue',
      name: 'MyVue',
      component: {
          default: HelloWorld,
          left:MyVue1,
          right:MyVue2
      }
      // children: [
      //   {path: "/", name: "MyVue", component:MyVue},
      //   {path: "MyVue1", name: "MyVue1",  component:MyVue1},
      //   {path: "MyVue2", name: "MyVue2", component:MyVue2}
      // ]
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:params
    },{
      path:'/goback',
      redirect:'/MyVue'
    },{
      path: '/goreturn',
      component:MyVue,
      alias:'/jspang'
    },{
      path:'*',
      component:Error
    }
  ]
})
