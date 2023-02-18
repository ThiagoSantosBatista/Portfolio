import React from "react";
import Foto from "../../../assets/imgs/foto.png";
import SobreButton from "./SobreButton";
import * as S from "./styles";

const SobreSection = () => {
  return (
    <S.Section>
      <S.Picture>
        <div></div>
        <img src={Foto} alt="Minha Foto" />
      </S.Picture>
      <S.ContentDiv>
        <h2>
          Um pouco <span className="textoDestaque">sobre mim</span>
        </h2>
        <p>
          Meu nome é Thiago, tenho 18 anos, sou Desenvolvedor Front-End Júnior e
          estou cursando ensino superior em Análise e Desenvolvimento de
          Sistemas. Iniciei meus estudos em desenvolvimento web no início de
          2022 e desde então venho em aprendizado constante.
        </p>
        <p>
          Atualmente estou buscando uma oportunidade na área, onde seja capaz de
          aplicar e melhorar meus conhecimentos, contribuindo com os objetivos
          da empresa.
        </p>
        <S.ButtonBox>
          <SobreButton link={true} text="Download CV" />
          <SobreButton text="Ver Projetos" />
        </S.ButtonBox>
      </S.ContentDiv>
    </S.Section>
  );
};

export default SobreSection;
