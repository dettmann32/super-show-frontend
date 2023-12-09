<template>
    <div id="container " class=" w-[100vw] flex justify-center items-center bg-no-repeat bg-cover bg-fixed flex-col h-full"
        style="background-image: url('https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/Cartao.jpg');">





        <div>
            <nav class="bg-white dark:bg-gray-800  shadow py-4 w-[100vw]">
                <div class="px-8 mx-auto max-w-7xl flex justify-center">
                    <div class="flex items-center justify-between h-16 ">
                        <div class=" flex items-center justify-center">
                            <div class="flex ">
                                <div class="flex items-baseline ml-10 space-x-4 ">
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

                    </div>
                </div>

            </nav>
        </div>






        <div class="bg-gray-300 rounded-lg shadow sm:max-w-3xl sm:w-full  sm:overflow-hidden  my-10">







            <div class="px-4 py-8 sm:px-10">
                <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div class="relative flex justify-around  leading-5">
                        <div class="text-xl">
                            {{ c.NOME }}
                        </div>

                        <div class="text-sm">
                            Codigo do cliente: {{ c.id }}
                        </div>

                    </div>
                </div>
                <div class="mt-6">
                    <div class="w-full space-y-6">

                        <div class="w-full">
                            <div class=" relative ">

                                <p class="text-right">Dia de vencimanto da fatura:</p>

                                <div id="ValidadeDaFatura"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.DIA_DE_VENCIMENTO_DA_FATURA }}
                                </div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">CPF:</p>
                                <div id="cpf"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.CPF }}</div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative">
                                <p class="text-right">Nome Completo:</p>
                                <div id="nome"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.NOME }}
                                </div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">RG:</p>
                                <div type="number" id="rg"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.RG }}</div>
                            </div>
                        </div>


                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">UF-RG:</p>
                                <div type="text" id="UF_RG"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.UF_RG }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Data de Nascimento:</p>
                                <div id="DataDeNascimento"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Data de Nascimento">{{ c.DATA_DE_NASCIMENTO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Sexo:</p>
                                <div id="Sexo"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.SEXO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Escolaridade:</p>
                                <div id="Escolaridade"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.ESCOLARIDADE }}</div>
                            </div>
                        </div>

                        <div class="flex w-full mb-2">

                            <div class="w-24 mr-2">
                                DDD:
                                <div class=" relative">
                                    <div id="DDD"
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                        {{ c.DDD }}
                                    </div>
                                </div>
                            </div>

                            <div class="w-full">
                                <div class=" relative ">
                                    <p class="text-right">Celular:</p>
                                    <div id="Celular"
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Celular">{{ c.CELULAR }}</div>
                                </div>
                            </div>
                        </div>


                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Telefone:</p>
                                <div id="Telefone"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.TELEFONE }}</div>
                            </div>
                        </div>

                        <div class="w-full">

                            <div class=" relative ">
                                <p class="text-rigt">Email:</p>
                                <div id="email"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.EMAIL }}</div>
                            </div>
                        </div>

                        <!-- Endereços de residencia -->

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">CEP:</p>
                                <div id="cep"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.CEP }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Rua:</p>
                                <div id="rua"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.RUA }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Numero:</p>
                                <div id="numero"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.NUMERO_CASA }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Complemento:</p>
                                <div id="complemento"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Complemento (Opcional)">{{ c.COMPLEMENTO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Bairro:</p>
                                <div id="bairro"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.BAIRRO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Cidade:</p>
                                <div id="cidade"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.CIDADE }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Estado:</p>
                                <div id="estado"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.ESTADO }}</div>
                            </div>
                        </div>


                        <div class="w-full" v-show="c.MOTIVO">
                            <div class=" relative ">
                                <p class="text-right">Motivo:</p>
                                <div id="estado"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    {{ c.MOTIVO }}</div>
                            </div>
                        </div>
                    </div>



                    <div class="flex justify-between mt-5">
                        <div>

                            <button type="button" @click.prevent="ConcluirCadastro(c)"
                                class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                                <img src="../assets/sucesso.png" alt="ok" class="h-[20px] w-[20px] mr-2">
                                Concluido
                            </button>

                        </div>

                        <div>

                            <button type="button" @click.prevent="menuRegect()"
                                class="py-2 px-4 flex justify-center items-center  bg-red-700 hover:bg-red-800 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                                <img src="../assets//ErroIcon.png" alt="reject" class="h-[20px] w-[20px] mr-2">
                                Rejeitar
                            </button>

                        </div>

                        <div>

                            <button type="button" @click.prevent="menuPendent()"
                                class="py-2 px-4 flex justify-center items-center  bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                                <img src="../assets//ErroIcon.png" alt="reject" class="h-[20px] w-[20px] mr-2">
                                Suspender
                            </button>

                        </div>

                        <div>

                            <button @click.prevent="Message(c)"
                                class=" py-2 px-4 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                Mensagem
                            </button>

                        </div>
                    </div>


                    <div class="fixed w-full h-full m-auto zindex"
                        :style="`transform:translateY(-${translate}px); transition: 1s`">

                        <div
                            class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
                            <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
                                Descreva o motivo
                            </div>
                            <div class="mt-8">
                                <form action="#" autoComplete="off">
                                    <div class="flex flex-col mb-2">
                                        <div class="flex relative ">
                                            <span
                                                class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                    </path>
                                                </svg>
                                            </span>

                                            <input type="text" id="sign-in-email" v-model="motivo"
                                                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Mensagem que sera enviada para o cliente descrevendo o motivo" />



                                        </div>
                                    </div>

                                    <div class="flex flex-col mb-2">
                                        <div class="flex relative ">
                                            <span
                                                class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                                <img src="../assets/ferramenta-de-reparacao.png" alt="engrenagens"
                                                    class="w-[16px] h-[16px]">
                                            </span>



                                            <input type="text" id="sign-in-email" v-model="motivoAdm"
                                                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Mensagem para uso de adm" />


                                        </div>
                                    </div>


                                    <div class="flex w-full">
                                        <button type="submit" @click.prevent="RegeitarCadastro(c)"
                                            class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Enviar
                                        </button>
                                    </div>

                                    <div>
                                        <button type="submit" @click.prevent="CancelarRegeicao()"
                                            class="py-2 px-4 mt-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Cancela
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                    <div class="fixed w-full h-full m-auto zindex"
                        :style="`transform:translateY(-${translatePendente}px); transition: 1s`">

                        <div
                            class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
                            <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
                                Descreva o motivo
                            </div>
                            <div class="mt-8">
                                <form action="#" autoComplete="off">
                                    <div class="flex flex-col mb-2">
                                        <div class="flex relative ">
                                            <span
                                                class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                                <img src="../assets/ferramenta-de-reparacao.png" alt="engrenagens"
                                                    class="w-[16px] h-[16px]">

                                            </span>
                                            <input type="text" id="sign-in-email" v-model="motivoAdm"
                                                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Mensagem para uso de adm" />
                                        </div>
                                    </div>


                                    <div class="flex w-full">
                                        <button type="submit" @click.prevent="SuspenderCadastro(c)"
                                            class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Enviar
                                        </button>
                                    </div>

                                    <div>
                                        <button type="submit" @click.prevent="CancelarPendencia()"
                                            class="py-2 px-4 mt-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Cancela
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios'
import concluirCadastro from '../components/Modules/concluirCadastro'
import { ref } from 'vue'
import Regeitar from "../components/Modules/regeitarCadastro"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';


const motivo = ref()
const motivoAdm = ref()
const translate = ref(0)

const translatePendente = ref(0)


const store = useStore()



const router = useRouter()

const config = {
    headers: {
        'x-access-token': document.cookie,
    },
}

let c = ref('')

async function fetchData() {
    try {
        const data = store.state
        console.log(data)
        await axios.get(`http://192.168.0.181:3333/adm/clientsById/${data.UserData.id}`, config).then((res) => {

            c.value = res.data.user

            console.log(c.value)




        })




    } catch (err) {
        console.error(err)
    }
}

fetchData()

function ConcluirCadastro(c) {
    try {

        
        concluirCadastro.Concluir(c)








    } catch (err) {
        console.log(err)
    }

}

function menuRegect() {

    translate.value = 1800

}

function menuPendent() {
    translatePendente.value = 1800
}

function CancelarPendencia() {
    translatePendente.value = 0
}

async function SuspenderCadastro(c) {
    const data = {data:c} 

    data.data.MOTIVO = motivoAdm.value

    await axios.post(`http://192.168.0.181:3333/adm/Pendentes`, data, config)

    translatePendente.value = 0 


}

function CancelarRegeicao() {
    translate.value = 0
}



function RegeitarCadastro(c) {
    const data = c

    data.MOTIVO = motivoAdm.value

    Regeitar.Regect(data, motivo.value)

    translate.value = 0

    setTimeout(fetchData, 800)

    motivo.value = null

}








async function Message(c) {


    const user = c.NOME
    const email = c.EMAIL
    await store.commit('setUserEmail', { user, email })

    router.push('/message')




}


</script>

<style scoped>
.zindex {
    z-index: 1;
}
</style>