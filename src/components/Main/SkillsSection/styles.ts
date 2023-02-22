import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 11.6rem 0 11.8rem;

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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  gap: 4.8rem 2.4rem;
`;

export const ListItem = styled.li`
  max-width: 35.9rem;
  svg {
    margin-bottom: 1.6rem;
  }
  h3 {
    margin-bottom: 1.2rem;
    font-family: "Work Sans", sans-serif;
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    color: rgba(234, 234, 234, 0.6);
    font-weight: 300;
    line-height: 1.5;
  }
  @media screen and (max-width: 768px){
    max-width: 90%;
  }
  @media screen and (max-width: 600px){
    max-width: 100%;
  }
`;
