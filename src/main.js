import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#374151',
            buttonprimary: '#2563EB',
            buttonerror: '#EF4444',
            card: '#FAFAFA',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        style: 'font-family: "Inter", sans-serif;'
      },
      VCardActions: {
        style: 'font-family: "Inter", sans-serif;'
      },
      VCardTitle: {
        style: 'font-family: "Space Grotesk", sans-serif; font-weight: bold;'
      },
      VTextField: {
        style: 'font-family: "Inter", sans-serif;'
      }
    }
  })
  
  createApp(App).use(router).use(vuetify).mount('#app')
