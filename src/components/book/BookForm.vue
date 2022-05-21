<template>
  <div>
    <form @submit.prevent="handleSubmit" action="">
      <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Title</label>
        <input v-model="input.title" type="text" class="px-2 py-2 outline-none border border-bgSecondary rounded-md">
      </div>
      <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Description</label>
        <textarea v-model="input.description" rows="5" class="px-2 py-2 outline-none border border-bgSecondary rounded-md"></textarea>
      </div>
      <!-- <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Image</label>
        <file-input v-model="YourModel" class="px-2 py-2 outline-none border border-bgSecondary rounded-md" />
        <input  type="file" class="px-2 py-2 outline-none border border-bgSecondary rounded-md">
      </div> -->
      <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Image Url</label>
        <input v-model="input.imageUrl" type="text" class="px-2 py-2 outline-none border border-bgSecondary rounded-md">
      </div>
      <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Author</label>
        <input v-model="input.author" type="text" class="px-2 py-2 outline-none border border-bgSecondary rounded-md">
      </div>
      <div class="flex flex-col max-w-lg gap-1 mb-2 text-secondary ">
        <label for="" class="pl-2 font-semibold text-lg">Category</label>
        <select v-model="input.CategoryId" name="" id="" class="px-2 py-2 outline-none border border-bgSecondary rounded-md">
          <option v-for="item in categories" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <!-- <image-upload /> -->
      <div class="flex gap-2 my-4">
        <button class="py-2 px-4 rounded-md bg-primary text-white hover:bg-secondary">Submit</button>
        <button @click="handleCancel" type="button" class="py-2 px-4 rounded-md bg-bgSecondary text-white">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useBookStore } from '../../stores/book'
import axios from 'axios'
import imageUpload from '../imageUpload.vue'
// import FileInput from 'vue3-simple-file-input'
export default {
  components: { imageUpload}, 
  props: ["input"],
  computed: {
    ...mapWritableState(useBookStore, ["categories"]),
  },
  methods: {
    handleSubmit(){
      this.$emit("onSubmit", this.input)
    },
    handleCancel(){
      this.$router.push({name: "booksPage"})
    },
    async getCategories(){
      try {
        const response = await axios.get("/admin/categories")
        this.categories = response.data.categories
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
    this.getCategories()
  }
}
</script>

<style>

</style>