const colors = ['red', 'yellow', 'blue', 'green']

const levels = {
  easy: ['red', 'yellow', 'blue'], // Легкий уровень (3 цвета)
  medium: ['red', 'yellow', 'blue', 'green', 'orange'], // Средний уровень (5 цветов)
  hard: ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'], // Сложный уровень (10 цветов)
}

const colorTranslations = {
  red: 'красный',
  yellow: 'желтый',
  blue: 'синий',
  green: 'зеленый',
  orange: 'оранжевый',
  purple: 'фиолетовый',
  pink: 'розовый',
  brown: 'коричневый',
  gray: 'серый',
  black: 'черный',
}

// Генерация 15 вариантов карточек
const generateCards = (level) => {
  const colors = levels[level]
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
    cards: generateCards('easy'), // Список карточек
    currentCardIndex: 0, // Индекс текущей карточки
    selectedColor: null, // Выбранный цвет
    isCorrect: null, // Правильный ли выбор
    isFinished: false, // Закончен ли тренажер
    currentLevel: 'easy', // Текущий уровень сложности
    startGame: false,
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
      state.cards = generateCards(state.currentLevel)
      state.currentCardIndex = 0
      state.selectedColor = null
      state.isCorrect = null
      state.isFinished = false
      state.startGame = false

    },
    setLevel(state, level) {
      state.currentLevel = level
      state.cards = generateCards(level) // Генерация карточек для нового уровня
      state.currentCardIndex = 0 // Сброс индекса карточки
      state.selectedColor = null // Сброс выбранного цвета
      state.isCorrect = null // Сброс статуса правильности
      state.isFinished = false // Сброс статуса завершения
      state.startGame = true
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
    setLevel({ commit }, level) {
      commit('setLevel', level);
    },
  },
}