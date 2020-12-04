import { TableBody } from "@material-ui/core"
import React from "react"
import TodoItem from "components/TodoItem/TodoItem"
import { StyledTodoListWrapper } from "components/TodoList/TodoList.styles"


export default function TodoList({ todos, onDelete, onUpdate }) {
  // if (!todos) todos = []

  // @NOTE(adam): could instead use _.sortBy(todos, ["priority", "task"]), but
  // then I wouldn't be showing off my comparator skills
  todos.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority
    }
    return a.task.localeCompare(b.task)
  })

  return (
    <StyledTodoListWrapper>
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
    </StyledTodoListWrapper>
  )
}


