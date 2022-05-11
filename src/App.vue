<template>
  <auth-page v-if="access_token"/>
  <main-page v-if="!access_token"/>
</template>

<script>
import AuthPage from './views/AuthPage.vue'
import MainPage from './views/MainPage.vue'
export default {
  components: { 
    AuthPage,
    MainPage
  },
  created(){
    const access_token = localStorage.getItem("access_token")
  }
}
</script>

<style>

</style>