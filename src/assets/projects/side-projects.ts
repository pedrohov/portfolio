import { SideProject } from "@core/models/side-project";

export const SIDE_PROJECTS: SideProject[] = [
  {
    title: "IFlightController",
    description:
      "Prototype of a flight controller using Raspberry Pi. It features a web interface to control the quadcopter via websockets. The server reads sensor data and attempts to stabilize the quadcopter by controlling the rotation speed of each motor",
    link: "https://github.com/pedrohov/IFlightController",
  },
  {
    title: "Raspberry Pi Localization and Mapping",
    description:
      "Prototype of a mapping robot using localization and mapping techniques to create indoor raster maps. Developed as graduation dissertation for Computer science",
    link: "https://github.com/pedrohov/rpi-localization-mapping",
  },
];
