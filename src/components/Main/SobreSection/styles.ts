import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12rem;
  margin: 14rem 0 11.6rem;
`;

export const Picture = styled.picture`
  position: relative;
  margin: 0 0 2.8rem 2.8rem;

  div {
    position: absolute;
    inset: 0;
    border-radius: 0.4rem;
    border: 0.2rem solid #eaeaea;
    transform: translate(-2.8rem, 2.8rem);
    z-index: -1;
  }
`;

export const ContentDiv = styled.div`
  position: relative;

  h2 {
    color: rgba(234, 234, 234, 0.8);
    margin-bottom: 2.4rem;
    font-size: 3.6rem;
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.2;
  }
  p {
    margin-bottom: 1.6rem;
    color: rgba(234, 234, 234, 0.6);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.5;
  }
  p:nth-child(3) {
    margin-bottom: 6.4rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: -4rem;
    top: -5%;
    width: 0.4rem;
    height: 110%;
    border-radius: 0.4rem;
    background-color: #111111;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
