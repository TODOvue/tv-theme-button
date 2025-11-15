import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvThemeButton from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvThemeButton)
app.component('TvDemo', TvDemo)
app.mount('#tv-theme-button')
