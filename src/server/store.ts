import { reactive } from "vue";
import axios from "axios";

interface State {
  username: string;
  password: string;
  isAuthenticated: boolean;
  userInfo: {
    id: number;
    name: string;
    login: string;
    password: string;

  } | null;
}

const state = reactive<State>({
  username: "",
  password: "",
  isAuthenticated: false,
  userInfo: null,
});

const setUsername = (username: string): void => {
  state.username = username;
};

const setPassword = (password: string): void => {
  state.password = password;
};


const login = async (): Promise<void> => {
  try {
    const response = await axios.post("http://localhost:5173/login", {
      username: state.username,
      password: state.password,
    });

    // Предполагается, что сервер возвращает токен
    const token = response.data.token;

    // Сохраняем токен в localStorage
    localStorage.setItem("jwt", token);

    state.isAuthenticated = true; // Учитываем успешную аутентификацию
  } catch (error) {
    console.error("Login failed", error);
    alert("Неверный логин или пароль");
  }
};


const logout = (): void => {
  localStorage.removeItem("jwt");
  state.username = "";
  state.password = "";
  state.isAuthenticated = false;
    state.userInfo = null; 
};

const getUserInfo = async (): Promise<void> => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("Нет токена, невозможно получить информацию.");
    return;
  }

  try {
    const response = await axios.get("http://localhost:5173/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    state.userInfo = response.data; // Сохраняем информацию о пользователе
  } catch (error) {
    console.error("Ошибка при получении информации о пользователе", error);
  }
};

export default {
  state,
  getUserInfo,
  setUsername,
  setPassword,
  login,
  logout,
};
