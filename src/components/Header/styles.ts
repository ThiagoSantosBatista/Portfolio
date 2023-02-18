import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  border-bottom: 0.2rem solid #111111;
  z-index: 10;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
  max-width: 144rem;
  padding: 0 15.6rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 3.2rem;
`;

export const ListItem = styled.li`
  a {
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Work Sans", sans-serif;
    transition: all 0.3s;
  }
`;
