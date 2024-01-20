import { ref } from "vue"
import axios from "axios"

export default function useCompanies() {
    const companies = ref([])

    const getCompanies = async () => {
        const response = await axios.get('https://ourikas.github.io/companies.json')
        companies.value = response.data
    }

    return {
        companies,
        getCompanies
    }
}