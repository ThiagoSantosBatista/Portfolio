import React from "react";
import { ReactComponent as Copyright } from "../../assets/svgs/copyright.svg";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <Copyright />
      <p>
        2023 | <span className="nome">Thiago Batista</span>
      </p>
    </S.Footer>
  );
};

export default Footer;
