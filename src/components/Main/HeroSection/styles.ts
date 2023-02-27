import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  height: calc(100vh - 7rem);
  min-height: 40rem;
  max-height: 63rem;

  h1 {
    max-width: 85%;
    color: rgba(234, 234, 234, 0.8);
    font-size: clamp(3.2rem, 2.133rem + 2.667vw, 4.8rem);
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.3;
    text-align: center;
    transform: translateY(-4rem);
  }

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: moveSvg 1.5s infinite;
  }

  @media screen and (max-width: 768px) {
    h1 {
      max-width: 100%;
    }
  }

  @keyframes moveSvg {
    0% {
      bottom: 6rem;
    }
    50% {
      bottom: 4rem;
    }
    100% {
      bottom: 6rem;
    }
  }
`;
