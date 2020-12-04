import { Checkbox, IconButton, MenuItem, TableCell } from "@material-ui/core"
import TrashIcon from "mdi-react/TrashIcon"
import classnames from "classnames"
import React from "react"
import { TodoPriority } from "components/AddTodo/AddTodo"
import { StyledPrioritySelect, StyledTodoItemWrapper } from "components/TodoItem/TodoItem.styles"


export default function TodoItem({ onDelete, onUpdate, todo }) {
  const toggleCompletion = () => onUpdate({ ...todo, completed: !todo.completed })
  const setPriority = (priority) => onUpdate({ ...todo, priority })

  return (
    <StyledTodoItemWrapper className={classnames({ completed: todo.completed })}>
      <TableCell
        padding="checkbox"
        style={{ width: 50 }}
      >
        <Checkbox
          checked={todo.completed}
          disableRipple={true}
          onClick={toggleCompletion}
        />
      </TableCell>
      <TableCell padding="none">
        {todo.task}
      </TableCell>
      <TableCell
        padding="none"
        style={{ width: 120 }}
      >
        <StyledPrioritySelect
          value={todo.priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
        >
          <MenuItem value={TodoPriority.LOW}>Unimportant</MenuItem>
          <MenuItem value={TodoPriority.MEDIUM}>Normal</MenuItem>
          <MenuItem value={TodoPriority.HIGH}>Important</MenuItem>
          <MenuItem value={TodoPriority.URGENT}>Critical</MenuItem>
        </StyledPrioritySelect>
      </TableCell>
      <TableCell
        padding="none"
        style={{ width: 50 }}
      >
        <IconButton aria-label="Delete" onClick={onDelete}>
          <TrashIcon/>
        </IconButton>
      </TableCell>
    </StyledTodoItemWrapper>
  )
}

