<script setup lang="ts">
import { RouterLink } from 'vue-router'
// Eliminamos la importación de TheWelcome.vue que causaba el error.
</script>

<template>
  <div class="welcome-container">
    <div class="welcome-box">
      <h2>¡Bienvenido al Mundo Pokémon!</h2>
      <p>Prepárate para una aventura épica. Tu primer paso es explorar el mapa de la región.</p>

      <RouterLink to="/map" class="start-button"> Comenzar Aventura </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para la vista HomeView */
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Ocupa la mayor parte de la altura visible */
  padding: 20px;
}

.welcome-box {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 450px;
  border: 5px solid #3b4cca; /* Borde azul Pokémon */
}

h2 {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.5em;
  color: #cc0000;
  margin-bottom: 20px;
}

p {
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #000000;
}

.start-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #ffe033; /* Amarillo Pokémon */
  color: #3b4cca; /* Azul Pokémon */
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid #3b4cca;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.start-button:hover {
  background-color: #ffcc00;
  transform: scale(1.05);
}
</style>
