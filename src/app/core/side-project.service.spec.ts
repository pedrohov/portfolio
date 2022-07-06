import { TestBed } from "@angular/core/testing";
import { SIDE_PROJECTS } from "../../assets/projects/side-projects";
import { SideProjectService } from "./side-project.service";

describe("SideProjectService", () => {
  let sideProjectService: SideProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideProjectService],
    }).compileComponents();

    sideProjectService = TestBed.inject(SideProjectService);
  });

  it("should create the SideProject service", () => {
    expect(sideProjectService).toBeTruthy();
  });

  it("should fetch all Side Projects", () => {
    let sideProjects = [];
    sideProjectService.getSideProjects().subscribe((sp) => (sideProjects = sp));
    expect(sideProjects).toEqual(SIDE_PROJECTS);
  });
});
