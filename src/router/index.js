import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'
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
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
export default router