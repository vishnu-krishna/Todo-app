import React from "react"
import AddTodo from "components/AddTodo/AddTodo"
import { fireEvent, render } from "@testing-library/react"

describe("AddTodo Component", () => {
  const sampleId = 1
  it('should update the task on typing something and Enter key is keyboard', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: 'Something' } })
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    expect(sampleOnAdd).toHaveBeenCalled()
  })

  it('should NOT update the task when NOTHING is typed and enter key is keyboard', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    expect(sampleOnAdd).not.toHaveBeenCalled()
  })

  it('should update the task on typing something and clicking the add icon', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: 'Something' } })
    fireEvent.click(getByTestId('add-button'))
    expect(sampleOnAdd).toHaveBeenCalled()
  })

  it('should NOT update the task when NOTHING is typed and add icon is clicked', () => {
    const sampleOnAdd = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = getByPlaceholderText("Enter your Todo list below:")
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(getByTestId('add-button'))
    expect(sampleOnAdd).not.toHaveBeenCalled()
  })
})
