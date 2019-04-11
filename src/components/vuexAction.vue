<template>
  <div class="action">
    <p>
      <button>异步自增</button>
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
  }
</script>
