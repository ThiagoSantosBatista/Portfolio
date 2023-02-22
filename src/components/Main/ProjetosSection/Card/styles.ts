import styled from "styled-components";

export const Card = styled.div`
  position: relative;

  img{
    cursor: grab;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background-color: rgba(4, 4, 4, 0.9);
  cursor: grab;


  h3 {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 1.6rem;
  }
  .demoBtn,
  .sobreBtn {
    width: 12rem;
    padding: 1rem 0;
    border-radius: 0.4rem;
    border: 0.1rem solid #9bf00b;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    cursor: pointer;

  }
  .demoBtn {
    margin-right: 1.2rem;
    color: #040404;
    background: #9bf00b;

  }
  .sobreBtn {
    color: #9bf00b;
    background: #111111;
  }
`;
