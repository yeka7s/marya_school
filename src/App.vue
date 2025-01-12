<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <HomeView></HomeView>
  <!-- <router-view/> -->
</template>

<script>
import HomeView from '@/views/HomeView.vue'
export default {
  name: 'App',
  components: {
    HomeView,
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
