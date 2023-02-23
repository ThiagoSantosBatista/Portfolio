import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12rem;
  padding: 14rem 0 11.8rem;

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

  @media screen and (max-width: 1300px) {
    gap: 8rem;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 8.6rem 0 8.8rem;
  }
`;

export const Picture = styled.picture`
  position: relative;
  max-width: 32rem;
  margin: 0 0 2.8rem 2.8rem;

  .decoracao {
    position: absolute;
    inset: 0;
    border-radius: 0.4rem;
    border: 0.2rem solid #eaeaea;
    transform: translate(-2.8rem, 2.8rem);
    z-index: -1;
  }

  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
  @media screen and (max-width: 600px) {
    justify-self: start;
  }
`;

export const ContentDiv = styled.div`
  position: relative;

  h2 {
    color: rgba(234, 234, 234, 0.8);
    margin-bottom: 2.4rem;
    font-size: clamp(2.4rem, 1.6rem + 2vw, 3.6rem);
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.3;
  }
  p {
    margin-bottom: 1.6rem;
    color: rgba(234, 234, 234, 0.6);
    font-size: clamp(1.6rem, 1.467rem + 0.333vw, 1.8rem);
    font-weight: 300;
    line-height: 1.5;
  }
  p:nth-child(3) {
    margin-bottom: 6.4rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: -3.6rem;
    top: -5%;
    width: 0.2rem;
    height: 110%;
    border-radius: 0.4rem;
    background-color: #111111;
  }

  @media screen and (max-width: 1050px) {
    max-width: 72rem;
    justify-self: center;
    text-align: center;

    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    justify-self: start;
    text-align: left;

    p:nth-child(3) {
      margin-bottom: 4.2rem;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem 1.6rem;

  @media screen and (max-width: 1050px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    justify-content: start;
  }
`;
