import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'
import view from '@/pages/view.vue'
import TestDatePickerRender from '@/pages/TestDatePickerRender.vue'
import Test from '@/pages/Test.vue'

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
        },{
            path: '/TestDatePickerRender',
            name: 'TestDatePickerRender',
            component: TestDatePickerRender
        },{
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})
export default router