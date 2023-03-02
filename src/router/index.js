import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from "../views/Home.vue";
import Lesson from "../views/Lesson.vue";
import tokenize from "@/plugins/tokenize";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/lessons',
        name: 'Lessons',
        component: Lesson
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const token = tokenize.get();

    if (authRequired && !token) {
        return next('/login');
    }

    next();
});

export default router
