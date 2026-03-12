import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#D90429',    // Rojo Intenso Principal
          secondary: '#EF233C',  // Rojo más brillante
          accent: '#FF007A',     // Rosado Intenso AOC
          surface: '#FFFFFF',    // Blanco puro
          background: '#F8F9FA', // Gris casi blanco para contraste
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
