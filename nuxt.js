import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-theme-button',
    configKey: 'tvThemeButton'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-theme-button/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
