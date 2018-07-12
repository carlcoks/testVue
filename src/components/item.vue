<template>

  <li class="item">
    <img :src="item.image" alt="">
    <p class="name"> Название: <span>{{ item.name }}</span> </p>
    <p class="price"> Цена: <span>{{ item.price }}</span> </p>
    <p class="category"> Категория: <span>{{ item.category}}</span> </p>    
    <button type="button" @click="changeFavorite()">
      {{ item.favorite ? 'Убрать из избранного' : 'Добавить в избранное' }}
    </button>
  </li>

</template>

<script>
  export default {
    props: ["item"],
    methods: {
      changeFavorite(){
        if( this.item.favorite ){
          this.$store.dispatch('delFavorites', this.item.id)
        }else{
          this.$store.dispatch('addFavorites', this.item.id)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/item.scss';
</style>
