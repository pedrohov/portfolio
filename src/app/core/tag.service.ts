import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
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

  getTag(name: string): Observable<Tag | undefined> {
    const tag = TAGS.find((tag) => tag.name === name);
    if (!tag) return throwError(`Tag ${name} not found`);
    return of(tag);
  }
}
