<template>
  <div id="app">
    <Header />

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style scoped>
#app {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

main {
  width: 70%;
  margin-top: 5rem;
}
</style>
