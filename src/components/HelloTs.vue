<template>
  <div class="hello">
    <input type="text" @keyup.enter="addFeature" placeholder="输入新特性" />
    {{msg}}
    <ul>
      <li v-for="(f,index) in features" :key="index">{{f.name}}</li>
      <li>计算属性:{{count}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

//声明自定义类型约束数据结构
//定义一个特性类 ---可以对数据类型做约束
// class Feature {
//     constructor(public id: number,public name:string){}
// }

//可以用接口来代替特性类 来限制数据类型
interface Feature {
  id: number;
  name: string;
}

@Component
export default class HelloTs extends Vue {
  //父组件传过来的参数
  @Prop({ default: "msg" }) private msg!: string;
  //声明在类的属性  相当于组件的中data中的数据
  //   features: string[];
  private features: Feature[];
  constructor() {
    super();
    //   this.features =  ["ts写Vue","ts有点意思"]
    this.features = [{ id: 1, name: "ts写Vue" }, { id: 2, name: "ts有点意思" }];
  }
  //相当于声明在method中方法
  addFeature(e: any) {
    this.features.push({ id: this.features.length + 1, name: e.target.value });
  }
  //vue的生命钩子  包括其他的 也是相同的钩子函数名称
  created() {
    console.log("这是ts实现的组件钩子函数。。。");
  }
  //计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>
