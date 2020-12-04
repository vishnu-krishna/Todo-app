import { Checkbox, IconButton, MenuItem, Select, TableCell, TableRow } from "@material-ui/core"
import TrashIcon from "mdi-react/TrashIcon"
import classnames from "classnames"
import styled from "styled-components"

import React from "react"
import { TodoPriority } from "components/AddTodo"


export default function TodoItem({ onDelete, onUpdate, todo }) {
  const toggleCompletion = () => onUpdate({ ...todo, completed: !todo.completed })
  const setPriority = (priority) => onUpdate({ ...todo, priority })

  return (
    <Wrapper className={classnames({ completed: todo.completed })}>
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
        <PrioritySelect
          value={todo.priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
        >
          <MenuItem value={TodoPriority.LOW}>Unimportant</MenuItem>
          <MenuItem value={TodoPriority.NORMAL}>Normal</MenuItem>
          <MenuItem value={TodoPriority.HIGH}>Important</MenuItem>
          <MenuItem value={TodoPriority.CRITICAL}>Critical</MenuItem>
        </PrioritySelect>
      </TableCell>
      <TableCell
        padding="none"
        style={{ width: 50 }}
      >
        <IconButton aria-label="Delete" onClick={onDelete}>
          <TrashIcon/>
        </IconButton>
      </TableCell>
    </Wrapper>
  )
}

const PrioritySelect = styled(Select)`
  && {
    font: inherit
  }
`

const Wrapper = styled(TableRow)`
  && {
    padding-top: 0;
    padding-bottom: 0;

    * {
      color: inherit;
    }

    &.completed {
      color: #999;
      text-decoration: line-through;
    }
  }

  .handle {
    cursor: move;
  }
`
