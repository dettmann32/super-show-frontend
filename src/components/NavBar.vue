<template>
    <div>

        <header class="h-32">
            <nav class="flex justify-center sm:justify-between bg-red-500 h-20 items-center">

                <div class="hidden sm:block">
                    <a href="/"><img src="../assets/logo.png" alt="logo" class="w-14 h-14 mx-5"></a>
                </div>
                <div>
                    <ul class="flex gap-16">
                        <li class="mx-5"><router-link to="/about">Crie Seu Cartão</router-link></li>
                        <li class="mx-5">Contato</li>
                    </ul>
                </div>
            </nav>
        </header>

    </div>
</template>


<script setup>
</script>