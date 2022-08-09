import { TestBed } from "@angular/core/testing";
import { throwError } from "rxjs";
import { PROJECTS } from "../../assets/projects/projects";
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

  it("should fetch a single Project", () => {
    spyOn(projectService, "getProject").and.callThrough();
    projectService.getProject(project.title).subscribe((p) => {
      expect(p).toEqual(project);
    });
    expect(projectService.getProject).toHaveBeenCalledWith(project.title);
  });

  it("should raise an error if the Project is not found", async () => {
    try {
      await projectService.getProject("Invalid").toPromise();
      fail("Get invalid project should throw an error");
    } catch (err) {
      expect(err).toBe("Project Invalid not found");
    }
  });

  it("should be able to get the next Project", async () => {
    spyOn(projectService, "getNextProjectAfter").and.callThrough();
    projectService.getNextProjectAfter(project).subscribe((p) => {
      expect(p).toBe(PROJECTS[1]);
    });
    expect(projectService.getNextProjectAfter).toHaveBeenCalledWith(project);
  });

  it("should get the first Project if there is no more projects in the list", async () => {
    const lastProject = PROJECTS[PROJECTS.length - 1];
    spyOn(projectService, "getNextProjectAfter").and.callThrough();
    projectService.getNextProjectAfter(lastProject).subscribe((p) => {
      expect(p).toBe(PROJECTS[0]);
    });
    expect(projectService.getNextProjectAfter).toHaveBeenCalledWith(
      lastProject
    );
  });
});
