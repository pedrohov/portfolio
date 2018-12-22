import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  projects: Project[] = [
      {title: 'SLAM Prototype', description: 'Projeto 01', tags: ['Python', 'WebSockets'], thumbnail: './assets/images/slam-thumb.jpg'},
      {title: 'IFlight Controller', description: 'Projeto 02', tags: ['Python', 'WebSockets'], thumbnail: './assets/images/iflight-thumb.jpg'},
      {title: 'Scrabble', description: 'Projeto 03', tags: ['Python'], thumbnail: './assets/images/scrabble-thumb.jpg'},
      {title: 'PRYSM', description: 'Projeto 04', tags: ['JavaScript'], thumbnail: './assets/images/prysm-thumb.jpg'},
      {title: 'Cayman Solar', description: 'Projeto 05', tags: ['HTML/CSS'], thumbnail: './assets/images/caymans-thumb.jpg'},
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(title: string): Observable<Project> {
    return of(this.projects.find(project => project.title === title));
  }

}
