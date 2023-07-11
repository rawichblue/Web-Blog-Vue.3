import Home from './components/Home.vue'
import About from './components/About.vue'
import Blog1 from './Page/Blog1.vue'
import Blog2 from './Page/Blog2.vue'
import Blog3 from './Page/Blog3.vue'
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/Why-People-Love-Nike',
      component: Blog1
    },
    {
      path: '/Recommended-Nike-Shoes',
      component: Blog2
    },
    {
      path: '/Nike-Apparel-Review',
      component: Blog3
    }
  ]
});

export default router;
  