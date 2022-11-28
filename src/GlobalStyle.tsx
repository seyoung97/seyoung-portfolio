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
    position: relative;
  }
  html {
    font-size: 20px;
  }
  #root{
    height: 100%;
  }
`;

export default GlobalStyle;
