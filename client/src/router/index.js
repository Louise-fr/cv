import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Credits from '../views/Credits.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project/:project_id',
    name: 'Project',
    component: Project,
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits,
  },

  { path: '/404', name: 'NotFound', component: NotFound },  
  { path: '/*', redirect: '/404' }, 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;