<template>
  <div id="app">
    <logo></logo>
    <todo
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index">
    </todo>
    <add-todo></add-todo>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Logo from './components/Logo.vue'
import Todo from './components/Todo.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: { Logo, Todo, AddTodo },

  computed: {
    ...mapState([ 'todos' ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
