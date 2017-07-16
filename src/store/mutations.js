export const state = {
  todos: [
    { id: 0, title: 'Learn JavaScript', description: 'The first task' },
    { id: 1, title: 'Learn Vue', description: 'The next frontend framework' },
    { id: 2, title: 'Learn Vuex', description: 'To manage the app state' }
  ]
}

export const mutations = {
  addTodo (state, { title, description }) {
    let id = state.todos[ state.todos.length - 1 ].id
    id += 1

    state.todos.push({
      id,
      title,
      description
    })
  },

  deleteTodo (state, { id }) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}
