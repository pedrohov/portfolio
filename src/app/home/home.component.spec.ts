import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ProjectService } from "@core/project.service";
import { SIDE_PROJECTS } from "src/assets/projects/side-projects";
import { ROUTES } from "../app-routing.module";
import { MapComponent } from "../map/map.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { SideProjectComponent } from "../side-project/side-project.component";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;
  let projectService: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
      declarations: [
        HomeComponent,
        PortfolioComponent,
        SideProjectComponent,
        ProjectCardComponent,
        MapComponent,
      ],
      providers: [ProjectService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    projectService = TestBed.inject(ProjectService);
  });

  it("should create the Home Page", () => {
    expect(component).toBeTruthy();
  });

  it("should fetch all Side Projects", async () => {
    fixture.detectChanges();
    const projects = await component.sideProjects$.toPromise();
    expect(projects.length).toBe(SIDE_PROJECTS.length);
    expect(document.querySelectorAll("[side-project]").length).toBe(
      SIDE_PROJECTS.length
    );
  });

  it("should scroll to the projects section", () => {
    fixture.detectChanges();
    const projectsSectionSpy = spyOn(
      component.projectsSection.nativeElement,
      "scrollIntoView"
    );
    component.goToProjects();
    expect(projectsSectionSpy).toHaveBeenCalled();
  });
});
