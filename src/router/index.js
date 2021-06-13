import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Event from '../views/EventFaq.vue'
import Lomba from '../views/lomba/Lomba.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Login from '../views/masukdaftar/Login.vue'
import Register from '../views/masukdaftar/Register.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    }, {
        path: '/eventfaq',
        name: 'Event',
        component: Event,
    }, {
        path: '/lomba',
        name: 'Lomba',
        component: Lomba,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }, {
        path: '/register',
        name: 'Register',
        component: Register,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router