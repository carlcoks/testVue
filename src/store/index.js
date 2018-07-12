import Vue from 'vue'
import Vuex from 'vuex'

import VueLocalStorage from 'vue-ls';

Vue.use(Vuex)
Vue.use(VueLocalStorage);

import array from './db'

export default new Vuex.Store({

  state: {
    items: array
  },

  getters: {
    filtered: state => cat => {
      return state.items.filter(item => item.category === cat);
    },
    categories: state => {
      return Array.from(new Set(state.items.map(item => item.category)));
    },
    favorites: state => {
      return state.items.filter(item => item.favorite);
    }
  },

  actions: {
    addFavorites ({ commit }, id) {
      let list = JSON.parse(Vue.ls.get('favorites'));
      if( list ){
        list.push(id)
      }else{
        list = [id];
      }

      Vue.ls.set('favorites', JSON.stringify(list));

      commit('addFavorite', id)
    },
    delFavorites ({ commit }, id){
      let list = JSON.parse(Vue.ls.get('favorites'));
      list.map( (item, i) => {
        if( item == id ){
          list.splice(i, 1)
        }
      })
      Vue.ls.set('favorites', JSON.stringify(list));
      commit('delFavorite', id)
    },
    getFavorites ({ commit }){
      let list = JSON.parse(Vue.ls.get('favorites'));
      if( list ){
        commit('setFavorite', list)
      }
    }
  },

  mutations: {
    addFavorite(state, id){
      state.items.find( item => item.id == id ).favorite = true;
    },
    delFavorite(state, id){
      state.items.find( item => item.id == id ).favorite = false;
    },
    setFavorite(state, list){
      state.items.map( item =>{
        if( list.indexOf(item.id) > -1){
          item.favorite = true
        }
      })
    }
  }

})
