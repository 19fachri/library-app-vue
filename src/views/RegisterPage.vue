<template>
  <div class="w-screen h-screen flex justify-center items-center bg-bgPrimary">
    <div class="w-96 p-8 bg-bgSecondary text-bgPrimary border border-primary rounded-3xl shadow-2xl">
      <div class="border-b border-bgPrimary pb-6">
        <h1 class="capitalize flex justify-center text-4xl font-bold">welcome</h1>
        <h3 class="capitalize flex justify-center text-xl">library app</h3>
      </div>
      <div>
        <h3 class="flex justify-center mb-6 mt-2">Sign Up Please</h3>
        <form action="" @submit.prevent="handleRegister" class="flex flex-col gap-2">
          <div>
            <label for="username" class="capitalize font-semibold mx-2">username</label>
            <input v-model="username" id="username" type="text" class="w-full py-2 px-4 mt-1 bg-bgPrimary text-bgSecondary rounded-xl outline-none">
          </div>
          <div>
            <label for="email" class="capitalize font-semibold mx-2">email</label>
            <input v-model="email" id="email" type="email" class="w-full py-2 px-4 mt-1 bg-bgPrimary text-bgSecondary rounded-xl outline-none">
          </div>
          <div>
            <label for="password" class="capitalize font-semibold mx-2">password</label>
            <input v-model="password" id="password" type="password" class="w-full py-2 px-4 mt-1 bg-bgPrimary text-bgSecondary rounded-xl outline-none">
          </div>
          <div class="border-t border-bgPrimary mt-6 pt-3">
            <button class="w-full border border-bgPrimary rounded-md py-2 mb-1 hover:bg-bgPrimary hover:text-bgSecondary capitalize">submit</button>
            <h3 class="normal-case">already have an account ? <a href="" @click.prevent="$router.push({name: 'loginPage'})" class="normal-case text-primary underline font-semibold">sign in</a></h3>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'
import axios from 'axios'
export default {
  name: "RegisterCard",
  data(){
    return {
      username: "",
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions(useUserStore, ["setUserData"]),
    async handleRegister(){
      try {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password
        }
        const response = await axios.post("admin/register", data)
        this.setUserData(response.data)
        this.$router.push({name: "dashboardPage"})
      } catch (error) {
        console.log(error);
        this.$toast.error(error.response.data.message, {position: "top"})
      }
    }
  }
}
</script>

<style>

</style>