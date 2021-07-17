import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Pokemons from '../views/Pokemons'
import PokemonDetails from '../views/PokemonDetails'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },  
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: Pokemons
  },
  {
    path: '/pokemonDetails/:id',
    name: 'PokemonDetails',
    component: PokemonDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
