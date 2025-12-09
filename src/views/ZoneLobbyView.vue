<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// ----------------------------------------------------
// PROPS: Recibe el ID de la zona desde el router
// ----------------------------------------------------
const route = useRoute()
const id = route.params.id as string
const zoneId = computed(() => Number.parseInt(id, 10))

// ----------------------------------------------------
// MAPEO DE ZONAS
// ----------------------------------------------------
interface ZonaInfo {
  nombre: string
  tipo: string
}

const zonasMap: Record<number, ZonaInfo> = {
  1: { nombre: 'Pueblo Paleta', tipo: 'Ciudad' },
  2: { nombre: 'Bosque Verde', tipo: 'Bosque' },
  3: { nombre: 'Ciudad Plateada', tipo: 'Ciudad' },
  4: { nombre: 'Cueva Oscura', tipo: 'Cueva' },
  5: { nombre: 'Lago Azul', tipo: 'Agua' },
  6: { nombre: 'Volcán Ígneo', tipo: 'Volcán' },
  7: { nombre: 'Gimnasio Elite', tipo: 'Gimnasio' },
}

// Computed: Obtiene el nombre y tipo de la zona actual
const zonaActual = computed(() => {
  return zonasMap[zoneId.value] || { nombre: `Zona #${id}`, tipo: 'Desconocida' }
})

// ----------------------------------------------------
// INTERFACES Y TIPOS
// ----------------------------------------------------
interface NPC {
  id: number
  name: string
}

interface Trainer {
  id: number
  name: string
  level: number
}

// ----------------------------------------------------
// ESTADOS INTERNOS REACTIVOS
// ----------------------------------------------------

// Estado 1: Lista reactiva de NPCs
const npcList = ref<NPC[]>([
  { id: 101, name: 'Profesor Oak' },
  { id: 102, name: 'Enfermera Joy' },
])
const nextNpcId = ref(103) // Contador para IDs temporales

// Estado 2: Control de visibilidad de entrenadores
const showOnlineTrainers = ref(true)
const trainersOnline = ref<Trainer[]>([
  { id: 201, name: 'AshKetchum01', level: 50 },
  { id: 202, name: 'MistyAqua', level: 45 },
  { id: 203, name: 'BrockRocks', level: 55 },
])

// Estado 3: Activación de Captura Pokémon
const isCaptureActive = ref(false)

// ----------------------------------------------------
// TABLA DE POKÉMON POR ZONA
// ----------------------------------------------------
const pokemonsPorZona: Record<number, string[]> = {
  1: ['Pidgey', 'Caterpie'],
  2: ['Geodude', 'Slugma'],
  3: ['Wingull', 'Electrike'],
  4: ['Zubat', 'Onix'],
  5: ['Magikarp', 'Psyduck'],
  6: ['Charmander', 'Growlithe'],
  7: ['Pikachu', 'Raichu'],
}

// Computed: Determina los Pokémon permitidos según la zona actual
const pokemonsDisponibles = computed(() => {
  return pokemonsPorZona[zoneId.value] || []
})

// ----------------------------------------------------
// ACCIONES REQUERIDAS
// ----------------------------------------------------

/**
 * Agrega un NPC temporal a la lista.
 */
function addVisitorNpc(): void {
  const newNpc: NPC = {
    id: nextNpcId.value,
    name: `Visitante Temporal #${nextNpcId.value}`,
  }
  npcList.value.push(newNpc)
  nextNpcId.value++
}

/**
 * Activa o desactiva la interfaz de captura.
 */
function toggleCapture(): void {
  isCaptureActive.value = !isCaptureActive.value
}
</script>

<template>
  <div class="lobby-container">
    <h2>🚪 Lobby {{ zonaActual.nombre }} - {{ zonaActual.tipo }}</h2>
    <p>¡Bienvenido al punto de encuentro de esta área!</p>

    <div class="capture-section">
      <h3>Búsqueda de Pokémon</h3>
      <button @click="toggleCapture" :class="{ active: isCaptureActive }">
        {{ isCaptureActive ? 'Detener Búsqueda' : 'Iniciar Captura' }}
      </button>

      <p v-if="isCaptureActive" class="search-message">Buscando Pokémon salvaje…</p>

      <div v-if="pokemonsDisponibles.length > 0" class="pokemon-available">
        <h4>Pokémon Disponibles en esta Zona:</h4>
        <ul class="pokemon-list">
          <li v-for="pokemon in pokemonsDisponibles" :key="pokemon" class="pokemon-item">
            🎮 {{ pokemon }}
          </li>
        </ul>
      </div>
      <p v-else class="no-pokemon">No hay Pokémon registrados para esta zona.</p>
    </div>

    <hr />

    <div class="npc-section">
      <h3>NPCs y Personajes</h3>
      <button @click="addVisitorNpc">➕ Agregar NPC Visitante</button>

      <ul class="npc-list">
        <li v-for="npc in npcList" :key="npc.id">{{ npc.name }} (ID: {{ npc.id }})</li>
      </ul>
    </div>

    <hr />

    <div class="trainers-section">
      <h3>Entrenadores Online</h3>

      <label class="switch">
        <input type="checkbox" v-model="showOnlineTrainers" />
        <span class="slider round"></span>
      </label>
      <span class="switch-label">{{ showOnlineTrainers ? 'MOSTRANDO' : 'OCULTO' }}</span>

      <ul v-if="showOnlineTrainers" class="trainer-list">
        <li v-for="trainer in trainersOnline" :key="trainer.id">
          {{ trainer.name }} (Nivel: {{ trainer.level }})
        </li>
      </ul>
      <p v-else class="hidden-message">Lista de entrenadores oculta.</p>
    </div>

    <RouterLink to="/map" class="back-link">← Volver al Mapa</RouterLink>
  </div>
</template>

<style scoped>
.lobby-container {
  padding: 30px;
  max-width: 650px;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
  color: #000000;
}

.lobby-container p {
  color: #000000;
}

h2,
h3 {
  color: #000000;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}
hr {
  margin: 25px 0;
  border: 0;
  border-top: 1px dashed #000000;
}

/* Botones principales */
button {
  padding: 10px 15px;
  border: 2px solid #3b4cca;
  background-color: #ffe033;
  color: #3b4cca;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}
button:hover {
  background-color: #ffcc00;
}
button.active {
  background-color: #cc0000;
  color: white;
  border-color: #cc0000;
}

/* Sección de Captura */
.search-message {
  color: #cc0000;
  font-weight: bold;
  margin-top: 10px;
}

/* Listas de NPCs/Entrenadores */
.npc-list,
.trainer-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 5px;
}
.npc-list li,
.trainer-list li {
  background-color: #f9f9f9;
  padding: 5px;
  margin-bottom: 3px;
  border-left: 5px solid #3b4cca;
  color: #000000;
}
.hidden-message {
  color: #000000;
  font-style: italic;
  margin-top: 10px;
}
.back-link {
  display: block;
  margin-top: 30px;
  color: #cc0000;
  font-weight: bold;
  text-decoration: none;
}

/* Estilo del Switch ON/OFF (inspirado en iOS) */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #3b4cca;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.switch-label {
  display: inline-block;
  margin-left: 15px;
  font-weight: bold;
  color: #000000;
}

/* Sección de Pokémon Disponibles */
.pokemon-available {
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 8px;
}

.pokemon-available h4 {
  color: #000000;
  margin: 0 0 10px 0;
  font-size: 0.8em;
}

.pokemon-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pokemon-item {
  background-color: white;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid #4caf50;
  font-size: 0.7em;
  color: #000000;
  font-weight: bold;
}

.no-pokemon {
  margin-top: 15px;
  color: #000000;
  font-style: italic;
  font-size: 0.7em;
}
</style>
