<script setup>
import Menu from '../components/Menu.vue'
</script>

<template>
    <div class="lx:container min-h-screen bg-indigo-50">
        <Menu />
        <div class="w-6/12 mx-auto bg-white mt-5 p-5 flex flex-col">
            <h1 class="text-3xl text-center font-semibold mb-2">Contato Ouri Guide</h1>
            <hr>
            <form action="#" class="space-y-4 mt-5">
                <div>
                    <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Seu e-mail*</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block sm:w-full p-2.5" placeholder="Ex: joao@gmail.com" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Assunto*</label>
                    <input type="text" id="subject" class="block p-3 sm:w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Ex: Quero adicionar minha empresa no guia..." required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Sua mensagem* :D</label>
                    <textarea id="message" rows="6" class="block p-2.5 sm:w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Deixe sua mensagem..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-bold text-center text-white rounded-sm bg-black sm:w-full hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300">enviar mensagem</button>
            </form>
        </div>
    </div>
</template>
