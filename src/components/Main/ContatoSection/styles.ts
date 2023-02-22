import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 11.6rem 0 11.8rem;
  text-align: center;

  h2 {
    margin-bottom: 8rem;
    color: rgba(234, 234, 234, 0.8);
    font-size: clamp(2.4rem, 1.6rem + 2vw, 3.6rem);
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.3;
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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23.4rem, 1fr));
  gap: 2.4rem;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  border-radius: 0.4rem;
  background: #111111;

  svg {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1.2rem;
    font-size: clamp(1.8rem, 1.667rem + 0.333vw, 2rem);
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
  a {
    color: #9bf00b;
  }
`;
