<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <header class=" bg-cyan-700">
      <div class="mx-auto max-w-6xl py-10">
          <h1 class="text-4xl font-extrabold text-white">
              Dashboard Administrador
          </h1>
      </div>
  </header>
  <main class="max-w-6xl mx-auto mt-10">
    <RouterView />
  </main>
</template>
