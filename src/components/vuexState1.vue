<!-- 1. state用法示例 -->
<template>
  <div class="base">
    <p>名字：<span>{{name}}</span></p>
    <p>年龄：<span>{{age}}</span></p>
    <p>性别：<span>{{sex}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'vuexState1',
  computed: {
    name() {
      // 在main.js中通过store选项：提供了一种机制将状态从根组件“注入”到每一个子组件中。
      return this.$store.state.name;
    },
    age() {
      return this.$store.state.age;
    },
    sex() {
      return this.$store.state.sex;
    },
  },
  // 这种方式，一个个声明计算属性的方式使用store，如果计算属性太多，会产生大量冗余代码。解决方案见：vueState2.vue，使用 mapState辅助函数。
}
</script>
