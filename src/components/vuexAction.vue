<template>
  <div class="action">
    <p>
      <button @click="increment">异步自增</button>
      <span>{{count}}</span>
    </p>
  </div>
</template>

<script>
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
