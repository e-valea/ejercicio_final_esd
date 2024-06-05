<template>
  <div class="bg-black">
    <NavBar :logged="navBarLogged" :active="navBarActive"></NavBar>
    <div class="text-white">
    </div>
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app';



const navBarLogged = ref(true)  
const navBarActive = ref(true)
const peliID = ref('')  

provide('navBarLogged', navBarLogged);
provide('peliID', peliID);


// import { inject } from 'vue';
// const navBarLogged = inject('navBarLogged');

const { data, pending, error } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=b80639b9f5a2e4e880b931dedbec575b&with_genres=');

provide('data', data)

const route = useRoute()

watch(route, (newRoute) => {
  if (newRoute.path.includes('iniciosesion')) {

    navBarActive.value = false

  } else {
    navBarActive.value = true

  }
}, { immediate: true }) 

  
</script>


<style lang="sass">

</style>