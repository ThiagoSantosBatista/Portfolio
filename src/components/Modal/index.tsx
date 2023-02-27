import React from "react";
import { ReactComponent as CloseModal } from "../../assets/svgs/closeModal.svg";
import { ModalFunProps } from "../../types/ModalType";
import * as S from "./styles";

const Modal = ({ modal, name, desc, repo, techs }: ModalFunProps) => {
  return (
    <S.Background>
      <S.ModalDiv>
        <h2>{name}</h2>
        <ul>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{desc}</p>
        <a href={repo} target="_blank">
          Repositório
        </a>
        <button onClick={() => modal(null)}>
          <CloseModal />
        </button>
      </S.ModalDiv>
    </S.Background>
  );
};

export default Modal;
