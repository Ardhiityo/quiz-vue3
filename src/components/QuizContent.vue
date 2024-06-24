<script setup>
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

function emmitSelectOption(option) {
  emit('selectOption', option);
}
</script>

<template>
 
    <h1 class="quest">{{ question.text }}</h1>

    <div class="container-option">
      <div
        class="option"
        v-for="item in question.answers"
        :key="item.id"
        @click="emmitSelectOption(item)"
      >
        <p class="value-abjad">{{ item.label }}</p>
        <p class="value">{{ item.text }}</p>
      </div>
    </div>

</template>

<style scoped>
.container-option {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.option {
  display: flex;
  align-items: center;
}

.value-abjad {
  padding: 10px;
  background-color: rgb(110, 179, 182);
  border-radius: 5px 0 0 5px;
}

.value {
  padding: 10px;
  background-color: rgb(126, 203, 205);
  width: 100%;
  border-radius: 0 5px 5px 0;
}
</style>