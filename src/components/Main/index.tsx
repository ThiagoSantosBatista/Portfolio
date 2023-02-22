import { useState } from "react";
import Modal from "../Modal";
import HeroSection from "./HeroSection";
import ProjetosSection from "./ProjetosSection";
import SkillsSection from "./SkillsSection";
import SobreSection from "./SobreSection";
import TecnologiasSection from "./TecnologiasSection";
import { ModalProps } from "../../types/ModalType";
import * as S from "./styles";
import ContatoSection from "./ContatoSection";

const Main = () => {
  const [modal, setModal] = useState<ModalProps | null>(null);

  function changeModal(modalData: ModalProps | null) {
    if (modal) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setModal(modalData);
  }

  return (
    <>
      <S.Main>
        <HeroSection />
        <SobreSection />
        <SkillsSection />
        <TecnologiasSection />
        <ProjetosSection modal={changeModal} />
        <ContatoSection />
      </S.Main>
      {modal && <Modal modal={changeModal} {...modal} />}
    </>
  );
};

export default Main;
