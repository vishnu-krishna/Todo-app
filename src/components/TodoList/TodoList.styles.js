// @NOT(adam): there are better ways to redefine the style for Material UI
// components, but this way has the advantage of keeping everything in the one
// file, and given the size/scope of the project, this approach is a reasonable
// tradeoff
import styled from "styled-components"

export const StyledTodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.15);
  width: 480px;
  max-width: 95%;

`