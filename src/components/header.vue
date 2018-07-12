<template>
    <header>
      <ul class="menu">
        <li class="menuItem">
          <router-link to="/">Список</router-link>
        </li>
        <li class="menuItem">
          <router-link to="/favorites">Избранное</router-link>
        </li>
      </ul>
    </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  header{
    border-bottom: 1px solid #000;
  }
  .menu{
    display: flex;
    width: 100%;
    padding: 15px;
  }
  .menuItem{
    font-size: 20px;
    font-weight: bold;
    margin: 0 20px;
    a{
      color: #909090;
      padding-bottom: 2px;
      &.router-link-exact-active{
        color: #000;
        border-bottom: 1px solid rgba(0,0,0,.2);
      }
    }
  }
</style>
