<script setup>
import { ref } from "vue";
import quizezJson from "./data/quizes.json";

const quizes = ref(quizezJson);
</script>

<template>
  <div class="container-fluid">
    <main>
      <header>
        <h1>Quiz Vue</h1>
        <input type="text" class="input" placeholder="search..." />
      </header>

      <div class="content-card">
        <div class="card" v-for="quiz in quizes" :key="quiz.id">
          <img :src="quiz.img" :alt="quiz.title" />
          <div class="card-footer">
            <h1>{{ quiz.title }}</h1>
            <p>{{ quiz.questions.length }} Questions</p>
          </div>
        </div>
      </div>
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

.content-card {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  margin: 40px 0;
  width: 100%;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.197);
  border-radius: 8px;
  width: 290px;
}

.card img {
  width: 100%;
  height: 200px;
  border-radius: 8px 0 0 0;
  object-fit: cover;
}

.card-footer {
  padding: 0 10px;
}
</style>