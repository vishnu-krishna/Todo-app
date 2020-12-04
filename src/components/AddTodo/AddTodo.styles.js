import styled from "styled-components"
import { List, ListItem } from "@material-ui/core"

export const StyledWrapper = styled(List)`
  max-width: 95%;
  width: 480px;
`

export const StyledField = styled(ListItem)`
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