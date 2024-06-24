<script setup>
import { defineProps } from "vue";
const { page, percentage } = defineProps(["page", "percentage"]);
console.log(typeof percentage, percentage);
</script>

<template>
  <header>
    <h1>Questions {{ page }}</h1>
    <div class="container-bar">
      <div class="bar" :style="{ width: percentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 30px;
}

.container-bar {
  width: 100%;
  border: 2px solid black;
  height: 50px;
  border-radius: 8px;
}

.bar {
  width: 0%;
  height: 100%;
  border-radius: 5px;
  background-color: rgb(96, 159, 161);
}
</style>