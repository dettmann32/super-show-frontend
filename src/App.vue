<template>
  
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div>
      <router-view/>
    </div>
    
  </div>
  
</template>


<script setup>  
import NavBar from './components/NavBar.vue';
</script>


<style>


</style>
