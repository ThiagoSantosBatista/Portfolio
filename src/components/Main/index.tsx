import React from "react";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import SobreSection from "./SobreSection";
import * as S from "./styles";
import TecnologiasSection from "./TecnologiasSection";

const Main = () => {
  return (
    <S.Main>
      <HeroSection />
      <SobreSection />
      <S.Linha></S.Linha>
      <SkillsSection />
      <S.Linha></S.Linha>
      <TecnologiasSection />
      <S.Linha></S.Linha>
    </S.Main>
  );
};

export default Main;
