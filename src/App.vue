<template>  
  <router-view/>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import ColorCommotionView from '@/views/ColorCommotionView.vue'
import MemoryView from '@/views/MemoryView.vue'
export default {
  name: 'App',
  components: {
    HomeView,
    ColorCommotionView,
    MemoryView,
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
  padding: 0 50px;
}
html {
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 550px) {
    font-size: 7px;
  }
}

</style>
