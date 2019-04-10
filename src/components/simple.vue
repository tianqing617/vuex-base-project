<!-- view -->
<template>
  <div class="simple">
    <button @click="increment">自加</button>
    <span>count:<b>{{count}}</b></span>
  </div>
</template>

<script>
export default {
  name: 'simple',
  // state
  data() {
    return {
      count: 1,
    }
  },
  // actions
  methods: {
    increment() {
      this.count ++;
    },
  },
}
// 单向数据流：
// state，驱动应用的数据源；
// view，以声明方式将 state 映射到视图；
// actions，响应在 view 上的用户输入导致的状态变化。

// 地址：https://vuex.vuejs.org/zh/
</script>
