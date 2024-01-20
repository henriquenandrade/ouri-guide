<script setup>
import { onMounted } from 'vue';
import Company from './components/Company.vue'
import useCompanies from './composables/companies'

const { companies, getCompanies } = useCompanies()

onMounted(() => { getCompanies() })
</script>

<template>
  
  <Company v-for="company in companies" :key="company.id" :company="company" />
</template>
