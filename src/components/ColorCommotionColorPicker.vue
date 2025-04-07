<template>
    <div class="color-picker">
      <div
        v-for="color in availableColors"
        :key="color"
        class="color-circle"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
      ></div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'

  export default {
    computed: {
        ...mapState('ColorCommotion', ['currentLevel']),
        availableColors() {
        // Получаем цвета для текущего уровня из хранилища
        const levels = {
            easy: ['red', 'yellow', 'blue'],
            medium: ['red', 'yellow', 'blue', 'green', 'orange'],
            hard: ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'pink', 'brown', 'gray', 'black']
        }
        return levels[this.currentLevel] || []
        }
    },
    methods: {
      selectColor(color) {
        this.$store.dispatch('ColorCommotion/selectColor', color)
      },
    },
  }
  </script>
  
  <style scoped>
  .color-picker {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .color-circle {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 0px black;
  }
  </style>