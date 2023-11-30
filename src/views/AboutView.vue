<template>
  <div id="container " class=" w-[100vw] flex justify-center items-center">


    <div class="bg-gray-300 rounded-lg shadow sm:max-w-3xl sm:w-full  sm:overflow-hidden  my-10">
      <div class="px-4 py-8 sm:px-10">
        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300">
            </div>
          </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 text-gray-500 bg-white">
              Preencha suas informações
            </span>
          </div>
        </div>
        <div class="mt-6">
          <div class="w-full space-y-6">

            <div class="w-full">
              <div class=" relative ">
                <p>Dia de Vencimento da fatura (Pagamento em até 40 dias):</p>
                <select type="text" id="ValidadeDaFatura"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your price" v-model="DIA">
                  <option value="">Selecione o dia de vencimento</option>
                  <option value="5">Dia 5</option>
                  <option value="10">Dia 10</option>
                  <option value="15">Dia 15</option>
                  <option value="20">Dia 20</option>
                  <option value="25">Dia 25</option>
                </select>
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="CPF" type="number" id="cpf"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="CPF" />
              </div>
            </div>
            <div class="w-full">
              <div class=" relative">
                <input v-model="NOME" type="text" id="nome"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome Completo" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="RG" type="number" id="rg"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="RG" />
              </div>
            </div>


            <div class="w-full">
              <div class=" relative ">
                <input v-model="UF_RG" type="text" id="UF_RG"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="UF RG" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="Data_de_Nascimento" type="number" id="DataDeNascimento"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Data de Nascimento" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="SEXO" type="text" id="Sexo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Sexo" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="ESCOLARIDADE" type="text" id="Escolaridade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Escolaridade" />
              </div>
            </div>

            <div class="flex w-full mb-2">

              <div class="w-24 mr-2">
                <div class=" relative ">
                  <select type="number" id="Celular"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Celular" v-model="DDD">
                    <option value="55">+55</option>
                  </select>
                </div>
              </div>

              <div class="w-full">
                <div class=" relative ">
                  <input v-model="CELULAR" type="number" id="Celular"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Celular" />
                </div>
              </div>
            </div>


            <div class="w-full">
              <div class=" relative ">
                <input v-model="TELEFONE" type="number" id="Telefone"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Telefone (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="EMAIL" type="email" id="email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Endereço de Email" />
              </div>
            </div>

            <!-- Endereços de residencia -->

            <div class="w-full">
              <div class=" relative ">
                <input v-model="CEP" type="number" id="cep"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="CEP" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="RUA" type="text" id="rua"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Rua" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="NUMERO" type="number" id="numero"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Número" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="COMPLEMENTO" type="text" id="complemento"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Complemento (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="BAIRRO" type="text" id="bairro"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Bairro" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="CIDADE" type="text" id="cidade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Cidade" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input v-model="ESTADO" type="text" id="estado"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Estado" />
              </div>
            </div>
          </div>



          <div class="mt-5">
            <span class="block w-full rounded-md shadow-sm">
              <button @click.prevent="enviarDados" type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Enviar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
      <p class="text-xs leading-5 text-gray-500">

      </p>
    </div>
  </div>
</template>

<script setup>
import BuilderClass from '../components/Modules/builder'
import cartao from '../components/Modules/cartao'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const DIA = ref()
const CPF = ref()
const RG = ref()
const NOME = ref()
const UF_RG = ref()
const Data_de_Nascimento = ref()
const SEXO = ref()
const ESCOLARIDADE = ref()
const DDD = ref()
const CELULAR = ref()
const TELEFONE = ref()
const EMAIL = ref()
const CEP = ref()
const RUA = ref()
const NUMERO = ref()
const COMPLEMENTO = ref('')
const BAIRRO = ref()
const CIDADE = ref()
const ESTADO = ref()



const router = useRouter()




const enviarDados = () => {

  console.log(DIA.value)
  const DATA = new BuilderClass(DIA.value, CPF.value, RG.value, NOME.value, Data_de_Nascimento.value, SEXO.value,
    ESCOLARIDADE.value, DDD.value, CELULAR.value, TELEFONE.value, EMAIL.value, CEP.value, RUA.value, NUMERO.value, COMPLEMENTO.value,
    BAIRRO.value, CIDADE.value, ESTADO.value, UF_RG.value)




  cartao.enviarCartaoApi(DATA).then(() => {
    router.push('/verify')
  }).catch((err) => {

    console.log('algo deu errado' + err)

  })
}






</script>
<style scoped></style>