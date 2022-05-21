<template>
  <div class="flex gap-1 my-2 justify-between">
    <div>
      Page : {{page}}
    </div>
    <div>
      <a href="" 
        v-for="n in maxPage" :key="n"
        @click.prevent="$emit('handlePagination', n)"
        class="bg-primary text-white px-2 py-1 text-xs hover:bg-secondary" 
      >
        {{n}}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useBookStore } from '../../stores/book'
export default {
  name: "Pagination",
  computed: {
    ...mapState(useBookStore, ["totalBook"]),
    ...mapWritableState(useBookStore, ["page"]),
    maxPage(){
      return Math.ceil(this.totalBook / 5)
    }
  }
}
</script>

<style>

</style>