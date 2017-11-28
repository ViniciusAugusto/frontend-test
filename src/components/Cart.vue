<template>
  <div class="cart">
    <h2>Carrinho <span>({{cart.length}} itens)</span></h2>
    <div v-if="cart.length > 0">
      <div class="itens" v-for="(product, index) in cart" :key="index">
        <picture>
          <img :src="getImageProduct(product.image)" :alt="product.name">
        </picture>
        <section class="details">
          <p>{{ product.name }}</p>
          R$ {{formatNumber(product.price)}}
        </section>
        <button @click="removeProductToCart(product)">X</button>
      </div>
      <ul class="totals">
        <li>subtotal <span>R$ {{formatNumber(calculateSubTotal())}}</span></li>
        <li>frete <span>R$ {{formatNumber(calculateDelivery())}}</span></li>
        <li>total <span>R$ {{formatNumber(calculateSubTotal() + calculateDelivery())}}</span></li>
      </ul>
      <button id="finish">finalizar compra</button>
    </div>
    <div class="empty" v-else>
        <img src="../assets/img/cart.svg" alt="Seu carrinho de Compras está vazio!">
        Até o momento, <br> seu carrinho de compras está vazio.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
    calculateSubTotal () {
      /* eslint-disable */
      return this.cart.reduce((acc, prod) => acc += prod.price, 0)
      /* eslint-enable */
    },
    calculateDelivery () {
      /* eslint-disable */
      return this.cart.reduce((acc, prod) => acc += prod.delivery, 0)
      /* eslint-enable */
    },
    formatNumber (number) {
      return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number).replace('R$', '')
    },
    getImageProduct (image) {
      return require('../assets/img/' + image)
    },
    removeProductToCart (prod) {
      this.$store.commit('removeItem', prod)
    }
  },
  name: 'cart'
}
</script>

<style scoped>
.cart{
  border: 1px solid var(--thirdColor);
  border-radius: 5px;
  padding: 20px 20px 60px 20px;
  margin-top: 8vh;
}
.cart h2 {
  font-size: 3vh;
  font-family: 'Open Sans', sans-serif;
}
.cart h2 span{
  font-size: 2vh;
  color: var(--thirdColor)
}
.cart .empty {
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 2vh;
  font-family: 'Open Sans', sans-serif;
}
.cart .empty img {
  display: inline-block;
  margin: 20px auto

}
.cart .itens{
  margin: 0 0 20px 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  position: relative;
  word-wrap: break-word;
}
.cart .itens  picture{
  background: #CCC;
  padding: 10px;
  vertical-align: middle;
  display: inline-block;
}
.cart .itens picture img{
  width: 5vw;
}
.cart .itens .details{
  margin-left: 5px;
  color: #000;
  font-weight: 700;
  word-wrap: normal;
}
.cart .itens .details p{
  margin: 0;
  color: var(--thirdColor);
  font-weight: normal;
  word-wrap: break-word;
  width: 80%;
}
.cart .itens button{
  position: absolute;
  background: var(--secondColor);
  width: 25px;
  height: 25px;
  border-radius: 99px;
  color: #FFF;
  text-align: center;
  border: none;
  right: 0;
  top: 40px;
  display: none;
  cursor: pointer
}

.cart .itens:hover  button {
  display: inline-block;
}
.cart .totals {
  list-style-type: none;
  width: 100;
  margin: 20px 0 0 0;
  padding: 0;
}
.cart .totals li{
  color: var(--thirdColor);
  font-size: 2vh;
  margin: 10px 0
}
.cart .totals li span{
  color: #000;
  float: right;
}

.cart #finish{
  background-color: var(--secondColor);
  border: none;
  border-radius: 5px;
  color: #FFF;
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
}
@media (min-width: 320px) and (max-width: 480px) {
 .cart .itens button{
   display: inline-block;
 }
}
</style>

