import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        requiresGuest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) =>{
  //check requireAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    //check if NOT logged in
    if(!firebase.auth().currentUser){
      //Go to login
      next({
        path: '/login',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      //proceed to route
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    //check if logged in
    if(firebase.auth().currentUser){
      //Go to login
      next({
        path: '/',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      //proceed to route
      next();
    }

  }else{
    //proceed to route
    next();
  }

});

export default router;

//Nav Guards
