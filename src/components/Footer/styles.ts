import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  max-width: 144rem;
  padding: 0 15.6rem;
  margin: 0 auto 2.1rem;

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 8.8%;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 5%;
  }
`;
