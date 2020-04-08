import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

import * as firebase from 'firebase'


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database()
export const orderRef = database.ref('/order')



Vue.config.productionTip = false
Vue.use(VueSweetalert2);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
