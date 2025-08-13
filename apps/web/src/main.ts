import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara';
import router from './router';

import './assets/styles/util.css';

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Lara,
    },
    ripple: true,
  })
  .mount('#app');
