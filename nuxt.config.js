export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '~/css/main.css'
    ],
    /*
     ** router 
     */
    router: {
        middleware: [
            'clearValidationErrors'
        ]
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/mixins/validation",
        "~/plugins/mixins/user",
        "~/plugins/axios",
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',

        '@nuxtjs/auth',

        '@nuxtjs/toast',

        [
            'nuxt-fontawesome', {
                imports: [{
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ],
    ],

    toast: {
        position: 'top-center',
        register: [ // Register custom toasts
            {
                name: 'my-error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },

    env: {
        baseUrl: process.env.BASE_URL || 'http://slabstox-api.rcubinity.com/api/'
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://slabstox-api.rcubinity.com/api/',
        progress: true,
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: 'auth/logout', method: 'get' },
                    user: { url: 'auth/getUser', method: 'get', propertyName: 'user' },
                },
                tokenRequired: true,
                tokenType: 'bearer',
            }
        },
        redirect: {
            login: '/auth/login',
            home: '/dashboard',
        },
        plugins: [
            '~/plugins/auth'
        ]
    },


    /*
     ** Build configuration
     */
    build: {
        transpile: ["vee-validate/dist/rules"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}