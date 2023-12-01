<template>
    <div id="container " class=" w-[100vw] flex justify-center items-center bg-no-repeat bg-cover bg-fixed flex-col"
        style="background-image: url('https://img.freepik.com/fotos-gratis/retrato-de-trabalhador-de-supermercado-parado-perto-do-freezer-com-comida_342744-1072.jpg?size=626&ext=jpg&uid=R47467877&ga=GA1.1.467504390.1697735833&semt=sph');">


        <div class="bg-gray-300 rounded-lg shadow sm:max-w-3xl sm:w-full  sm:overflow-hidden  my-10" v-for="c in client"
            :key="c.id">
            <div class="px-4 py-8 sm:px-10">
                <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div class="relative flex justify-center text-sm leading-5">
                        <span>
                            {{ c.NOME }}
                        </span>
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
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                     >{{ c.RG }}</div>
                            </div>
                        </div>


                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">UF-RG:</p>
                                <div type="text" id="UF_RG"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                     >
                                    {{ c.UF_RG }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Data de Nascimento:</p>
                                <div id="DataDeNascimento"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Data de Nascimento" >{{ c.DATA_DE_NASCIMENTO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Sexo:</p>
                                <div id="Sexo"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                     >{{ c.SEXO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Escolaridade:</p>
                                <div id="Escolaridade"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.ESCOLARIDADE }}</div>
                            </div>
                        </div>

                        <div class="flex w-full mb-2">

                            <div class="w-24 mr-2">
                                <div class=" relative">
                                    <p class="text-right">.</p>
                                    <div id="DDD"
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                         >
                                        +{{ c.DDD }}
                                </div>
                                </div>
                            </div>

                            <div class="w-full">
                                <div class=" relative ">
                                    <p class="text-right">Celular:</p>
                                    <div id="Celular"
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Celular" >{{ c.CELULAR }}</div>
                                </div>
                            </div>
                        </div>


                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Telefone:</p>
                                <div id="Telefone"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.TELEFONE }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <div id="email"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.EMAIL }}</div>
                            </div>
                        </div>

                        <!-- Endereços de residencia -->

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">CEP:</p>
                                <div id="cep"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   >{{ c.CEP }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Rua:</p>
                                <div id="rua"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.RUA }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Numero:</p>
                                <div id="numero"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.NUMERO_CASA }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Complemento:</p>
                                <div id="complemento"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Complemento (Opcional)" >{{ c.COMPLEMENTO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Bairro:</p>
                                <div id="bairro"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                     >{{ c.BAIRRO }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Cidade:</p>
                                <div id="cidade"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                     >{{ c.CIDADE }}</div>
                            </div>
                        </div>

                        <div class="w-full">
                            <div class=" relative ">
                                <p class="text-right">Estado:</p>
                                <div id="estado"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    >{{ c.ESTADO }}</div>
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
import { ref } from 'vue'

let client = ref()

async function fetchData() {
    try {
        const response = await axios.get('http://192.168.0.181:3333/adm/clients')
        client.value = response.data

    } catch (err) {
        console.log('Algo deu errado ao listar usuarios ' + err)
    }
}

fetchData()
</script>