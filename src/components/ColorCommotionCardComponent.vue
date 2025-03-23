<template>
    <div
      class="card"
      :style="{ backgroundColor: card.backgroundColor }"
    >
      <p class="card__text">{{ card.text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .card {
    width: 70%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 2px 2px 0px black;
    margin: 50px auto;

    &__text {
        color: #f7f1f1;
        text-shadow: 2px 2px 0px black;
        font-size: 12em;
    }
  }
  </style>