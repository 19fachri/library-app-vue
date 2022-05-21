<template>
  <div class="shadow-lg mb-10">
    <book-pagination @handlePagination="getBooks" />
    <table class="w-full text-primary">
      <thead>
        <tr class="border-y-2 h-16 text-lg font-bold">
          <th>No</th>
          <th>Title</th>
          <th>Image Url</th>
          <th>Author</th>
          <th>Category</th>
          <th>Relase Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <book-row v-for="book in books" :key="book.id" :item="book" @onUpdate="handleUpdate" @onDelete="handleDelete" />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import BookRow from "./BookRow.vue"
import { mapState, mapWritableState } from 'pinia'
import { useUserStore } from '../../stores/user'
import { useBookStore } from '../../stores/book'
import BookPagination from './BookPagination.vue'

export default {
  components: {
    BookRow,
    BookPagination
},
  computed: {
    ...mapState(useUserStore, ["access_token"]),
    ...mapWritableState(useBookStore, ["book", "books", "totalBook", "page"])
  },
  methods: {
    async getBooks(currentPage){
      try {
        console.log("currentPage");
        if(currentPage){
          this.page = currentPage
        }
        const config = {
          headers: {
            "access_token": this.access_token
          }
        }
        const url = `/admin/books?page=${this.page}`
        const response = await axios.get(url, config)
        this.books = response.data.books
        this.totalBook = response.data.totalData
      } catch (error) {
        console.log(error);
      }
    },
    async handleUpdate(id){
      try {
        const response = await axios.get("/admin/books/" + id, {
          headers: {"access_token": this.access_token}
        })
        this.book = response.data.book
        this.$router.push({name:"updateBookPage"})
      } catch (error) {
        console.log(error);
      }
    },
    async handleDelete(id){
      try {
        await axios.delete("admin/books/" + id, {
          headers: {"access_token": this.access_token}
        })
        this.getBooks()
      } catch (error) {
        console.log(error);
      }
    }
  },
  created(){
    this.getBooks()
  }
}
</script>

<style>

</style>