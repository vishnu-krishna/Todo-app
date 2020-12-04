import { shallow } from "enzyme"
import React from "react"
import store from "store"
import App from "src/pages/App"

jest.mock("store")

describe("App", () => {

  it("should render", () => {
    shallow(<App/>)
  })

  it("should render with todos", () => {
    const sampleTodos = [
      { completed: true, task: "Do this thing", id: 1, priority: 2 }
    ]
    store.get.mockReturnValue(sampleTodos)
    expect(shallow(<App/>).find("TodoList"))
      .toMatchSnapshot()
  })

})
