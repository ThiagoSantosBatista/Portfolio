import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
      <Swiper
        modules={[Navigation, A11y]}
        {...settings}
      >
        {children}
      </Swiper>
  );
};

export default Slider;
