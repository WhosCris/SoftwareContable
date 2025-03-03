<script>
import { onMounted } from 'vue';
import { auth } from './utils/firebase';

export default {
  name: 'App',
  setup() {
    onMounted(() => {
      // Aquí puedes poner código que necesites ejecutar cuando el componente esté listo.
      console.log('El componente se ha montado');
    });
  }
}; 
</script>



<template>
  <v-app>
    <h1>Firebase-conn</h1>
    <div class="background">
      <router-view />
    </div>
  </v-app>
</template>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/authbackground.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
</style>