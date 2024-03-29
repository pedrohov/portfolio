import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { PROJECTS } from "src/assets/projects/projects";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { PortfolioComponent } from "./portfolio.component";

describe("PortfolioComponent", () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [PortfolioComponent, ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
  });

  it("should create the Portfolio", () => {
    expect(component).toBeTruthy();
  });

  it("should fetch all projects", () => {
    let projects = [];
    component.getProjects();
    component.projects$.subscribe((p) => (projects = p));
    fixture.detectChanges();
    expect(projects).toEqual(PROJECTS);
    const sections = fixture.debugElement.queryAll(
      By.directive(ProjectCardComponent)
    );
    expect(projects.length).toEqual(sections.length);
  });
});
