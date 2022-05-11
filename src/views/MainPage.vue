<template>
  <div class="w-full flex">
    <sidebar />
    <div class="bg-bgPrimary w-full h-screen overflow-y-auto">
      <custom-header />
      <container>
        <div class="flex justify-between mt-10 mb-16">
          <div>
            Book Page
          </div>
          <div>
            Home > Book Page
          </div>
        </div>
      </container>
      <container>
        <div class="shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="border-y-2 h-16">
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
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
              <tr class="border-b h-16">
                <td class="pl-6">1</td>
                <td class="pl-6">Title</td>
                <td class="pl-6">Image Url</td>
                <td class="pl-6">Author</td>
                <td class="pl-6">Category</td>
                <td class="pl-6">Release date</td>
                <td class="pl-6">Action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
import Container from '../components/customComponents/Container.vue'
import CustomHeader from '../components/CustomHeader.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: "MainPage",
  components: { 
    Sidebar, 
    CustomHeader,
    Container 
  },
}
</script>

<style>

</style>