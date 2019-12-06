<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">
<HelloWorld :msg="message"/>-->
    <input type="text" v-model="message"/>
    <button @click="msgAlert">Search</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return{
      message : "Bangkok"
  }
  },
  methods: {
    msgAlert(){
      alert(this.message)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
