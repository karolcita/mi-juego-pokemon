import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemon',
      name: 'pokemoncard',
      // 🛑 CORRECCIÓN DE RUTA: Asegúrate de que la ruta relativa sea correcta.
      // Desde 'src/router/' necesitas subir (..) para llegar a 'src/',
      // y luego bajar a 'views/'.
      component: () => import('../views/PokemonView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },
    {
      path: '/zone/:id',
      name: 'zone',
      component: () => import('../views/ZoneLobbyView.vue'),
    },
    {
      path: '/missions',
      name: 'missions',
      component: () => import('../views/MissionsView.vue'),
    },
    {
      path: '/pvp',
      name: 'pvp',
      component: () => import('../views/PVPView.vue'),
    },
  ],
})

export default router
