import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  projects: Project[] = [
      {
        title: 'SLAM Prototype',
        description: 'Projeto 01',
        tags: ['Python', 'WebSockets'],
        thumbnail: './assets/images/slam-thumb.jpg',
        website: 'github.com/pedrohov'
      },
      {
        title: 'IFlight Controller',
        description: 'Projeto 02',
        tags: ['Python', 'WebSockets'],
        thumbnail: './assets/images/iflight-thumb.jpg',
        website: 'github.com/pedrohov'
      },
      {
        title: 'Scrabble',
        description: 'Projeto 03',
        tags: ['Python'],
        thumbnail: './assets/images/scrabble-thumb.jpg',
        website: 'https://github.com/pedrohov/Scrabble'
      },
      {
        title: 'PRYSM',
        description: 'Projeto 04',
        tags: ['JavaScript'],
        thumbnail: './assets/images/prysm-thumb.jpg',
        website: 'https://www.youtube.com/watch?v=3uc9dal6t7E'
      },
      {
        title: 'Cayman Solar',
        description: 'Projeto 05',
        tags: ['HTML/CSS'],
        thumbnail: './assets/images/caymans-thumb.jpg',
        website: 'http://caymansolar.com.br/'
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
