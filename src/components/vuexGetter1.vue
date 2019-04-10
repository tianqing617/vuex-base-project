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
