<template>
  <div id="app">
    <h3>单向数据流示例：</h3>
    <simple></simple>
    <hr/>
  </div>
</template>

<script>
import simple from './components/simple.vue'

export default {
  name: 'app',
  components: {
    simple
  }
}
</script>
