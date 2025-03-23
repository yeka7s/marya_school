const colors = ['red', 'yellow', 'blue', 'green']
const colorTranslations = {
  red: 'красный',
  yellow: 'желтый',
  blue: 'синий',
  green: 'зеленый',
}

// Генерация 15 вариантов карточек
const generateCards = () => {
  const cards = [];
  let previousTextColor = null // Храним предыдущий текст

  for (let i = 0; i < 15; i++) {
    let textColor
    do {
      textColor = colors[Math.floor(Math.random() * colors.length)]
    } while (textColor === previousTextColor); // Убедимся, что текст не повторяется

    let backgroundColor
    do {
      backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    } while (backgroundColor === textColor) // Убедимся, что цвет фона отличается от текста

    cards.push({
      textColor,
      backgroundColor,
      text: colorTranslations[textColor], // Добавляем текст на русском
    });

    previousTextColor = textColor // Обновляем предыдущий текст
  }

  return cards
}

export default {
  namespaced: true,
  state: {
    cards: generateCards(), // Список карточек
    currentCardIndex: 0, // Индекс текущей карточки
    selectedColor: null, // Выбранный цвет
    isCorrect: null, // Правильный ли выбор
    isFinished: false, // Закончен ли тренажер
  },
  getters: {
  },
  mutations: {
    setSelectedColor(state, color) {
      state.selectedColor = color
      console.log('state.selectedColor :>> ', state.selectedColor);
    },
    checkAnswer(state) {
      const currentCard = state.cards[state.currentCardIndex]
      state.isCorrect = state.selectedColor === currentCard.textColor
      console.log('state.isCorrect :>> ', state.isCorrect);
    },
    nextCard(state) {
      console.log('nextCard :>> ');
      if (state.currentCardIndex < state.cards.length - 1) {
        state.currentCardIndex++
        state.selectedColor = null
        state.isCorrect = null
      } else {
        state.isFinished = true
      }
    },
    resetGame(state) {
      state.cards = generateCards()
      state.currentCardIndex = 0
      state.selectedColor = null
      state.isCorrect = null
      state.isFinished = false
    },
  },
  actions: {
    selectColor({ commit, state }, color) {
      console.log('color :>> ', color);
      commit('setSelectedColor', color)
      commit('checkAnswer')
      if (state.isCorrect) {
        setTimeout(() => {
          commit('nextCard')
        }, 1000); // Задержка перед переходом к следующей карточке
      }
    },
  },
}