<template>
  <div id="app">
    <header-block></header-block>
    <router-view/>
  </div>
</template>

<script>
  import headerBlock from './components/header';

  export default {
    name: 'app',
    data () {
      return {

      }
    },    
    components: {
      headerBlock
    }
  }
</script>

<style lang="scss">
  @import '/assets/css/reset.scss';
</style>
