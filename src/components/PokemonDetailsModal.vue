<script setup lang="ts">
import { computed } from 'vue'

interface Attack {
  nombre: string
  dano: number
}

// ----------------------------------------------------
// PROPS: Recibe el objeto Pokémon y el estado de visibilidad
// ----------------------------------------------------
const props = defineProps({
  pokemon: {
    type: Object as () => {
      nombre: string
      tipo: string
      nivel: number
      salud: number
      habilidad: string
      ataques: Attack[]
    },
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
})

// Eventos que emite el modal
const emit = defineEmits(['close'])

// Determina el color del borde y el tipo principal para el modal
const typeColor = computed(() => {
  switch (props.pokemon.tipo) {
    case 'Eléctrico':
      return '#FFD700'
    case 'Fuego':
      return '#FF4500'
    case 'Jefe Final':
      return '#cc0000' // Rojo fuerte para el jefe
    default:
      return '#3b4cca'
  }
})

const typeName = computed(() =>
  props.pokemon.tipo === 'Jefe Final' ? 'JEFE FINAL' : props.pokemon.tipo.toUpperCase(),
)
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-container" :style="{ borderColor: typeColor }">
        <div class="modal-header" :style="{ backgroundColor: typeColor }">
          <h2 class="pixel-font">{{ pokemon.nombre }}</h2>
          <span class="type-tag">{{ typeName }}</span>
          <button @click="emit('close')" class="close-button">X</button>
        </div>

        <div class="modal-content">
          <div class="stats-box">
            <div class="stat-row">
              <span class="stat-label">Nivel:</span>
              <span class="stat-value">{{ pokemon.nivel }}</span>
            </div>

            <div class="stat-row">
              <span class="stat-label">Salud (HP):</span>
              <span class="stat-value hp-value">{{ pokemon.salud }}</span>
            </div>

            <div class="stat-row">
              <span class="stat-label">Habilidad:</span>
              <span class="stat-value ability-value">{{ pokemon.habilidad }}</span>
            </div>
          </div>

          <div class="attacks-box">
            <h4>— Lista de Ataques —</h4>
            <ul class="attacks-list">
              <li v-for="ataque in pokemon.ataques" :key="ataque.nombre">
                {{ ataque.nombre }} <span>({{ ataque.dano }} Daño)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Importamos la fuente pixelada */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Overlay que cubre toda la pantalla */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Oscurece el fondo */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  background-color: #f7f7f7;
  border: 8px solid; /* Color dinámico typeColor */
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  font-family: Arial, sans-serif;
}
.pixel-font {
  font-family: 'Press Start 2P', monospace;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  color: white;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.2em;
  text-shadow: 2px 2px 0 #333;
}

.type-tag {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
}

.close-button {
  background: none;
  border: 2px solid white;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}
.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.modal-content {
  padding: 20px;
  text-align: left;
}

.stats-box {
  border: 2px solid #333;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
}
.stat-value {
  color: #000;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px dashed #ccc;
}
.attacks-list {
  color: #000;
}
.stat-row:last-child {
  border-bottom: none;
}
.stat-label {
  font-weight: 600;
  color: #000;
}
.hp-value {
  color: #cc0000;
  font-weight: bold;
}
.ability-value {
  color: #008000;
  font-style: italic;
}

.attacks-box h4 {
  color: #3b4cca;
  margin-bottom: 10px;
  font-size: 1em;
}

.attacks-list {
  list-style: none;
  padding: 0;
}
.attacks-list li {
  background-color: #eee;
  padding: 5px;
  margin-bottom: 4px;
  border-left: 4px solid #3b4cca;
}

/* Transición del Modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
