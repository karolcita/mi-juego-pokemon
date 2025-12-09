<script setup lang="ts">
// Esto es correcto y no debería dar error en <script setup>
import PokemonCard from './components/PokemonCard.vue'
</script>

<template>
  <header>
    <img
      alt="Logo de Pokébola"
      class="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <h1>Pokedex</h1>
    <p>Atrapa a tus Pokémon favoritos</p>

    <div class="card-container">
      <PokemonCard
        nombre="Pikachu"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        tipo="Eléctrico"
      />

      <PokemonCard
        nombre="Charizard"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        tipo="Fuego"
      />

      <PokemonCard
        nombre="Groudon"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
        tipo="Jefe Final"
      />
    </div>
  </main>
</template>

<style>
/* Estilos globales para App.vue */
body {
  background-image: url('src/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

/* Asegúrate que el <style> de App.vue NO esté 'scoped' */
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  text-align: center;
}

header {
  line-height: 1.5;
  padding-bottom: 20px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Press Start 2P', monospace;
  color: #cc0000;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 20px;
}

p {
  font-family: 'Press Start 2P', monospace;
  color: black;
}

.card-container {
  display: flex;
  justify-content: center;

  padding-top: 30px;
}
</style>
