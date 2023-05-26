import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import axios from 'axios';

// Vuetify
// import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/labs/VDataTable'
import {
  VCard, 
  VCardText, 
  VCardTitle,
  VRating,
  VToolbar,
  VTextField,
  VSpacer,
  VBtn,
  VIcon,
} from 'vuetify/components'
import { Ripple } from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
  components: {
    VDataTable,
    VCard, 
    VCardText, 
    VCardTitle,
    VRating,
    VToolbar,
    VTextField,
    VSpacer,
    VBtn,
    VIcon,
  },
  directives: {
    Ripple,
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
})

import { routes } from './routes';
import App from './App.vue';

const router = VueRouter.createRouter({
  mode: 'history',
  history: VueRouter.createWebHistory(),
  routes: routes
});

const app = Vue.createApp(App);
app.use(router).use(vuetify).mount('#app');