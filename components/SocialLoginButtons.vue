<template>
  <div class="row scoial_button">
    <div class="col text-center">
      <button @click="socialLogin('google')" class="google">
        <font-awesome-icon :icon="['fab', 'google']" />
      </button>
      <button @click="socialLogin('facebook')" class="facebook">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </button>
      <button @click="socialLogin('twitter')" class="twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    socialLogin(service) {
      window.location.href = `${process.env.baseUrl}auth/login/${service}`;
    }
  }
}
</script>

<style>
.scoial_button {
  margin-bottom: 20px;
}
button {
  border-color: #ffffff;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
}

button:hover {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.6);
}

.google {
  background-color: #db4a39;
}

.facebook {
  background-color: #3b5998;
  padding-left: 13px;
  padding-right: 13px;
}

.twitter {
  background-color: #00acee;
}
</style>