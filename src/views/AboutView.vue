<template>
  <div>


    <div class="bg-white rounded-lg shadow sm:max-w-3xl sm:w-full sm:mx-auto sm:overflow-hidden">
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
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your price" >
                  <option value="">Dia 5</option>
                  <option value="">Dia 10</option>
                  <option value="">Dia 15</option>
                  <option value="">Dia 20</option>
                  <option value="">Dia 25</option>
                </select>
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="cpf"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="CPF" />
              </div>
            </div>
            <div class="w-full">
              <div class=" relative">
                <input type="text" id="nome"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="rg"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="RG" />
              </div>
            </div>


            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="UF_RG"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="UF RG" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="DataDeNascimento"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Data de Nascimento" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="Sexo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Sexo" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="Escolaridade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Escolaridade" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="Celular"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Celular" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="Telefone"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Telefone (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Endereço de Email" />
              </div>
            </div>

            <!-- Endereços de residencia -->

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="cep"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="CEP" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="rua"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Rua" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="numero"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Número" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="complemento"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Complemento (Opcional)" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="bairro"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Bairro" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="cidade"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Cidade" />
              </div>
            </div>

            <div class="w-full">
              <div class=" relative ">
                <input type="text" id="estado"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Estado" />
              </div>
            </div>



            <div>
              <span class="block w-full rounded-md shadow-sm">
                <button type="button"
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




</div></template>

<script setup>
</script>
