<template>
  <div>
    <router-link to="/" class="button">
      {{ btn_text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    btn_text: String,
    path: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  padding: 45px 35px;
    border-radius: 30px;
    display: inline-block;
    margin-top: 6vh;
    text-align: center;
    font-size: 7rem;
    line-height: 100%;
    background-color: #fff;
}
</style>
