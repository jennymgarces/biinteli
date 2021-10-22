<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="handleUpdate()" class="card card-body">
      <h1 class="card-title my-3 text-center">Update a Product</h1>

      <input
        type="text"
        v-model="currentProduct.name"
        class="form-control mb-3"
      />
      <input
        type="text"
        v-model="currentProduct.color"
        class="form-control mb-3"
      />
      <input
        type="text"
        v-model="currentProduct.size"
        class="form-control mb-3"
      />
      <input
        type="text"
        v-model="currentProduct.price"
        class="form-control mb-3"
      />
      <input
        type="text"
        v-model="currentProduct.provider"
        class="form-control mb-3"
      />

      <button class="btn btn-primary">Update</button>
    </form>

    <button @click="handleDelete()" class="btn btn-danger my-4">delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "@/interfaces/Product";
import { deleteProduct, getProduct, updateProduct } from "@/services/productServices";

export default defineComponent({
  name: "product",
  data() {
    return {
      currentProduct: {} as Product,
    };
  },
  methods: {
    async loadProduct(id: string) {
      try {
        const { data } = await getProduct(id);
        this.currentProduct = data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === "string") {
          await updateProduct(this.$route.params.id, this.currentProduct);
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === "string") {
          deleteProduct(this.$route.params.id);
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadProduct(this.$route.params.id);
      console.log('Hereeeee')
    }
  },
});
</script>