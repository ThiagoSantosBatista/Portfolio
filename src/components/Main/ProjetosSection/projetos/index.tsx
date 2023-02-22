import React from "react";
import Music from "../../../../assets/imgs/music.png";
import Newshomepage from "../../../../assets/imgs/newshomepage.png";
import Art from "../../../../assets/imgs/art.png";
import Pets from "../../../../assets/imgs/pets.png";
import Foodjp from "../../../../assets/imgs/foodjp.png";
import Jordan from "../../../../assets/imgs/jordan.png";
import Blog from "../../../../assets/imgs/blog.png";
import Login from "../../../../assets/imgs/login.png";
import Previsao from "../../../../assets/imgs/previsao.png";
import Loopstudios from "../../../../assets/imgs/loopstudios.png";
import Listas from "../../../../assets/imgs/listas.png";
import Chihiro from "../../../../assets/imgs/chihiro.png";
import Icecream from "../../../../assets/imgs/icecream.png";
import Homeyou from "../../../../assets/imgs/homeyou.png";
import Loki from "../../../../assets/imgs/loki.png";
import Logincod from "../../../../assets/imgs/logincod.png";
import Tsbfoods from "../../../../assets/imgs/tsbfoods.png";
import Calculadora from "../../../../assets/imgs/calculadora.png";

export const projects = [
  {
    key: 1,
    name: "Music",
    img: `${Music}`,
    link: "https://tsb-music.netlify.app/",
    desc: `Esse projeto trata-se de uma landing page de uma empresa fictícia chamada "Music" que ofereçe o serviço de streaming de música.`,
    repo: "https://github.com/ThiagoSantosBatista/Music",
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
  {
    key: 2,
    name: "News Homepage",
    img: `${Newshomepage}`,
    link: "https://tsb-newshomepage.netlify.app/",
    desc: "Esse projeto é um desafio do site Frontend Mentor, onde você deve criar a página de acordo com o design disponibilizado. O objetivo desse desafio consiste em construir a página inicial de um site de notícias.",
    repo: "https://github.com/ThiagoSantosBatista/Frontend-Mentor/tree/master/11-newshomepage",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 3,
    name: "Login/Cadastro.",
    img: `${Login}`,
    link: "https://tsb-login.netlify.app/",
    desc: "Esse projeto trata-se de uma página onde o usuário efetuaria o login e o cadastro para acessar o site.",
    repo: "https://github.com/ThiagoSantosBatista/telaLoginCadastro",
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
  {
    key: 4,
    name: "Art.",
    img: `${Art}`,
    link: "https://tsb-codelandia26.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma landing page.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-26",
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
  {
    key: 5,
    name: "Pets",
    img: `${Pets}`,
    link: "https://tsb-pets.netlify.app/",
    desc: `Esse projeto trata-se de uma landing page para uma clínica fictícia de cuidados de animais domésticos chamada "Pets".`,
    repo: "https://github.com/ThiagoSantosBatista/Pets",
    techs: ['HTML', 'CSS', 'JS', 'SCSS'],
  },
  {
    key: 6,
    name: "HomeYou",
    img: `${Homeyou}`,
    link: "https://tsb-codelandia25.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma landing page. ",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-25",
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
  {
    key: 7,
    name: "Previsão do Tempo",
    img: `${Previsao}`,
    link: "https://tsb-previsaodotempo.netlify.app/",
    desc: "Esse projeto trata-se de um site para consultar o tempo, onde o usuário pesquisa pelo nome da cidade e obtém o retorno dos dados atuais do tempo.",
    repo: "https://github.com/ThiagoSantosBatista/previsaoDoTempo",
    techs: ['ReactJS', 'TypeScript', 'Styled Components', 'API'],
  },
  {
    key: 8,
    name: "FoodJP",
    img: `${Foodjp}`,
    link: "https://tsb-codelandia27.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma landing page.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-27",
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
  {
    key: 9,
    name: "Blog",
    img: `${Blog}`,
    link: "https://tsb-codelandia01.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma página de um blog fictício.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-01",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 10,
    name: "Listas de Tarefas",
    img: `${Listas}`,
    link: "https://tsb-listasdetarefas.netlify.app/",
    desc: "Esse projeto trata-se de uma página que permite criar listas e adicionar tarefas, onde o usuário consegue criar diversas listas e adicionar as tarefas em seus respectivos temas.",
    repo: "https://github.com/ThiagoSantosBatista/listasDeTarefas",
    techs: ['HTML', 'CSS', 'JS', 'SCSS'],
  },
  {
    key: 11,
    name: "JordanShoes",
    img: `${Jordan}`,
    link: "https://tsb-codelandia02.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma página de uma loja fictícia que vende tênis.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-02",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 12,
    name: "Loopstudios",
    img: `${Loopstudios}`,
    link: "https://tsb-loopstudios.netlify.app/",
    desc: "Esse projeto é um desafio do site Frontend Mentor, onde você deve criar a página de acordo com o design disponibilizado. O objetivo desse desafio consiste em criar uma landing page.",
    repo: "https://github.com/ThiagoSantosBatista/Frontend-Mentor/tree/master/09-Loopstudios",
    techs: ['HTML', 'CSS', 'JS', 'SCSS'],
  },
  {
    key: 13,
    name: "Studio Ghibli",
    img: `${Chihiro}`,
    link: "https://tsb-codelandia05.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma página de apresentação do filme “A Viagem de Chihiro”, onde o usuário consegue assistir o trailer e também ser redirecionado para assistir o filme.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-05",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 14,
    name: "IceCream",
    img: `${Icecream}`,
    link: "https://tsb-icecream.netlify.app/",
    desc: `Esse projeto trata-se de uma landing page para uma sorveteria fictícia chamada "IceCream".`,
    repo: "https://github.com/ThiagoSantosBatista/IceCream",
    techs: ['HTML', 'CSS', 'JS', 'SCSS'],
  },
  {
    key: 15,
    name: "Loki",
    img: `${Loki}`,
    link: "https://tsb-codelandia06.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma página de apresentação do filme “Loki”, onde o usuário consegue assistir o trailer e também ser redirecionado para assistir o filme.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-06",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 16,
    name: "Login",
    img: `${Logincod}`,
    link: "https://tsb-codelandia04.netlify.app/",
    desc: "Esse projeto é um desafio da comunidade Codelândia, onde você deve criar a página de acordo com o design disponibilizado no Figma. O objetivo desse desafio consiste em criar uma página de login.",
    repo: "https://github.com/ThiagoSantosBatista/Codelandia/tree/main/desafio-04",
    techs: ['ReactJS', 'Styled Components'],
  },
  {
    key: 17,
    name: "TSBFoods",
    img: `${Tsbfoods}`,
    link: "https://tsbfoods.netlify.app/",
    desc: `Esse projeto trata-se de uma landing page para uma empresa fictícia de delivery chamada "TSBFoods".`,
    repo: "https://github.com/ThiagoSantosBatista/deliveryLandingPage",
    techs: ['HTML', 'CSS', 'JS', 'SCSS'],
  },
  {
    key: 18,
    name: "Calculadora",
    img: `${Calculadora}`,
    link: "https://tsb-calculadora.netlify.app/",
    desc: "Esse projeto trata-se de uma calculadora simples que tem como funcionalidade realizar operações matemáticas básicas: adição, subtração, multiplicação e divisão, além disso, possui outras funções como: ligar/desligar, backspace e limpar toda a operação.",
    repo: "https://github.com/ThiagoSantosBatista/calculadora",
    techs: ['HTML', 'CSS', 'JS'],
  },
];
