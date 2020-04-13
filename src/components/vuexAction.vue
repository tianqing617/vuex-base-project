<template>
  <div class="action">
    <p>
      <button @click="increment">异步自增</button>
      <span>{{count}}</span>
    </p>
  </div>
</template>

<script>
  /**
  * Action 类似于 mutation，不同在于：
  * 1. Action 提交的是 mutation，而不是直接变更状态。
  * 2. Action 可以包含任意异步操作。
  */
  export default {
    name: 'vuexAction',
    computed: {
      count() {
        return this.$store.state.count;
      },
    },
    methods: {
      increment() {
        this.$store.dispatch('decrementAsync');
      },
    },
  }
</script>
