import { Project } from "@core/models/project";

export const PROJECTS: Project[] = [
  {
    title: "Restoration and Reforestation Observatory Dashboard",
    description:
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil.",
    thumbnail: "./assets/images/observatorio_thumbnail.png",
    link: "https://observatoriodarestauracao.org.br/app/dashboard",
    content:
      "The Observatory gathers field information with satellite data to provide an overview of the reforestation and restoration situation in all Brazilian biomes.",
    pictures: [],
    role: "Data visualization developer",
    client: {
      name: "Coalizão Brasil",
      link: "https://www.coalizaobr.com.br/",
    },
    challenges:
      "Creating friendly charts to summarize all the data available at the Observatory using only the existing endpoints was the biggest challenge for this project.",
  },
  {
    title: "Cerrado Conservation Mechanism",
    description:
      "A platform to financially compensate soy producers in the Cerrado biome who give up their right to transform the legal reserve surplus into soy crops.",
    thumbnail: "./assets/images/ccms_thumbnail.png",
    link: "https://psacerrado.com.br/",
    content: "",
    pictures: [],
    role: "Frontend engineer",
    client: {
      name: "Abiove",
      link: "https://abiove.org.br/",
    },
    challenges:
      "The client wanted a way to display some of the geographical data in their landing page. If we put a map taking the entire screen it would feel off. It was challenging trying to figure out how to present all the data in a more interactive way without using tools like openlayers or google maps. In the end, the client loved the end result!",
  },
  {
    title: "SIMFaz",
    description:
      "A intelligent web system to monitor environmental, social and financial risks in Agro.",
    thumbnail: "./assets/images/simfaz_thumbnail.png",
    link: "https://simfaz.agrosatelite.com.br/",
    content: "",
    pictures: [],
    role: "Frontend engineer",
    client: {
      name: "Agrosatélite",
      link: "https://www.agrosatelite.com.br/",
    },
    challenges:
      "SIMFaz is an ever growing farm monitoring system. The team has lots of ideas for the platform, we also have some clients using parts of the system that are more mature. Creating this product is what feels like doing a heart transplant, you have to keep it alive while making big changes. It is definitely challenging!",
  },
  {
    title: "Agroideal",
    description:
      "A free online, territorial intelligence system that supports decision-making and territorial assessment of socio-environmental risks.",
    thumbnail: "./assets/images/agroideal_thumbnail.png",
    link: "https://agroideal.org/",
    content: "",
    pictures: [],
    role: "Developer analyst",
    client: {
      name: "The Nature Conservancy",
      link: "https://www.nature.org/en-us/",
    },
    challenges:
      "Agroideal is one of Agrosatélite's oldest web app. It was made with technologies that I never worked with before and yet I had the challenge to give this system maintenance.",
  },
];
