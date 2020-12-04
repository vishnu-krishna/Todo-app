import { Typography } from "@material-ui/core"
import React from "react"
import { StyledTodoSummaryWrapper } from "components/TodoSummary/TodoSummary.styles"

export default function TodoSummary({ todos }) {
  const completed = todos.filter(({ completed }) => completed).length
  return (
    <StyledTodoSummaryWrapper>
      <Typography variant="caption">
        {completed} of {todos.length} Tasks completed
      </Typography>
    </StyledTodoSummaryWrapper>
  )
}

