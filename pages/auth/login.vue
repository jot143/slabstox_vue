<template>
  <div class="container login-container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <SocialLoginButtons></SocialLoginButtons>
        <b-form @submit.prevent="login">
          <!-- email group -->
          <b-form-group id="input-group-register-email" label label-for="input-register-email">
            <b-input-group>
              <b-input-group-prepend :class="{'is-invalid': errors.email}">
                <span class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
              </b-input-group-prepend>
              <b-form-input
                id="input-register-email"
                v-model="form.email"
                aria-describedby="input-register-email-help input-register-email-feedback"
                placeholder="email"
                trim
                required
                :class="{'is-invalid': errors.email}"
              ></b-form-input>
              <span class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</span>
            </b-input-group>
          </b-form-group>
          <!-- email group -->

          <!-- password group -->
          <b-form-group
            id="input-group-register-password"
            label
            label-for="input-register-password"
          >
            <b-input-group>
              <b-input-group-prepend :class="{'is-invalid': errors.password}">
                <span class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </b-input-group-prepend>
              <b-form-input
                id="input-register-password"
                v-model="form.password"
                aria-describedby="input-register-password-help input-register-password-feedback"
                placeholder="password"
                type="password"
                trim
                required
                :class="{'is-invalid': errors.password}"
              ></b-form-input>
              <b-form-feedback v-if="errors.password">{{errors.password[0]}}</b-form-feedback>
            </b-input-group>
          </b-form-group>
          <!-- password group -->

          <b-form-group class="text-center">
            <b-button type="submit" class="btn-auth btn-success">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />Login
            </b-button>
          </b-form-group>
          <b-form-group class="text-center guest-auth-link">
            <nuxt-link to="/auth/register">Sign up</nuxt-link>
          </b-form-group>
        </b-form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import SocialLoginButtons from '~/components/SocialLoginButtons'

export default {
  middleware: 'guest',
  components: {
    SocialLoginButtons
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })
        this.$router.push(
          this.$router.query.redirect ? this.$router.query.redirect : '/'
        )
      } catch (e) {
        //this.$toast.error(e.response.data.message)
      }
    }
  }
}
</script>

<style>
.login-container {
  padding-top: 50px;
}
</style>