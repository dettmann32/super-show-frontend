<template>
    <div class="h-[100vh]">

        <div class="flex flex-wrap w-full">
            <div class="flex flex-col w-full md:w-1/2">
                <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                    <a href="#" class="p-4 text-xl font-bold text-white bg-black">
                        Admin.
                    </a>
                </div>
                <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p class="text-3xl text-center">
                        Bem vindo.
                    </p>
                    <form class="flex flex-col pt-3 md:pt-8">
                        <div class="flex flex-col pt-4">
                            <div class="flex relative ">
                                <span
                                    class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <img width="15" height="15" src="https://img.icons8.com/windows/32/user-male-circle.png" alt="user-male-circle"/>
                                </span>
                                <input type="text" id="design-login-email" v-model="user"
                                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="User" />
                            </div>
                        </div>
                        <div class="flex flex-col pt-4 mb-12">
                            <div class="flex relative ">
                                <span
                                    class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="password" id="design-login-password" v-model="password"
                                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Password" />
                            </div>
                        </div>
                        <button type="submit" @click.prevent="LoginUser()"
                            class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                            <span class="w-full">
                                Login
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div class="w-1/2 shadow-2xl">
                <img class="hidden object-cover w-full h-screen md:block" src="https://www.tailwind-kit.com/images/object/9.jpg" />
            </div>
        </div>

    </div>
</template>

<script setup>

import {ref} from 'vue'
import router from '@/router';
import axios from 'axios'

const user = ref()
const password = ref()


async function LoginUser(){

    await axios.post('http://192.168.0.181:3333/adm/login', {nome:user.value, password: password.value}).then((res)=>{

        if(res.data.message === "1"){
            router.push('/gerenciamento')
        }else{
            alert(res.data.message)
        }
        
    }).catch((err)=>{
        console.log('Algo de errado: ' + err)
        alert('Algo deu errado')
    })
}



</script>