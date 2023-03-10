import React from "react";
import { ReactComponent as ArrowDown } from "../../../assets/svgs/arrowDown.svg";
import * as S from "./styles";

const HeroSection = () => {
  return (
    <S.Section id="home">
      <h1>
        Meu nome é <span className="textoDestaque">Thiago</span> e eu sou
        <span className="textoDestaque"> desenvolvedor Front-End</span>
      </h1>
      <ArrowDown />
    </S.Section>
  );
};

export default HeroSection;
