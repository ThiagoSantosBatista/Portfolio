import styled from "styled-components";

export const Section = styled.section`
  margin: 11.6rem 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
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
    font-weight: 700;
  }
  p {
    color: rgba(234, 234, 234, 0.6);
    font-weight: 300;
    line-height: 1.5;
  }
`;
