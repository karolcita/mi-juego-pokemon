<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  descripcion: { type: String, default: '' },
  desbloqueada: { type: Boolean, default: true },
  imagen: { type: String, default: '' },
})

const router = useRouter()

const handleClick = () => {
  if (props.desbloqueada) {
    router.push(`/zone/${props.id}`)
  }
}

const getTipoColor = (tipo: string) => {
  switch (tipo) {
    case 'Bosque':
      return '#32CD32'
    case 'Cueva':
      return '#8B4513'
    case 'Agua':
      return '#1E90FF'
    case 'Volcán':
      return '#FF4500'
    case 'Ciudad':
      return '#A9A9A9'
    case 'Gimnasio':
      return '#FFD700'
    default:
      return '#333'
  }
}

const getTipoFondo = (tipo: string) => {
  switch (tipo) {
    case 'Bosque':
      return '#90EE90'
    case 'Cueva':
      return '#D2B48C'
    case 'Agua':
      return '#ADD8E6'
    case 'Volcán':
      return '#FFA07A'
    case 'Ciudad':
      return '#F5F5F5'
    case 'Gimnasio':
      return '#FFFACD'
    default:
      return '#E0E0E0'
  }
}
</script>

<template>
  <button
    class="zone-tile"
    :class="{ bloqueada: !desbloqueada }"
    :style="{
      borderColor: getTipoColor(props.tipo),
      backgroundColor: desbloqueada ? getTipoFondo(props.tipo) : '#666',
    }"
    :disabled="!desbloqueada"
    @click="handleClick"
  >
    <div class="zone-header">
      <h3 class="zone-name">{{ nombre }}</h3>
      <span class="zone-type" :style="{ color: getTipoColor(props.tipo) }">{{ tipo }}</span>
    </div>

    <div class="zone-body">
      <div v-if="imagen" class="zone-image-container">
        <img :src="imagen" :alt="nombre" class="zone-image" />
      </div>
      <p v-if="descripcion" class="zone-description">{{ descripcion }}</p>
      <div v-if="!desbloqueada" class="locked-overlay">
        <span class="locked-text">🔒 BLOQUEADA</span>
      </div>
    </div>
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.zone-tile {
  border: 4px solid;
  border-radius: 12px;
  width: 200px;
  min-height: 180px;
  margin: 15px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-family: 'Press Start 2P', monospace;
  cursor: pointer;
  position: relative;
  padding: 0;
}

.zone-tile:hover:not(:disabled) {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.zone-tile:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.zone-tile.bloqueada {
  filter: grayscale(100%);
}

.zone-header {
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #333;
}

.zone-name {
  margin: 0;
  font-size: 0.8em;
  color: #333;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #fff;
  padding-bottom: 5px;
  line-height: 1.4;
}

.zone-type {
  font-size: 0.6em;
  font-weight: bold;
  background-color: #333;
  color: white !important;
  padding: 3px 10px;
  border-radius: 5px;
}

.zone-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}

.zone-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.zone-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  image-rendering: pixelated;
}

.zone-description {
  font-size: 0.5em;
  color: #555;
  margin: 5px 0;
  line-height: 1.4;
  padding: 0 5px;
}

.locked-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.locked-text {
  font-size: 0.7em;
  color: #fff;
  text-shadow: 2px 2px 0 #000;
}
</style>
