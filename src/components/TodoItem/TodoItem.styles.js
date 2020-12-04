import styled from "styled-components"
import { Select, TableRow } from "@material-ui/core"

export const StyledPrioritySelect = styled(Select)`
  && {
    font: inherit
  }
`

export const StyledTodoItemWrapper = styled(TableRow)`
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