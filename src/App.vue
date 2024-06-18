<script setup>
</script>

<template>
  <main>
    <header>
      <h1>Quiz Vue</h1>
      <input type="text" class="input" placeholder="search...">      
    </header>
  </main>
</template>

<style>
main {
  max-width: 900px;
  display: flex;
  justify-content: center;
  margin: 25px;
}

header {
  display: flex;
  align-items: center;
  gap: 20px;
}

header input {
  padding: 8px;
  background-color: rgba(115, 188, 191, 0.523);
  border: none;
  border-radius: 5px;
}
</style>