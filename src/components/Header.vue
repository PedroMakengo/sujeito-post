<template>
  <header id="header">
    <router-link to="/" class="logo">SujeitoPost</router-link>
    <router-link to="/dashboard" class="button">Dashboard</router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 100%;

  background-color: #202225;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
