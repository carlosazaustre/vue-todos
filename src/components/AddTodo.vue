<template>
  <form @submit.prevent="addTodo({ title, description })">
    <input type="text" v-model="title" placeholder="Title"/>
    <input type="text" v-model="description" placeholder="Description" />
    <button type="submit">✔︎ AÑADIR</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'add-todo',

  data () {
    return {
      title: '',
      description: ''
    }
  },

  methods: {
    ...mapMutations([ 'addTodo' ])
  }
}

</script>

<style scoped>
  form {
    background-color: #eaeaea;
    width: 500px;
    margin: 1rem auto;
    padding: 1rem;
  }
  input {
    padding: .75rem;
    border: none;
    border-radius: 3px;
  }

  button {
    background-color: orange;
    border: none;
    padding: .75rem;
  }
</style>
