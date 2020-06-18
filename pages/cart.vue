<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Checkout</h1>
      </div>
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>S.no</th>
              <th colspan="2">Title</th>
              <th>Qty</th>
              <th>
                Remove
                <font-awesome-icon @click="clearCart()" :icon="['fas', 'trash']" />
              </th>
            </tr>
          </thead>
          <tr v-if="cartItemsCount == 0">
            <td colspan="5" class="text-center">No Item in your cart</td>
          </tr>
          <tbody v-else>
            <tr v-for="(item, index) of cartItems" :key="index">
              <td>{{ index }}</td>
              <td>
                <img :src="item.details.galleryURL" :alt="index" width="50" height="50" />
              </td>
              <td>{{ item.title }}</td>
              <td>{{ item.qty }}</td>
              <td>
                <b-button @click="removeItem(index)" size="sm" variant="danger">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12">
        <b-button class="float-right" variant="primary">Checkout now</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cartItems: 'cart/items',
      cartItemsCount: 'cart/itemsCount'
    })
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch('cart/removeFromCart', index)
    },
    clearCart() {
      this.$store.dispatch('cart/clearCart')
    }
  }
}
</script>

<style>
</style>