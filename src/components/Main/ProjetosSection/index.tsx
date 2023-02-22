import React from "react";
import { SwiperSlide, SwiperProps } from "swiper/react";
import Card from "./Card";
import { projects } from "./projetos";
import * as S from "./styles";
import Slider from "../../Slider/Slider";

const setting: SwiperProps = {
  spaceBetween: 24,
  navigation: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
};

const ProjetosSection = () => {
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
        {projects.map(({ name, url }) => (
          <SwiperSlide>
            <Card name={name} url={url} />
          </SwiperSlide>
        ))}
      </Slider>
    </S.Section>
  );
};

export default ProjetosSection;
