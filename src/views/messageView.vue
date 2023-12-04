<template>
    <div class="h-[100vh] w-[100vw] m-auto ">

        <h1>Email Personalizado</h1>

        <div class=" relative mt-5 m-auto">



            <input type="text" id="name-with-label"
                class=" rounded-lg border-transparent mt-10 mb-5 m-auto flex-1 appearance-none border border-gray-600 w-[80%] py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email" placeholder="Assunto" />
        </div>


        <div class="text-gray-700 mt-10 w-[80%] h-[200px]">
            <input
                class="flex-1 w-full h-full m-auto px-4 py-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment" placeholder="Conteudo" name="comment" rows="5" cols="40">
            
        </div>





    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()








</script>