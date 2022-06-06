import { CommonModule } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { PROJECTS } from "@core/data/projects";
import { TAGS } from "@core/data/tags";
import { ROUTES } from "../app-routing.module";
import { TagFilterPipe } from "./tag-filter.pipe";

describe("TagFilterPipe", () => {
  const pipe = new TagFilterPipe();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
    }).compileComponents();
  });

  it("filters Projects with a specific Tag", () => {
    const projects = PROJECTS;
    const tag = TAGS[0];
    expect(pipe.transform(projects, [tag]).length).toBe(2);
    expect(pipe.transform([PROJECTS[0]], [tag]).length).toBe(0);
  });

  it("filters falsy values with a specific Tag", () => {
    const tag = TAGS[0];
    expect(pipe.transform(undefined, [tag]).length).toBe(0);
    expect(pipe.transform([], [tag]).length).toBe(0);
    expect(pipe.transform(PROJECTS, null).length).toBe(PROJECTS.length);
    expect(pipe.transform(PROJECTS, []).length).toBe(PROJECTS.length);
  });
});
