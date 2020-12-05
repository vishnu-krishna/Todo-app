import React from "react"
import store from "store"
import { render } from "@testing-library/react"
import { App } from "./App"

jest.mock("store")
describe("App Component", () => {
  const filledTodos = [
    { completed: true, task: "Some task", id: 1, priority: 2 }
  ]
  const emptyTodos = []
  
  it('should show the todolist component and todoSummary component for filledTodos', () => {
    store.get.mockReturnValue(filledTodos)
    const { getByTestId, queryByText } = render(
      <App/>
    )
    const todoList = getByTestId('todo-list')
    expect(todoList).toBeInTheDocument()
    expect(queryByText(/1 of 1 Tasks completed/)).toBeInTheDocument()
  })

  it('should NOT show the todolist component and show ONLY todoSummary component for emptyTodos', () => {
    store.get.mockReturnValue(emptyTodos)
    const { queryByTestId, queryByText } = render(
      <App/>
    )
    const todoList = queryByTestId('todo-list')
    expect(todoList).not.toBeInTheDocument()
    expect(queryByText(/0 of 0 Tasks completed/)).toBeInTheDocument()
  })
})
