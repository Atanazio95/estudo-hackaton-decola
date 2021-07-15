<template>
   <v-card
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Pokemons</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          
           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Geral</v-list-item-title>
          </v-list-item>


          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-call-split</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Evoluções</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Por tipo</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>

<style lang="scss">

</style>
