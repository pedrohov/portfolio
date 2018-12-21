import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  projects: Project[] = [
      {id: 1, title: 'SLAM Prototype', description: 'Projeto 01', tags: [], thumbnail: './assets/images/slam-thumb.jpg'},
      {id: 2, title: 'IFlight Controller', description: 'Projeto 02', tags: [], thumbnail: './assets/images/iflight-thumb.jpeg'},
      {id: 3, title: 'Scrabble', description: 'Projeto 03', tags: [], thumbnail: './assets/images/scrabble-thumb.jpg'},
      {id: 4, title: 'PRYSM', description: 'Projeto 04', tags: [], thumbnail: './assets/images/prysm-thumb.jpg'},
      {id: 5, title: 'Cayman Solar', description: 'Projeto 05', tags: [], thumbnail: './assets/images/caymans-thumb.jpg'},
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

}
