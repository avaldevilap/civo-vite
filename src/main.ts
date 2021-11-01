import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_CIVO_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${
  import.meta.env.VITE_CIVO_API_KEY
}`;

const router = createRouter({ routes, history: createWebHistory() });

createApp(App).use(router).mount('#app');
