import { createApp } from 'vue';
import App from './app.vue';

import './style.css';
import { i18n } from './lang';

import 'ramp-pcar/dist/ramp.css';

import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';

const app = createApp(App);

app.use(i18n).use(VueTippy, {
    directive: 'tippy',
    component: 'tippy'
});

app.mount('#app');
