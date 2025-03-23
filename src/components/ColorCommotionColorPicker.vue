<template>
    <div class="color-picker">
      <div
        v-for="color in colors"
        :key="color"
        class="color-circle"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colors: ['red', 'yellow', 'blue', 'green'],
      }
    },
    methods: {
      selectColor(color) {
        this.$store.dispatch('ColorCommotion/selectColor', color)
      },
    },
  };
  </script>
  
  <style scoped>
  .color-picker {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .color-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 0px black;
  }
  </style>