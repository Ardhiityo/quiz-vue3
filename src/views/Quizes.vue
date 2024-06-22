<script setup>
import { ref, watch } from "vue";
import quizezJson from "../data/quizes.json";
import card from "../components/card.vue";

const quizes = ref(quizezJson);
const search = ref("");

watch(search, () => {
  return (quizes.value = quizezJson.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.value.toLowerCase())
  ));
});
</script>

<template>
  <div>
    <header>
      <h1>Quiz Vue</h1>
      <input
        type="text"
        v-model.trim="search"
        class="input"
        placeholder="search..."
      />
    </header>
    <div class="content-card">
      <card v-for="quiz in quizes" :key="quiz.id" :quizes="quiz"></card>
    </div>
  </div>
</template>

<style>
header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
}

header input {
  padding: 8px;
  background-color: rgba(115, 188, 191, 0.523);
  border: none;
  border-radius: 5px;
}

.content-card {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  margin: 40px 0;
  width: 100%;
}
</style>