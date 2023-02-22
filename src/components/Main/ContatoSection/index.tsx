import React from "react";
import { ReactComponent as Telefone } from "../../../assets/svgs/telefone.svg";
import { ReactComponent as Email } from "../../../assets/svgs/email.svg";
import { ReactComponent as Linkedin } from "../../../assets/svgs/linkedin.svg";
import { ReactComponent as Github } from "../../../assets/svgs/github.svg";
import * as S from "./styles";

const ContatoSection = () => {
  return (
    <S.Section id="contato">
      <header>
        <h2>
          Entre em <span className="textoDestaque">contato</span> comigo
        </h2>
      </header>
      <S.List>
        <S.ListItem>
          <Telefone />
          <h3>Telefone</h3>
          <p>(11) 99506-2929</p>
        </S.ListItem>
        <S.ListItem>
          <Email />
          <h3>Email</h3>
          <p>tsb.thiagobatista@gmail.com</p>
        </S.ListItem>
        <S.ListItem>
          <Linkedin />
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/thiago-santos-batista/" target="_blank">Thiago Santos Batista</a>
        </S.ListItem>
        <S.ListItem>
          <Github />
          <h3>GitHub</h3>
          <a href="https://github.com/ThiagoSantosBatista" target="_blank">@ThiagoSantosBatista</a>
        </S.ListItem>
      </S.List>
    </S.Section>
  );
};

export default ContatoSection;
