<template>
  <div class="col-md-4 offset-4">
    <div class="card card-body">
      <h1 class="card-title my-3 text-center">Crear Producto</h1>
      <form @submit.prevent="saveProduct()">
        <input class="form-control mb-3"
          v-model="product.name"
          type="text"
          placeholder="Escribir el nombre"
        />
        <input class="form-control mb-3"
          v-model="product.color"
          type="text"
          placeholder="Escribir el color"
        />
        <input class="form-control mb-3"
          v-model="product.size"
          type="text"
          placeholder="Escribir el tamaño"
        />
        <input class="form-control mb-3"
          v-model="product.price"
          type="text"
          placeholder="Escribir el precio"
        />
        <input class="form-control mb-3"
          v-model="product.provider"
          type="text"
          placeholder="Escribir el proveedor"
        />
        <button class="btn btn-primary w-100">Guardar</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, createApp } from "vue";
import { Product } from "../interfaces/Product";
import { createProduct } from "../services/productServices";

export default defineComponent({
  data() {
    return {
      product: {} as Product,
    };
  },
  methods: {
    async saveProduct() {
      try {
        const res = await createProduct(this.product);
        console.log(res);
        this.$router.push({ name: "products" });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
