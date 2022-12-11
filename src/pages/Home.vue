<template>
  <div id="home">
    <div class="newpost">
      <h2>Bem-vindo de volta!</h2>
      <span>Compartilhe o seu dia</span>
      <textarea
        name=""
        placeholder="O que está fazendo hoje?"
        rows="8"
        v-model="mensagem"
      ></textarea>
      <button>Compartilhar</button>
    </div>
    <div class="postarea">
      <article>
        <h1>Mateus</h1>
        <p>Olá este é meu primeiro post aqui na plataforma sujeitoPost :)</p>

        <div class="action-post">
          <button>20 curtidas</button>
          <button>Veja post completo</button>
        </div>
      </article>

      <article>
        <h1>Mateus</h1>
        <p>Olá este é meu primeiro post aqui na plataforma sujeitoPost :)</p>

        <div class="action-post">
          <button>20 curtidas</button>
          <button>Veja post completo</button>
        </div>
      </article>

      <article>
        <h1>Mateus</h1>
        <p>Olá este é meu primeiro post aqui na plataforma sujeitoPost :)</p>

        <div class="action-post">
          <button>20 curtidas</button>
          <button>Veja post completo</button>
        </div>
      </article>

      <article>
        <h1>Mateus</h1>
        <p>Olá este é meu primeiro post aqui na plataforma sujeitoPost :)</p>

        <div class="action-post">
          <button>20 curtidas</button>
          <button>Veja post completo</button>
        </div>
      </article>

      <article>
        <h1>Mateus</h1>
        <p>Olá este é meu primeiro post aqui na plataforma sujeitoPost :)</p>

        <div class="action-post">
          <button>20 curtidas</button>
          <button>Veja post completo</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  margin: 25px;
}

@import "@/assets/home.css";
</style>
