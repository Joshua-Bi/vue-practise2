import { createRouter, createMemoryHistory } from 'vue-router'


const routes: any = [{
    path: '/',
    redirect: '/menu'
},
{
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
},
{
    name: 'menu',
    path: '/menu',
    component: () => import('@/views/menu/index.vue'),        
    children:[{
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue')
    }
    ]
    
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router