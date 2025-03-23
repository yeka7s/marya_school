<template>
    <div class="color-commotion">
      <h1 v-if="!isFinished">Цветной переполох</h1>
      <div v-if="!isFinished">
        <CardComponent :card="currentCard" />
        <ColorPicker />
        <MessageComponent />
      </div>
      <div v-else class="finish-message">
        <h2>Ты молодец!</h2>
        <button @click="resetGame">Начать заново</button>
      </div>
    </div>
  </template>
  
  <script>
  import CardComponent from '../components/ColorCommotionCardComponent.vue'
  import ColorPicker from '../components/ColorCommotionColorPicker.vue'
  import MessageComponent from '../components/MessageComponent.vue'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  
  export default {
    components: {
      CardComponent,
      ColorPicker,
      MessageComponent,
    },
    computed: {
      currentCard() {
        console.log('this.$store.state.cards :>> ', this.$store.state.ColorCommotion.cards);
        return this.$store.state.ColorCommotion.cards[this.$store.state.ColorCommotion.currentCardIndex]
      },
      isFinished() {
        return this.$store.state.ColorCommotion.isFinished
      },
    },
    methods: {
      resetGame() {
        this.$store.commit('ColorCommotion/resetGame')
      },
    },
  }
  </script>
  
  <style scoped>
  .app {
    text-align: center;
    padding: 20px;
  }
  
  .finish-message {
    margin-top: 50px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>