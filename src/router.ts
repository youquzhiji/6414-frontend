import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Settings from "@/views/Settings.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/settings', name: 'Settings', component: Settings},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
