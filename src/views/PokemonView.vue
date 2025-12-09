<script setup lang="ts">
// Asegúrate de que la ruta sea correcta: '../components/PokemonCard.vue'
import PokemonCard from '../components/PokemonCard.vue'
</script>

<template>
  <div>
    <main>
      <h1>Pokedex de Ejemplo</h1>
      <p>Componente PokemonCard reutilizado 3 veces.</p>

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
          tipo="Normal"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* NOTA: Los estilos deben ser <style scoped> en una vista, no <style> global */
h1 {
  font-family: 'Press Start 2P', monospace;
  color: #cc0000;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
}
</style>
