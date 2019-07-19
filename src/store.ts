import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      features: ['类型检测', '预编译']
    },
     mutations: {
      addFeatureMutation(state: any, featureName: string){
       state.features.push({id: state.features.length+1, name: featureName})
     }
    },
     actions: {
      addFeatureAction({commit}, featureName: string) {
       commit('addFeatureMutation', featureName)
     }
    }
})
