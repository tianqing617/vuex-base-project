<template>
  <div class="mutation">
    <input type="text" v-model="num">
    <button @click="plus">累加</button>
    <button @click="minus">自减</button>
    <span>{{count}}</span>
  </div>
</template>

<script>
  /**
  * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：
  * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
  */
  export default {
    name: 'vuexMutation1',
    data() {
      return {
        num: '',
      }
    },
    computed: {
      count() {
        return this.$store.state.count;
      },
    },
    methods: {
      plus() {
        if (this.num && !isNaN(this.num)) {
          this.$store.commit('increment', {
            num: this.num,
          });
          // 另一种写法：this.$store.commit({ type: 'increment', num: this.num })
        } else {
          alert('填写数据不合法');
        }
      },
      minus() {
        this.$store.commit({
          type: 'decrement',
        });
      },
    },
  }
</script>
