<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-5">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Ouri Guide</span>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:w-auto">
            <div class="text-white text-sm">
                <RouterLink :to="{ name: 'home' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'contact' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                    Contato
                </RouterLink>
            </div>
        </div>
    </nav>
</template>