import { ref } from "vue"
import axios from "axios"

export default function useCompanies() {
    const companies = ref()
    const company = ref()

    const getCompanies = async () => {
        const response = await axios.get('https://ourikas.github.io/companies.json')
        companies.value = response.data
    }

    const getCompany = async (id) => {
        const response = await axios.get('https://ourikas.github.io/companies.json')
        companies.value = response.data
        company.value = companies.value.filter(el => {
            return el.id == id
        })
    }

    return {
        companies,
        company,
        getCompanies,
        getCompany
    }
}