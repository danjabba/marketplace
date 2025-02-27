<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/login">Iniciar Sesión</router-link> |
      <router-link to="/register">Registrarse</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f5f5f5;
}
</style>
