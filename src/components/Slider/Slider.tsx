import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination]} {...settings} onClick={(e) => console.log(e)}>
      {children}
    </Swiper>
  );
};

export default Slider;
