<template>
  
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div>
      <router-view/>
    </div>

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
