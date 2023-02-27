import styled from "styled-components";

interface ButtonProps {
  cv?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.2rem 2.1rem;
  color: ${(props) => (props.cv ? "#9bf00b" : "#eaeaea")};
  background: none;
  border-radius: 0.4rem;
  border: 0.1rem solid ${(props) => (props.cv ? "#9bf00b" : "#eaeaea")};
  font-size: clamp(1.6rem, 1.467rem + 0.333vw, 1.8rem);
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  transition: all 0.3s;

  @media (hover: hover) {
    &:hover {
      color: ${(props) => (props.cv ? "#040404" : "#040404")};
      background: ${(props) => (props.cv ? "#9bf00b" : "#eaeaea")};
    }
  }
`;
