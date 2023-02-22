import { useRef } from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import * as S from "./styles";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  function abrirMenu() {
    menuRef.current?.classList.add("ativo");
  }

  function fecharMenu() {
    if (menuRef.current?.classList.contains("ativo")) {
      menuRef.current?.classList.remove("ativo");
    }
  }

  return (
    <S.Header>
      <S.Box ref={menuRef}>
        <Logo />
        <span className="bgMobile"></span>
        <nav>
          <button
            className="btnHeader menuFechar"
            aria-label="Fechar Menu"
            aria-expanded="true"
            onClick={fecharMenu}
          >
            fechar
          </button>
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
        <button
          className="btnHeader menuAbrir"
          aria-label="Abrir Menu"
          aria-expanded="false"
          onClick={abrirMenu}
        >
          abrir
        </button>
      </S.Box>
    </S.Header>
  );
};

export default Header;
