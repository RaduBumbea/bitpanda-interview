import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCheckCircle, faTrashAlt)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueAxios, axios)
app.mount('#app')
