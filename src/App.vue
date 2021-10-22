<template>
  <navBar />

  <main class="container py-5">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import navBar from "./components/navBar.vue";



export default defineComponent({
  name: 'App',
  components: {
    navBar,
  }
});
</script>

<style>

</style>
