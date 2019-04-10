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
  name: 'vuexState',
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
}
</script>
