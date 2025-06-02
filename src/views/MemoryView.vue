<template>
    <div>
        <router-link to="/" class="trans-button" @click="resetGame"><img alt="logo"
                src="@/assets/img/icons/back_arrow.png">В начало</router-link>
    </div>
    <div class="memory-game">
        <h1>Memory Game</h1>
        <button @click="restartGame" class="restart-btn">Новая игра</button>
        <div class="board">
            <div v-for="(card, index) in cards" :key="index" class="card"
                :class="{ flipped: card.flipped, matched: card.matched }" @click="flipCard(index)">
                <span v-if="card.flipped || card.matched">{{ card.symbol }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const symbols = ['🍎', '🍊', '🍇', '🍓', '🍋', '🍉', '🍒', '🍍', '🍎', '🍊', '🍇', '🍓', '🍋', '🍉', '🍒', '🍍'];
const cards = ref([]);
const firstCard = ref(null);
const secondCard = ref(null);
const lockBoard = ref(false);

function initializeGame() {
    const shuffled = [...symbols]
        .slice(0, 16)
        .sort(() => 0.5 - Math.random())
        .map(symbol => ({
            symbol,
            flipped: false,
            matched: false
        }));

    cards.value = shuffled;
    resetTurn();
}

function restartGame() {
    cards.value.forEach(card => {
        card.flipped = false;
        card.matched = false;
    });

    setTimeout(() => {
        initializeGame();
    }, 300);
}

function flipCard(index) {
    // Если доска заблокирована или карта уже открыта/совпала
    if (lockBoard.value || cards.value[index].flipped || cards.value[index].matched) return;

    // Переворачиваем карту
    cards.value[index].flipped = true;

    // Если это первая карта в текущем ходе
    if (firstCard.value === null) {
        firstCard.value = index;
        return;
    }

    // Если это вторая карта
    secondCard.value = index;
    lockBoard.value = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = cards.value[firstCard.value].symbol === cards.value[secondCard.value].symbol;

    if (isMatch) {
        cards.value[firstCard.value].matched = true;
        cards.value[secondCard.value].matched = true;
        resetTurn();
    } else {
        setTimeout(() => {
            cards.value[firstCard.value].flipped = false;
            cards.value[secondCard.value].flipped = false;
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    firstCard.value = null;
    secondCard.value = null;
    lockBoard.value = false;

    // Проверка на завершение игры
    if (cards.value.every(card => card.matched)) {
        setTimeout(() => {
            alert('Поздравляем! Вы выиграли!');
        }, 500);
    }
}

onMounted(() => {
    initializeGame();
});
</script>

<style scoped>
.memory-game {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.restart-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 15px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.restart-btn:hover {
    background-color: #45a049;
}

.board {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    gap: 10px;
    margin: 20px auto;
    justify-content: center;
}

.card {
    width: 100px;
    height: 100px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    user-select: none;
}

.card.flipped {
    background: #fff;
    pointer-events: none;
    transform: rotateY(180deg);
}

.card.matched {
    background: #a5d6a7;
    pointer-events: none;
    transform: scale(0.95);
}

@media (max-width: 600px) {
    .board {
        grid-template-columns: repeat(3, 80px);
    }

    .card {
        width: 80px;
        height: 80px;
        font-size: 20px;
    }
}
</style>