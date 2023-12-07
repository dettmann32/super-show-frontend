<template>
    <div class="h-[100vh] w-[100vw] m-auto ">

        <h1>Email Personalizado</h1> 
        <p>Para: <span class="text-red-700">{{ user }}</span> de email: <span class="text-red-700">{{ email }}</span> </p>

        <div class=" relative mt-5 m-auto">



            <input type="text" id="name-with-label" v-model="subject"
                class=" rounded-lg border-transparent mt-10 mb-5 m-auto flex-1 appearance-none border border-gray-600 w-[80%] py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="subject" placeholder="Assunto" />
        </div>


        <div class="text-gray-700 mt-10 w-[80%] h-[200px]">
            <input  v-model="message"
                class="flex-1 w-full h-full m-auto px-4 py-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment" placeholder="Conteudo" name="comment" rows="5" cols="40">

        </div>

        <button type="button" @click.prevent="sendMessage()"
            class="mt-5 py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            <svg width="20" height="20" class="mr-2" fill="currentColor" viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                </path>
            </svg>
            Enviar
        </button>






    </div>
</template>

<script setup>
import { ref } from 'vue'

import axios from 'axios'
import store from '@/store';



const message = ref()
const subject = ref()




const email = ref(store.state.User.email)
const user = ref(store.state.User.user)

console.log(email, user)

const config = {
 headers: {
    'x-access-token': document.cookie,
 },
}



async function sendMessage(){

    const assunto = subject.value
    const mensagem = message.value

    const messageObj = ref([{subject:assunto},{message:mensagem},{email:email}])
    await axios.post('http://192.168.0.181:3333/adm/Message',messageObj.value, config).then((response) => {

    
        message.value = null
        subject.value = null 

        if(response){
            
          alert(response.data.message)
        }

    }).catch((err)=>{

        alert('Erro ao enviar a mensagem para o servidor')
        console.log('erro ao enviar a mensagem' + err)
        
    })


}









</script>