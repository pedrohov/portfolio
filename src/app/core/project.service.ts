import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { PROJECTS } from "../../assets/projects/projects";
import { Project } from "./models/project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(title: string): Observable<Project | undefined> {
    const project = PROJECTS.find((project) => project.title === title);
    if (!project) return throwError(`Project ${title} not found`);
    return of(project);
  }

  getNextProjectAfter(project: Project): Observable<Project | undefined> {
    return of(PROJECTS[PROJECTS.indexOf(project) + 1] || PROJECTS[0]);
  }
}
