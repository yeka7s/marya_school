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
    display: inline-block;
    margin-top: 3vh;
    text-align: center;
    font-size: 4rem;
    line-height: 100%;
    text-decoration: none;
    color: hsl(208, 94%, 26%);

    &:hover {
      transform: scale(1.1);
    }
}
</style>
