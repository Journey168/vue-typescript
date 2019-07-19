<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <HelloTs msg="Helle TS"></HelloTs> -->

    <!-- <Decor msg="属性装饰器" @add="addEvent"></Decor> -->
    <!-- <VuexClass></VuexClass> -->

    <DecorByLow></DecorByLow>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import HelloTs from './components/HelloTs.vue';
import Decor from './components/Decor.vue';
import DecorByLow from './components/DecorForComponent.vue';
import VuexClass from './components/VuexClass.vue';

@Component({
  components: {
    HelloWorld,
    HelloTs,
    Decor,
    VuexClass,
    DecorByLow
  },
})
export default class App extends Vue {
  addEvent(params:any){
    console.log("shijianpacf")
    console.log(params)
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
