import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectCardComponent } from "./project-card.component";
import { PROJECTS } from "@core/data/projects";
import { RouterTestingModule } from "@angular/router/testing";
import { ROUTES } from "src/app/app-routing.module";

describe("ProjectCardComponent", () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(ROUTES)],
      declarations: [ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    component.project = PROJECTS[0];
  });

  it("should create the Project Card", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'Restoration and Reforestation Observatory Dashboard'", () => {
    fixture.detectChanges();
    expect(element.querySelector(".project-card__title").textContent).toContain(
      "Restoration and Reforestation Observatory Dashboard"
    );
  });

  it("should have a description", () => {
    fixture.detectChanges();
    expect(
      element.querySelector(".project-card__description p:last-child")
        .textContent
    ).toContain(
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil."
    );
  });
});
