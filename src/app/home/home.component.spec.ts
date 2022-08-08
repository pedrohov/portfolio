import { CommonModule } from "@angular/common";
import { ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ProjectService } from "@core/project.service";
import { take } from "rxjs/operators";
import { PROJECTS } from "src/assets/projects/projects";
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

  it("should have a Header", () => {
    fixture.detectChanges();
    const header = element.querySelector("h1");
    expect(header).toBeTruthy();
    expect(header.innerText).toContain(
      "Developing GIS apps and visualization tools for geospatial datasets"
    );
  });

  it("should have a Subtitle", () => {
    fixture.detectChanges();
    const subtitle = element.querySelector("h2") as HTMLElement;
    expect(subtitle).toBeTruthy();
    expect(subtitle.innerText).toContain(
      "Hi! I’m Pedro, I build solutions using the web and other fun stuff."
    );
  });

  it("should fetch all Side Projects", async () => {
    fixture.detectChanges();
    const projects = await component.sideProjects$.toPromise();
    expect(projects.length).toBe(SIDE_PROJECTS.length);
    expect(document.querySelectorAll("[side-project]").length).toBe(
      SIDE_PROJECTS.length
    );
  });

  it("should change the page title", async () => {
    fixture.detectChanges();
    expect(document.title).toBe("Portfolio - Pedro Veloso");
  });

  // it("should scroll to the projects section", () => {
  //   fixture.detectChanges();
  //   component.goToProjects();
  //   expect(window.scrollY).toBeGreaterThan(
  //     document.querySelector<HTMLElement>("app-portfolio").offsetTop
  //   );
  // });
});
