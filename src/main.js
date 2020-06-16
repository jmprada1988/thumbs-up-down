import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  { router } from './router/router';
import { store } from './store/store';
const fb = require('./firebase/firebaseConfig')
Vue.config.productionTip = false

let app;
fb.auth.onAuthStateChanged(user => {
  console.log(user)
  if(!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      fb,
      render: h => h(App)
    }).$mount('#app')
  }
})
