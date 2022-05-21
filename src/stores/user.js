import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      access_token: "",
      user: {},
    };
  },
  actions: {
    setUserData(data) {
      this.access_token = data.access_token;
      this.user = data.user;
      localStorage.setItem("access_token", this.access_token);
      localStorage.setItem("username", this.user.name);
      localStorage.setItem("email", this.user.email);
      localStorage.setItem("role", this.user.role);
    },
    getLocalStorage() {
      this.access_token = localStorage.getItem("access_token");
      this.user.username = localStorage.getItem("username");
      this.user.email = localStorage.getItem("email");
      this.user.role = localStorage.getItem("role");
    },
    removeUserData() {
      this.access_token = "";
      this.user = {};
      localStorage.clear();
    },
  },
});
