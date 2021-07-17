<template>
  <v-container>
      <ul>
        <li v-for="pokemon of pokeList" :key="pokemon.name">
          <router-link :to="{name: 'PokemonDetails', params: {id: pokemon.id} }">
            {{pokemon.name}}

          </router-link>
        </li>
      </ul>

      
  </v-container>
</template>

<script>
export default {
  name: 'Pokemons',
  data() {
    return{
       pokeList: []
    }
  },
  created() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {       
      this.pokeList = data.results.map((pokemon) => {
        const { url } = pokemon 
        const urlSplit = url.split('/')      
        pokemon.id = urlSplit[urlSplit.length - 2]
        return pokemon 
      })
     console.log('data',this.pokeList)
    })
    .catch( 
      error => {
         console.log(error)
      }
    )
  }

}
</script>

