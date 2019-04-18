import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

//axios 추가
import Vueaxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios


//이벤트버스설정
export const eventBus = new Vue({
  methods : {
    pageOn(num){
      console.log("eventbus", num);
      this.$emit("pageOn", num)
    }
  }
})

var vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
