import { createRouter, createWebHistory } from "vue-router";

import firebase from "@/services/firebaseConnection";

import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Perfil from "@/pages/Perfil";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Perfil",
    path: "/perfil/:userid",
    component: Perfil,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(item => item.meta.requiresAuth);

  if (requiresAuth && !firebase.auth().currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
