import React from "react"
import { render } from '@testing-library/react'
import TodoSummary from "components/TodoSummary/TodoSummary"

describe("TodoSummary Component", () => {
  const sampleTodos = [
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: false },
    { completed: false },
  ]
  it('should have the list of completed tasks as per the input', () => {
    const { queryByText } = render(
      <TodoSummary todos={sampleTodos}/>
    )
    expect(queryByText('2 of 5 Tasks completed')).toBeInTheDocument()
  })

})
