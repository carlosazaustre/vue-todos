<template>
  <form @submit.prevent="addTodoTask">
    <input type="text" v-model="title" placeholder="Title"/>
    <input type="text" v-model="description" placeholder="Description" />
    <button type="submit">AÑADIR</button>
  </form>
</template>

<script>
export default {
  name: 'add-todo',

  data () {
    return {
      title: '',
      description: ''
    }
  },

  methods: {
    addTodoTask () {
      this.$emit('add', {
        title: this.title,
        description: this.description
      })
    }
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
    padding: .5rem;
  }

  button {
    background-color: orange;
    border: none;
    padding: .5rem;
  }
</style>
