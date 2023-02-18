import React from "react";
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Box>
        <Logo />
        <nav>
          <S.List>
            <S.ListItem>
              <a href="#home" aria-label="Atalho para a seção Home">
                Home
              </a>
            </S.ListItem>
            <S.ListItem>
              <a href="#sobre" aria-label="Atalho para a seção Home">
                Sobre
              </a>
            </S.ListItem>
            <S.ListItem>
              <a href="#projetos" aria-label="Atalho para a seção Home">
                Projetos
              </a>
            </S.ListItem>
            <S.ListItem>
              <a href="#contato" aria-label="Atalho para a seção Home">
                Contato
              </a>
            </S.ListItem>
          </S.List>
        </nav>
      </S.Box>
    </S.Header>
  );
};

export default Header;
