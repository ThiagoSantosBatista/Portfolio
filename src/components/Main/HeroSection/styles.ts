import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  height: 63rem;

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
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }


  @media screen and (max-width: 768px) {
    height: 53rem;
    h1 {
    max-width: 100%;
    }
  }
`;
