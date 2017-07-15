<template>
  <div id="app">
    <todo
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index"
      @remove="removeTodo">
    </todo>
    <add-todo @add="addTodo"></add-todo>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: { Todo, AddTodo },

  data () {
    return {
      todos: [
        { id: 0, title: 'Learn JavaScript', description: 'The first task' },
        { id: 1, title: 'Learn Vue', description: 'The next frontend framework' },
        { id: 2, title: 'Learn Vuex', description: 'To manage the app state' }
      ]
    }
  },

  methods: {
    removeTodo ({ id }) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo ({ title, description }) {
      const id = this.todos.length
      this.todos.push({ id, title, description })
    }
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
  margin-top: 60px;
}
</style>
