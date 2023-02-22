import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 11.6rem 0 11.8rem;
  text-align: center;

  header {
    h2 {
      margin-bottom: 1.6rem;
      color: rgba(234, 234, 234, 0.8);
      font-size: clamp(2.4rem, 1.6rem + 2vw, 3.6rem);
      font-weight: 300;
      font-family: "Work Sans", sans-serif;
      line-height: 1.3;
    }
    p {
      margin-bottom: 8rem;
      color: rgba(234, 234, 234, 0.6);
      font-size: clamp(1.6rem, 1.467rem + 0.333vw, 1.8rem);
      font-weight: 300;
      line-height: 1.5;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    border-radius: 0.4rem;
    background: #111111;
  }

  @media screen and (max-width: 768px) {
    padding: 8.6rem 0 8.8rem;
  }
`;
