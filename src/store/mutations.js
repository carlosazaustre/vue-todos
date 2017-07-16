export const state = {
  todos: [
    { id: 0, title: 'Learn JavaScript', description: 'The first task', done: false },
    { id: 1, title: 'Learn Vue', description: 'The next frontend framework', done: false },
    { id: 2, title: 'Learn Vuex', description: 'To manage the app state', done: false }
  ]
}

export const mutations = {

  // Add a new TODO task to the list
  addTodo (state, { title, description }) {
    let id = state.todos[ state.todos.length - 1 ].id
    id += 1

    state.todos.push({
      id,
      title,
      description
    })
  },

  // Remove a TODO task from the list
  deleteTodo (state, { id }) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },

  // Mark a TODO task as completed
  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  // Edit the info of a TODO task
  editTodo (state, { todo }) {
    console.log(todo)
  }
}
