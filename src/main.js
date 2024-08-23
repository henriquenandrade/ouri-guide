import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: 'places',
        v: 'weekly'
    }
}).mount('#app')