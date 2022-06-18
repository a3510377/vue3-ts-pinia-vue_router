import { createApp, defineAsyncComponent } from 'vue';
import 'virtual:svg-icons-register';

import router from './router';

import '@/scss/main.scss';
import store from './stores';

const App = defineAsyncComponent(() => import('@/App.vue'));
const SvgIconComponent = defineAsyncComponent(
  () => import('@/components/utils/SvgIcon.vue')
);

createApp(App)
  .use(router)
  .use(store)
  .component('SvgIcon', SvgIconComponent)
  .mount('#app-mount');
