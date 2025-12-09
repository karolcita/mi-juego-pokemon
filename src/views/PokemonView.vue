<script setup lang="ts">
import { ref } from 'vue'
// Asegúrate de que la ruta sea correcta: '../components/PokemonCard.vue'
import PokemonCard from '../components/PokemonCard.vue'

// ----------------------------------------------------
// 1. Datos de los Pokémon con información de combate
// ----------------------------------------------------
const pokemonList = ref([
  {
    nombre: 'Pikachu',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    tipo: 'Eléctrico',
    nivel: 50,
    salud: 150,
    habilidad: 'Electricidad Estática',
    ataques: [
      { nombre: 'Rayo', dano: 40 },
      { nombre: 'Impactrueno', dano: 25 },
    ],
  },
  {
    nombre: 'Charizard',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    tipo: 'Fuego',
    nivel: 70,
    salud: 220,
    habilidad: 'Mar Llamas',
    ataques: [
      { nombre: 'Lanzallamas', dano: 60 },
      { nombre: 'Ataque Aéreo', dano: 50 },
    ],
  },
  // 🛑 MODIFICACIÓN: GROUDON PRIMIGENIO (Jefe Final)
  {
    nombre: 'Groudon', // Nuevo nombre
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png',
    tipo: 'Jefe Final', // Nuevo tipo de display
    nivel: 100,
    salud: 1_000_000, // Salud masiva
    habilidad: 'Tierra del Fin (Reduce daño eléctrico)', // Habilidad pasiva
    ataques: [
      { nombre: 'Ascenso Draco', dano: 120 },
      { nombre: 'Fisura', dano: 300 },
    ],
  },
])
</script>

<template>
  <div>
    <main>
      <h1>Pokedex</h1>
      <p>¡Haz clic en una tarjeta para ver los detalles de combate!</p>

      <div class="card-container">
        <PokemonCard
          v-for="pokemon in pokemonList"
          :key="pokemon.nombre"
          :nombre="pokemon.nombre"
          :sprite="pokemon.sprite"
          :tipo="pokemon.tipo"
          :nivel="pokemon.nivel"
          :salud="pokemon.salud"
          :ataques="pokemon.ataques"
          :habilidad="pokemon.habilidad"
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

p {
  font-family: 'Press Start 2P', monospace;
  color: black;
  font-size: 0.8em;
  margin-bottom: 5px;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
}
</style>
