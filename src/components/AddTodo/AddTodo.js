import { IconButton } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useRef } from "react"
import { StyledField, StyledWrapper } from "components/AddTodo/AddTodo.styles"
import PropTypes from 'prop-types'

export const TodoPriority = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  URGENT: 4
}

const AddTodo = ({ onAdd, getId }) => {
  const textInputRef = useRef(null)
  const add = () => {
    const enteredText = textInputRef.current.value
    if (!!enteredText) {
      onAdd({
        id: getId(),
        completed: false,
        priority: TodoPriority.MEDIUM,
        task: enteredText
      })
      textInputRef.current.value = ''
    }
  }

  return (
    <StyledWrapper>
      <StyledField>
        <input autoFocus
               aria-label="task-input"
               onKeyPress={e => e.key === "Enter" && add()}
               placeholder="Enter your Todo list below:"
               type="text"
               ref={textInputRef}
        />
        <IconButton
          data-testid={'add-button'}
          onClick={() => add()}
          aria-label="Add"
        >
          <AddCircleOutlineIcon/>
        </IconButton>
      </StyledField>
    </StyledWrapper>
  )
}


AddTodo.propTypes = {
  onAdd: PropTypes.func,
  getId: PropTypes.func
}

export default AddTodo
