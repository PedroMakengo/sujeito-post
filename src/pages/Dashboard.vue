<template>
  <Header />
  <div id="dashboard">
    <h2>Minha conta</h2>
    <span>Atualize seu perfil</span>

    <form @submit.prevent="updateProfile">
      <label for="">Nome:</label>
      <input type="text" v-model="nome" :placeholder="user.nome" />
      <button type="submit" class="button">Atualizar Perfil</button>
    </form>
  </div>
</template>

<script>
import firebase from "@/services/firebaseConnection";

import Header from "@/components/Header";
export default {
  name: "DashboardPage",
  components: { Header },
  data() {
    return {
      nome: "",
      user: {},
    };
  },

  async created() {
    const user = await localStorage.getItem("devpost");
    this.user = JSON.parse(user);
  },

  methods: {
    async updateProfile() {
      if (this.nome === "") {
        return;
      }

      await firebase.firestore().collection("users").doc(this.user.uid).update({
        nome: this.nome,
      });

      // Atualizando todos os posts
      const postDocs = await firebase
        .firestore()
        .collection("posts")
        .where("userId", "==", this.user.uid)
        .get();

      // Percorrer todos os posts para mudar o nome
      postDocs.forEach(async doc => {
        await firebase.firestore().collection("posts").doc(doc.id).update({
          autor: this.nome,
        });
      });

      // Atualizar o nosso localStorage
      localStorage.setItem(
        "devpost",
        JSON.stringify({ uid: this.user.uid, nome: this.nome })
      );
      alert("Perfil atualizado com sucesso!");
    },
  },
};
</script>

<style scoped>
#dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 60px auto;
  padding: 15px 20px;
  max-width: 400px;
  widows: 600px;

  background: #4c5059;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2,
span {
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form label {
  font-size: 18px;
  color: #fff;
  padding-bottom: 5px;
}

form input {
  height: 30px;
  padding: 5px;
  outline: none;
  border: 0;
  margin-bottom: 5px;
  background: #fafafa;
}

button {
  cursor: pointer;
  margin-top: 15px;
  height: 45px;
  border: 0;
  color: #fff;
  background: #7289da;
}
</style>
