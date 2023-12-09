<template>
  <NavBar></NavBar>
  <div id="container " class=" w-[100vw] flex justify-center items-center bg-no-repeat bg-cover bg-fixed"
    style="background-image: url('https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/Cartao.jpg');">


    <div class="bg-gray-300 rounded-lg shadow sm:max-w-3xl sm:w-full  sm:overflow-hidden  my-10">
      <div class="px-4 py-8 sm:px-10">
        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300">
            </div>
          </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span>
              Preencha suas informações
            </span>
          </div>
        </div>
        <div class="mt-6">
          <div class="w-full space-y-6">

            <div class="w-full">
              <div class=" relative ">
                <p>Dia de Vencimento da fatura:</p>
                <p class="text-right">Dia bom {{ diaBom }}</p>

                <select type="text" id="ValidadeDaFatura"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your price" v-model="DIA">
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
                <input v-model="CPF" type="text" id="cpf"
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

            <div class="flex">


              <div class="w-full mr-2">
                RG:
                <div class=" relative ">
                  <input v-model="RG" type="number" id="rg"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="RG" />
                </div>
              </div>


              <div class="w-full">
                UF_RG:
                <div class=" relative ">
                  <select v-model="UF_RG" type="text" id="UF_RG"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="UF RG" >
                    <option value="ES">ES</option>
                    <option value="MG">MG</option>
                  </select>
                </div>
              </div>



            </div>

            <div class="flex w-full mb-2">

              
              <div class="w-full mr-2">
                Data de Nascimento
                <div class=" relative ">
                  <input v-model="Data_de_Nascimento" type="number" id="DataDeNascimento"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Data de Nascimento" />
                </div>
              </div>

              <div class="w-full">
                Sexo:
                <div class=" relative ">
                  <select v-model="SEXO" type="text" id="Sexo"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Sexo" >
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                </div>
              </div>
            </div>


            <div class="w-full">
              Escolaridade:
              <div class=" relative ">
                <select v-model="ESCOLARIDADE" type="text" id="Escolaridade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Escolaridade" >
                  <option value="Ensino Fundamental Incompleto (1° a 5° ano)">Ensino Fundamental Incompleto (1° a 5° ano)</option>
                  <option value="Ensino Fundamental Incompleto (6° a 8° ano)">Ensino Fundamental Incompleto (6° a 8° ano)</option>
                  <option value="Ensino Fundamental">Ensino Fundamental</option>
                  <option value="Ensino médio completo">Ensino médio completo</option>
                  <option value="Ensino Superior completo">Ensino Superior completo</option>
                  <option value="Pós Graduação">Pós Graduação</option>
                  <option value="Mestrado">Mestrado</option>
                  <option value="Doutorado">Doutorado</option>
                  <option value="Pós Doutorado">Pós Doutorado</option>

                </select>
              </div>
            </div>

            <div class="flex w-full mb-2">
             
              <div class="w-24 mr-2">
                DDD:
                <div class=" relative ">
                  <select type="number" id="Celular"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="DDD" v-model="DDD">
                    <option value="27">27</option>
                    <option value="027">027</option>
                  </select>
                </div>
              </div>

              <div class="w-full">
                Celular:
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

            <div class="flex w-full mb-2">

              <div class="w-full mr-2">
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
                    placeholder="Número da casa (ou 00)" />
                </div>
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



          <div class="mt-5" >
            <span class="block w-full rounded-md shadow-sm" >
              <button @click.prevent="enviarDados" ref="formContainer" type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Enviar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import BuilderClass from '../components/Modules/builder'
import cartao from '../components/Modules/cartao'
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const DIA = ref(0)
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


let diaBom = ref('')


function dia(DIA) {

  if (DIA == 5) {
    diaBom.value = '22'
  } else if (DIA == 10) {
    diaBom.value = '27'
  } else if (DIA == 15) {
    diaBom.value = '01'
  } else if (DIA == 20) {
    diaBom.value = '06'
  } else if (DIA == 25) {
    diaBom.value = '11'
  } else {
    diaBom.value = 'Dia Bom'
  }
}
watch(DIA, () => dia(DIA.value))



const router = useRouter()

const formContainer = ref(null)


const enviarDados = () => {


  const DATA = new BuilderClass(DIA.value, CPF.value.replace(/[\s._-]+/g, ''), RG.value, NOME.value, Data_de_Nascimento.value, SEXO.value,
    ESCOLARIDADE.value, DDD.value, CELULAR.value, TELEFONE.value, EMAIL.value, CEP.value, RUA.value, NUMERO.value, COMPLEMENTO.value,
    BAIRRO.value, CIDADE.value, ESTADO.value, UF_RG.value)


  cartao.enviarCartaoApi(DATA, router)

}

onMounted(() => {
  formContainer.value.addEventListener('keyup', (event) => {
    alert('deu certo')
    if (event.key === 'Enter') {
      enviarDados();
    }
  });
});


</script>
<style scoped></style>