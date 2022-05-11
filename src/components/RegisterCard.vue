<template>
  <div class="w-96 p-8 bg-white border border-primary rounded-3xl shadow-2xl">
    <div class="border-b border-secondary pb-6">
      <h1 class="capitalize flex justify-center text-4xl font-bold">welcome</h1>
      <h3 class="capitalize flex justify-center text-xl">library app</h3>
    </div>
    <div>
      <h3 class="flex justify-center mb-6 mt-2">Sign Up Please</h3>
      <form action="" class="flex flex-col gap-2">
        <div>
          <label for="username" class="capitalize font-semibold mx-2">username</label>
          <input id="username" type="text" class="w-full py-2 px-4 mt-1 border border-secondary rounded-xl outline-primary focus:border-none">
        </div>
        <div>
          <label for="email" class="capitalize font-semibold mx-2">email</label>
          <input id="email" type="email" class="w-full py-2 px-4 mt-1 border border-secondary rounded-xl outline-primary focus:border-none">
        </div>
        <div>
          <label for="password" class="capitalize font-semibold mx-2">password</label>
          <input id="password" type="text" class="w-full py-2 px-4 mt-1 border border-secondary rounded-xl outline-primary">
        </div>
        <div class="border-t border-secondary mt-6 pt-3">
          <button class="w-full border border-secondary rounded-md py-2 mb-1 hover:bg-secondary hover:text-white capitalize">submit</button>
          <h3 class="normal-case">already have an account ? <a href="" @click.prevent="$router.push({name: 'loginPage'})" class="normal-case text-primary underline font-semibold">sign in</a></h3>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "LoginCard"
}
</script>

<style>

</style>