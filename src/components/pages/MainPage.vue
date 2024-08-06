<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

 function goToLogin() {
      router.push({ name: 'login' });
    }
</script>

<template>
  <div>
    <p class="title">Главная страница</p>
    <button class="btn" @click="goToLogin">Войти в аккаунт</button>

  </div>
</template>

<style scoped>
.title{
font-size: 50px;
font-weight: 700;
}
.btn{
align-items: center;
justify-content: center;
display: flex;
margin: 10px;
}
</style>
