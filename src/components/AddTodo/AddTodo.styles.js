import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: flex;
  max-width: 95%;
  width: 480px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;

`
export const StyledButton = styled.div`
  color: inherit;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledInput = styled.input`
{
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

  &::placeholder {
    color: inherit;
    opacity: 0.7;
    font-size: medium;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.9);
    color: #000000;

    + button {
      color: #000000;
    }
  }
}
`