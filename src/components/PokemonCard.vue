<script setup lang="ts">
import { ref } from 'vue' // 🛑 CORRECCIÓN 1: Eliminamos defineEmits ya que no se usa.

// Definición de Interfaz para un tipado limpio (Error 4)
interface Attack {
  nombre: string
  dano: number
}

// ----------------------------------------------------
// 1. AÑADIR PROPS DE DATOS DE COMBATE
// ----------------------------------------------------
const props = defineProps({
  nombre: { type: String, required: true },
  sprite: { type: String, required: true },
  tipo: { type: String, required: true },
  nivel: { type: Number, default: 1 },
  salud: { type: Number, default: 100 },
  // 🛑 CORRECCIÓN 4: Usamos un tipado limpio para el array de ataques.
  ataques: { type: Array as () => Attack[], default: () => [] },
})

// ----------------------------------------------------
// 2. ESTADO INTERNO Y EVENTO DE CLIC
// ----------------------------------------------------
const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
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
    case 'Normal':
      return '#F5F5F5'
    default:
      return '#E0E0E0'
  }
}
</script>

<template>
  <div
    class="pokemon-card"
    :style="{ borderColor: getTipoColor(props.tipo) }"
    @click="toggleDetails"
  >
    <div class="card-header" :style="{ backgroundColor: getTipoFondo(props.tipo) }">
      <h3 class="pokemon-name">{{ props.nombre }}</h3>
      <span class="pokemon-type" :style="{ color: getTipoColor(props.tipo) }">{{
        props.tipo
      }}</span>
    </div>

    <div class="card-body">
      <img :src="props.sprite" :alt="props.nombre" class="pokemon-sprite" />
    </div>

    <Transition name="fade-slide">
      <div v-if="showDetails" class="details-popup">
        <div class="detail-row">
          <span>Nivel:</span> <strong>{{ props.nivel }}</strong>
        </div>
        <div class="detail-row">
          <span>Salud (HP):</span> <strong class="hp-value">{{ props.salud }}</strong>
        </div>

        <div class="attacks-list">
          <h4>Ataques:</h4>
          <ul>
            <li v-for="ataque in props.ataques" :key="ataque.nombre">
              {{ ataque.nombre }} ({{ ataque.dano }} Daño)
            </li>
            <li v-if="props.ataques.length === 0">Sin ataques definidos.</li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ---------------------------------------------------- */
/* Estilos (Se mantienen igual) */
/* ---------------------------------------------------- */
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
  cursor: pointer;
  position: relative;
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

.details-popup {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border-top: 3px solid #ffe033;
  text-align: left;
  font-size: 0.7em;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px dashed #666;
}

.hp-value {
  color: #ff4500;
}

.attacks-list h4 {
  margin: 10px 0 5px 0;
  color: #90ee90;
  font-size: 1em;
}

.attacks-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.attacks-list li {
  margin-left: 5px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
