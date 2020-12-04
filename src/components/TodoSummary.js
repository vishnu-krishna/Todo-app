import { Typography } from "@material-ui/core"
import styled from "styled-components"
import React from "react"

export default function TodoSummary({ todos }) {
  const completed = todos.filter(({ completed }) => completed).length
  return (
    <Wrapper>
      <Typography variant="caption">
        {completed} of {todos.length} Tasks completed
      </Typography>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1em 0;
`
