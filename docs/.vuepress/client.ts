import { defineClientConfig } from '@vuepress/client'
import Synta from './components/global/Synta.vue'

export default defineClientConfig({
  // enhance: ({ app, router, siteData }) => {
  //   app.component('Synta', Synta)
  // },
  enhance({ app }) {
    // app.component('MyComponent', MyComponent)
    app.component('Synta', Synta)
  },
})

