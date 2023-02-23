import React from "react";
import * as S from "./styles";
import Curriculo from '../../../../assets/pdf/curriculo.pdf'

interface ButtonProps {
  cv?: boolean;
  text: string;
}

const SobreButton = ({ cv, text }: ButtonProps) => {
  {
    if (cv) {
      return <S.Button as="a" href={Curriculo} cv={cv} download>{text}</S.Button>;
    }
  }
  return <S.Button as='a' href='#projetos'>{text}</S.Button>;
};

export default SobreButton;
