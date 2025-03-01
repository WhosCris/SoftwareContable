import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import CreateAccount from '../views/CreateAccount.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';
import MainMenu from '@/views/MainMenu.vue';

const routes = [
  {
    path: '/', // Ruta principal
    component: Login,
  },
  {
    path: '/create-account', // Ruta para crear cuenta
    component: CreateAccount,
  },
  {
    path: '/forgot-password', // Ruta para recuperar contraseña
    component: ForgotPassword,
  },
  {
    path: '/home', // Ruta para el menú principal
    component: MainMenu,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;