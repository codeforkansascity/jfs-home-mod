import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .mount('#app');
