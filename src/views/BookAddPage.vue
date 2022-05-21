<template>
  <page-title title="Add New Book Page"/>
  <book-form @onSubmit="addBook" :input="{}" />
</template>

<script>
import axios from 'axios'
import PageTitle from '../components/customComponents/PageTitle.vue'
import { mapState } from 'pinia'
import { useUserStore } from '../stores/user'
import BookForm from '../components/book/BookForm.vue'
export default {
  components: { PageTitle, BookForm },
  name: "BookAddPage",
  computed: {
    ...mapState(useUserStore, ["access_token"])
  },
  methods: {
    async addBook(data){
      try {
        const result = await axios.post("/admin/books", data, {
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