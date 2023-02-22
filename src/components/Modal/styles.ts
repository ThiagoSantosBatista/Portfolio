import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(4, 4, 4, 0.8);
  z-index: 100;
`;

export const ModalDiv = styled.div`
  position: relative;
  max-width: 44rem;
  padding: 2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #212121;
  background: #111111;

  h2 {
    margin: 0 5rem 1.6rem 0;
    font-size: 2.4rem;
    font-family: "Work Sans", sans-serif;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0 0 3.2rem 0;
  }

  button {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    padding: 1rem;
    border: none;
    border-radius: 50%;
    background: #212121;
    cursor: pointer;
  }

  a {
    display: grid;
    place-items: center;
    padding: 1rem 0;
    width: 15rem;
    border-radius: 0.4rem;
    color: #040404;
    background: #9bf00b;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    margin: 0 5rem 2.4rem 0;
  }

  li {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    background: #212121;
    color: rgba(255, 255, 255, 0.6);
  }
`;
