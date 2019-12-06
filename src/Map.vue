<template>
  <div id="map">
    <!--    <img alt="Vue logo" src="./assets/logo.png">
<HelloWorld :msg="message"/>-->
    <input type="text" v-model="message"/>
    <button @click="msgAlert">Search</button>
    <p /> Area
    <longdo-map>
             <longdo-map-polygon             
           :location="locationList"             
           :lineWidth="2"             
           :lineColor="'rgba(0, 0, 0, 1)'"
           :fillColor="'rgba(255, 0, 0, 0.4)'"/>  
    </longdo-map>
    <p /> Pin
    <longdo-map :zoom="10" :lastView="false">         
        <longdo-map-marker             
            v-for="(item, i) in markers"             
            :key="i"             
            :location="item.location"
            :title="item.title"             
            :detail="item.detail"     
        />     
    </longdo-map> 
    <p /> Event
    <longdo-map 
      @load="test" 
      :zoom="100" 
      :lastViw="false">
</longdo-map>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'map',
  components: {
    HelloWorld
  },
  data () {
    return{
      message : "Bangkok",
      locationList: [
                 { lon: 99, lat: 14 },
                 { lon: 100, lat: 13 },
                 { lon: 102, lat: 13 },
                 { lon: 103, lat: 14 }
             ],
     markers: [
        {
          location: { lon: 100.58, lat: 13.761 },
          title: "Vue Marker",
          detail: "This is a detail"
        }
      ]
             
  }
  },
  methods: {
    msgAlert(){
      alert(this.message)
    },
    test(map) {
         map.Event.bind('click', function(){
             alert("Map Click!");
        }) 
     }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 8px;
}
</style>
