import React from "react";
import * as S from "./styles";

interface ButtonProps {
  link?: boolean;
  text: string;
}

const SobreButton = ({ link, text }: ButtonProps) => {
  {
    if (link) {
      return <S.Button as="a" href='#projetos' link={link}>{text}</S.Button>;
    }
  }
  return <S.Button as='a' href='#projetos'>{text}</S.Button>;
};

export default SobreButton;
