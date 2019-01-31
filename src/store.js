import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import items from "./api/items";
import cart from "./api/cart";

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    id: 5
  },

  getters: {
    total: state => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    particularItem: state => id => {
      return items.findItem(item => item.id === id);
    }
  },

  mutations: {
    getItems(state) {
      state.items = items.getItems();
    },

    getCart(state) {
      state.cart = cart.getCart();
    },

    deleteItem(state, id) {
      state.items = items.deleteItem(id);
    },

    deleteCart(state, id) {
      state.cart = cart.deleteCart(id);
    },

    addItem(state, obj) {
      console.log("creating!");
      state.items = items.addToItems(obj);
    },

    addToCart(state, obj) {
      console.log("adding!");
      state.cart = cart.addToCart(obj);
    },

    updateItem(state, id, obj) {
      console.log("Updating");
      state.cart = items.updateItem(id, obj);
    },

    incrementId(state) {
      state.id++;
    }
  },
  actions: {}
});
