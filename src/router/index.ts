import { RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("../components/productList.vue"),
  },
  {
    path: "/products/new",
    name: "products-new",
    component: () => import("../components/productForm.vue"),
  },
  {
    path: "/products/:id",
    name: "products-details",
    component: () => import("../components/productDetails.vue"),
  },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;
