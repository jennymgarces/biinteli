import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("../components/productList.vue"),
  },
  {
    path: "/",
    alias: "/products/new",
    name: "products-new",
    component: () => import("../components/productForm.vue"),
  },
  {
    path: "/",
    alias: "/products/:id",
    name: "products-details",
    component: () => import("../components/productDetails.vue"),
  },
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;