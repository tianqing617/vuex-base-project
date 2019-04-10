<template>
  <div id="app">
    <h3>单向数据流示例：</h3>
    <simple></simple>
    <hr/>

    <h3>vuex state 简单实现：</h3>
    <vuex-base1></vuex-base1>
    <hr/>

    <h3>vuex state mapState 示例：</h3>
    <vuex-base2></vuex-base2>
    <hr/>

    <h3>vuex getter 示例：</h3>
    <vuex-getter1></vuex-getter1>
    <hr/>

    <h3>vuex getter mapGetters 示例：</h3>
    <vuex-getter2></vuex-getter2>
    <hr/>

    <h3>vuex mutation 示例：</h3>
    <vuex-mutation1></vuex-mutation1>
    <hr/>

    <h3>vuex mutation mapMutations 示例：</h3>
    <vuex-mutation2></vuex-mutation2>
    <hr/>

  </div>
</template>

<script>
import simple from './components/simple.vue'
import vuexBase1 from './components/vuexState1.vue'
import vuexBase2 from './components/vuexState2.vue'
import vuexGetter1 from './components/vuexGetter1.vue'
import vuexGetter2 from './components/vuexGetter2.vue'
import vuexMutation1 from './components/vuexMutation1.vue'
import vuexMutation2 from './components/vuexMutation2.vue'

export default {
  name: 'app',
  components: {
    simple,
    vuexBase1,
    vuexBase2,
    vuexGetter1,
    vuexGetter2,
    vuexMutation1,
    vuexMutation2,
  },
}
</script>

<style>
  button {
    margin-right: 10px;
  }
  input {
    margin-right: 10px;
  }
</style>
