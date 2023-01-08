import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'
import view from '@/pages/view.vue'
import TestDatePicker from '@/pages/TestDatePicker.vue'
import TestDatePickerRender from '@/pages/TestDatePickerRender.vue'

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
            path: '/TestDatePicker',
            name: 'TestDatePicker',
            component: TestDatePicker
        },{
            path: '/TestDatePickerRender',
            name: 'TestDatePickerRender',
            component: TestDatePickerRender
        }
    ]
})
export default router