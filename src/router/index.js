import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboardPage",
      redirect: (to) => {
        return { name: "booksPage" };
      },
      component: () => import("../views/DashboardPage.vue"),
    },
    {
      path: "/books",
      name: "booksPage",
      component: () => import("../views/BookPage.vue"),
    },
    {
      path: "/addBooks",
      name: "addNewBookPage",
      component: () => import("../views/BookAddPage.vue"),
    },
    {
      path: "/updateBooks",
      name: "updateBookPage",
      component: () => import("../views/BookUpdatePage.vue"),
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/register",
      name: "registerPage",
      component: () => import("../views/RegisterPage.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuthRoute = to.name == "loginPage" || to.name == "registerPage";
  const isAccessTokenExist = localStorage.getItem("access_token");
  if (!isAuthRoute && !isAccessTokenExist) return { name: "loginPage" };
  if (isAuthRoute && isAccessTokenExist) return { name: "dashboardPage" };
  return true;
});

export default router;
