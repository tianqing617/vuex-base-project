<template>
  <div id="app">
    <h3>单向数据流示例：</h3>
    <simple></simple>
    <hr/>

    <h3>vuex state 简单实现：</h3>
    <vuex-base1></vuex-base1>
    <hr/>

    <h3>vuex state mapState 实现：</h3>
    <vuex-base2></vuex-base2>
    <hr/>

  </div>
</template>

<script>
import simple from './components/simple.vue'
import vuexBase1 from './components/vuexState1.vue'
import vuexBase2 from './components/vuexState2.vue'

export default {
  name: 'app',
  components: {
    simple,
    vuexBase1,
    vuexBase2,
  },
}
</script>

<style>
  button {
    margin-right: 10px;
  }
</style>
