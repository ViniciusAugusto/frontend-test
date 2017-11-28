<template>
  <div class="products">
    <h1>
      Games
      <select name="filter" id="filter" v-model="currentOrder">
        <option v-for="(order, key, index) in orders" :key="index" :value="key">{{order}}</option>
      </select>
    </h1>
    <div class="itens">
      <div class="item" v-for="(product, index) in orderedItems(products)" :key="index">
        <picture>
          <img :src="getImageProduct(product.image)" :alt="product.name">
        </picture>
        <section class="details">
          {{ insertSpaces(product.name) }} <br>
          <span class="price">R$ {{formatNumber(product.price)}}</span>
        </section>
        <button class="addCart" @click="addProductToCart(product)">adicionar no carrinho</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentOrder: 'name',
      orders: {
        name: 'Filtar por Nome',
        price: 'Filtrar por Preço',
        score: 'Filtrar por Popularidade'
      }
    }
  },
  name: 'products',
  methods: {
    getImageProduct (image) {
      return require('../assets/img/' + image)
    },
    formatNumber (number) {
      return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number).replace('R$', '')
    },
    addProductToCart (prod) {
      this.$store.commit('addItem', prod)
    },
    orderedItems (products) {
      const ordered = products.slice(0)
      switch (this.currentOrder) {
        case 'name':
          ordered.sort((a, b) => {
            const x = a.name.toLowerCase()
            const y = b.name.toLowerCase()
            return x < y ? -1 : x > y ? 1 : 0
          })
          break
        case 'price':
          /* eslint-disable */
          ordered.sort((a, b) => a.price - b.price)
          break
        case 'score':
          ordered.sort((a, b)  =>  a.score - b.score)
          /* eslint-enable */
          break
      }
      return ordered
    },
    insertSpaces (string) {
      return string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
.products {
  padding: 5vh
}

.products h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 3em;
}

.products select {
  float: right;
  font-family: 'Open Sans', sans-serif;
  width: 30vw;
  font-size: 2vh;
  padding: 10px;
  appearance:none;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  background: url(../assets/img/arrow-down.svg) no-repeat right #FFF;
  background-position-x: 28vw;
}

.products .itens {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10vh;
}

.products .item{
  flex: 1 1 25%;
  height: 280px;
  margin: 0 20px 30px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer
}

.products .item picture{
  background: #EEEEEE;
  width: 100%;
  padding: 20px 0;
  display: inline-block;
  margin-bottom: 1vh
}

.products .item .details .price{
  color: var(--secondColor);
  font-weight: bold;
}

.products .item .addCart {
  color: var(--secondColor);
  border: none;
  background: none;
  font-weight: bold;
  display: none;
  font-size: 1em;
  padding: 20px;
  cursor: pointer;
}

.products .item:hover .addCart {
  display: inline-block;
}
.products .item:hover .details {
  display: none;
}


@media (min-width: 320px) and (max-width: 1024px) {
  .products .item{
   flex: 1 1 100%;
  }
  .products .item .addCart {
    display: inline-block;
  }
  .products .item{
    margin-bottom: 50px;
  }
}
</style>

