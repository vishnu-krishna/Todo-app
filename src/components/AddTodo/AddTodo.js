import { IconButton } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React from "react"
import useInputValue from "hooks/useInputValue"
import { StyledField, StyledWrapper } from "components/AddTodo/AddTodo.styles"

export const TodoPriority = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  URGENT: 4
}

export default function AddTodo({ onAdd, getId }) {
  const task = useInputValue("")

  const add = () => {
    onAdd({
      id: getId(),
      completed: false,
      priority: TodoPriority.MEDIUM,
      task: task.value
    })

    // Reset input
    task.setValue("")
  }

  return (
    <StyledWrapper>
      <StyledField>
        <input autoFocus
               aria-label="task-input"
               onChange={task.onChange}
               onKeyPress={e => e.key === "Enter" && add()}
               placeholder="Enter your Todo list below:"
               type="text"
               value={task.value}
        />
        <IconButton
          onClick={() => add()}
          aria-label="Add"
        >
          <AddCircleOutlineIcon/>
        </IconButton>
      </StyledField>
    </StyledWrapper>
  )
}

