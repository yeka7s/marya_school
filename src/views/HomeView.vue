<template>
  <div class="home">
    <img class="logo" alt="logo" src="../assets/img/i.webp">
    <ButtonComponent btn_text="НАЧАТЬ"/>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonComponent
  }
}
</script>
<style lang="scss">
.home {
  padding: 50px;
}
.logo {
  border-radius: 30px;
  width: 20%;
}

@media (max-width: 1024px) {
  
}

</style>
