<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-20">
            <!-- email group -->
              <b-input-group>
                <b-input-group-prepend>
                  <span class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'search']" />
                  </span>
                </b-input-group-prepend>
                <b-form-input
                  id="card-search-keyword"
                  placeholder="keyword"
                  v-model="keyword"
                  trim
                  required
                  v-on:keyup="searchByKeyword"
                ></b-form-input>
              </b-input-group>
        </div>
      </div>
      <div class="row mt-20">
        <div class="col-12">
          <b-pagination
            v-model="currentPage"
            :total-rows="products.total"
            :per-page="products.per_page"
            aria-controls="my-table"
            class="float-right"
            @change="getPageData"
          ></b-pagination>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="card of products.data" :key="card.id">
          <Item v-bind:details="card" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-pagination
            v-model="currentPage"
            :total-rows="products.total"
            :per-page="products.per_page"
            aria-controls="my-table"
            class="float-right"
            @change="getPageData"
          ></b-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Item from '~/components/product/Item'
export default {
  components: {
    Item
  },
  data() {
    return {
      products: {
        data: []
      },
      currentPage: 1,
      keyword: '',
      start: 0,
    }
  },
  async created() {
    this.showloader = true
    this.getPageData()
  },
  methods: {
    async getPageData(page = 1) {
      try {
        const res = await this.$axios.$post('get-card-list', { 
            search: this.keyword, 
            start: this.start 
        })
        if (res.status == 200) {
          this.products = res.data
          this.start = res.data.start
        }
      } catch (err) {
        console.log(err)
      }
    },
    searchByKeyword(event){
        if(event.key == 'Enter'){
            this.start = 0;
            this.getPageData(this.currentPage)
        }
    }
  }
}
</script>

<style>
</style>