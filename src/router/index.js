import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/company/:id',
            name: 'CompanyDetails',
            component: () => import('../views/CompanyDetails.vue'),
            props: true
        }
    ]  
})

export default router