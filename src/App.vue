<script>
</script>

<template>
  <v-app>
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