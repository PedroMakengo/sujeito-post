<template>
  <header id="header">
    <div class="container">
      <router-link to="/" class="logo">SujeitoPost</router-link>
      <router-link to="/dashboard" class="button">Dashboard</router-link>
    </div>
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
  height: 80px;
  width: 100%;

  background-color: #202225;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
}

#header .container {
  width: 70%;
  display: flex;
  justify-content: space-between;
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
