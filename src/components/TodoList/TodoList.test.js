import React from "react"
import TodoList from "components/TodoList/TodoList"
import { fireEvent, render } from "@testing-library/react"

describe("TodoList Component", () => {
  const todos = [
    { id: 3, task: "This is fourth", priority: 1, completed: false },
    { id: 4, task: "This is third", priority: 0, completed: false },
    { id: 2, task: "This is second", priority: 1, completed: false },
    { id: 1, task: "This is first", priority: 2, completed: false },
  ]
  const onDelete = jest.fn()
  const onUpdate = jest.fn()

  it('should have the list of completed tasks as per the input', () => {
    const { queryByText, getAllByTestId } = render(
      <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
    )
    expect(queryByText('This is first')).toBeInTheDocument()
    expect(queryByText('This is second')).toBeInTheDocument()
    expect(queryByText('This is third')).toBeInTheDocument()
    expect(queryByText('This is fourth')).toBeInTheDocument()
    fireEvent.click(getAllByTestId('delete')[0])
    expect(onDelete).toHaveBeenCalled()
  })
})
