import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})

export class TagService {

  tags: Tag[] = [
    { name: 'Python', color: 'yellow', selected: true },
    { name: 'JavaScript', color: 'blue', selected: true },
    { name: 'HTML/CSS', color: 'green', selected: true },
    { name: 'WebSockets', color: 'red', selected: true },
    { name: 'React Native', color: 'red', selected: true },
    { name: 'Arduino', color: 'red', selected: true },
    { name: 'JPA/MySQL', color: 'red', selected: true },
    { name: 'Java', color: 'red', selected: true },
    { name: 'Angular 7', color: 'red', selected: true },
    { name: 'RESTful API', color: 'red', selected: true },
    { name: 'NeDB/MongoDB', color: 'red', selected: true }
  ];

  constructor() { }

  getTags(): Observable<Tag[]> {
    return of(this.tags);
  }

  getTag(name: string): Observable<Tag> {
    return of(this.tags.find(tag => tag.name === name));
  }

}
