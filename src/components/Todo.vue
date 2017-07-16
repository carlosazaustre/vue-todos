<template>
  <div class="todo-item" :class="{ completed: todo.done }">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <button class="btn btn-done" :class="{ completed: todo.done }" @click="toggleTodo({ todo })">
      ✔︎ Hecho!
    </button>
    <button class="btn btn-remove" :class="{ completed: todo.done }" @click="deleteTodo({ id: todo.id })">
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
      description: String,
      done: Boolean
    }
  },

  methods: {
    ...mapMutations([
      'deleteTodo',
      'toggleTodo'
    ])
  }
}
</script>

<style>
.todo-item {
  border: 1px solid #eaeaea;
  width: 500px;
  margin: 0 auto;
}
.btn {
  border: none;
  background-color: gray;
  border-radius: 3px;
  padding: 0.5rem;
}
.btn-remove {
  background-color: orangered;
  color: #fff;
}
.btn-done {
  background-color: #1f913b;
  color: #fff;
}
.completed {
  background-color: #777;
  border-color: #5b5b5b;
  color: #ccc;
}
</style>
