import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PROJECTS } from "src/assets/projects/projects";
import { ROUTES } from "../app-routing.module";
import { ProjectDetailsComponent } from "./project-details.component";

describe("ProjectDetailsComponent", () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(ROUTES)],
      declarations: [ProjectDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    component.project = PROJECTS[0];
  });

  it("should create the Project Detail component", () => {
    expect(component).toBeTruthy();
  });

  it("should have a title", () => {
    fixture.detectChanges();
    expect(element.querySelector("h1").textContent).toContain(
      PROJECTS[0].title
    );
  });

  it("should have a content description", () => {
    fixture.detectChanges();
    expect(element.querySelector("h2").textContent).toEqual(
      PROJECTS[0].content
    );
  });
});
