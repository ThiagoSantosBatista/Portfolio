import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  max-width: 49.2rem;
  width: 100%;

  img {
    cursor: grab;
  }

  @media screen and (max-width: 550px) {
    img {
      min-height: 30rem;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      min-height: 25rem;
    }
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
    font-size: clamp(1.8rem, 1.667rem + 0.333vw, 2rem);
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 1.6rem;
  }
  .demoBtn,
  .sobreBtn {
    width: 12rem;
    padding: 1rem 0;
    border-radius: 0.4rem;
    border: 0.1rem solid #9bf00b;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }
  .demoBtn {
    margin-right: 1.2rem;
    color: #040404;
    background: #9bf00b;
    transition: all 0.3s;
  }
  .sobreBtn {
    color: #9bf00b;
    background: #111111;
    transition: all 0.3s;
  }

  @media (hover: hover) {
    .demoBtn:hover {
      background: #649e00;
    }
    .sobreBtn:hover {
      color: #040404;
      background: #9bf00b;
    }
  }

  @media screen and (max-width: 350px) {
    .demoBtn,
    .sobreBtn {
      width: 11rem;
    }
  }
`;
