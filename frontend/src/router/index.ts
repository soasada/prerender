import {createMemoryHistory, createRouter, createWebHistory, Router} from 'vue-router';

const pages = import.meta.glob('../pages/*.vue');

const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    return {
        path: name === '/home' ? '/' : name,
        component: pages[path] // () => import('./pages/*.vue')
    }
});

export function createAppRouter(): Router {
    return createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    });
}
