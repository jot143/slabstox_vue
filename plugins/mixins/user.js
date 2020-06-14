import Vue from 'vue';

import { mapGetters } from 'vuex';

const User = {
    install(Vue, option) {
        Vue.mixin({
            data() {
                return {
                    appLoaded: false,
                    user_fullname: null,
                    showloader: true,
                }
            },
            computed: {
                ...mapGetters({
                    user: 'loggedInUser',
                    authenticated: 'isAuthenticated'
                }),
            },
            mounted() {
                this.appLoaded = true;
                this.showloader = false;
                if(this.user) {
                    this.user_fullname = this.user.first_name +' '+ ((this.user.last_name != null) ? this.user.last_name : '')
                }
            }
        })
    }
}

Vue.use(User)
