import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  border-bottom: 0.2rem solid #111111;
  background: #040404;
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

  .bgMobile {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9;
  }
  .btnHeader {
    cursor: pointer;
    display: none;
    border: none;
    color: #ffffff;
    background: none;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 8.8%;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 5%;
  }
  @media screen and (max-width: 768px) {
    .menuAbrir {
      display: block;
    }
    nav {
      display: none;
      position: fixed;
      top: 0;
      left: 20%;
      width: 80%;
      height: 100vh;
      background-color: #040404;
      border-left: 0.1rem solid #212121;
      z-index: 100;
      overflow-y: auto;
    }
    &.ativo {
      .menuFechar,
      .bgMobile {
        display: block;
      }
      nav {
        display: block;
        .menuFechar {
          position: absolute;
          top: 1.9rem;
          right: 5%;
        }
      }
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 3.2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 10rem 0 3rem;
    gap: 4rem;
  }
`;

export const ListItem = styled.li`
  a {
    position: relative;
    color: #eaeaea;
    text-transform: uppercase;
    font-family: "Work Sans", sans-serif;
    transition: all 0.3s;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 100%;
      height: 0.1rem;
      border-radius: 0.4rem;
      background-color: #9bf00b;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    @media (hover: hover) {
      &:hover {
        color: #9bf00b;
      }

      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;
