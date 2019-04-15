import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//이벤트버스설정
export const eventBus = new Vue({
  methods : {
    pageOn(num){
      console.log("eventbus", num);
      this.$emit("pageOn", num)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
