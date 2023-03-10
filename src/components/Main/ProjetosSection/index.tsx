import React from "react";
import { SwiperSlide, SwiperProps } from "swiper/react";
import Card from "./Card";
import { projects } from "./projetos";
import Slider from "../../Slider/Slider";
import { ModalProps } from "../../../types/ModalType";
import * as S from "./styles";

const setting: SwiperProps = {
  spaceBetween: 24,
  allowTouchMove: false,
  navigation: true,
  noSwipingSelector: "button, a",
  pagination: {
    clickable: false,
    dynamicBullets: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
  },
};

interface ProjetosSectionProps {
  modal: (modalData: ModalProps) => void;
}

const ProjetosSection = ({ modal }: ProjetosSectionProps) => {
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
        {projects.map(({ key, name, img, webp, link, desc, repo, techs }) => (
          <SwiperSlide key={key}>
            <Card
              modal={modal}
              name={name}
              img={img}
              webp={webp}
              link={link}
              desc={desc}
              repo={repo}
              techs={techs}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </S.Section>
  );
};

export default ProjetosSection;
