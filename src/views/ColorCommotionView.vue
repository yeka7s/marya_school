<template>
  <BackHomeBtnComponent/>
  <div class="color-commotion">
    <h1 class="rainbow-text">Цветной переполох</h1>
    <transition name="fade" v-if="step === 1">
      <LevelSelector v-if="!startGame" />
      <div v-else>
        <p class="color-list__description"><img class="info-icon" alt="info" src="@/assets/img/icons/info.png">Прочитай
          по порядку</p>
        <div class="color-list">
          <div class="color-list__item" v-for="card in cards" :style="{ backgroundColor: card.backgroundColor }">{{
            card.text }}
          </div>
        </div>
        <div>
          <div @click="step = 2" class="trans-button next-step"><img class="next-step__img"
              src="@/assets/img/icons/back_arrow.png" alt="">Далее</div>
        </div>
      </div>
    </transition>
    <transition name="fade" v-if="step === 2">
      <div>
        <div v-if="!isFinished">
          <CardComponent :card="currentCard" />
          <ColorPicker />
          <MessageComponent />
        </div>
        <div v-if="isFinished" class="finish-message">
          <h2 class="finish-message__title">Ты молодец!</h2>
          <img class="finish-message__img" src="@/assets/img/win.jpg" alt="Победа" width="200" height="200">
          <button class="finish-message__btn trans-button" @click="resetGame">Начать заново</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CardComponent from '../components/ColorCommotionCardComponent.vue'
import ColorPicker from '../components/ColorCommotionColorPicker.vue'
import MessageComponent from '../components/MessageComponent.vue'
import LevelSelector from '../components/LevelSelectorComponent.vue'
import BackHomeBtnComponent from '../components/BackHomeBtnComponent.vue'

import { mapState } from 'vuex'

export default {
  components: {
    CardComponent,
    ColorPicker,
    MessageComponent,
    LevelSelector,
    BackHomeBtnComponent,
  },
  data() {
    return {
      step: 1,
    }
  },
  computed: {
    ...mapState('ColorCommotion', ['currentLevel', 'startGame']),
    currentCard() {
      console.log('this.$store.state.cards :>> ', this.$store.state.ColorCommotion.cards);
      return this.$store.state.ColorCommotion.cards[this.$store.state.ColorCommotion.currentCardIndex]
    },
    cards() {
      return this.$store.state.ColorCommotion.cards
    },
    isFinished() {
      return this.$store.state.ColorCommotion.isFinished
    },
  },
  methods: {
    resetGame() {
      this.$store.commit('ColorCommotion/resetGame')
      this.step = 1
    },
  },
}
</script>

<style scoped lang="scss">
.app {
  text-align: center;
  padding: 20px;
}

.trans-button {
    text-decoration: none;
    display: flex;
    gap: 10px;
    font-size: 1.5em;
    align-items: center;
    font-weight: bold;
    color: #696363;
    margin: 30px 0;
    width: max-content;
    cursor: pointer;
    & img {
        width: 4rem;
    }
    &:hover {
      transform: scale(1.1);
    }
}
  
.rainbow-text {
  background: linear-gradient(90deg,
      #ff0000, #ff7f00, #ffff00,
      #00ff00, #0000ff, #4b0082,
      #9400d3);
  background-size: 600% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow 10s ease infinite;
  font-size: 4rem;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

.color-list {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  gap: 15px;
  flex-wrap: wrap;
  color: #fff;
  text-shadow: 2px 2px 0px black;
  font-size: 4rem;

  &__item {
    padding: 0 1.5rem 0.5rem;
    border-radius: 20px;
    box-shadow: 2px 2px 13px #5f5d5d;
  }

  &__description {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 1.25rem;
    align-items: center;
    font-weight: bold;
    color: #696363;
    margin: 30px 0;

    & img {
      width: 2.5rem;
    }
  }
}

.next-step {
  margin-left: auto;

  &__img {
    transform: rotate(180deg);
  }
}

.finish-message {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;


  &__title {
    font-size: 2em;
  }

  &__img {
    width: 200px;
  }

  &__btn {
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background-color: #1bf72d;
    box-shadow: 2px 2px 0px #a8a8a8;
    color: #fff;
    text-shadow: 1px 1px 1px #1b1b1b;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
