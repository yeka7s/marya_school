<template>
    <div v-if="message" class="message">
      <img :src="message" alt="Результат" class="message__icon">
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      message() {
        if (this.$store.state.ColorCommotion.isCorrect === true) {
          return require('@/assets/img/icons/true.png')
        } else if (this.$store.state.ColorCommotion.isCorrect === false) {
          return require('@/assets/img/icons/error.png')
        }
        return ''
      },
    },
  }
  </script>
  
  <style scoped lang="scss">
  .message {
    margin-top: 20px;
    text-align: center;
    font-size: 1.5rem;
    color: red;

    &__icon {
      width: 15%;
    }
  }
  </style>