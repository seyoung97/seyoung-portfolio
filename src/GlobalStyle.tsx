import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: rgb(33, 32, 33);
    /* position: relative;  */
  }
  html {
    font-size: 20px;
  }
  
`;

export default GlobalStyle;
