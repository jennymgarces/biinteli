<template>
  <div class="col-md-8 offset-md-2 text-center">
    <h5 class="text-justify">Listado de Productos</h5>
    <table class="table table-hover" style="cursor: pointer">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Color</th>
          <th scope="col">Tamaño</th>
          <th scope="col">precio</th>
          <th scope="col">Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
          @click="this.$router.push(`/products/${product._id}`)"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.size }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.provider }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-md-8 offset-md-2 text-center">
    <h5 class="text-justify">Listado de Proveedores</h5>
    <table class="table table-hover" style="cursor: pointer">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(provider, index) in providers"
          :key="index"
        >
          <td>{{ provider.name }}</td>
          <td>{{ provider.address }}</td>
          <td>{{ provider.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Provider } from "@/interfaces/Provider";
import { Product } from "@/interfaces/Product";
import { getProducts } from "@/services/productServices";
import { getProviders } from "@/services/providerServices";

import { defineComponent } from "vue";

export default defineComponent({
  name: "products-list",
  data() {
    return {
      products: [] as Product[],
      providers: [] as Provider[],
    };
  },
  methods: {
    async loadProducts() {
      try {
        const res = await getProducts();
        this.products = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async loadProviders() {
      try {
        const res = await getProviders();
        this.providers = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.loadProducts();
    this.loadProviders();
  },
});
</script>