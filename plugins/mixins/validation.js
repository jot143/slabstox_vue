import Vue from 'vue';

import { mapGetters } from 'vuex';

const Validation = {
    install(Vue, option) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    errors: 'validation/errors',
                    message: 'validation/message'
                })
            }
        })
    }
}

Vue.use(Validation)
