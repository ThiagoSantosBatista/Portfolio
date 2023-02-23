import React from "react";
import { ModalProps } from "../../../../types/ModalType";
import * as S from "./styles";

interface CardProps {
  modal: (modalData: ModalProps) => void;
  name: string;
  img: string;
  webp: string;
  link: string;
  desc: string;
  repo: string;
  techs: string[];
}

const Card = ({
  modal,
  name,
  img,
  webp,
  link,
  desc,
  repo,
  techs,
}: CardProps) => {
  const ModalData = {
    name: `${name}`,
    desc: `${desc}`,
    repo: `${repo}`,
    techs: [...techs],
  };

  return (
    <S.Card>
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={img} alt="imagem do projeto" />
      </picture>
      <S.CardContent>
        <h3>{name}</h3>
        <a
          href={link}
          target="_blank"
          className="demoBtn"
          aria-label="Link para visualizar o projeto"
        >
          Visualizar
        </a>
        <button className="sobreBtn" onClick={() => modal(ModalData)}>
          Sobre
        </button>
      </S.CardContent>
    </S.Card>
  );
};

export default Card;
