<template>
  <div class="w-screen h-screen flex justify-center items-center bg-bgPrimary">
    <div class="w-96 p-8 bg-bgSecondary text-bgPrimary border border-primary rounded-3xl shadow-2xl">
      <div class="border-b border-bgPrimary pb-6">
        <h1 class="capitalize flex justify-center text-4xl font-bold">welcome</h1>
        <h3 class="capitalize flex justify-center text-xl">library app</h3>
      </div>
      <div>
        <h3 class="flex justify-center mb-6 mt-2">Sign In Please</h3>
        <form action="" @submit.prevent="handleSubmit" class="flex flex-col gap-2">
          <div>
            <label for="email" class="capitalize font-semibold mx-2">email</label>
            <input v-model="email" id="email" type="email" class="w-full py-2 px-4 mt-1 bg-bgPrimary text-bgSecondary border border-bgPrimary rounded-xl outline-none">
          </div>
          <div>
            <label for="password" class="capitalize font-semibold mx-2">password</label>
            <input v-model="password" id="password" type="password" class="w-full py-2 px-4 mt-1 bg-bgPrimary text-bgSecondary border border-bgPrimary rounded-xl outline-none">
          </div>
          <div class="border-t border-bgPrimary mt-6 pt-3">
            <button class="w-full border border-bgPrimary rounded-md py-2 mb-1 hover:bg-bgPrimary hover:text-bgSecondary capitalize font-bold">submit</button>
            <h3 class="normal-case">haven't an account ? <a href="" @click.prevent="$router.push({name: 'registerPage'})" class="normal-case text-primary underline font-semibold">sign up</a></h3>
          </div>
        </form>
      </div>
      <div class="mt-4">
        <h3>Or login with your <a class="bg-bgPrimary text-bgSecondary px-2 py-1 rounded-md" href="#" @click.prevent="handleClickSignIn">google</a>  account</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/user';
import { mapActions } from 'pinia';

export default {
  name: "LoginCard",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(useUserStore, ["setUserData"]),
    async handleSubmit(){
      try {
        const data = {
          email: this.email,
          password: this.password
        }
        const response = await axios.post("/admin/login", data)
        this.setUserData(response.data);
        this.$router.push({name: "dashboardPage"})
      } catch (error) {
        this.$toast.error(error.response.data.message, {position: "top"})
      }
    },
    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn()
        const {id_token} = googleUser.getAuthResponse()
        const response = await axios.post("/admin/google-login", {id_token})
        this.setUserData(response.data);
        this.$router.push({name: "dashboardPage"})
      } catch (error) {
        console.error(error);
      }
    },

  }
}
</script>

<style>

</style>