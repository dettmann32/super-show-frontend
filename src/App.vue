<template>
  
  <div class="overflow-hidden bg-gray-300">
    
      
   
    
      <router-view/>
  


    <FooterCompo></FooterCompo>
    
  </div>
  
</template>


<script setup>  
import NavBar from './components/NavBar.vue';
import FooterCompo from './components/FooterCompo.vue';
</script>


<style>
body{
  overflow-x: hidden;
  @apply bg-gray-300

}

*{
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}




</style>
