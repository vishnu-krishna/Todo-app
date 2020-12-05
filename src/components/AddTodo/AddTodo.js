import { IconButton } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useRef } from "react"
import { StyledButton, StyledInput, StyledWrapper } from "components/AddTodo/AddTodo.styles"
import PropTypes from 'prop-types'
import { TodoPriority } from "pages/constants"

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
      <StyledInput autoFocus
                   aria-label="task-input"
                   onKeyPress={e => e.key === "Enter" && add()}
                   placeholder="Enter your todo list here"
                   type="text"
                   ref={textInputRef}
      />
      <StyledButton>
        <IconButton
          data-testid={'add-button'}
          onClick={() => add()}
          aria-label="Add"
        >
          <AddCircleOutlineIcon/>
        </IconButton>
      </StyledButton>

    </StyledWrapper>
  )
}


AddTodo.propTypes = {
  onAdd: PropTypes.func,
  getId: PropTypes.func
}

export default AddTodo
