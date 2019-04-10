<template>
  <div id="app">
    <h3>单向数据流示例：</h3>
    <simple></simple>
    <hr/>

    <h3>vuex的简单实现：</h3>
    <vuex-base></vuex-base>
    <hr/>

  </div>
</template>

<script>
import simple from './components/simple.vue'
import vuexBase from './components/vuexState.vue'

export default {
  name: 'app',
  components: {
    simple,
    vuexBase,
  },
}
</script>

<style>
  button {
    margin-right: 10px;
  }
</style>
