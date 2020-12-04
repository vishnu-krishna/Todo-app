import { Table, TableBody } from "@material-ui/core"
import styled from "styled-components"
import React from "react"
import TodoItem from "components/TodoItem"


export default function TodoList({ todos, onDelete, onUpdate }) {
  if (!todos) todos = []

  // @NOTE(adam): could instead use _.sortBy(todos, ["priority", "task"]), but
  // then I wouldn't be showing off my comparator skills
  todos.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority
    }
    return a.task.localeCompare(b.task)
  })

  return (
    <Wrapper>
      <TableBody>
        {todos.map(todo => (
          <TodoItem
            onUpdate={onUpdate}
            onDelete={() => onDelete(todo.id)}
            key={todo.id}
            todo={todo}
          />
        ))}
      </TableBody>
    </Wrapper>
  )
}

// @NOT(adam): there are better ways to redefine the style for Material UI
// components, but this way has the advantage of keeping everything in the one
// file, and given the size/scope of the project, this approach is a reasonable
// tradeoff
const Wrapper = styled(Table)`
  && {
    background: #FFF;
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.15);
    width: 480px;
    max-width: 95%;
  }
`
