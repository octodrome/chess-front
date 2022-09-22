// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    css: [
        'mdi/css/materialdesignicons.min.css',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    }
})
