import {createSSRApp} from 'vue';
import {createAppRouter} from './router';
import {createAppStore} from './store';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export function createApp() {
    const app = createSSRApp(App);
    const router = createAppRouter();
    const store = createAppStore();

    app.use(router).use(store);

    return {app, router};
}