<script setup lang="ts">
import { useRouter } from "vue-router";
import store from "../../server/store";

const router = useRouter();

const handleLogin = async () => {
  await store.login();
  if (store.state.isAuthenticated) {
    router.push({ name: "me" });
  }
};
</script>

<template>
  <div class="container">
    <div class="box">
      <p class="title">Вход в аккаунт</p>
      <form @submit.prevent="handleLogin" class="form_box">
        <div class="input_box">
          <p class="title_small">Введите логин:</p>
          <input
            class="input"
            type="text"
            v-model="store.state.username"
            placeholder="login"
          />
          <p class="title_small">Введите пароль:</p>
          <input
            class="input"
            type="password"
            v-model="store.state.password"
            placeholder="password"
          />
        </div>
        <button type="submit" class="btn">submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 55vh;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid rgba(254, 254, 254, 0.284);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgb(72, 72, 72), transparent);
}

.box {
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.title {
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 10px;
}
.title_small {
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  padding-left: 15px;
}
.form_box {
 justify-content: center;
 align-items: baseline;
}

.input_box {
  margin: 10px 5px;
}

.input {
  margin: 15px;
  padding: 25px;
}

.btn {
  margin: 15px 5px;
  padding: 10px 25px;
}

@media (max-width: 420px) {
  .container {
    height: 80vh;
  }
}

@media (max-height: 800px) {
  .container {
    height: 80vh;
  }
  .title {
    font-size: 26px;
  }
  .input {
    margin: 5px;
    padding: 15px;
  }
}

</style>
