<template>  
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
@font-face {
  font-family: 'Nunito-Medium';
  src: url('@/assets/fonts/Nunito-Medium.ttf');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

#app {
  font-family: 'Nunito-Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1600px;
  margin: 0 auto;
}

</style>
