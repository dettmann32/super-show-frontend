<template>
    <section class=" flex flex-col justify-center items-center w-[100vw]">

        <div
            class="bg-gray-300 border-opacity-10 p-8 border-collapse border border-l-1 border-t-1 rounded-tl-xl border-black border-b-0 border-r-0 mt-10 mb-10 w-[90vw] space-y-10">
            <h1 class="text-center text-4xl">Mais Informações</h1>
            <details>
                <summary class="bg-[#6522E6] p-10 rounded-bl-3xl rounded-tr-3xl">O que é o Cartão SuperShow ?</summary>
                <p class="ml-10  bg-[#FF5D00] p-10 rounded-b-md text-justify">
                    O Cartão de Compras SuperShow opera de maneira semelhante a um cartão de crédito tradicional,
                    mas com uma diferença crucial: ao invés de realizar pagamentos a um banco, você quita seus gastos
                    diretamente no supermercado.
                    Com um crédito inicial generoso de R$ 500, você terá a liberdade de explorar os corredores
                    do mercado sem se preocupar com o saldo disponível.

                    Ao fazer suas compras, basta apresentar o Cartão de Compras no momento do pagamento.
                    Seu valor total será automaticamente deduzido do crédito disponível no cartão. É simples, rápido e
                    eficiente!
                </p>
            </details>

            <details>
                <summary class="bg-[#6522E6] p-10 rounded-bl-3xl rounded-tr-3xl">Escolha Seu Dia Bom e Ganhe Mais Tempo para Pagar!</summary>
                <p class="ml-10  bg-[#FF5D00] p-10 rounded-b-md text-justify">
                    Ao adquirir o Cartão de Compras SuperShow, oferecemos a você a oportunidade de
                    personalizar ainda mais a sua experiência financeira. Introduzimos o conceito de "Dia Bom",
                    um dia especial que pode estender o prazo de pagamento para suas compras feitas com o cartão.

                    <br class="hidden sm:block"><br class="hidden sm:block">

                    Ao se cadastrar em nosso site, você será solicitado a escolher o seu "Dia Bom". Este será o dia do mês
                    em que você
                    terá uma vantagem exclusiva: se realizar o pagamento de suas compras nesse dia específico, ganhará um
                    prazo estendido de
                    40 dias para quitar o valor total.
                </p>
            </details>


            <details>
                <summary class="bg-[#6522E6] p-10 rounded-bl-3xl rounded-tr-3xl">Como Funciona o Aumento de Limite</summary>
                <p class="ml-10  bg-[#FF5D00] p-10 rounded-b-md">
                    Estamos entusiasmados em oferecer a você a oportunidade de ampliar seus horizontes financeiros com o Cartão de Compras do Supermercado. Agora, você pode aumentar seu limite em até 50% a cada 3 meses, simplesmente apresentando a fatura paga.



Após utilizar o Cartão de Compras do Supermercado de maneira responsável e efetuar o pagamento integral da sua fatura, você estará apto a solicitar um aumento no limite do seu cartão.
 Este aumento pode chegar a 50% do seu limite atual, permitindo que você tenha mais flexibilidade para suas compras no supermercado.
                </p>
            </details>


            <details>
                <summary class="bg-[#6522E6] p-10 rounded-bl-3xl rounded-tr-3xl">Sorteios mensais de vale compras</summary>
                <p class="ml-10  bg-[#FF5D00] p-10 rounded-b-md">
                    Os sorteios de Vale Compras, proporcionando a chance de ganhar um aumento significativo de até R$ 1000 no limite do seu cartão.
                </p>
            </details>

        </div>
    </section>
</template>


<script setup>
import { ref, reactive, toRefs } from 'vue';


const v = ref(-40)



function showContent() {

    v.value = (v.value === 40) ? -40 : 40;


}


</script>

<style scoped>
summary:hover {
    background-color: #6521B1;
    color: #fff;
}

summary{
    color: rgb(215, 199, 199);
}

p {
    color: #fff;
}
</style>