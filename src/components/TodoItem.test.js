import React from "react"
import { shallow } from "enzyme"

import TodoItem from "src/components/TodoItem"

describe("TodoItem", () => {

  const sampleId = 1

  const sampleTodo = {
    completed: false,
    id: sampleId,
    priority: 1,
    task: "Do this thing"
  }

  it("should render", () => {
    expect(shallow(<TodoItem todo={sampleTodo}/>))
      .toMatchSnapshot()
  })

  it("should complete task", () => {
    const sampleOnUpdate = jest.fn()
    const component = shallow(<TodoItem todo={sampleTodo} onUpdate={sampleOnUpdate}/>)
    const checkbox = component.find("WithStyles(Checkbox)")
    checkbox.simulate("click")
    expect(sampleOnUpdate)
      .toBeCalledWith({ ...sampleTodo, completed: true })
  })

  it("should delete task", () => {
    const sampleOnDelete = jest.fn()
    const component = shallow(<TodoItem todo={{ ...sampleTodo, completed: true }} onDelete={sampleOnDelete}/>)
    const checkbox = component.find("WithStyles(IconButton)")
    checkbox.simulate("click")
    expect(sampleOnDelete)
      .toBeCalledWith()
  })

  it("should uncomplete task", () => {
    const sampleOnUpdate = jest.fn()
    const component = shallow(<TodoItem todo={{ ...sampleTodo, completed: true }} onUpdate={sampleOnUpdate}/>)
    const checkbox = component.find("WithStyles(Checkbox)")
    checkbox.simulate("click")
    expect(sampleOnUpdate)
      .toBeCalledWith({ ...sampleTodo, completed: false })
  })

  it("should update priority", () => {
    const sampleOnUpdate = jest.fn()
    const component = shallow(<TodoItem todo={sampleTodo} onUpdate={sampleOnUpdate} onDelete={}/>)
    const select = component.find("Styled(WithStyles(WithFormControlContext(Select)))")
    select.simulate("change", { target: { value: 2 } })
    expect(sampleOnUpdate)
      .toBeCalledWith({ ...sampleTodo, priority: 2 })
  })

})
