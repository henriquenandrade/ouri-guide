<script setup>
import { defineProps, toRefs, ref } from 'vue'

const textLength = ref();

const props = defineProps({
    company: Object
})

const { name, description, keywords } = toRefs(props.company)

function splitKeywords(keywords) {
    const categories = keywords.split(", ", 4)
    if (categories.length > 1) return categories
}

function sliceDescription(description) {
    textLength.value = 30;
    if(description.length >= textLength.value) {
        const descriptionSliced = description.slice(0, textLength.value)
        return descriptionSliced + '...'
    }
    return description
}

</script>

<template>
    <div class="p-2 text-center">
        <div class="max-w-sm p-5 bg-white border border-gray-200 rounded-sm shadow">
            <a href="#">
                <p class="mb-2 text-4xl font-bold tracking-tight text-green-950">{{ name }}</p>
            </a>
            <p class="mb-3 text-2xl font-semibold text-green-900">{{ sliceDescription(description) }}</p>
            <ul class="mb-2 flex flex-wrap items-center justify-center text-gray-900">
                <li class="me-2 m-0.5 px-3 py-2 bg-blue-100 text-green-800 text-sm font-medium rounded"
                    v-for="company in splitKeywords(keywords)">
                    {{ company }}
                </li>
            </ul>
            <RouterLink
                :to="{ name: 'CompanyDetails', params: { id: company.id } }"
                class="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-sm hover:bg-green-800 focus:outline-none">
                Detalhes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </RouterLink>
        </div>
    </div>
</template>