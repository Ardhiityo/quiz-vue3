<script setup>
</script>

<template>
  <div class="container-fluid">
    <main>
      <header>
        <h1>Quiz Vue</h1>
        <input type="text" class="input" placeholder="search..." />
      </header>

      <div class="content-card">
        
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div class="card-footer">
            <h1>Programming</h1>
            <p>2 Question</p>
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