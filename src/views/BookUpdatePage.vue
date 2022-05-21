<template>
  <page-title title="Update Book Page"/>
  <book-form @onSubmit="updateBook" :input="book" />
</template>

<script>
import axios from 'axios'
import PageTitle from '../components/customComponents/PageTitle.vue'
import { mapState } from 'pinia'
import { useUserStore } from '../stores/user'
import BookForm from '../components/book/BookForm.vue'
import { useBookStore } from '../stores/book'
export default {
  components: { PageTitle, BookForm },
  name: "BookUpdatePage",
  computed: {
    ...mapState(useUserStore, ["access_token"]),
    ...mapState(useBookStore, ["book"])
  },
  methods: {
    async updateBook(data){
      try {
        const result = await axios.put("/admin/books/" + data.id, data, {
          headers: {"access_token": this.access_token}
        })
        this.$toast.success(result.data.message, {position: "top"})
        this.$router.push({name: "booksPage"})
      } catch (error) {
        this.$toast.error(error.response.data.message, {position: "top"})
      }
    }
  }

}
</script>

<style>

</style>