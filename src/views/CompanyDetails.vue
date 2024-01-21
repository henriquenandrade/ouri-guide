<script setup>
import { onMounted, ref } from 'vue'
import useCompanies from '../composables/companies'

const { company, getCompany } = useCompanies()

const props = defineProps({
    id: {
        type: String
    }
})

onMounted(() => { getCompany(props.id) })

function splitKeywords(keywords) {
    const categories = keywords.split(", ", -1)
    if (categories.length > 1) return categories
}

</script>

<template>
    <div v-for="comp in company">
        <p>{{ comp.name }}</p>
        <span>{{ comp.description }}</span>

        <ul class="mb-2 flex flex-wrap items-center justify-center text-gray-900">
            <li class="me-2 m-0.5 px-3 py-2 bg-blue-100 text-green-800 text-sm font-medium rounded"
                v-for="keywords in splitKeywords(comp.keywords)">
                {{ keywords }}
            </li>
        </ul>

        <div v-for="phones in comp.contact.phones">
            <p>{{ phones }}</p>
        </div>

        <div>
            <p>{{ comp.contact.site }}</p>
            <p>{{ comp.contact.facebook }}</p>
            <p>{{ comp.contact.email }}</p>
        </div>

        <div>
            <p>{{ comp.address.street }}</p>
            <p>{{ comp.address.city }} - {{ comp.address.state }}</p>
            <p>{{ comp.address.zipcode }}</p>
        </div>
    </div>
</template>
