<template>
  <div class="getter">
    <p><span>{{info}}</span></p>

    <p>
      <input type="text" v-model="carId">
      <button @click="getCar()">获取车名</button>
    </p>
  </div>
</template>

<script>
  /**
  * 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
  * 如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
  * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  */
  export default {
    name: 'vuexGetter1',
    data() {
      return {
        carId: '',
      }
    },
    computed: {
      // 1. 基本使用方式
      info() {
        return this.$store.getters.info;
      },
    },
    methods: {
      // 2. 使用回调函数，传参的方式
      getCar() {
        if (this.carId) {
          const carInfo = this.$store.getters.getCarById(this.carId);
          if (carInfo) alert(carInfo.name);
          else alert('车名不存在');
        } else {
          alert('id不合法');
        }
      },
    },

    // 说明：若getter声明的computed太多，可以使用mapGetters辅助函数，见vuexGetter2.vue
  }
</script>
