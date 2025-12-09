<script setup lang="ts">
import {} from 'vue' // 🛑 Ahora SÍ necesitamos defineEmits

// Definición de Interfaz para un tipado limpio
interface Attack {
  nombre: string
  dano: number
}

// Definimos los eventos que puede emitir este componente
const emit = defineEmits(['selectPokemon'])

// ----------------------------------------------------
// 1. PROPS DE DATOS DE COMBATE
// ----------------------------------------------------
const props = defineProps({
  // Las props se mantienen, pero incluimos un ID para identificar la carta al emitir.
  id: { type: Number, required: true }, // Nuevo: Necesitamos un ID único
  nombre: { type: String, required: true },
  sprite: { type: String, required: true },
  tipo: { type: String, required: true },
  nivel: { type: Number, default: 1 },
  salud: { type: Number, default: 100 },
  ataques: { type: Array as () => Attack[], default: () => [] },
  habilidad: { type: String, default: 'Ninguna' },
})

// ----------------------------------------------------
// 2. FUNCIÓN DE SELECCIÓN Y EMISIÓN
// ----------------------------------------------------
const selectCard = () => {
  // Emitimos un evento, enviando TODOS los datos del Pokémon.
  emit('selectPokemon', props)
}

// ----------------------------------------------------
// 3. FUNCIONES DE ESTILO (Se mantienen igual)
// ----------------------------------------------------
const getTipoColor = (tipo: string) => {
  switch (tipo) {
    case 'Eléctrico':
      return '#FFD700'
    case 'Fuego':
      return '#FF4500'
    case 'Agua':
      return '#1E90FF'
    case 'Planta':
      return '#32CD32'
    case 'Jefe Final':
      return '#ff0000'
    default:
      return '#333'
  }
}

const getTipoFondo = (tipo: string) => {
  switch (tipo) {
    case 'Eléctrico':
      return '#F0E68C'
    case 'Fuego':
      return '#FFA07A'
    case 'Agua':
      return '#ADD8E6'
    case 'Planta':
      return '#90EE90'
    case 'jefe':
      return '#Ff0000'
    default:
      return '#E0E0E0'
  }
}
</script>

<template>
  <div class="pokemon-card" :style="{ borderColor: getTipoColor(props.tipo) }" @click="selectCard">
    <div class="card-header" :style="{ backgroundColor: getTipoFondo(props.tipo) }">
      <h3 class="pokemon-name">{{ props.nombre }}</h3>
      <span class="pokemon-type" :style="{ color: getTipoColor(props.tipo) }">{{
        props.tipo
      }}</span>
    </div>

    <div class="card-body">
      <img :src="props.sprite" :alt="props.nombre" class="pokemon-sprite" />
    </div>
  </div>
</template>

<style scoped>
/* ... (Estilos de la tarjeta se mantienen igual, pero elimina los estilos de .details-popup, .fade-slide, etc.) ... */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.pokemon-card {
  border: 5px solid var(--border-color, #333);
  border-radius: 12px;
  width: 220px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  font-family: 'Press Start 2P', monospace;
  background-color: white;
  cursor: pointer; /* Indica que es clickeable */
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.pokemon-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}

.card-header {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #333;
}

.pokemon-name {
  margin: 0;
  font-size: 1em;
  color: #333;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #fff;
  padding-bottom: 5px;
}

.pokemon-type {
  font-size: 0.7em;
  font-weight: bold;
  background-color: #333;
  color: white !important;
  padding: 2px 8px;
  border-radius: 5px;
}

.card-body {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.pokemon-sprite {
  width: 150px;
  height: 150px;
  image-rendering: pixelated;
  filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.3));
}
</style>
