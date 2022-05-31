import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PROJECTS } from "./data/projects";
import { Project } from "./models/project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(title: string): Observable<Project> {
    return of(PROJECTS.find((project) => project.title === title));
  }
}
