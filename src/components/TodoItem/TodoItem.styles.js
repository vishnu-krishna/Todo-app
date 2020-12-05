import styled from "styled-components"
import { Select } from "@material-ui/core"

export const StyledPrioritySelect = styled(Select)`
  && {
    font: inherit;
    align-self: center;
    margin-left: auto;
    width: 120px;
  }
`
export const StyledTodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => (props.completed && '#BDE3F2')};
`
export const StyledCheckbox = styled.div`
  align-self: center;
  margin-right: 10px;
  width: 50px
`
export const StyledTask = styled.div`
  align-self: center;
`
export const StyledIcon = styled.div`
  align-self: center;
  width: 50px;
  margin-left: 20px;
`