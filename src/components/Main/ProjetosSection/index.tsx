import React from "react";
import { SwiperSlide, SwiperProps } from "swiper/react";
import Card from "./Card";
import { projects } from "./projetos";
import Slider from "../../Slider/Slider";
import { ModalProps } from "../../../types/ModalType";
import * as S from "./styles";

const setting: SwiperProps = {
  spaceBetween: 24,
  navigation: true,
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1000: {
      slidesPerView: 2,
    },
  },
};

interface ProjetosSectionProps {
  modal: (modalData: ModalProps) => void;
}

const ProjetosSection = ({modal}: ProjetosSectionProps) => {
  return (
    <S.Section id="projetos">
      <header>
        <h2>
          <span className="textoDestaque">Projetos</span> realizados
        </h2>
        <p>
          Aqui você encontra os projetos pessoais e desafios que eu realizei.
        </p>
      </header>
      <Slider settings={setting}>
        {projects.map(({ key, name, img, link, desc, repo, techs }) => (
          <SwiperSlide key={key}>
            <Card modal={modal} name={name} img={img} link={link} desc={desc} repo={repo} techs={techs}/>
          </SwiperSlide>
        ))}
      </Slider>
    </S.Section>
  );
};

export default ProjetosSection;
