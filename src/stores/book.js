import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore", {
  state: () => {
    return {
      books: [],
      totalBook: 0,
      categories: [],
      book: {},
      page: 1,
    };
  },
});
