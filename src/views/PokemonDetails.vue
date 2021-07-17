<template>
  <v-container>
      <h1>teste</h1>
      <p>{{details.name}}</p>
  </v-container>
</template>

<script>
export default {
  name: 'DetailsPokemons',
  data() {
    return {
      details: {}
    }
      
  },
  created() {
    
    const { id } = this.$route.params
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      this.details = data
      console.log('data2', data)
    })
    .catch(error => {console.log('Error!', error)})
  }
}
</script>

<style scoped>

</style>