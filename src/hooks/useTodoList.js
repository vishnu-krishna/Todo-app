import store from 'store'
import { useState } from "react"

export default function useTodoList(existingTodos) {
  const [ todos, setTodos ] = useState(existingTodos || [])

  const addTodo = (todo) => {
    updateTodos([ ...todos, todo ])
  }

  const deleteTodo = (id) => {
    updateTodos(todos.filter(({ id: otherId }) => id !== otherId))
  }

  const getNextTodoId = () => {
    if (!todos.length) {
      return 1
    }
    return todos.length + 1
  }

  const updateTodo = (todo) => {
    const todoId = todos.findIndex(({ id }) => id === todo.id)
    if (todoId === -1)
      return

    todos[todoId] = { ...todos[todoId], ...todo }
    updateTodos([ ...todos ])
  }

  const updateTodos = (updatedTodos) => {
    store.set("todos", updatedTodos)
    setTodos(updatedTodos)
  }

  return {
    addTodo,
    deleteTodo,
    getNextTodoId,
    todos,
    updateTodo,
  }
}
