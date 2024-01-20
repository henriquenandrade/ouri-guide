<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
    company: Object
})

const { name, description, keywords } = toRefs(props.company)

function splitKeywords(keywords) {
    const categories = keywords.split(", ", -1)
    console.log(categories)
    if(categories.length > 1) return categories
}

</script>

<template>
    <div>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>

        <div>
            <li v-for="company in splitKeywords(keywords)">{{ company }}</li>
        </div>
    </div>
</template>