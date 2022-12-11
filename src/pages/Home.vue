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
        <router-link :to="`/perfil/${post.userId}`" class="h1">{{
          post.autor
        }}</router-link>
        <p>{{ post.content || postLength(post.content) }}</p>

        <div class="action-post">
          <button @click="likePost(post.id, post.likes)">
            {{ post.likes === 0 ? "Curtir" : post.likes + " Curtidas" }}
          </button>
          <button @click="togglePostModal(post)">Veja post completo</button>
        </div>
      </article>
    </div>

    <Modal
      v-if="showPostModal"
      :post="fullPost"
      @close="togglePostModal()"
    ></Modal>
  </div>
</template>

<script>
import firebase from "@/services/firebaseConnection";
import Modal from "@/components/Modal.vue";

export default {
  name: "HomePage",
  components: { Modal },
  data() {
    return {
      mensagem: "",
      user: {},
      loading: true,
      posts: [],

      showPostModal: false,
      fullPost: {},
    };
  },
  async created() {
    const user = await localStorage.getItem("devpost");
    this.user = JSON.parse(user);

    // Buscar os meus posts
    await firebase
      .firestore()
      .collection("posts")
      .orderBy("created", "desc")
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

    async likePost(id, likes) {
      const userId = this.user.uid;
      const docId = `${userId}_${id}`;

      // Checando se o post já foi curtido
      const doc = await firebase
        .firestore()
        .collection("likes")
        .doc(docId)
        .get();

      if (doc.exists) {
        await firebase
          .firestore()
          .collection("posts")
          .doc(id)
          .update({
            likes: likes - 1,
          });

        await firebase.firestore().collection("likes").doc(docId).delete();
        return;
      }

      await firebase.firestore().collection("likes").doc(docId).set({
        postId: id,
        userId: userId,
      });

      // Criar o like
      await firebase
        .firestore()
        .collection("posts")
        .doc(id)
        .update({
          likes: likes + 1,
        });
    },

    togglePostModal(post) {
      this.showPostModal = !this.showPostModal;
      this.showPostModal ? (this.fullPost = post) : (this.fullPost = {});
    },
  },
  filters: {
    postLength(valor) {
      if (valor.length < 200) return valor;
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

@import "@/assets/home.css";
</style>
