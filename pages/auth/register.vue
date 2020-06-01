<template>
  <div class="container register-container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <SocialLoginButtons></SocialLoginButtons>
        <b-form @submit.prevent="register">
          <!-- Fullname group -->
          <b-form-group
            id="input-group-register-fullname"
            label
            label-for="input-register-fullname"
          >
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </b-input-group-prepend>
              <b-form-input
                id="input-register-fullname"
                v-model="form.fullname"
                aria-describedby="input-register-fullname-help input-register-fullname-feedback"
                placeholder="Fullname"
                trim
                required
              ></b-form-input>
              <b-form-feedback v-if="errors.fullname">{{errors.fullname[0]}}</b-form-feedback>
            </b-input-group>
          </b-form-group>
          <!-- Fullname group -->

          <!-- email group -->
          <b-form-group id="input-group-register-email" label label-for="input-register-email">
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
              </b-input-group-prepend>
              <b-form-input
                id="input-register-email"
                v-model="form.email"
                aria-describedby="input-register-email-help input-register-email-feedback"
                placeholder="email"
                type="email"
                trim
                required
              ></b-form-input>
              <b-form-feedback v-if="errors.email">{{errors.email[0]}}</b-form-feedback>
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
              <b-input-group-prepend>
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
              ></b-form-input>
              <b-form-feedback v-if="errors.password">{{errors.password[0]}}</b-form-feedback>
            </b-input-group>
          </b-form-group>
          <!-- password group -->

          <b-form-group class="text-center">
            <b-button type="submit" class="btn-auth btn-success">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" class="mr-10" />create account
            </b-button>
          </b-form-group>
          <b-form-group class="text-center guest-auth-link">
            <nuxt-link to="/auth/login">Sign in</nuxt-link>
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
        fullname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register() {
      try {
        const resgisterRes = await this.$axios.post('auth/register', this.form)
        await this.$auth.loginWith('local', {
          data: { email: this.form.email, password: this.form.password }
        })
        this.$router.push('/')
      } catch (e) {
        this.$toast.error(e.response.data.message)
      }
    }
  }
}
</script>

<style>
.register-container {
  padding-top: 50px;
}
</style>