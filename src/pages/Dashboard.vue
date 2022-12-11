<template>
  <div id="dashboard">
    <h2>Minha conta</h2>
    <span>Atualize seu perfil</span>

    <form @submit.prevent="atualizarPerfil">
      <label for="">Nome:</label>
      <input type="text" v-model="nome" />
      <button type="submit" class="button">Atualizar Perfil</button>
    </form>
  </div>
</template>

<script>
// import firebase from "@/services/firebaseConnection";
export default {
  name: "DashboardPage",
  data() {
    return {
      nome: "",
    };
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
