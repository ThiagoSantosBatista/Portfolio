import React from "react";
import { ModalProps } from "../../../../types/ModalType";
import * as S from "./styles";

interface CardProps {
  modal: (modalData: ModalProps) => void;
  name: string;
  img: string;
  link: string;
  desc: string;
  repo: string;
  techs: string[];
}

const Card = ({ modal, name, img, link, desc, repo, techs }: CardProps) => {

  const ModalData = {
    name: `${name}`,
    desc: `${desc}`,
    repo: `${repo}`,
    techs: [...techs],
  };

  return (
    <S.Card>
      <img src={img} alt="imagem do projeto" />
      <S.CardContent>
        <h3>{name}</h3>
        <a href={link} target="_blank" className="demoBtn" aria-label="Link para visualizar o projeto">
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
