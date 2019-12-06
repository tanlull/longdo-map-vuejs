import Vue from 'vue'
import Map from './Map.vue'
import LongdoMap from 'longdo-map-vue' 

Vue.config.productionTip = false

Vue.use(LongdoMap, {     
  load: {         
       apiKey: '9095e2c77ad2e4e0e2409673cb5dcd6c'     
  } 
})

new Vue({
  render: h => h(Map),
}).$mount('#app') // map to public/index.html
