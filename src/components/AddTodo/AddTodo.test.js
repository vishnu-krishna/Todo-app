import React from "react"
import { shallow } from "enzyme"

import AddTodo from "components/AddTodo/AddTodo"

describe("AddTodo", () => {

  const sampleId = 1

  const sampleTodo = {
    completed: false,
    id: sampleId,
    priority: 1,
    task: ""
  }

  it("should render", () => {
    expect(shallow(<AddTodo/>))
      .toMatchSnapshot()
  })

  it("should update task", () => {
    const component = shallow(<AddTodo/>)
    const input = component.find("input")
    input.simulate("change", { currentTarget: { value: "Test" } })
  })

  it("should add on hitting enter on input", () => {
    const sampleOnAdd = jest.fn()
    const component = shallow(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const input = component.find("input")
    input.simulate("keyPress", { key: "Enter" })
    expect(sampleOnAdd).toBeCalledWith(sampleTodo)
  })

  it("should add on hitting enter on icon button", () => {
    const sampleOnAdd = jest.fn()
    const component = shallow(<AddTodo onAdd={sampleOnAdd} getId={() => sampleId}/>)
    const button = component.find("WithStyles(IconButton)")
    button.simulate("click")
    expect(sampleOnAdd).toBeCalledWith(sampleTodo)
  })

})
