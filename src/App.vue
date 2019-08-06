<template>
  <v-app>
    <v-container fluid grid-list-xl>
      <tbar/>
      <tbl/>
    </v-container>
  </v-app>
</template>

<script>

import tbar from './components/tbar.vue'
import tbl from './components/tbl.vue'

export default {
  name: 'App',
  components: {
   tbar,
   tbl
  },
  computed: {
    menuItems(){
      return [{
        icon: 'visibility',
        title:'Читать',
        route: '/books'
      }]
    }
  },
  data: () => ({
    //
  }),
};
</script>
