import React from "react"
import { mount } from "enzyme"

import TodoSummary from "src/components/TodoSummary"

describe("TodoSummary", () => {

  it("should render with correct numbers", () => {
    const sampleTodos = [
      { completed: true },
      { completed: true },
      { completed: false },
      { completed: true },
      { completed: false },
    ]
    const rendered = mount(<TodoSummary todos={sampleTodos}/>)
    expect(rendered.text())
      .toBe("3 of 5 Tasks completed")
  })

})
