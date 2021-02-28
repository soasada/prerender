import {createMemoryHistory, createRouter, createWebHistory, Router} from 'vue-router';

export function createAppRouter(): Router {
    return createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../pages/About.vue')
            }
        ]
    });
}
