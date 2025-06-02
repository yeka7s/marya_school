<template>
    <div>
        <router-link to="/" class="trans-button" @click="resetGame"><img alt="logo"
                src="@/assets/img/icons/back_arrow.png">В начало</router-link>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
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
}</style>