<script setup>
const { quizes } = defineProps(["quizes"]);
import { useRouter } from "vue-router";

const router = useRouter();
function goToQuiz() {
  router.push({ name: "quiz", params: { id: quizes.id } });
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <img :src="quizes.img" :alt="quizes.title" />
    <div class="card-footer">
      <h1>{{ quizes.title }}</h1>
      <p>{{ quizes.questions.length}} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.197);
  border-radius: 8px;
  width: 290px;
}

.card img {
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
}

.card-footer {
  padding: 0 10px;
}
</style>