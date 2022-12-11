<template>
  <header id="header">
    <div class="container">
      <router-link to="/" class="logo">Dev Posts</router-link>
      <nav>
        <router-link to="/dashboard" class="button">Dashboard</router-link>

        <button class="button logout" @click="logOut">Sair</button>
      </nav>
    </div>
  </header>
</template>

<script>
import firebase from "@/services/firebaseConnection";
export default {
  name: "HeaderComponent",
  methods: {
    async logOut() {
      const confirm = window.confirm("Você realmente deseja sair?");

      if (confirm) {
        await firebase
          .auth()
          .signOut()
          .then(async () => {
            await localStorage.removeItem("devpost");

            this.$router.push("/login");
          });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 100%;

  background-color: #202225;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;
}

#header .container {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header nav {
  height: 100%;

  display: flex;
  align-items: center;
}

#header nav button {
  cursor: pointer;
}

#header a {
  text-decoration: none;
}

#header a.logo {
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

#header a.button {
  cursor: pointer;
  border: 0;
  color: #fff;
  background: transparent;
  padding: 5px 15px;

  outline: none;
}
</style>
