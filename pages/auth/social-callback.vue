<template>
  <div class="container">Please wait...</div>
</template>

<script>
export default {
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null 
        }
    },
    mounted() {
        this.$auth.login({data: {
            token: this.token
        }}).catch((e) => {
            return this.$router.push('/auth/register?error=Your token appeared to be invalid, please try again')
        })
    }
}
</script>

<style>

</style>