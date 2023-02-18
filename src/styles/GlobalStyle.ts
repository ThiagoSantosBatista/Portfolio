import { createGlobalStyle } from "styled-components";
//font-family: 'Roboto', sans-serif;
//font-family: 'Work Sans', sans-serif;

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    min-height: 100vh;
    font-size: 1.6rem;
    background: #040404;
  }
  img{
    display: block;
    max-width: 100%;
  }
  svg{
    display: block;
  }
  a{
    display: inline-block;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .textoDestaque{
    color: #EAEAEA;
    font-weight: 700;
    font-family: 'Work Sans', sans-serif;
  }
`;

export default GlobalStyle;
