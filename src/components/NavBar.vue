<template>
    <div>

        <header class="h-32 -mb-12">
            <nav class="flex justify-center sm:justify-between bg-red-500 h-20 items-center">

                <div class="hidden sm:block">
                    <a href="/"><img src="../assets/logo.png" alt="logo" class="w-14 h-14 mx-5"></a>
                </div>
                <div>
                    <ul class="flex gap-6">
                        <li class="mx-5"><router-link to="/cadastro">
                                <button type="button"
                                    class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl ">
                                    <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                        </path>
                                    </svg>
                                    Faça o cadastro
                                </button>
                            </router-link></li>
                        <li class="mx-5"><a href="https://api.whatsapp.com/send/?phone=5527998421660&text&type=phone_number&app_absent=0" target="_blank">

                                <button type="button"
                                    class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl">
                                    <img class="w-[20px] h-[20px] mr-2" src="../assets/whatsapp.png" alt="wpp">
                                    Contato
                                </button>



                            </a></li>
                    </ul>
                </div>
            </nav>
        </header>

    </div>
</template>


<script setup>
</script>