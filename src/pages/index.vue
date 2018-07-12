<template>

  <section>
    <div class="filter">
      <p class="title">Фильтр:</p>
      <select v-model="select">
        <option v-for="cat in categories">{{ cat }}</option>
      </select>

      <button class="btn" @click="goFilter">Применить</button>
      <button class="btn" @click="clearFilter">Сбросить</button>
    </div>

    <p class="title">Список товаров:</p>

    <ul class="list">

      <item v-for="item in items" :key="item.id" :item="item"></item>

    </ul>

  </section>

</template>

<script>
  import item from '../components/item';
  export default {
    data(){
      return {
        array: [],
        filterState: '',
        select: ''
      }
    },
    created(){
      this.$store.dispatch('getFavorites')
    },
    computed: {
      categories(){
        return this.$store.getters.categories;
      },
      items(){
        if( this.filterState != '' ){
          return this.$store.getters.filtered(this.filterState)
        }else{
          return this.$store.state.items
        }
      }
    },
    components: {
      item
    },
    methods: {
      goFilter(){
        this.filterState = this.select;
      },
      clearFilter(){
        this.filterState = '';
        this.select = '';
      },
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/index.scss';
</style>
