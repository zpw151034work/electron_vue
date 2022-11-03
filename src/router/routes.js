
import Layout from '../components/layout/layout.vue'
const routes = [
    {
        name: 'logIn',
        path: '/logIn',
        component: () => import('../view/logIn.vue')
    },
    {
      path: '/',
      component: Layout,
      redirect: 'a',
      name: 'a',
      hidden: true,
      children: [
        {
            name: 'a',
            path: 'a',
            component: () => import('../view/A.vue')
        },
        {
            name: 'b',
            path: 'b',
            component: () => import('../view/B.vue')
        },
        {
          name: 'c',
          path: 'c',
          component: () => import('../view/C.vue')
      },
      ]
    },
    
];

export default routes
