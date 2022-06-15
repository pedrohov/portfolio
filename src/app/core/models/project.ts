import { Client } from "./client";

export class Project {
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  pictures: string[];
  challenges: string;
  link: string;
  role: string;
  client?: Client;
}
