<template>
  
  <div class="overflow-hidden">
    
      
   
    
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
}


</style>
