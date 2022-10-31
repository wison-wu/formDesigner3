import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'
import view from '@/pages/view.vue'
import test from '@/pages/Test.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'designer',
            component: designer
        },
        {
            path: '/view',
            name: 'view',
            component: view
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
export default router