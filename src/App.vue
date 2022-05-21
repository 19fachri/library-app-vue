<template>
  <div class="w-full flex">
    <sidebar v-if="access_token" />
    <div class="bg-bgPrimary w-full h-screen overflow-y-auto">
      <custom-header v-if="access_token"/>
      <container>
        <router-view />
      </container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from './stores/user'
import Sidebar from './components/Sidebar.vue'
import Container from './components/customComponents/Container.vue'
import CustomHeader from './components/CustomHeader.vue'
export default {
  components: { 
    Sidebar,
    Container,
    CustomHeader
  },
  computed: {
    ...mapState(useUserStore, ["access_token"])
  },
  methods: {
    ...mapActions(useUserStore, ["getLocalStorage"])
  },
  created(){
    this.getLocalStorage()
  }
}
</script>

<style>

</style>