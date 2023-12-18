<template>
  
  <div class="overflow-hidden bg-gray-300">
    
      
   
    
      <router-view/>
  


    <FooterCompo></FooterCompo>
    
  </div>
  
</template>


<script setup>  

import FooterCompo from './components/FooterCompo.vue';
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');


body{
  overflow-x: hidden;
  @apply bg-gray-300

}

*{
  font-family: 'Roboto', Arial, sans-serif 
}




</style>
