import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TAGS } from "./data/tags";
import { Tag } from "./models/tag";

@Injectable({
  providedIn: "root",
})
export class TagService {
  constructor() {}

  getTags(): Observable<Tag[]> {
    return of(TAGS);
  }

  getTag(name: string): Observable<Tag> {
    return of(TAGS.find((tag) => tag.name === name));
  }
}
