<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav id="header">
      <h1>Sujeito Programador</h1>
      <ul>
        <li>
          <router-link to="/" active-class="ativo" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/produto" active-class="ativo">Produto</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style>
header {
  background: red;
  height: 10vh;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
}

header nav ul {
  display: flex;
  gap: 2rem;

  list-style: none;
}

header nav ul a {
  font-size: 1rem;
  text-decoration: none;
  color: white;
}

header nav ul .ativo {
  border-top: 1px solid white;
}
</style>
