<template>
  <div id="login">
    <div v-if="login" class="loginArea">
      <h1>Entrar</h1>
      <form @submit.prevent="handleLogin">
        <input type="text" placeholder="email@gmail.com" />
        <input type="password" placeholder="Sua senha..." id="" />
        <button>Acessar</button>
      </form>
      <a @click="toggleBtn">Criar uma conta</a>
    </div>
    <div v-else class="loginArea">
      <h1>Cadastrar</h1>
      <form @submit.prevent="handleRegister">
        <input type="text" placeholder="Nome" v-model="users.nome" />
        <input
          type="text"
          placeholder="email@gmail.com"
          v-model="users.email"
        />
        <input
          type="password"
          placeholder="Sua senha..."
          v-model="users.password"
        />
        <button>Acessar</button>
      </form>
      <a @click="toggleBtn">Já possui uma conta</a>
    </div>
  </div>
</template>

<script>
import firebase from "@/services/firebaseConnection";
export default {
  name: "LoginPage",
  data() {
    return {
      users: {
        nome: "",
        email: "",
        password: "",
      },
      login: true,
    };
  },
  methods: {
    toggleBtn() {
      this.login = !this.login;
      this.users.name = "";
      this.users.email = "";
      this.users.password = "";
    },

    async handleRegister() {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.users.email, this.users.password);

      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          nome: this.users.nome,
        })
        .then(async () => {
          // Enviar no localstore
          const usuarioLogado = {
            uid: user.uid,
            nome: this.nome,
          };
          await localStorage.setItem("devpost", JSON.stringify(usuarioLogado));
        })
        .catch(error => {
          console.log(error);
        });

      // Enviar para a tela do home
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
}

.loginArea {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 65px;

  max-width: 600px;
  background: #4c5059;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
}

input {
  margin-bottom: 10px;
  height: 30px;
  width: 300px;
  font-size: 14px;
  padding: 10px;
  outline: none;
  border: 0;
  background: rgb(241, 241, 241);
}

button {
  height: 45px;
  border: 0;
  background-color: #7289da;
  font-size: 16px;

  color: white;
  outline: none;
  cursor: pointer;
}

.loginArea a {
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;

  color: #fff;
}
</style>
