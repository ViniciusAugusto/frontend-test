<template>
  <div class="home">
    <products></products>
    <cart></cart>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import Products from '@/components/Products'

export default {
  name: 'home',
  components: { Products, Cart }
}
</script>

<style scoped>
.home {
  width: 100%;
}
.products {
  float: left;
  width: 65%;
}
.cart {
  float: left;
  width: 20%;
}
@media (min-width: 320px) and (max-width: 480px) {
  .products {
    width: 100%;
  }

  .cart {
    width: 100%;
  }
}
</style>

