<template>
    <div class="min-h-[50vh]">



        <div>
            <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
                <div class="px-8 mx-auto max-w-7xl">
                    <div class="flex items-center justify-between h-16">
                        <div class=" flex items-center">
                            <a class="flex-shrink-0" href="/gerenciamento">
                                <img class="w-14 h-14" src="data:image/webp;base64,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" alt="Workflow" />
                            </a>
                            <div class="hidden md:block">
                                <div class="flex items-baseline ml-10 space-x-4">
                                    <router-link
                                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        to="/gerenciamento">
                                        Solicitados
                                    </router-link>
                                    <router-link
                                        class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        to="/Rejeitados">
                                        Recusados
                                    </router-link>
                                    <router-link
                                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        to="/Pendentes">
                                        Pendentes
                                    </router-link>

                                    <router-link
                                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                        to="/Concluidos">
                                        Concluidos
                                    </router-link>

                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="flex -mr-2 md:block">
                                <form
                                    class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                    <div class=" relative ">
                                        <input type="text" id="&quot;form-subscribe-Search" v-model="CPF"
                                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="Pesquise o CPF" />
                                    </div>
                                    <button
                                    @click.prevent="fechCPF()"
                                        class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                        type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                            <div class="flex items-center ml-4 md:ml-6">
                            </div>
                        </div>
                        <div class="flex -mr-2 md:hidden">
                            <button
                                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            href="/#">
                            Home
                        </a>
                        <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            href="/#">
                            Content
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            href="/#">
                            Contact
                        </a>
                    </div>
                    <div class="flex p-2">
                        <form
                            class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="components" />
                            </div>
                            <button
                                class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>






        <h1 class="text-center mt-5 text-blue-950 text-4xl">PENDENTES</h1>
        <div class="flex justify-center items-center mt-10 mb-10">

            <table border="1" class="border border-gray-500">
                <tr>
                    <th class="border border-gray-500 bg-gray-100 text-gray-700 p-2">ID</th>
                    <th class="border border-gray-500 bg-gray-100 text-gray-700 p-2">Nome</th>
                    <th class="border border-gray-500 bg-gray-100 text-gray-700 p-2">CPF</th>
                    <th class="border border-gray-500 bg-gray-100 text-gray-700 p-2">Data de solicitação</th>
                    <th class="border border-gray-500 bg-gray-100 text-gray-700 p-2 text-center">Motivo</th>
                </tr>

                <tr v-for="c in client" :key="c.id" @click.prevent="sendData(c)" class="cursor-pointer">

                    <td class="border border-gray-500 bg-gray-100 text-gray-700 p-2"> {{ c.id }}</td>
                    <td class="border border-gray-500 bg-gray-100 text-gray-700 p-2">{{ c.NOME }}</td>
                    <td class="border border-gray-500 bg-gray-100 text-gray-700 p-2">{{ c.CPF }}</td>
                    <td class="border border-gray-500 bg-gray-100 text-gray-700 p-2">{{ c.createdAt }}</td>
                    <td class="border border-gray-500 bg-gray-100 text-gray-700 p-2 text-center">{{ c.MOTIVO }}</td>

                </tr>


            </table>
        </div>
    </div>
</template>




<script setup>

import axios from 'axios'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const client = ref('')

const CPF = ref('')




const router = useRouter()

const config = {
    headers: {
        'x-access-token': document.cookie,
    },
}


async function fetchData() {
    try {
        const response = await axios.get('http://192.168.0.181:3333/adm/clientsPendentes', config)
        client.value = response.data

    } catch (err) {
        console.log('Algo deu errado ao listar usuarios ' + err)
    }
}
fetchData()




async function fechCPF(){
    try{
        const response = await axios.get(`http://192.168.0.181:3333/adm/clientsPendentesByCPF/${CPF.value.replaceAll(' ', '')}`, config)

        client.value = response.data
    }
    catch(err){
        console.log(err)
    }

   
}















const store = useStore()

function sendData(c) {


    store.commit('setUserData', c)

    router.push('/gerenciamentoCliente')








}


</script>