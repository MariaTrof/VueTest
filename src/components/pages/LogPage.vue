<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import store from '../../server/store';

const router = useRouter();

// Получаем информацию о пользователе при монтировании компонента
onMounted(async () => {
  await store.getUserInfo();
});

function handleOut() {
  store.logout();
  router.push({ name: 'main' });
}

const user = store.state.userInfo; // Изменяем на получение из состояния
</script>

<template>
  <div class="container">
    <div class="box" v-if="user">
      <p class="title">Hello, {{ user.login }}!</p>
      <p class="text">
        {{ user.name }} - вашe имя <br />
        {{ user.password }} - ваш пароль (если требуется) <br />
        {{ user.id }} - ваш ID <br />
      </p>
      <button class="btn" @click="handleOut">Выйти</button>
    </div>
    <div v-else>
      <p>Загрузка информации о пользователе...</p>
    </div>
  </div>
</template>


<style scoped>
.title{
font-size: 50px;
font-weight: 700;
}
.text{
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.btn{
align-items: center;
justify-content: center;
display: flex;
margin: 10px;
}
</style>
