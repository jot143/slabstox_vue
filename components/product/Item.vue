<template>
  <div>
    <b-card
      :title="details.title"
      :img-src="details.galleryURL"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 img-thumbnail"
    >
      <b-card-text><strong>Category</strong> : {{(details.category) ? details.category.name : '-'}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['details'],
  data() {
    return {

    }
  },

}
</script>

<style>
</style>