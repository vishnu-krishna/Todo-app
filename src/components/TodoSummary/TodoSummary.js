import { Typography } from "@material-ui/core"
import React from "react"
import { StyledTodoSummaryWrapper } from "components/TodoSummary/TodoSummary.styles"
import PropTypes from "prop-types"

const TodoSummary = ({ todos }) => {
  const completed = todos.filter(({ completed }) => completed).length
  return (
    <StyledTodoSummaryWrapper>
      <Typography variant="caption">
        {completed} of {todos.length} Tasks completed
      </Typography>
    </StyledTodoSummaryWrapper>
  )
}

TodoSummary.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.number,
      priority: PropTypes.number,
      task: PropTypes.string
    })
  )
}

export default TodoSummary
