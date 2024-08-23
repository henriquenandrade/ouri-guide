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
            path: '/:slug',
            name: 'CompanyDetails',
            component: () => import('../views/CompanyDetails.vue'),
            props: true
        },
        {
            path: '/contato',
            name: 'contact',
            component: () => import('../views/Contact.vue'),
            props: true
        }
    ]  
})

export default router