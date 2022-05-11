<template>
  <div class="w-screen h-screen flex justify-center items-center bg-bgPrimary text-bgSecondary">
    <router-view />
  </div>
</template>

<script>
import LoginCard from '../components/LoginCard.vue'
import RegisterCard from '../components/RegisterCard.vue'
export default {
  name: "AuthPage",
  components: { 
    LoginCard,
    RegisterCard
  },
  created(){
    this.$router.push({name: "loginPage"})
  }
}
</script>

<style>

</style>