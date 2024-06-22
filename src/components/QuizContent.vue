<template>
  <main>
    <h1 class="quest">What is 1+1</h1>

    <div class="container-option">
      <div class="option">
        <p class="value-abjad">A.</p>
        <p class="value">1</p>
      </div>

      <div class="option">
        <p class="value-abjad">B.</p>
        <p class="value">2</p>
      </div>

      <div class="option">
        <p class="value-abjad">C.</p>
        <p class="value">Aku dan kamu</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

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
  background-color: rgb(96, 159, 161);
  border-radius: 5px 0 0 5px;
}

.value {
  padding: 10px;
  background-color: rgb(110, 178, 180);
  width: 100%;
  border-radius: 0 5px 5px 0;
}
</style>