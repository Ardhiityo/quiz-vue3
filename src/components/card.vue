<script setup>
const { quizes } = defineProps(["quizes"]);
</script>

<template>
  <div class="content-card">
    <div class="card" v-for="item in quizes" :key="item.id">
      <img :src="item.img" :alt="item.title" />
      <div class="card-footer">
        <h1>{{ item.title }}</h1>
        <p>{{ item.questions.length }} Questions</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border-radius: 8px 8px 0 0;
  object-fit: cover;
}

.card-footer {
  padding: 0 10px;
}
</style>