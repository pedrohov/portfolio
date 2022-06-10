import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SIDE_PROJECTS } from "./data/side-projects";
import { SideProject } from "./models/side-project";

@Injectable({
  providedIn: "root",
})
export class SideProjectService {
  constructor() {}

  getSideProjects(): Observable<SideProject[]> {
    return of(SIDE_PROJECTS);
  }
}
