import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStoragePlugin = (store) => {
  store.subscribe((mutation, state, a) => {
    localStorage.setItem('state', JSON.stringify(state))
  })
}

const state = localStorage.getItem('state')
const stateParsed = JSON.parse(state)

let cart = []
let products = require('./mock.json')

if (stateParsed && stateParsed.cart) {
  cart = stateParsed.cart
}

if (stateParsed && stateParsed.products) {
  products = stateParsed.products
}

const initialState = {
  cart,
  products
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    addItem: (state, arg) => {
      arg.delivery = (arg.price > 250) ? 0 : 10 // regra frete A cada produto adicionado, deve-se somar R$ 10,00 ao frete., O frete é grátis para compras acima de R$ 250,00.
      state.cart.push(arg)
    },
    removeItem (state, arg) {
      state.cart.splice(arg, 1)
    }
  },
  plugins: [localStoragePlugin]
})
