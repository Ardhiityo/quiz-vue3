<script setup>
import { ref, watch } from "vue";
import quizezJson from "./data/quizes.json";
import card from "./components/card.vue";

const quizes = ref(quizezJson);
const search = ref("");

watch(search, () => {
  return (quizes.value = quizezJson.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.value.toLowerCase())
  ));
});
</script>

<template>
  <div class="container-fluid">
    <main>
      <header>
        <h1>Quiz Vue</h1>
        <input
          type="text"
          v-model.trim="search"
          class="input"
          placeholder="search..."
        />
      </header>

      <card :quizes="quizes"></card>
      
    </main>
  </div>
</template>

<style>
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
</style>