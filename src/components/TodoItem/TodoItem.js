import { Checkbox, IconButton, MenuItem } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import React from "react"
import { StyledCheckbox, StyledIcon, StyledPrioritySelect, StyledTask, StyledTodoItemWrapper } from "components/TodoItem/TodoItem.styles"
import PropTypes from "prop-types"
import { TodoPriority } from "pages/constants"

const TodoItem = ({ onDelete, onUpdate, todo }) => {
  const toggleCompletion = () => onUpdate({ ...todo, completed: !todo.completed })
  const setPriority = (priority) => onUpdate({ ...todo, priority })

  return (
    <StyledTodoItemWrapper completed={todo.completed}>
      <StyledCheckbox>
        <Checkbox
          data-testid={'checkbox'}
          checked={todo.completed}
          disableRipple={true}
          onClick={toggleCompletion}
        />
      </StyledCheckbox>
      <StyledTask padding="none">
        {todo.task}
      </StyledTask>
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
      <StyledIcon>
        <IconButton aria-label="Delete" onClick={onDelete} data-testid={'delete'}>
          <DeleteIcon/>
        </IconButton>
      </StyledIcon>
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


