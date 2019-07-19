<template>
  <div class="hello">
    <p>属性装饰器: {{msg}}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

function Component(target){
    const options: any = {
        data(){
            return {msg:"自己实现的low版装饰器"}
        } 
    }
    return Vue.extend(options)
}

@Component
export default class DecorByLow extends Vue {
    
}
</script>

<style scoped>
       
</style>
