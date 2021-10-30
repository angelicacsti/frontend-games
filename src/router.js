import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "./components/Home.vue";
import CreateHome from "./components/CreateHome.vue";
import UpdateHome from "./components/UpdateHome.vue";
import Products from "./components/Products.vue";
import CreateProduct from "./components/CreateProduct.vue";
import UpdateProduct from "./components/UpdateProduct.vue";
import DeleteProduct from "./components/DeleteProduct.vue";
import Ventas from "./components/Ventas.vue";
import Clients from "./components/Clients.vue";
import CreateClient from "./components/CreateClient.vue";
import UpdateClient from "./components/UpdateClient.vue";
import DeleteClient from "./components/DeleteClient.vue";
import Facturacion from "./components/Facturacion.vue";
import Account from "./components/Account";

const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/home/create",
    name: "CreateHome",
    component: CreateHome,
  },
  {
    path: "/home/update",
    name: "UpdateHome",
    component: UpdateHome,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/create",
    name: "CreateProduct",
    component: CreateProduct,
  },
  {
    path: "/products/update",
    name: "UpdateProduct",
    component: UpdateProduct,
  },
  {
    path: "/products/delete",
    name: "DeleteProduct",
    component: DeleteProduct,
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: Ventas,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/clients/create",
    name: "CreateClient",
    component: CreateClient,
  },
  {
    path: "/clients/update",
    name: "UpdateClient",
    component: UpdateClient,
  },
  {
    path: "/clients/delete",
    name: "DeleteClient",
    component: DeleteClient,
  },
  {
    path: "/facturacion",
    name: "Facturacion",
    component: Facturacion,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
