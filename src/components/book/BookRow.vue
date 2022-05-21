<template>
  <tr class="border-b h-16">
    <td class="pl-6">1</td>
    <td class="pl-6">{{item.title}}</td>
    <td class="pl-6">
      <img :src="item.imageUrl" :alt="item.title" class="w-20">
    </td>
    <td class="pl-6">{{item.author}}</td>
    <td class="pl-6">{{item.Category.name}}</td>
    <td class="pl-6">{{releaseDate}}</td>
    <td class="pl-6 flex gap-2 items-center h-16 text-white">
      <button @click="handleUpdate" class="px-4 py-1 bg-bgSecondary rounded-md">Update</button>
      <button @click="handleDelete" class="px-4 py-1 bg-bgSecondary rounded-md">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    releaseDate(){
      return new Date(this.item.createdAt).toISOString().slice(0, 10);
    }
  },
  methods: {
    handleUpdate(){
      this.$emit("onUpdate", this.item.id)
    },
    handleDelete(){
      this.$emit("onDelete", this.item.id)
    }
  }
}
</script>

<style>

</style>