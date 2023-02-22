import React from "react";
import { ReactComponent as HTML } from "../../../assets/svgs/html.svg";
import { ReactComponent as CSS } from "../../../assets/svgs/css.svg";
import { ReactComponent as JavaScript } from "../../../assets/svgs/javascript.svg";
import { ReactComponent as ReactJS } from "../../../assets/svgs/reactjs.svg";
import { ReactComponent as TypeScript } from "../../../assets/svgs/typescript.svg";
import { ReactComponent as SASS } from "../../../assets/svgs/sass.svg";
import { ReactComponent as Git } from "../../../assets/svgs/git.svg";
import { ReactComponent as StyledComponents } from "../../../assets/svgs/styled.svg";
import * as S from "./styles";

const TecnologiasSection = () => {
  return (
    <S.Section>
      <h2>
        Essas são as <span className="textoDestaque">tecnologias</span> que eu
        <span className="textoDestaque"> possuo conhecimento</span>
      </h2>
      <S.List>
        <S.ListItem>
          <HTML />
          <h3>HTML</h3>
        </S.ListItem>
        <S.ListItem>
          <CSS />
          <h3>CSS</h3>
        </S.ListItem>
        <S.ListItem>
          <JavaScript />
          <h3>JavaScript</h3>
        </S.ListItem>
        <S.ListItem>
          <ReactJS />
          <h3>ReactJS</h3>
        </S.ListItem>
        <S.ListItem>
          <TypeScript />
          <h3>TypeScript</h3>
        </S.ListItem>
        <S.ListItem>
          <SASS />
          <h3>SASS/SCSS</h3>
        </S.ListItem>
        <S.ListItem>
          <Git />
          <h3>Git</h3>
        </S.ListItem>
        <S.ListItem>
          <StyledComponents />
          <h3>Styled Components</h3>
        </S.ListItem>
      </S.List>
    </S.Section>
  );
};

export default TecnologiasSection;
