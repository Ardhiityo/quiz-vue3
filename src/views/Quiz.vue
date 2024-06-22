<script setup>
import { ref } from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";

import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";

const route = useRoute();
const getQuestions = quizes.find((q) => q.id === parseInt(route.params.id));
const index = ref(0);
</script>

<template>
  <QuizHeader />
  <QuizContent :question="getQuestions.questions[index]" />
</template>
