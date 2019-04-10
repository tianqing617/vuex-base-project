<template>
  <div class="mutation">
    <button @click="decrement">自减</button>
    <span>{{count}}</span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'vuexMutation2',
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
      ...mapMutations([
        'decrement',
      ]),
    },
  }
</script>
