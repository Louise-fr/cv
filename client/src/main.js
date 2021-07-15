import Vue from 'vue'
import App from './App.vue'
import router from './router';

 


//V1

//CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/scss/bootstrap.scss"
import "boxicons/css/boxicons.min.css"
import "venobox/venobox/venobox.css"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import './assets/css/icofont.min.css'
import "./assets/css/style.css"
import 'highlight.js/styles/github.css'

//Javascript

import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min.js"
import "boxicons/dist/boxicons.js"
import "./assets/vendor/php-email-form/validate.js"



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
