<script setup>
import { ref, watch, computed } from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";

import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";

const route = useRoute();
const getQuestions = quizes.find((q) => q.id === parseInt(route.params.id));
const index = ref(0);

// const page = ref(`${index.value + 1}/${getQuestions.questions.length}`);
// watch(index, () => {
//   return (page.value = `${index.value + 1}/${getQuestions.questions.length}`);
// });

// Watch digunakan untuk fetch data API / data yg berasal dari luar state
const page = computed(() => {
  return `${index.value + 1}/${getQuestions.questions.length}`;
});
</script>

<template>
  <QuizHeader :page="page" />
  <QuizContent :question="getQuestions.questions[index]" />
  <div class="next">
    <button
      @click="index++"
      :disabled="index === getQuestions.questions.length - 1"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.next {
  width: 100%;
  text-align: end;
}
</style>
