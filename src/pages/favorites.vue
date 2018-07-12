<template>
  <ul>
    <item v-for="item in favorites" :key="item.id" :item="item"></item>
  </ul>
</template>

<script>
  import item from '../components/item';

  export default {
    components: {
      item
    },
    computed: {
      favorites(){
        return this.$store.getters.favorites;
      }
    }
  }
</script>

<style lang="scss">
</style>
