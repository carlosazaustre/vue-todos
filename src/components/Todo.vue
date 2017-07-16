<template>
  <div class="todo-item" :class="{ completed: todo.done }">
    <h3 @dblclick="editing = true" v-show="!editing">
      {{ todo.title }}
    </h3>
    <p @dblclick="editing = true" v-show="!editing">
      {{ todo.description }}
    </p>
    <form
      v-show="editing"
      @submit.prevent="doneEdit">
      <input
        v-show="editing"
        type="text"
        v-model="todo.title" />
      <br />
      <input
        v-show="editing"
        type="text"
        v-model="todo.description" />
      <br />
      <button class="btn btn-edit">MODIFICAR</button>
    </form>
    <div v-show="!editing">
      <button
        class="btn btn-done"
        :class="{ completed: todo.done }"
        @click="toggleTodo({ todo })">
        ✔︎ Hecho!
      </button>
      <button
        class="btn btn-remove"
        :class="{ completed: todo.done }"
        @click="deleteTodo({ id: todo.id })">
        ♻︎ Eliminar
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],

  data () {
    return {
      editing: false
    }
  },

  methods: {
    ...mapMutations([
      'deleteTodo',
      'toggleTodo'
    ]),

    doneEdit (e) {
      this.editing = false
    }
  }
}
</script>

<style scoped>
.todo-item {
  border: 1px solid #eaeaea;
  width: 500px;
  margin: 0 auto;
}
input {
  padding: .75rem;
  border-radius: 3px;
  margin: 0.5em auto;
  border: 1px solid #eaeaea;
  font-size: 1.1rem;
}
.btn {
  border: none;
  background-color: gray;
  border-radius: 3px;
  padding: 0.5rem;
}
.btn-edit {
  background-color: #2b4d2c;
  color: #fff;
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
