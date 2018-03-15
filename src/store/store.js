import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import all the store modules
import security from './rssfeed'
import products from './products'

// Collect all the modules onto variable called store.
export const store = new Vuex.Store({
  modules: {
    security: security,
    products: products
  }
})


