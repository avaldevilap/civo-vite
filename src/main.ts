import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import axios from 'axios';
import { useCookies } from '@vueuse/integrations/useCookies';

axios.defaults.baseURL = import.meta.env.VITE_CIVO_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${
  import.meta.env.VITE_CIVO_API_KEY
}`;

const router = createRouter({ routes, history: createWebHistory() });
router.beforeEach((to, from, next) => {
  const cookies = useCookies(['api_key']);
  const isAuthenticated = cookies.get('api_key');
  if (to.path !== '/login' && !isAuthenticated) next({ path: '/login' });
  else next();
});

createApp(App).use(router).mount('#app');
