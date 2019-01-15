import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  projects: Project[] = [
      {
        title: 'IFlightController',
        description: 'Controlador de voo para drones quadrirotores desenvolvido em Python e JavaScript com comunicação por WebSockets.',
        tags: ['Python', 'WebSockets', 'HTML Canvas'],
        thumbnail: './assets/images/iflight-thumb.jpg',
        website: 'https://github.com/pedrohov/IFlightController',
        content: 'Implementação de um sistema de controle e estabilidade para quadrirotores. Foi desenvolvido um algoritmo de estabilidade utilizando controladores PID sobre a plataforma Raspberry Pi. O controlador foi desenvolvido em JavaScript e HTML/CSS utilizando a tag <canvas> para desenhar os joysticks.',
        tech_concepts: ['Threads', 'WebSockets', 'Elemento <canvas>', 'Controlador PID', 'Comunicação Wi-Fi'],
        pictures: ['./assets/images/iflightcontroller/prototipo.jpg', './assets/images/iflightcontroller/interface_controle.png', './assets/images/iflightcontroller/arquitetura.png']
      },
      {
        title: 'Scrabble',
        description: 'Implementação de uma inteligência artificial para jogar o famoso jogo de palavras cruzadas Scrabble. Tanto o jogo quanto a IA foram desenvolvidos em python.',
        tags: ['Python'],
        thumbnail: './assets/images/scrabble-thumb.jpg',
        website: 'https://github.com/pedrohov/Scrabble',
        content: 'Scrabble é um jogo de tabuleiro em que os jogadores procuram marcar pontos formando palavras válidas. As palavras formadas são sempre ortogonalmente interligadas a outras palavras no tabuleiro. Foi projetada e desenvolvida uma aplicação para gerenciar e jogar partidas de Scrabble entre dois jogadores que podem ser tanto usuários humanos quanto computadores. O computador é capaz de consultar um dicionário de aproximadamente 400.000 palavras de forma eficiente, descobrindo a melhor jogada possível em milésimos de segundos.',
        tech_concepts: ['Backtracking', 'Estrutura de Dados', 'DAWG'],
        pictures: ['./assets/images/scrabble/scrabble1.png', './assets/images/scrabble/scrabble2.png']
      },
      {
        title: 'PRYSM',
        description: 'Jogo de plataforma 2D minimalista ilustrado com formas geométricas. Desenvolvido em JavaScript/Phaser e empacotado para Android com Cordova Apache.',
        tags: ['JavaScript'],
        thumbnail: './assets/images/prysm-thumb.jpg',
        website: 'https://www.youtube.com/watch?v=3uc9dal6t7E',
        content: 'Jogos para browser sempre foram populares devido a sua facilidade de acesso, não precisam ser instalados e funcionam em qualquer dispositivo que possua um web browser. PRYSM está sendo desenvolvido com a framework Phaser para JavaScript e pode ser adicionado a qualquer página web. Tecnologias como Apache Cordova e Phonegap possibilitam que aplicativos desenvolvidos com tecnologia web possam ser exportados para dispositivos móveis como Android e iOS.',
        tech_concepts: ['Apache Cordova', 'Dados em JSON', 'Controle Touchscreen/Mouse', 'Ads com Chartboost e Admob', 'Integração com API do Google Play', 'Sistema de Conquistas'],
        pictures: ['./assets/images/prysm/prysm1.png', './assets/images/prysm/prysm2.png', './assets/images/prysm/prysm3.png']
      },
      {
        title: 'Cayman Solar',
        description: 'Design e implementação da landing page da Cayman Solar. Desenvolvido com HTML/CSS e Bootstrap.',
        tags: ['HTML/CSS'],
        thumbnail: './assets/images/caymans-thumb.jpg',
        website: 'http://caymansolar.com.br/',
        content: 'Landing Page desenvolvida para aumentar a visibilidade online da Cayman Solar, mostrando os produtos, objetivo da empresa, localização e formas de contato para clientes interessados.',
        tech_concepts: ['Web design', 'Design responsivo'],
        pictures: []
      },
      {
        title: 'Sistema de Pedidos',
        description: 'Protótipo de um sistema de pedidos para restaurantes. Permite ao cliente realizar pedidos por celular. O restaurante controla os pedidos de acordo com o tempo de espera. Desenvolvido em Arduino/Processing e React Native.',
        tags: ['React Native', 'Arduino'],
        thumbnail: './assets/images/sistemapedidos-thumb.jpg',
        website: 'https://github.com/pedrohov/Sistemas-de-Pedidos',
        content: 'Sistema de atendimento automatizado para restaurantes ou lanchonetes. Permite ao cliente realizar pedidos, e ao estabelecimento a gerenciar com melhor facilidade seus pedidos. Os clientes das mesas se comunicam com o sistema central, que apresenta uma interface desenvolvida utilizando a ferramenta Processing. O aplicativo de pedido foi desenvolvido com React Native, realizando a comunicação bluetooth com o pacote Bluetooth Classic.',
        tech_concepts: ['Comunicação Bluetooth', 'Comunicação Serial', 'Display LCD', 'Buzzer'],
        pictures: ['./assets/images/pedidos/pedidos1.png', './assets/images/pedidos/pedidos2.png']
      }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(title: string): Observable<Project> {
    return of(this.projects.find(project => project.title === title));
  }

}
