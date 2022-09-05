import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'designer',
            component: designer
        }
    ]
})
export default router