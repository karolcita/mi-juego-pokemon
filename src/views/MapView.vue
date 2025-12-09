<script setup lang="ts">
import { ref } from 'vue'
import ZoneTile from '../components/ZoneTile.vue'

interface Zona {
  id: number
  nombre: string
  tipo: string
  descripcion: string
  desbloqueada: boolean
  imagen?: string
}

const zonas = ref<Zona[]>([
  {
    id: 1,
    nombre: 'Pueblo Paleta',
    tipo: 'Ciudad',
    descripcion: 'Tu punto de partida',
    desbloqueada: true,
  },
  {
    id: 2,
    nombre: 'Bosque Verde',
    tipo: 'Bosque',
    descripcion: 'Lleno de Pokémon salvajes',
    desbloqueada: true,
  },
  {
    id: 3,
    nombre: 'Ciudad Plateada',
    tipo: 'Ciudad',
    descripcion: 'Primer gimnasio',
    desbloqueada: true,
  },
  {
    id: 4,
    nombre: 'Cueva Oscura',
    tipo: 'Cueva',
    descripcion: 'Zona peligrosa',
    desbloqueada: true,
  },
  {
    id: 5,
    nombre: 'Lago Azul',
    tipo: 'Agua',
    descripcion: 'Hogar de Pokémon acuáticos',
    desbloqueada: true,
  },
  {
    id: 6,
    nombre: 'Volcán Ígneo',
    tipo: 'Volcán',
    descripcion: 'Zona de fuego',
    desbloqueada: false,
  },
  {
    id: 7,
    nombre: 'Gimnasio Elite',
    tipo: 'Gimnasio',
    descripcion: 'Desafío final',
    desbloqueada: false,
  },
])
</script>

<template>
  <main>
    <h1>Mapa del Mundo</h1>
    <p>Explora el mundo Pokémon</p>

    <div class="map-container">
      <div class="zones-path">
        <ZoneTile
          v-for="zona in zonas"
          :key="zona.id"
          :id="zona.id"
          :nombre="zona.nombre"
          :tipo="zona.tipo"
          :descripcion="zona.descripcion"
          :desbloqueada="zona.desbloqueada"
          :imagen="zona.imagen"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

main {
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

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
  margin-bottom: 30px;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.zones-path {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
}

/* Conector visual entre zonas (opcional, para simular un camino) */
.zones-path::before,
.zones-path::after {
  content: '';
  display: none;
}

@media (min-width: 768px) {
  .zones-path {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
