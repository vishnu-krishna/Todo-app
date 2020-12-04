import { shallow } from "enzyme"
import React from "react"

import TodoList from "src/containers/TodoList"

describe("TodoList", () => {

  const sampleTodos = [
    { id: 3, task: "Or do this second", priority: 1, completed: false },
    { id: 4, task: "And this, if you have time", priority: 0, completed: false },
    { id: 2, task: "Do this second", priority: 1, completed: false },
    { id: 1, task: "Do this first", priority: 2, completed: false },
  ]

  it("should render", () => {
    shallow(<TodoList/>)
  })

  it("should render with todos", () => {
    expect(shallow(<TodoList todos={sampleTodos}/>))
      .toMatchSnapshot()
  })

  it("should delete todo", () => {
    const sampleOnDelete = jest.fn()
    const component = shallow(<TodoList todos={sampleTodos} onDelete={sampleOnDelete}/>)

    // Delete the todo at the top of the list
    component.find("TodoItem").first().prop("onDelete")()
    expect(sampleOnDelete).toBeCalledWith(1)
  })

  it("should update todo", () => {
    const sampleOnUpdate = jest.fn()
    const component = shallow(<TodoList todos={sampleTodos} onUpdate={sampleOnUpdate}/>)

    // Update the todo at the top of the list
    component.find("TodoItem").first()
      .prop("onUpdate")({ ...sampleTodos[3], priority: 3 })

    expect(sampleOnUpdate)
      .toBeCalledWith({ ...sampleTodos[3], priority: 3 })
  })

})
