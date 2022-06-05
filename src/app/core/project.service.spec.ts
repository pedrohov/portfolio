import { TestBed } from "@angular/core/testing";
import { PROJECTS } from "./data/projects";
import { ProjectService } from "./project.service";

describe("ProjectService", () => {
  let projectService: ProjectService;
  let project = PROJECTS[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService],
    }).compileComponents();

    projectService = TestBed.inject(ProjectService);
  });

  it("should create the Project service", () => {
    expect(projectService).toBeTruthy();
  });

  it("should fetch all Projects", () => {
    let projects = [];
    projectService.getProjects().subscribe((p) => (projects = p));
    expect(projects).toEqual(PROJECTS);
  });

  it("should fetch a single Projects", () => {
    let proj;
    projectService.getProject(project.title).subscribe((p) => (proj = p));
    expect(proj).toEqual(project);
  });
});
