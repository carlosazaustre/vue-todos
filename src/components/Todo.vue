<template>
  <div class="todo-item">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <button class="btn-remove" @click="deleteTodo({ id: todo.id })">
      ♻︎ Eliminar
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Todo',
  props: {
    todo: {
      id: Number,
      title: String,
      description: String
    }
  },

  methods: {
    ...mapMutations([ 'deleteTodo' ])
  }
}
</script>

<style>
.todo-item {
  border: 1px solid #eaeaea;
  width: 500px;
  margin: 0 auto;
}
.btn-remove {
  border: none;
  background-color: orangered;
  border-radius: 3px;
  padding: 0.5rem;
  color: #fff;
}
</style>
