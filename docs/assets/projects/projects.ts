import { Project } from "@core/models/project";

export const PROJECTS: Project[] = [
  {
    title: "SIMFaz",
    description:
      "An intelligent web system to monitor environmental, social and financial risks in Agro.",
    thumbnail: "./assets/images/simfaz_thumbnail.webp",
    link: "https://simfaz.agrosatelite.com.br/",
    content:
      "An intelligent web system to monitor environmental, social and financial risks in Agro. SIMFaz presents information about crops and socioenvironmental compliance of farms in a user friendly interface. This data is also available for clients via APIs.",
    pictures: [],
    role: "Analyst developer",
    client: {
      name: "Agrosatélite",
      link: "https://www.agrosatelite.com.br/",
    },
    challenges:
      "SIMFaz is an ever growing farm monitoring system. The team has lots of ideas for the platform. Our biggest challenge is bringing each new idea to life while maintaining the existing functionalities that bring the most value to our userbase.",
  },
  {
    title: "Cerrado Conservation Mechanism",
    description:
      "A platform to financially compensate soy producers in the Cerrado biome who give up their right to transform the legal reserve surplus into soy crops.",
    thumbnail: "./assets/images/ccms_thumbnail.webp",
    link: "https://psacerrado.com.br/",
    content:
      "A platform to financially compensate soy producers in the Cerrado biome who give up their right to transform the legal reserve surplus into soy crops.",
    pictures: [],
    role: "Frontend engineer",
    client: {
      name: "Abiove",
      link: "https://abiove.org.br/",
    },
    challenges:
      "Abiove wanted a way to display some of the geographical data in their landing page. The initial idea was to have an interactable map taking the entire screen, but we managed to do something much better than that! It was challenging trying to figure out how to present all the data in a more interactive way without using tools like openlayers or google maps. In the end, the client loved the end result!",
  },
  {
    title: "Restoration and Reforestation Observatory Dashboard",
    description:
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil.",
    thumbnail: "./assets/images/observatorio_thumbnail.webp",
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
];
