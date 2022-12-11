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

    <div class="postarea loading" v-if="loading">
      <img src="@/assets/loading.gif" />
      <h2>Buscando posts</h2>
    </div>

    <div class="postarea" v-else>
      <article class="post" v-for="(post, index) in posts" :key="index">
        <h1>{{ post.autor }}</h1>
        <p>{{ post.content || postLength(post.content) }}</p>

        <div class="action-post">
          <button>
            {{ post.likes === 0 ? "Curtir" : post.likes + " Curtidas" }}
          </button>
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
      loading: true,
      posts: [],
    };
  },
  async created() {
    const user = await localStorage.getItem("devpost");
    this.user = JSON.parse(user);

    // Buscar os meus posts
    await firebase
      .firestore()
      .collection("posts")
      .onSnapshot(doc => {
        this.posts = [];

        doc.forEach(item => {
          this.posts.push({
            id: item.id,
            autor: item.data().autor,
            content: item.data().content,
            likes: item.data().likes,
            created: item.data().created,
            userId: item.data().userId,
          });
        });

        this.loading = false;
      });
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
  filters: {
    postLength(valor) {
      if (valor.length < 200) {
        return valor;
      }
      return `${valor.substring(0, 200)}...`;
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

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 100%;
}

.loading img {
  width: 10%;
}

@import "@/assets/home.css";
</style>
