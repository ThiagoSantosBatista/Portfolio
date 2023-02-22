import styled from "styled-components";

interface ButtonProps {
  link?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.2rem 2.1rem;
  color: ${(props) => (props.link ? "#9bf00b" : "#eaeaea")};
  background: none;
  border-radius: 0.4rem;
  border: 0.1rem solid ${(props) => (props.link ? "#9bf00b" : "#eaeaea")};
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
`;
