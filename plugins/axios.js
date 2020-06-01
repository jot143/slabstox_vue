export default function ({ $axios, store }) {
  $axios.onError(error => {
    if (error.response.status === 422) {
      store.dispatch('validation/setErrors', error.response.data.validation)
      store.dispatch('validation/setMessage', error.response.data.error)
    }
    return Promise.rejec(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
    store.dispatch('validation/clearMessage')
  })
}