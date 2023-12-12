<template>
  <div>

    <nav-bar></nav-bar>
    <router-link to="/cadastro" >
      <div class="bg-gray-300">
        <picture class="w-[100vw] sm:h-[30vw] bg-gray-300 relative text-center">
          <router-link to="/cadastro" class="absolute flex justify-center items-center m-auto sm:right-[32vw] sm:top-[12vw] right-[10vw]  w-[70vw] sm:w-[30vw] sm:h-[15vw] hover:opacity-90  ">
            <button class="flex  text-center  text-red-600 w-full h-full"><img src="../assets/forma.png" alt="" class="w-full h-full"></button>
          </router-link>
          <source media="(max-width: 768px)" srcset="../assets/CataroVertical.png" class="w-full  -mb-3 bg-gray-300">
          <img src="../assets/Cartao.jpg" class="w-[100vw]  mt-0  -mb-3 bg-gray-300 " />
        </picture>
      </div>
    </router-link>

    <MainCompPhoto></MainCompPhoto>
    <MainCompList></MainCompList>
    <AppTopcard></AppTopcard>
    <PagamentoPix></PagamentoPix>

  </div>
</template>


<script setup>
import NavBar from '@/components/NavBar.vue';
import MainCompList from '@/components/MainCompList.vue';
import MainCompPhoto from '@/components/MainCompPhoto.vue'
import AppTopcard from '@/components/AppTopcard.vue';
import PagamentoPix from '@/components/PagamentoPix.vue'





</script>

<style scoped></style>