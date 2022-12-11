<template>
  <div class="modal">
    <div class="container">
      <a @click="$emit('close')" class="close">Voltar</a>

      <div class="content__post">
        <h2>{{ post.autor }}</h2>
        <span v-if="post.likes === 0 ? false : true"
          >{{
            post.likes <= 1 ? `${post.likes} Curtida` : `${post.likes} Curtidas`
          }}
        </span>

        <p>{{ post.content }}o</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: ["post"],
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal .container {
  position: fixed;
  max-width: 600px;
  height: auto;

  right: 0;
  left: 0;

  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  overflow: auto;
}

.modal .close {
  cursor: pointer;
  background: #121212;
  padding: 4px 15px;

  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
}

.modal .content__post {
  margin-top: 5rem;
  padding-inline: 10px;
}

span {
  font-style: italic;
  font-weight: bold;
  color: #121212;
}

p {
  white-space: pre-wrap;
}
</style>
