import { Project } from "@core/models/project";

export const PROJECTS: Project[] = [
  {
    title: "Restoration and Reforestation Observatory Dashboard",
    description:
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil.",
    thumbnail: "./assets/images/obs-thumb.png",
    link: "https://observatoriodarestauracao.org.br/app/dashboard",
    content:
      "The Observatory gathers field information with satellite data to provide an overview of the reforestation and restoration situation in all Brazilian biomes.",
    pictures: [
      "./assets/images/obs-thumb.png",
      "./assets/images/observatory/reforestation.png",
      "./assets/images/observatory/reforestation-by-state.png",
    ],
    role: "Data visualization developer",
    client: {
      name: "Coalizão Brasil",
      link: "https://www.coalizaobr.com.br/",
    },
    challenges:
      "The challenge of the project was to create friendlier charts to summarize all the data available at the Observatory.",
  },
  {
    title: "Cerrado Conservation Mechanism",
    description:
      "A platform to financially compensate soy producers in the Cerrado biome who give up their right to transform the legal reserve surplus into soy crops.",
    thumbnail: "",
    link: "https://psacerrado.com.br/",
    content: "",
    pictures: [],
    role: "Frontend engineer",
    client: {
      name: "Abiove",
      link: "https://abiove.org.br/",
    },
    challenges: "",
  },
  {
    title: "SIMFaz",
    description:
      "A intelligent web system to monitor environmental, social and financial risks in Agro.",
    thumbnail: "",
    link: "https://simfaz.agrosatelite.com.br/",
    content: "",
    pictures: [],
    role: "Frontend engineer",
    client: {
      name: "Agrosatélite",
      link: "https://www.agrosatelite.com.br/",
    },
    challenges: "",
  },
  {
    title: "Agroideal",
    description:
      "A free online, territorial intelligence system that supports decision-making and territorial assessment of socio-environmental risks.",
    thumbnail: "",
    link: "https://agroideal.org/",
    content: "",
    pictures: [],
    role: "Developer analyst",
    client: {
      name: "The Nature Conservancy",
      link: "https://www.nature.org/en-us/",
    },
    challenges: "",
  },
];
