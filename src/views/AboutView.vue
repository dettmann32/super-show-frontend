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

                <select type="text" id="ValidadeDaFatura" title="Selecione o dia de vencimento da fatura"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  v-model="DIA">
                  <option :value="''">Selecione o dia de vencimento da fatura</option>
                  <option value="5">Dia 5</option>
                  <option value="10">Dia 10</option>
                  <option value="15">Dia 15</option>
                  <option value="20">Dia 20</option>
                  <option value="25">Dia 25</option>
                </select>
              </div>
            </div>

            <div class="w-full">
              <p>CPF:</p>
              <div class=" relative ">
                <input v-model="CPF" type="text" id="cpf" maxlength="14" @input="onInputCPFChange"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="CPF" />
              </div>
            </div>
            <div class="w-full">
              <p>Nome:</p>
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
                    placeholder="UF RG">
                    <option :value="''">UF_RG:</option>
                    <option v-for="c in estadosBrasileiros" :value="c">{{ c }}</option>

                  </select>
                </div>
              </div>



            </div>

            <div class="w-full mb-2 ">
              <span>Data de Nascimento:</span>

              <div class="flex items-center space-x-1 w-full">

                <div class="w-full  flex space-x-2">

                  <div class=" relative w-full">
                    <span class="text-gray-300">.</span>
                    <select v-model="Dia" type="text" id="DataDeNascimento" maxlength="8"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Data de Nascimento">
                      <option :value="''">Dia</option>
                      <option v-for="dia in Dias" :value="dia">{{ dia }}</option>

                    </select>


                  </div>

                  <div class=" relative w-full">
                    <span class="text-gray-300">.</span>
                    <select v-model="Mes" type="text" id="DataDeNascimento" maxlength="8"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Data de Nascimento">
                      <option :value="''">Mês:</option>
                      <option v-for="mes in meses" :value="mes">{{ mes }}</option>

                    </select>


                  </div>

                  <div class=" relative w-full">
                    <span class="text-gray-300">.</span>
                    <select v-model="Ano" type="text" id="DataDeNascimento" maxlength="8"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Data de Nascimento">
                      <option :value="''">Ano:</option>
                      <option v-for="ano in anos" :value="ano">{{ ano }}</option>

                    </select>


                  </div>
                </div>

                <div class="w-full">
                  Sexo:
                  <div class=" relative ">
                    <select v-model="SEXO" type="text" id="Sexo"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Sexo">
                      <option :value="''">Sexo:</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Prefiro não Dizer">Prefiro não Dizer</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>


            <div class="w-full">
              Escolaridade:
              <div class=" relative ">
                <select v-model="ESCOLARIDADE" type="text" id="Escolaridade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Escolaridade">
                  <option :value="''">Escolaridade:</option>
                  <option value="Ensino Fundamental Incompleto (1° a 5° ano)">Ensino Fundamental Incompleto (1° a 5° ano)
                  </option>
                  <option value="Ensino Fundamental Incompleto (6° a 8° ano)">Ensino Fundamental Incompleto (6° a 8° ano)
                  </option>
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
                    <option :value="''">--</option>
                    <option v-for="c in dddsBrasileiros" :value="c">{{ c }}</option>

                  </select>
                </div>
              </div>

              <div class="w-full">
                Celular:
                <div class=" relative ">
                  <input v-model="CELULAR" type="text" id="Celular" maxlength="9"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Celular" />
                </div>
              </div>
            </div>


            <div class="w-full">
              <p>Telefone:</p>
              <div class=" relative ">
                <input v-model="TELEFONE" type="number" id="Telefone"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Telefone (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <p>Email:</p>
              <div class=" relative ">
                <input v-model="EMAIL" type="email" id="email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Endereço de Email" />
              </div>
            </div>

            <!-- Endereços de residencia -->
            <div class="flex items-end">
              <div class="w-[80%] ">
                <p>CEP:</p>
                <div class=" relative ">
                  <input v-model="CEP" type="text" id="cep" maxlength="9" @input="onInputCEPchange"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="CEP" />
                </div>
              </div>
              <div class="ml-3">
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" ref="nofollow"
                  class="text-sm underline">Não sei meu CEP</a>
              </div>
            </div>


            <div class="flex w-full mb-2">

              <div class="w-full mr-2">
                <p>Rua:</p>
                <div class=" relative ">
                  <input v-model="RUA" type="text" id="rua"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Rua" />
                </div>
              </div>

              <div class="w-full">
                <p>Numero:</p>
                <div class=" relative ">
                  <input v-model="NUMERO" type="number" id="numero"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Número da casa (ou 00)" />
                </div>
              </div>


            </div>


            <div class="w-full">
              <p>Complemento:</p>
              <div class=" relative ">
                <input v-model="COMPLEMENTO" type="text" id="complemento"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Complemento (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <p>Bairro:</p>
              <div class=" relative ">
                <input v-model="BAIRRO" type="text" id="bairro"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Bairro" />
              </div>
            </div>

            <div class="w-full">
              <p>Cidade:</p>
              <div class=" relative ">
                <input v-model="CIDADE" type="text" id="cidade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Cidade" />
              </div>
            </div>

            <div class="w-full">
              <p>Estado:</p>
              <div class=" relative ">
                <input v-model="ESTADO" type="text" id="estado"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Estado" />
              </div>
            </div>
          </div>



          <div class="mt-5">
            <span class="block w-full rounded-md shadow-sm">
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
import validate from '../components/Modules/validarCpf'
import validar from '../components/Modules/validarCelular'

import cep from 'cep-promise'
import store from '@/store';


const DIA = ref('')
const CPF = ref()
const RG = ref()
const NOME = ref()
const UF_RG = ref('')
const Data_de_Nascimento = ref()
const SEXO = ref('')
const ESCOLARIDADE = ref('')
const DDD = ref('')
const CELULAR = ref()
const TELEFONE = ref()
const EMAIL = ref()
const CEP = ref('')
const RUA = ref()
const NUMERO = ref()
const COMPLEMENTO = ref()
const BAIRRO = ref()
const CIDADE = ref()
const ESTADO = ref()
const Dia = ref('')
const Mes = ref('')
const Ano = ref('')

const Dias = ref(Array.from({ length: 31 }, (_, index) => (index + 1).toString()))

const estadosBrasileiros = ref([
  'ES', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
])

const dddsBrasileiros = ref([
  '27', '82', '96', '92', '71', '85', '61', '27', '62', '98', '65', '67', '31', '91', '83', '41', '81', '86', '21', '84', '51', '69', '95', '48', '11', '79', '63'
])

const meses = ref([
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
])


let anoAtual = new Date().getFullYear();
let anos = ref([])

for (let ano = 1920; ano <= anoAtual; ano++) {
  anos.value.push(ano.toString());
}












let diaBom = ref('')

// calculo do dia bom
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


//consultar cep




// watch(CEP, () => {
//   if (CEP.value.length == 9 && CPF.value[5] != '-' || CPF.value.length == 10 && CPF.value[5] === '-') cep(CEP.value.replace(/[\s._-]+/g, '')).then((response) => {


//     if (!response.cep) {

//     } else {

//       if (response.city) CIDADE.value = response.city
//       if (response.state) ESTADO.value = response.state
//       if (response.street) RUA.value = response.street
//       if (response.neighborhood) BAIRRO.value = response.neighborhood


//     }


//   }).catch(() => {
//     alert('Digite um CEP válido')

//   })



// }
// )





watch(CEP, () => {
  if (CEP.value.length === 9 && CPF && CPF.value && CPF.value[5] !== '-') {
    cep(CEP.value.replace(/[\s._-]+/g, '')).then((response) => {
      if (!response.cep) {
          console.log('sem resposta')
      } else {

        if (response.city) CIDADE.value = response.city
        if (response.state) ESTADO.value = response.state
        if (response.street) RUA.value = response.street
        if (response.neighborhood) BAIRRO.value = response.neighborhood


      }

    }).catch(() => {
      alert('Digite um CEP válido');
    });
  }
});








//enviar dados
const router = useRouter()

const formContainer = ref(null)


const enviarDados = () => {

  try {


    if (!validate.validarCPF(CPF.value.replace(/[\s._-]+/g, ''))) {
      alert("Digite um CPF valido")
    } else if (!validar.validarNumeroCelular(CELULAR.value)) {
      alert("Digite um numero de celular válido")
    } else if (!DIA.value) {
      alert("Escolha um dia de vencimento da fatura")
    } else if (new Date().getFullYear() - parseInt(Ano.value) < 18) {


      alert("Você precisa ser maior de 18 anos para fazer um cadastro")



    }
    else {
      Data_de_Nascimento.value = Dia.value + Mes.value + Ano.value
      console.log(Data_de_Nascimento.value)
      try {
        const DATA = new BuilderClass(DIA.value, CPF.value.replace(/[\s._-]+/g, ''),
          RG.value, NOME.value,
          Data_de_Nascimento.value, SEXO.value,
          ESCOLARIDADE.value, DDD.value, CELULAR.value.replace(/[\s._-]+/g, ''),
          TELEFONE.value, EMAIL.value, CEP.value, RUA.value,
          NUMERO.value,
          COMPLEMENTO.value,
          BAIRRO.value, CIDADE.value, ESTADO.value, UF_RG.value)

        console.log(DIA.value)
        store.commit('setUserCPF', DATA)
        cartao.enviarCartaoApi(DATA, router)
      } catch (err) {
        console.log(err)
      }
    }
  } catch (err) {




    alert("Erro ao enviar formulario! Verifque se os campos foram preenchidos corretamente.")
  }

}


//enviar com enter
onMounted(() => {
  formContainer.value.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
      enviarDados();
    }
  });
});





//MASCARA DE CPF


const CpfMask = () => {

  if (CPF.value) {

    if (CPF.value.length == 3 || CPF.value.length == 7) {
      CPF.value += '.'
    } else if (CPF.value.length == 11) {
      CPF.value = CPF.value + '-'

    }

  }




}

function onInputCPFChange() {

  CPF.value = CPF.value.replace(/[^\d.-]/g, '')
}

watch(CPF.value, CpfMask)




//MASCARA DE CEP


const cepMask = () => {
  if (CEP.value) {

    if (CEP.value.length == 5) {
      CEP.value += '-'
    }
  }

}

watch(CEP, cepMask)




function onInputCEPchange() {




  if (CEP.value) CEP.value = CEP.value.replace(/[^\d-]/g, '')


}








</script>
<style scoped></style>