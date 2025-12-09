<script setup lang="ts">
import { ref } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import PokemonDetailsModal from '../components/PokemonDetailsModal.vue' // 🛑 Nuevo

// ----------------------------------------------------
// 1. ESTADO DEL MODAL
// ----------------------------------------------------
const isModalVisible = ref(false)
const selectedPokemon = ref(null)

// ----------------------------------------------------
// 2. DATOS DE LOS POKÉMON (Añadimos ID para facilitar el seguimiento)
// ----------------------------------------------------
const pokemonList = ref([
  {
    id: 25,
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
    id: 6,
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
  {
    id: 383,
    nombre: 'Groudon ',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png',
    tipo: 'Jefe Final',
    nivel: 100,
    salud: 1_000_000,
    habilidad: 'Tierra del Fin (Reduce daño eléctrico)',
    ataques: [
      { nombre: 'Ascenso Draco', dano: 120 },
      { nombre: 'Fisura', dano: 300 },
    ],
  },
])

// ----------------------------------------------------
// 3. MANEJADORES DE EVENTOS
// ----------------------------------------------------

/**
 * Recibe los datos del Pokémon seleccionado desde el evento de PokemonCard.
 * @param {object} pokemonData - Todos los datos de las props del Pokémon.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleSelectPokemon(pokemonData: any) {
  // Almacena los datos y muestra el modal
  selectedPokemon.value = pokemonData
  isModalVisible.value = true
}

function closeModal() {
  isModalVisible.value = false
  selectedPokemon.value = null
}
</script>

<template>
  <div>
    <main>
      <h1>Pokedex</h1>
      <p>¡Haz clic en una tarjeta para abrir la ventana emergente de detalles!</p>

      <div class="card-container">
        <PokemonCard
          v-for="pokemon in pokemonList"
          :key="pokemon.id"
          :id="pokemon.id"
          :nombre="pokemon.nombre"
          :sprite="pokemon.sprite"
          :tipo="pokemon.tipo"
          :nivel="pokemon.nivel"
          :salud="pokemon.salud"
          :ataques="pokemon.ataques"
          :habilidad="pokemon.habilidad"
          @select-pokemon="handleSelectPokemon"
        />
      </div>
    </main>

    <PokemonDetailsModal
      v-if="selectedPokemon"
      :is-visible="isModalVisible"
      :pokemon="selectedPokemon"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 2rem;
  color: #cc0000;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 20px;
}
p {
  font-family: 'Press Start 2P', monospace;
  color: black;
  font-size: 0.8em;
  margin-bottom: 10px;
}
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
}
</style>
