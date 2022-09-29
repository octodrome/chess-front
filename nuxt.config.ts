// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        '@/assets/css/main.css',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    }
})
