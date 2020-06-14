<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="authenticated">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ user_fullname }}</em>
              </template>
              <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/products">Products</b-nav-item>
          </template>
          <template v-else>
            <b-nav-item to="/auth/login">Sign in</b-nav-item>
            <b-nav-item to="/auth/register">Sign up</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <header class="row">
      <div class="col-12">
        <h1 class="text-center">Slabstox</h1>
        <p class="text-center">slabstox.com</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
header {
  background-color: #f8f9fa !important;
}

h1 {
  text-transform: uppercase;
  font-weight: bolder;
}
</style>
