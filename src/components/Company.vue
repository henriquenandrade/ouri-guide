<script setup>
import { defineProps, toRefs, ref } from 'vue'

const textLength = ref();

const props = defineProps({
    company: Object
})

const { name, description, keywords } = toRefs(props.company)

function splitKeywords(keywords) {
    const categories = keywords.split(", ", 3)
    if (categories.length > 1) return categories
}

function sliceDescription(description) {
    textLength.value = 30;
    if (description.length >= textLength.value) {
        const descriptionSliced = description.slice(0, textLength.value)
        return descriptionSliced + '...'
    }
    return description
}

</script>

<template>
    <div class="m-4">
        <div class="flex rounded-md h-full dark:bg-gray-100 border-black border-2 p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-black dark:text-black text-4xl font-medium">{{ name }}</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="text-2xl text-black">
                    {{ sliceDescription(description) }}
                </p>

                <ul class="mb-2 mt-4 flex flex-wrap items-center justify-center text-gray-900">
                    <li class="m-1 px-2 py-2 bg-black text-white text-sm font-medium rounded"
                        v-for="company in splitKeywords(keywords)">
                        {{ company }}
                    </li>
                </ul>
                <RouterLink :to="{ name: 'CompanyDetails', params: { slug: company.alias } }"
                    class="bg-black rounded-sm py-4 mt-3 font-bold text-white hover:text-white hover:bg-green-500 inline-flex justify-center items-center">
                    Detalhes
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-6 h-6 ml-4" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
            </div>
        </div>
    </div>
</template>