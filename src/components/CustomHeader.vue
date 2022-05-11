<template>
  <header class="py-3 shadow-lg flex flex-row-reverse">
    <container>
      <img 
        src="https://source.unsplash.com/300x300?user" 
        alt="user name"
        class="w-14 rounded-full"
      >
    </container>
  </header>
</template>

<script>
import Container from './customComponents/Container.vue'
export default {
  components: { Container },
  name: "CustomHeader",
}
</script>

<style>

</style>