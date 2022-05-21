<template>
  <div class="w-96 h-screen bg-bgSecondary text-bgPrimary overflow-auto">
    <div class="flex justify-center items-center h-20 border-b border-bgPrimary mx-4">
      <h1 class="uppercase text-2xl font-extrabold">Library App</h1>
    </div>
    <ul class="w-full mt-10 text-bgPrimary">
      <!-- <li @click="handleDashboard" class="pl-10 py-3 hover:bg-bgPrimary hover:text-bgSecondary">
        Dashboard
      </li> -->
      <li @click="handleBook" class="pl-10 py-3 hover:bg-bgPrimary hover:text-bgSecondary">
        Books
      </li>
      <!-- <li class="pl-10 py-3 hover:bg-bgPrimary hover:text-bgSecondary">
        Members
      </li>
      <li class="pl-10 py-3 hover:bg-bgPrimary hover:text-bgSecondary">
        Status
      </li> -->
      <li @click="handleLogout" class="pl-10 py-3 hover:bg-bgPrimary hover:text-bgSecondary">
        Logout
      </li>
      
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'
export default {
  name:"sideBar",
  methods: {
    ...mapActions(useUserStore, ["removeUserData"]),
    handleDashboard(){
      this.$router.push({name: "dashboardPage"})
    },
    handleBook(){
      this.$router.push({name: "booksPage"})
    },
    handleLogout(){
      this.removeUserData()
      this.$router.push({name: "loginPage"})
    }
  }
}
</script>

<style>

</style>