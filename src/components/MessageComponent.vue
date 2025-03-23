<template>
    <div v-if="message" class="message">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      message() {
        if (this.$store.state.ColorCommotion.isCorrect === true) {
          return 'Правильно!';
        } else if (this.$store.state.ColorCommotion.isCorrect === false) {
          return 'Попробуй еще';
        }
        return '';
      },
    },
  };
  </script>
  
  <style scoped>
  .message {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: red;
  }
  </style>