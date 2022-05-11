<template>
  <auth-page v-if="!access_token"/>
  <div>
    
  </div>
</template>

<script>
import AuthPage from './views/AuthPage.vue'
export default {
  components: { 
    AuthPage
  },
  created(){
    const access_token = localStorage.getItem("access_token")
  }
}
</script>

<style>

</style>