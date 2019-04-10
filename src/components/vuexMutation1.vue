<template>
  <div class="mutation">
    <input type="text" v-model="num">
    <button @click="plus">累加</button>
    <button @click="minus">自减</button>
    <span>{{count}}</span>
  </div>
</template>

<script>
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
