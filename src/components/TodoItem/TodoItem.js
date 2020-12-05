import { Checkbox, IconButton, MenuItem, TableCell } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import classnames from "classnames"
import React from "react"
import { TodoPriority } from "components/AddTodo/AddTodo"
import { StyledPrioritySelect, StyledTodoItemWrapper } from "components/TodoItem/TodoItem.styles"
import PropTypes from "prop-types"

const TodoItem = ({ onDelete, onUpdate, todo }) => {
  const toggleCompletion = () => onUpdate({ ...todo, completed: !todo.completed })
  const setPriority = (priority) => onUpdate({ ...todo, priority })

  return (
    <StyledTodoItemWrapper className={classnames({ completed: todo.completed })}>
      <TableCell
        padding="checkbox"
        style={{ width: 50 }}
      >
        <Checkbox
          data-testid={'checkbox'}
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
          data-testid="select"
        >
          <MenuItem value={TodoPriority.LOW}>Low</MenuItem>
          <MenuItem value={TodoPriority.MEDIUM}>Medium</MenuItem>
          <MenuItem value={TodoPriority.HIGH}>High</MenuItem>
          <MenuItem value={TodoPriority.URGENT}>Urgent</MenuItem>
        </StyledPrioritySelect>
      </TableCell>
      <TableCell
        padding="none"
        style={{ width: 50 }}
      >
        <IconButton aria-label="Delete" onClick={onDelete} data-testid={'delete'}>
          <DeleteIcon/>
        </IconButton>
      </TableCell>
    </StyledTodoItemWrapper>
  )
}

TodoItem.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.number,
    priority: PropTypes.number,
    task: PropTypes.string
  })
}

export default TodoItem


