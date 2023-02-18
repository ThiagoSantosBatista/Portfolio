import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 11.6rem 0;

  h2 {
    align-self: center;
    max-width: 51rem;
    margin-bottom: 8rem;
    color: rgba(234, 234, 234, 0.8);
    font-size: 3.6rem;
    font-weight: 300;
    line-height: 1.3;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));
  gap: 2.4rem;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  height: 20rem;
  border-radius: 0.4rem;
  background: #111111;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
  }

  &::before {
    content: "";
    position: absolute;
    top: 2.1rem;
    left: -0.4rem;
    width: 0.4rem;
    height: 4.2rem;
    border-radius: 0.2rem 0 0 0.2rem;
    background: #9bf00b;
  }
`;
