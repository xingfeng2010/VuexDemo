import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyVue from '@/components/MyVue'
import MyVue1 from '@/components/MyVue1'
import MyVue2 from '@/components/MyVue2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'XXXXXXX',
      component: HelloWorld
    },
    {
      path: '/MyVue',
      name: 'MyVue',
      component: MyVue,
      children: [
        {path: "/", name: "MyVue", component:MyVue},
        {path: "MyVue1", name: "MyVue1",  component:MyVue1},
        {path: "MyVue2", name: "MyVue2", component:MyVue2}
      ]
    }
  ]
})
