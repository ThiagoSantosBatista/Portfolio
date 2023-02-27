import React from "react";
import { ReactComponent as ResponsivoSvg } from "../../../assets/svgs/skillsResponsivo.svg";
import { ReactComponent as SemanticoSvg } from "../../../assets/svgs/skillsSemantico.svg";
import { ReactComponent as SEOSvg } from "../../../assets/svgs/skillsSEO.svg";
import * as S from "./styles";

const SkillsSection = () => {
  return (
    <S.Section>
      <S.List>
        <S.ListItem>
          <ResponsivoSvg />
          <h3>Sites responsivos</h3>
          <p>
            Crio sites que são adaptados a qualquer tamanho de tela, permitindo
            ao usuário a mesma experiência em telas de dimensões diferentes.
          </p>
        </S.ListItem>
        <S.ListItem>
          <SemanticoSvg />
          <h3>HTML semântico</h3>
          <p>
            Utilizo elementos semânticos para estruturar as páginas web,
            melhorando a acessibilidade e o SEO do site.
          </p>
        </S.ListItem>
        <S.ListItem>
          <SEOSvg />
          <h3>Técnicas de SEO </h3>
          <p>
            Possuo conhecimento de técnicas de SEO para alcançar um bom
            posicionamento nos mecanismos de busca.
          </p>
        </S.ListItem>
      </S.List>
    </S.Section>
  );
};

export default SkillsSection;
