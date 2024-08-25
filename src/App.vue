<script setup>
import { onMounted } from 'vue';
import useCompanies from './composables/companies'
import { RouterView } from 'vue-router'

const { getCompanies } = useCompanies()

onMounted(() => { getCompanies() })
</script>

<template>
  <RouterView />
</template>
