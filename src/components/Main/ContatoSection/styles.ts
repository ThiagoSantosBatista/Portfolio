import styled from "styled-components";

export const Section = styled.section`
  padding: 11.6rem 0;
  text-align: center;

  h2 {
    margin-bottom: 8rem;
    color: rgba(234, 234, 234, 0.8);
    font-size: 3.6rem;
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.3;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));
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
    font-size: 2rem;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
  a{
    color: #9BF00B;
  }
`;
