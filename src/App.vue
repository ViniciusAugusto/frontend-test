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

html, body {
  height: 100%;
}

#app {
  font-family: 'Open Sans', Arial, sans-serif;
  color: var(--primaryColor);
  min-height: 100%;
  position: relative;
}

</style>
