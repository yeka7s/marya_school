<template>
    <div class="level-selector">
      <h2>Выберите уровень сложности:</h2>
      <button class="level-selector__btn level-selector__btn--easy" @click="setLevel('easy')">Легкий</button>
      <button class="level-selector__btn level-selector__btn--medium" @click="setLevel('medium')">Средний</button>
      <button class="level-selector__btn level-selector__btn--hard" @click="setLevel('hard')">Сложный</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions('ColorCommotion', ['setLevel']), // Маппинг действия
    },
  }
  </script>
  
  <style scoped lang="scss">
  .level-selector {
    margin-bottom: 20px;

    &__btn {
      margin: 0 15px;
      padding: 10px 18px;
      border: none;
      border-radius: 10px;
      box-shadow: 2px 2px 0px #a8a8a8;
      color: #fff;
      text-shadow: 1px 1px 1px #1b1b1b;
      font-size: 1.5em;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }

      &--easy {
        background-color: #1bf72d;
      }
      &--medium {
        background-color: #ffd342;
      }
      &--hard {
        background-color: #ff4242;
      }
    }
  }
  
  </style>