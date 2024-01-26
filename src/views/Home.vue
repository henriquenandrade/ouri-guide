<script setup>
import { onMounted, ref } from 'vue'
import Company from '../components/Company.vue'
import useCompanies from '../composables/companies'
const search = ref('')
const filteredCompanies = ref([])

const { companies, getCompanies } = useCompanies()

function searchCompany() {
    filteredCompanies.value = companies.value.filter((el) => {
        return el.name.toLowerCase().includes(search.value.toLowerCase())
    })
}

onMounted(() => { getCompanies() })
</script>

<template>
    <div class="lx:container min-h-screen bg-indigo-50">
        <div class="bg-gray-900 py-2 md:py-8 lg:py-24 flex items-center flex-col">
            <h1 class="text-5xl font-bold tracking-tight text-white lg:text-7xl">Ourikas VJS</h1>
            <form class="mt-8 w-5/12">
                <input id="" name="" type="text" v-model="search" @keyup="searchCompany()"
                    class="w-full rounded-sm border-0 px-6 py-5 ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 md:text-lg"
                    placeholder="Busque uma empresa...">
            </form>
        </div>

        <div class="sm:container mx-auto flex flex-wrap justify-between mt-10">
            <Company v-for="company in filteredCompanies == '' ? companies : filteredCompanies" :key="company.id" :company="company" />
        </div>
    </div>
</template>
