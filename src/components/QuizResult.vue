<script setup>
import { defineProps } from "vue";
import { RouterLink, useRoute } from "vue-router";
import quizes from "@/data/quizes.json";
const route = useRoute();
const { correct } = defineProps(["correct"]);
const getQuestions = quizes.find((q) => q.id === parseInt(route.params.id));
</script>


<template>
  <main>
    <h1>Score</h1>
    <h1>{{ correct + "/" + getQuestions.questions.length }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </main>
</template>


<style scoped>
main {
text-align: center;  
}
</style>

