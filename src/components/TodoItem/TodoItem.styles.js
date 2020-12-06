import styled from "styled-components"
import { Select } from "@material-ui/core"
import { motion } from "framer-motion"

export const StyledPrioritySelect = styled(Select)`
  && {
    font: inherit;
    align-self: center;
    margin-left: auto;
    width: 120px;
  }
`
export const StyledTodoItemWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`
export const StyledCheckbox = styled.div`
  align-self: center;
  margin-right: 10px;
  width: 50px
`
export const StyledTask = styled.div`
  align-self: center;
`
export const StyledIcon = styled(motion.div)`
  align-self: center;
  width: 50px;
  margin-left: 20px;
`