import { TableBody } from "@material-ui/core"
import React from "react"
import TodoItem from "components/TodoItem/TodoItem"
import { StyledTodoListWrapper } from "components/TodoList/TodoList.styles"
import PropTypes from "prop-types"

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


TodoList.propTypes = {
  id: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.number,
      priority: PropTypes.number,
      task: PropTypes.string
    })
  ),
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export default TodoList


