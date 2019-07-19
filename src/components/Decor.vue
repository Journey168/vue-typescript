<template>
  <div class="hello">
    <p>属性装饰器: {{msg}}</p>

    <input type="text" @keyup.enter="addFeature" placeholder="输入新特性" />
    <button @click="addFeature1">add</button>
    <ul>
      <li v-for="(f,index) in features" :key="index">{{f.name}}</li>
      <!-- <li>计算属性:{{count}}</li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

//装饰器 实际上是一个工厂函数  传入一个对象 输出处理后的新对象

interface Feature{
    id:number;
    name:string
}

@Component
export default class Decor extends Vue {
    //属性装饰器
    @Prop({required:true,type: String}) private msg!: string;


    private features: Feature[];
    constructor(){
        super()
        this.features = [{id:1,name:"装饰器1号"}]
    }
    //相当于声明在method中方法
    addFeature(e: any) {
        this.features.push({ id: this.features.length + 1, name: e.target.value });
    }

    //函数装饰器
    @Watch('features',{deep: true}) 
    onFeaturesChange(val: string, oldVal: any){
        console.log(val,oldVal)
    }

    //函数装饰器 之事件派发  Emit函数有参数就是父类用的事件名称否则是下面的函数名称(羊肉串写法)
    @Emit('add')
    private addFeature1(){
        //返回值就是传参数到父类
        console.log("子类。。。。。。")
        return "事件派发"
    }
}
</script>

<style scoped>
       
</style>
