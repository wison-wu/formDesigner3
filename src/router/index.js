import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: () => import('@/pages/page1.vue')
        },
        {
            path: '/page2',
            component: () => import('../pages/page2.vue')
        }
    ]
})
export default router