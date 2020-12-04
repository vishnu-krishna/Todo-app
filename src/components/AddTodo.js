import { IconButton, List, ListItem } from "@material-ui/core"
import AddIcon from "mdi-react/AddIcon"
import styled from "styled-components"
import React from "react"
import useInputValue from "../hooks/useInputValue"

export const TodoPriority = {
  LOW: 1,
  NORMAL: 2,
  HIGH: 3,
  CRITICAL: 4
}

export default function AddTodo({ onAdd, getId }) {
  const task = useInputValue("")

  const add = () => {
    onAdd({
      id: getId(),
      completed: false,
      priority: TodoPriority.NORMAL,
      task: task.value
    })

    // Reset input
    task.setValue("")
  }

  return (
    <Wrapper>
      <Field>
        <input autoFocus
               aria-label="task-input"
               onChange={task.onChange}
               onKeyPress={e => e.key === "Enter" && add()}
               placeholder="Add new task"
               type="text"
               value={task.value}
        />
        <IconButton
          onClick={() => add()}
          aria-label="Add"
        >
          <AddIcon/>
        </IconButton>
      </Field>
    </Wrapper>
  )
}

const Wrapper = styled(List)`
  max-width: 95%;
  width: 480px;
`

const Field = styled(ListItem)`
  color: rgba(255, 255, 255, 0.7);
  position: relative;

  && {
    padding: 0;
  }

  input {
    background: rgba(0, 0, 0, 0.3);
    border: 0;
    color: inherit;
    font-family: inherit;
    outline: none;
    padding: 11px 16px;
    box-sizing: border-box;
    height: 40px;
    transition: 0.1s background;
    width: 100%;

    ::placeholder {
      color: inherit;
      opacity: 0.7;
    }

    :focus {
      background: rgba(255, 255, 255, 0.9);
      color: #000;

      + button {
        color: #000;
      }
    }
  }

  button {
    color: inherit;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
