<template>
  <page-title title="Book Page"/>
  <div class="my-4">
    <button @click="handleAddButton" class="py-2 px-4 bg-secondary text-white rounded-md capitalize hover:bg-primary hover:shadow-lg">Add new book</button>
  </div>
  <book-list/>
</template>

<script>
import BookList from '../components/book/BookList.vue'
import PageTitle from '../components/customComponents/PageTitle.vue'
export default {
  components: { BookList, PageTitle },
  methods: {
    handleAddButton(){
      this.$router.push({name: "addNewBookPage"})
    }
  }
}
</script>

<style>

</style>