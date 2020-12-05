import { TableBody } from "@material-ui/core"
import React from "react"
import TodoItem from "components/TodoItem/TodoItem"
import { StyledTodoListWrapper } from "components/TodoList/TodoList.styles"

const TodoList = ({ id, todos, onDelete, onUpdate }) => {
  todos.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority
    }
    return a.task.localeCompare(b.task)
  })

  return (
    <StyledTodoListWrapper data-testid={id}>
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

export default TodoList


