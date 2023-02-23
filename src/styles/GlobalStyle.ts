import { createGlobalStyle } from "styled-components";

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
    scroll-behavior: smooth;
    scroll-padding-top: 7rem;
  }
  body{
    min-height: 100vh;
    font-size: 1.6rem;
    color: #eaeaea;
    background: #040404;
    
  }
  ::-webkit-scrollbar{
    width: .8rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9BF00B;     
    border-radius: 1rem;

    &:hover{
     background-color: #7DC700;      
    }
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
    font-weight: 600;
    font-family: 'Work Sans', sans-serif;
  }
`;

export default GlobalStyle;
