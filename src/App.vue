<template>
  <router-link to="/">Home</router-link>
  <router-view/>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import ColorCommotionView from '@/views/ColorCommotionView.vue'
export default {
  name: 'App',
  components: {
    HomeView,
    ColorCommotionView,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 1264px;
  margin: 0 auto;
}

body {
  background-color: #f8ddc4;
}
</style>
