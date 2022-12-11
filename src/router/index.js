import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Perfil from "@/pages/Perfil";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Perfil",
    path: "/perfil/:userid",
    component: Perfil,
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

export default router;
