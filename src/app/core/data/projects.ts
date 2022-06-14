import { Project } from "@core/models/project";

export const PROJECTS: Project[] = [
  {
    title: "Restoration and Reforestation Observatory Dashboard",
    description:
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil.",
    thumbnail: "./assets/images/obs-thumb.png",
    website: "https://observatoriodarestauracao.org.br/app/dashboard",
    content:
      "The Observatory gathers field information with satellite data to provide an overview of the reforestation and restoration situation in all Brazilian biomes. The challenge of the project was to create friendlier charts to summarize all the data available at the Observatory.",
    pictures: [
      "./assets/images/obs-thumb.png",
      "./assets/images/observatory/reforestation.png",
      "./assets/images/observatory/reforestation-by-state.png",
    ],
  },
  {
    title: "IFlightController",
    description:
      "Controlador de voo para drones quadrirotores desenvolvido em Python e JavaScript com comunicação por WebSockets.",
    thumbnail: "./assets/images/iflight-thumb.jpg",
    website: "https://github.com/pedrohov/IFlightController",
    content:
      "Implementação de um sistema de controle e estabilidade para quadrirotores. Foi desenvolvido um algoritmo de estabilidade utilizando controladores PID sobre a plataforma Raspberry Pi. O controlador foi desenvolvido em JavaScript e HTML/CSS utilizando a tag <canvas> para desenhar os joysticks.",
    pictures: [
      "./assets/images/iflightcontroller/prototipo.jpg",
      "./assets/images/iflightcontroller/interface_controle.png",
      "./assets/images/iflightcontroller/arquitetura.png",
    ],
  },
  {
    title: "Scrabble",
    description:
      "Implementação de uma inteligência artificial para jogar o famoso jogo de palavras cruzadas Scrabble. Tanto o jogo quanto a IA foram desenvolvidos em Python.",
    thumbnail: "./assets/images/scrabble-thumb.jpg",
    website: "https://github.com/pedrohov/Scrabble",
    content:
      "Scrabble é um jogo de tabuleiro em que os jogadores procuram marcar pontos formando palavras válidas. As palavras formadas são sempre ortogonalmente interligadas a outras palavras no tabuleiro. Foi projetada e desenvolvida uma aplicação para gerenciar e jogar partidas de Scrabble entre dois jogadores que podem ser tanto usuários humanos quanto computadores. O computador é capaz de consultar um dicionário de aproximadamente 400.000 palavras de forma eficiente, descobrindo a melhor jogada possível em milésimos de segundos.",
    pictures: [
      "./assets/images/scrabble/scrabble1.png",
      "./assets/images/scrabble/scrabble2.png",
    ],
  },
  {
    title: "PRYSM",
    description:
      "Jogo de plataforma 2D minimalista ilustrado com formas geométricas. Desenvolvido em JavaScript/Phaser e empacotado para Android com Cordova Apache.",
    thumbnail: "./assets/images/prysm-thumb.jpg",
    website: "https://www.youtube.com/watch?v=3uc9dal6t7E",
    content:
      "Jogos para browser sempre foram populares devido a sua facilidade de acesso, não precisam ser instalados e funcionam em qualquer dispositivo que possua um web browser. PRYSM está sendo desenvolvido com a framework Phaser para JavaScript e pode ser adicionado a qualquer página web. Tecnologias como Apache Cordova e Phonegap possibilitam que aplicativos desenvolvidos com tecnologia web possam ser exportados para dispositivos móveis como Android e iOS.",
    pictures: [
      "./assets/images/prysm/prysm1.png",
      "./assets/images/prysm/prysm2.png",
      "./assets/images/prysm/prysm3.png",
    ],
  },
  {
    title: "Sistema de Pedidos",
    description:
      "Protótipo de um sistema de pedidos para restaurantes. Permite ao cliente realizar pedidos por celular. O restaurante controla os pedidos de acordo com o tempo de espera. Desenvolvido em Arduino/Processing e React Native.",
    thumbnail: "./assets/images/sistemapedidos-thumb.jpg",
    website: "https://github.com/pedrohov/Sistemas-de-Pedidos",
    content:
      "Sistema de atendimento automatizado para restaurantes ou lanchonetes. Permite ao cliente realizar pedidos, e ao estabelecimento a gerenciar com melhor facilidade seus pedidos. Os clientes das mesas se comunicam com o sistema central, que apresenta uma interface desenvolvida utilizando a ferramenta Processing. O aplicativo de pedido foi desenvolvido com React Native, realizando a comunicação bluetooth com o pacote Bluetooth Classic.",
    pictures: [
      "./assets/images/pedidos/pedidos1.png",
      "./assets/images/pedidos/pedidos2.png",
    ],
  },
  {
    title: "Sistema para Gerenciamento de Lojas",
    description:
      "Sistema para gerenciar lojas e estabelecimentos de atendimento de pequeno e médio porte. Back end desenvolvido em Java, JPA e o banco de dados relacional MySQL. Segurança e autenticação com Spring Security.",
    thumbnail: "./assets/images/sistvendasjava-thumb.jpg",
    website: "https://github.com/pedrohov/Sistema-Web-de-Vendas-e-Atendimentos",
    content:
      "Desenvolvimento de um sistema com o objetivo de facilitar o gerenciamento dos clientes, dos produtos, das vendas e dos atendimentos de uma empresa. A persistência de dados é feita em um servidor - que pode ser local ou remoto - com um banco de dados. O projeto conta com sistema de autenticação com a framework Spring Security, permitindo diferentes tipos de usuários, como administradores e vendedores.",
    pictures: [
      "./assets/images/gerenciamentoJava/sistvendasjava2.png",
      "./assets/images/gerenciamentoJava/sistvendasjava3.png",
      "./assets/images/gerenciamentoJava/sistvendasjava4.png",
      "./assets/images/gerenciamentoJava/sistvendasjava5.png",
      "./assets/images/gerenciamentoJava/sistvendasjava6.png",
    ],
  },
];
