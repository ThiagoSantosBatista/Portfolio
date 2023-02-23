import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 11.6rem 0 11.8rem;

  h2 {
    align-self: center;
    max-width: 51rem;
    margin-bottom: 8rem;
    color: rgba(234, 234, 234, 0.8);
    font-size: clamp(2.4rem, 1.6rem + 2vw, 3.6rem);
    font-weight: 300;
    font-family: "Work Sans", sans-serif;
    line-height: 1.3;
    text-align: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  height: 20rem;
  border-radius: 0.4rem;
  outline: 0.1rem solid transparent;
  background: #111111;
  transition: outline 0.3s cubic-bezier(1,.56,1,1.01);

  h3 {
    font-size: clamp(1.8rem, 1.667rem + 0.333vw, 2rem);
    font-weight: 600;
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

  @media (hover: hover) {
    &:hover {
      outline: .1rem solid #9bf00b;
    }
  }

  @media screen and (max-width: 768px) {
    height: 18rem;

    svg {
      height: 7.6rem;
      width: auto;
    }
  }
`;
