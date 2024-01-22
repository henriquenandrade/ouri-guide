<script setup>
import { onMounted, ref } from 'vue';
import Company from './components/Company.vue'
import useCompanies from './composables/companies'
import { RouterView } from 'vue-router';

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
  <RouterView />
</template>
