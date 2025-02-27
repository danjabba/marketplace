// src/stores/auth.js o auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    setUser(user, token) {
      this.user = user;
      this.token = token;
      localStorage.setItem("token", token); 
    },
    loadToken() {
      this.token = localStorage.getItem("token");
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
