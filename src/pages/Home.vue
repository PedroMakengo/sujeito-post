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
      <button @click="createPost">Compartilhar</button>
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
import firebase from "@/services/firebaseConnection";

export default {
  name: "HomePage",
  data() {
    return {
      mensagem: "",
      user: {},
    };
  },
  async created() {
    const user = await localStorage.getItem("devpost");
    this.user = JSON.parse(user);
  },
  methods: {
    async createPost() {
      if (this.mensagem === "") {
        return;
      }
      await firebase
        .firestore()
        .collection("posts")
        .add({
          created: new Date(),
          content: this.mensagem,
          autor: this.user.nome,
          userId: this.user.uid,
          likes: 0,
        })
        .then(() => {
          this.mensagem = "";
          console.log("Post criado com sucesso!");
        })
        .catch(error => {
          console.log("Error ao criar o post:" + error);
        });
    },
  },
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
