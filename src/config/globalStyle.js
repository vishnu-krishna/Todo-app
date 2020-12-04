import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset-advanced'

export default createGlobalStyle`
  ${reset}
  li {
    list-style: none;
    padding: 0;
  }
`
