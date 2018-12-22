import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})

export class TagService {

  tags: Tag[] = [
    { name: 'Python', color: 'yellow' },
    { name: 'JavaScript', color: 'blue' },
    { name: 'HTML/CSS', color: 'green' },
    { name: 'WebSockets', color: 'red' }
  ];

  constructor() { }

  getTags(): Observable<Tag[]> {
    return of(this.tags);
  }

  getTag(name: string): Observable<Tag> {
    return of(this.tags.find(tag => tag.name === name));
  }

}
