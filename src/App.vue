<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);

:root{
  --primaryColor: #363636;
  --secondColor: #67A1F8;
  --thirdColor: #CCC;
}

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', Arial, sans-serif;
  color: var(--primaryColor);
}
</style>
