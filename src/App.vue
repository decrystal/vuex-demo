<template>
  <div id="app">
    <addition></addition>
    <p>---------------------------------</p>
    <subtraction></subtraction>
  </div>
</template>

<script>

import addition from "./components/addition";
import subtraction from "./components/subtraction";
export default {
  name: 'App',
  components: {
    subtraction,
    addition,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
