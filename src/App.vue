<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <div class="container-fluid">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
  display: flex;
  justify-content: center;
}

main {
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
}
</style>