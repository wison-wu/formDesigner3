import { createRouter, createWebHistory } from 'vue-router'
import designer from '@/components/formDesigner.vue'
import view from '@/pages/view.vue'
import TestDatePickerRender from '@/pages/TestDatePickerRender.vue'
import TestTimePickerRender from '@/pages/TestTimePickerRender.vue'
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
            path: '/formDesigner3',
            name: 'designer',
            title: 'designer',
            component:  designer
        },
        {
            path: '/view',
            name: 'view',
            component: view
        },{
            path: '/formdesigner3/view',
            name: 'view3',
            component: view
        },{
            path: '/TestDatePickerRender',
            name: 'TestDatePickerRender',
            component: TestDatePickerRender
        },{
            path: '/test',
            name: 'Test',
            component: Test
        },{
            path: '/TestTimePickerRender',
            name: 'TestTimePickerRender',
            component: TestTimePickerRender
        }
    ]
})
export default router