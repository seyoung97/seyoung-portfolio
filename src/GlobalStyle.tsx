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
    /* width: 1920px;
    margin: 0 auto; */
    font-family: 'Noto Sans KR', sans-serif;
    background-color: rgb(33, 32, 33);
    /* position: relative;  */
  }
  html {
    font-size: 20px;
  }
  ul{
    li{
       line-height: 128%; 
    }
  }
  @media (max-width:1280px) {
    html {font-size: 17px;}
  }
  
`;

export default GlobalStyle;
