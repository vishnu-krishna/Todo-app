import React from "react"
import AddTodo from "components/AddTodo/AddTodo"
import { fireEvent, render } from "@testing-library/react"

describe("AddTodo Component", () => {
  const sampleId = 1
  it('should update the task on typing something and pressing enter in keyboard', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: 'Something' } })
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    expect(sampleOnAdd).toHaveBeenCalled()
  })

  it('should update the task on typing something and clicking the add icon', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: 'Something' } })
    fireEvent.click(getByTestId('add-button'))
    expect(sampleOnAdd).toHaveBeenCalled()
  })
})
