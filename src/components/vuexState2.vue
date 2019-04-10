<!-- 1. state用法示例 -->
<template>
  <div class="base">
    <p>名字：<span>{{name}}</span></p>
    <p>年龄：<span>{{age}}</span></p>
    <p>性别：<span>{{mysex}}</span></p>
    <p>信息：<span>{{info}}</span></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'vuexState2',
  computed: mapState({
    // 1. 简单用法
    name: function(state) {
      return state.name;
    },

    // 2. 箭头函数可使代码更简练
    age: state => state.age,

    // 3.传字符串参数 'mysex' 等同于 `state => state.sex`
    mysex: 'sex',

    // 4. 为了能够使用 `this` 获取局部状态，必须使用常规函数
    info: state => {
      return `name: ${state.name}, age: ${state.age}, sex: ${state.sex}`;
    }
  })
}
</script>
