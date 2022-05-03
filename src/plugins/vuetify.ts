// Styles
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

//i18n
import { en, fr } from 'vuetify/locale'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    defaultLocale: 'en',
    fallbackLocale: 'fr',
    messages: { en, fr },
  },
  theme: {
    defaultTheme: 'dark',
  }
})
