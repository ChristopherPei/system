import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'views/home/home.vue'
import overview from 'views/overview/overview.vue'
import users from 'views/users/users.vue'
import vip from "views/users/vip.vue"
import score from "views/users/score.vue"
import orders from 'views/orders/orders'
import itemOne from 'views/orders/orders_item/item_1.vue'
import itemTwo from 'views/orders/orders_item/item_2.vue'
import itemThree from 'views/orders/orders_item/item_3.vue'
import itemFour from 'views/orders/orders_item/item_4.vue'
import itemFive from 'views/orders/orders_item/item_5.vue'
import itemSix from 'views/orders/orders_item/item_6.vue'
import data from 'views/data/data.vue'
import setting from 'views/setting/setting.vue'
import asset from 'views/asset/asset.vue'
import authority from 'views/authority/authority.vue'


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: home, 
  },
  {
    path: '/overview',
    component: overview, 
  },  
  {
    path: '/users',
    component: users, 
  },
  {
    path: '/vip',
    component: vip, 
  },  
  {
    path: '/score',
    component: score, 
  },  
  {
    path: '/orders',
    component: orders, 
  },  
  {
    path: '/item1',
    component: itemOne, 
  },
  {
    path: '/item2',
    component: itemTwo, 
  },  
  {
    path: '/item3',
    component: itemThree, 
  },  
  {
    path: '/item4',
    component: itemFour, 
  },  
  {
    path: '/item5',
    component: itemFive, 
  },  
  {
    path: '/item6',
    component: itemSix, 
  },  
  {
    path: '/data',
    component: data, 
  },  
  {
    path: '/setting',
    component: setting, 
  },  
  {
    path: '/asset',
    component: asset, 
  },  
  {
    path: '/authority',
    component: authority, 
  },  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
