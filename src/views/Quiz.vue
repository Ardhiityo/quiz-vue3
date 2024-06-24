<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import QuizResult from "@/components/QuizResult.vue";

import quizes from "@/data/quizes.json";

const getQuestions = quizes.find((q) => q.id === parseInt(route.params.id));
const index = ref(0);
const correct = ref(0);

const page = computed(() => {
  return `${index.value + 1}/${getQuestions.questions.length}`;
});

const percentage = computed(() => {
  return (
    (`${index.value + 1}` / `${getQuestions.questions.length}`) * 100 + "%"
  );
});

const statusQuiz = ref(false);

function selectOption(option) {
  if (option.correct) {
    correct.value++;
  }
  if (index.value === getQuestions.questions.length - 1) {
    return (statusQuiz.value = true);
  }
  index.value++;
}
</script>

<template>
  <QuizHeader :page="page" :percentage="percentage" />

  <main v-if="!statusQuiz">
    <QuizContent
      :question="getQuestions.questions[index]"
      @selectOption="selectOption"
    />
    <div class="next">
      <button
        @click="index++"
        :disabled="index === getQuestions.questions.length - 1"
      >
        Next
      </button>
    </div>
  </main>

  <div v-else>
    <QuizResult :correct="correct" />
  </div>
</template>

<style scoped>
.next {
  width: 100%;
  text-align: end;
}

main {
  width: 100%;
}
</style>
