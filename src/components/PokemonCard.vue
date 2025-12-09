<script setup lang="ts">
// defineProps se usa sin ser importado.
const props = defineProps({
  nombre: { type: String, required: true },
  sprite: { type: String, required: true },
  tipo: { type: String, required: true },
})

// Funciones para calcular estilos basados en la prop 'tipo'
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
    case 'Normal':
      return '#A9A9A9'
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
    case 'Normal':
      return '#F5F5F5'
    default:
      return '#E0E0E0'
  }
}
</script>

<template>
  <div class="pokemon-card" :style="{ borderColor: getTipoColor(props.tipo) }">
    <div class="card-header" :style="{ backgroundColor: getTipoFondo(props.tipo) }">
      <h3 class="pokemon-name">{{ nombre }}</h3>
      <span class="pokemon-type" :style="{ color: getTipoColor(props.tipo) }">{{ tipo }}</span>
    </div>

    <div class="card-body">
      <img :src="sprite" :alt="nombre" class="pokemon-sprite" />
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  border: 5px solid var(--border-color, #333);
  border-radius: 12px;
  width: 220px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-family: 'Press Start 2P', monospace;
  background-color: white;
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
