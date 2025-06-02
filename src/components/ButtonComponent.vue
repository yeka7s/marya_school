<template>
  <div>
    <router-link :to="path" class="button">
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

<style scoped lang="scss">
.button {
  padding: 45px 35px;
    border-radius: 30px;
    display: inline-block;
    margin-top: 6vh;
    text-align: center;
    font-size: 5rem;
    line-height: 100%;
    background-color: #fff;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
    }
}
</style>
