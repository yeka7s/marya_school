<template>
    <div class="level-selector">
      <h2>Выберите уровень сложности:</h2>
      <button @click="setLevel('easy')">Легкий</button>
      <button @click="setLevel('medium')">Средний</button>
      <button @click="setLevel('hard')">Сложный</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions('ColorCommotion', ['setLevel']), // Маппинг действия
    },
  };
  </script>
  
  <style scoped>
  .level-selector {
    margin-bottom: 20px;
  }
  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>