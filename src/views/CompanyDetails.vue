<script setup>
import { onMounted, ref } from 'vue'
import useCompanies from '../composables/companies'
import Menu from '../components/Menu.vue'

const { company, getCompany } = useCompanies()

const props = defineProps({
    slug: {
        type: String
    }
})

onMounted(() => { getCompany(props.slug) })

function splitKeywords(keywords) {
    const categories = keywords.split(", ", -1)
    if (categories.length > 1) return categories
}

</script>

<template>
    <div class="lx:container mx-auto justify-center min-h-screen bg-indigo-50 sm:rounded-sm">
        <Menu />

        <div class="sm:container flex flex-col mx-auto">
            <div>
                <RouterLink :to="{ name: 'home' }"
                    class="py-3 px-4 mt-3 gap-2 font-bold bg-gray-900 rounded-lg text-white hover:bg-white hover:text-green-600 inline-flex">

                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-0" viewBox="0 0 24 24">
                        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                    </svg>
                    <span class="text-1xl font-bold">voltar</span>
                </RouterLink>
            </div>

            <div class>
                <div v-for="comp in company" class="bg-white px-5 py-5 mt-5">
                    <p class="font-bold text-4xl mb-2">{{ comp.name }}</p>
                    <span class="font-normal text-2xl">{{ comp.description }}</span>

                    <ul class="mb-2 mt-5 flex flex-wrap items-center justify-center text-gray-900">
                        <li class="me-2 m-1 px-3 py-2 bg-blue-100 text-green-800 text-sm font-medium rounded"
                            v-for="keywords in splitKeywords(comp.keywords)">
                            {{ keywords }}
                        </li>
                    </ul>

                    <div class="mt-4">
                        <h3 class="font-bold text-2xl mb-1">Contatos</h3>
                        <hr>
                        <div v-for="phones in comp.contact.phones" class="mb-2 mt-2 inline-flex text-gray-900">
                            <span class="me-2 m-1 px-2 py-2 bg-blue-100 text-green-800 text-sm font-medium rounded">{{
                                phones }}</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <h3 class="font-bold text-2xl mb-2">Redes Sociais</h3>
                        <hr>
                        <p>{{ comp.contact.site }}</p>
                        <p>{{ comp.contact.facebook }}</p>
                        <p>{{ comp.contact.email }}</p>
                    </div>

                    <div class="font-normal text-lg mt-4">
                        <h3 class="font-bold text-2xl mb-2">Endereço</h3>
                        <hr>
                        <p>{{ comp.address.street }}</p>
                        <p>{{ comp.address.city }} - {{ comp.address.state }}</p>
                        <p>{{ comp.address.zipcode }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
