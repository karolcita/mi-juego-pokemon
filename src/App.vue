<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
// NOTA: RouterView y RouterLink son necesarios para la navegación.
</script>

<template>
  <header>
    <img
      alt="Logo de Pokébola"
      class="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
      width="60"
      height="60"
    />
    <h1>Pokémon</h1>

    <nav>
      <RouterLink to="/map">🗺️ Mapa</RouterLink>
      <RouterLink to="/missions">📜 Misiones</RouterLink>
      <RouterLink to="/pvp">⚔️ PVP</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
/* Estilos Globales (pueden ser movidos a assets/base.css si lo prefieres) */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 5px solid #3b4cca;
  background-color: rgba(158, 156, 156, 0.6);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-shrink: 0;
}

h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.2em;
  color: #cc0000;
  text-shadow: 2px 2px 0 #3b4cca;
  margin: 0;
  margin-right: 20px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #3b4cca;
  font-weight: bold;
  padding-bottom: 5px;
  transition: color 0.2s;
}

nav a.router-link-exact-active {
  color: #cc0000;
  border-bottom: 3px solid #cc0000;
}

main {
  flex: 1;
  width: 100%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  background-color: transparent;
}
</style>
