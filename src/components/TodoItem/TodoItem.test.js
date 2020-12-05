import React from "react"
import TodoItem from "components/TodoItem/TodoItem"
import { fireEvent, render, within } from "@testing-library/react"

describe("TodoItem component", () => {

  const sampleId = 1

  const todoList = {
    completed: false,
    id: sampleId,
    priority: 1,
    task: "Do this thing"
  }
  it('should initiate onUpdate when the checkbox is clicked', () => {
    const onUpdate = jest.fn()
    const { getByTestId } = render(
      <TodoItem todo={todoList} onUpdate={onUpdate}/>
    )
    const checkbox = getByTestId('checkbox')
    fireEvent.click(checkbox)
    expect(onUpdate)
      .toBeCalledWith({ ...todoList, completed: true })
  })

  it('should initiate onDelete when the delete button is clicked', () => {
    const onDelete = jest.fn()
    const { getByTestId } = render(
      <TodoItem todo={todoList} onDelete={onDelete}/>
    )
    const deleteButton = getByTestId('delete')
    fireEvent.click(deleteButton)
    expect(onDelete).toHaveBeenCalled()
  })

  it('should set the task to incomplete when the checkbox is clicked', () => {
    const onUpdate = jest.fn()
    const { getByTestId } = render(
      <TodoItem todo={{ ...todoList, completed: true }} onUpdate={onUpdate}/>
    )
    const checkbox = getByTestId('checkbox')
    fireEvent.click(checkbox)
    expect(onUpdate)
      .toBeCalledWith({ ...todoList, completed: false })
  })

  it('should call priority 2 on selecting Normal priority', () => {
    const onUpdate = jest.fn()
    const { getByRole, getAllByRole } = render(
      <TodoItem todo={{ ...todoList }} onUpdate={onUpdate}/>
    )

    fireEvent.mouseDown(getAllByRole('button')[0])

    const listBox = within(getByRole('listbox'))
    fireEvent.click(listBox.getByText(/normal/i))
    expect(onUpdate)
      .toBeCalledWith({ ...todoList, priority: 2 })
  })

  it('should call priority 3 on selecting Important priority', () => {
    const onUpdate = jest.fn()
    const { getByRole, getAllByRole } = render(
      <TodoItem todo={{ ...todoList }} onUpdate={onUpdate}/>
    )

    fireEvent.mouseDown(getAllByRole('button')[0])

    const listBox = within(getByRole('listbox'))
    fireEvent.click(listBox.getByText(/\bimportant\b/i))
    expect(onUpdate)
      .toBeCalledWith({ ...todoList, priority: 3 })
  })

  it('should call priority 4 on selecting Critical priority', () => {
    const onUpdate = jest.fn()
    const { getByRole, getAllByRole } = render(
      <TodoItem todo={{ ...todoList }} onUpdate={onUpdate}/>
    )

    fireEvent.mouseDown(getAllByRole('button')[0])

    const listBox = within(getByRole('listbox'))
    fireEvent.click(listBox.getByText(/critical/i))
    expect(onUpdate)
      .toBeCalledWith({ ...todoList, priority: 4 })
  })
})
