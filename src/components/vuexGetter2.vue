<template>
  <div class="getter">
    <p>{{info}}</p>
    <p>{{cars}}</p>
    <p>--------------------------------------------------</p>
    <p>{{personInfo}}</p>
    <p>{{carNames}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'vuexGetter2',
    computed: {
      // 1. mapGetters 以数组为参数传入
      ...mapGetters([
        'info',
        'cars',
      ]),

      // 2. mapGetters 以对象为参数传入
      ...mapGetters({
        // 把 `this.personInfo` 映射为 `this.$store.getters.info`
        personInfo: 'info',
        carNames: 'cars',
      })
    },
  }
</script>
