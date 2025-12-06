<script setup>
// defineProps se usa sin ser importado.
const props = defineProps({
  nombre: { type: String, required: true },
  sprite: { type: String, required: true },
  tipo: { type: String, required: true },
})

// Función simple para colores (usando una función en lugar de computed si hay error)
// Usamos una función simple para obtener el color dinámico si computed da problemas:
const getTipoColor = (tipo) => {
  switch (tipo) {
    case 'Eléctrico':
      return '#FFD700' // Borde Dorado
    case 'Fuego':
      return '#FF4500' // Borde Rojo-Naranja
    case 'Agua':
      return '#1E90FF' // Borde Azul Fuerte
    case 'Planta':
      return '#32CD32' // Borde Verde Lima
    case 'Normal':
      return '#A9A9A9' // Borde Gris Oscuro
    case 'Jefe Final':
      return '#B22222' // Borde Rojo Fuego
    default:
      return '#333'
  }
}

const getTipoFondo = (tipo) => {
  switch (tipo) {
    case 'Eléctrico':
      return '#F0E68C' // Fondo Banner
    case 'Fuego':
      return '#FFA07A'
    case 'Agua':
      return '#ADD8E6'
    case 'Planta':
      return '#90EE90'
    case 'Normal':
      return '#F5F5F5'
    case 'Jefe Final':
      return '#FFC0CB' // Fondo Rosa Pálido
    default:
      return '#E0E0E0'
  }
}
</script>

<template>
  <div class="pokemon-card" :style="{ borderColor: getTipoColor(props.tipo) }">
    <div class="card-header" :style="{ backgroundColor: getTipoFondo(props.tipo) }">
      <h3
        class="pokemon-name"
        :style="{
          textShadow: props.tipo === 'Jefe Final' ? '2px 2px 0 #FF6347' : '1px 1px 0 #fff',
        }"
      >
        {{ nombre }}
      </h3>
      <span class="pokemon-type" :style="{ color: getTipoColor(props.tipo) }">{{ tipo }}</span>
    </div>

    <div class="card-body">
      <img :src="sprite" :alt="nombre" class="pokemon-sprite" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

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

/* El resto de estilos se mantiene igual */
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
  filter: drop-shadow(4px 4px 0px var(--sombra-color, rgba(0, 0, 0, 0.3)));
}
</style>
