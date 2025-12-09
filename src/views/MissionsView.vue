<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Mision {
  id: number
  nombre: string
  descripcion: string
  recompensa: string
  completada: boolean
}

const router = useRouter()

const misiones = ref<Mision[]>([
  {
    id: 1,
    nombre: 'Captura 10 Pokémon',
    descripcion: 'Atrapa 10 Pokémon salvajes en cualquier zona',
    recompensa: '500 monedas + Pokéball x5',
    completada: false,
  },
  {
    id: 2,
    nombre: 'Derrota al Líder de Gimnasio',
    descripcion: 'Vence al líder del gimnasio de Ciudad Plateada',
    recompensa: '1000 monedas + Medalla Bronce',
    completada: false,
  },
  {
    id: 3,
    nombre: 'Explora 3 Zonas Diferentes',
    descripcion: 'Visita al menos 3 zonas diferentes del mapa',
    recompensa: '750 monedas + Potión x3',
    completada: false,
  },
])

const volverAlMapa = () => {
  router.push('/map')
}
</script>

<template>
  <main>
    <h1>Misiones Disponibles</h1>

    <div class="misiones-container">
      <div
        v-for="mision in misiones"
        :key="mision.id"
        class="mision-card"
        :class="{ completada: mision.completada }"
      >
        <div class="mision-header">
          <h2 class="mision-nombre">{{ mision.nombre }}</h2>
          <span v-if="mision.completada" class="mision-badge">✓ COMPLETADA</span>
        </div>
        <p class="mision-descripcion">{{ mision.descripcion }}</p>
        <div class="mision-recompensa">
          <span class="recompensa-label">Recompensa:</span>
          <span class="recompensa-valor">{{ mision.recompensa }}</span>
        </div>
      </div>
    </div>

    <button class="btn-volver" @click="volverAlMapa">Volver al Mapa</button>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

main {
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Press Start 2P', monospace;
  color: #cc0000;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 40px;
  font-size: 1.2em;
}

.misiones-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
}

.mision-card {
  background-color: white;
  border: 4px solid #333;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-family: 'Press Start 2P', monospace;
}

.mision-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.mision-card.completada {
  background-color: #e8f5e9;
  border-color: #4caf50;
}

.mision-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.mision-nombre {
  font-size: 0.9em;
  color: #333;
  margin: 0;
  text-transform: uppercase;
  flex: 1;
  min-width: 200px;
}

.mision-badge {
  font-size: 0.6em;
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
}

.mision-descripcion {
  font-size: 0.6em;
  color: #666;
  margin: 0 0 15px 0;
  line-height: 1.6;
}

.mision-recompensa {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff3cd;
  border: 2px solid #ffc107;
  border-radius: 8px;
  flex-wrap: wrap;
}

.recompensa-label {
  font-size: 0.6em;
  color: #856404;
  font-weight: bold;
}

.recompensa-valor {
  font-size: 0.7em;
  color: #333;
  font-weight: bold;
}

.btn-volver {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.8em;
  padding: 15px 30px;
  background-color: #cc0000;
  color: white;
  border: 4px solid #3b4cca;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.btn-volver:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  background-color: #ff0000;
}

.btn-volver:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .mision-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .mision-nombre {
    min-width: 100%;
  }

  h1 {
    font-size: 1em;
  }
}
</style>
