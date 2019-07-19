<template>
  <div class="hello">
    <input type="text" @keyup.enter="addFeature" placeholder="输入新特性" />
    <ul>
      <li v-for="(f,index) in features" :key="index">{{f.name}}</li>
      <!-- <li>计算属性:{{count}}</li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import { State,Action, Mutation } from 'vuex-class';



@Component
export default class VuexClass extends Vue {
    //状态 动作 变更映射
    @State  features!: [];
    @Action addFeatureAction:any;
    @Mutation addFeatureMutation:any;

    private addFeature(event:any){
        this.addFeatureAction(event.target.value)
        event.target.value = ""
    }

}
</script>

<style scoped>
       
</style>
