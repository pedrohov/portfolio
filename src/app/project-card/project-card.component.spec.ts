import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { ProjectCardComponent } from "./project-card.component";
import { PROJECTS } from "@core/data/projects";
import { RouterTestingModule } from "@angular/router/testing";
import { ROUTES } from "src/app/app-routing.module";
import { Router } from "@angular/router";

describe("ProjectCardComponent", () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let element: HTMLElement;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(ROUTES)],
      declarations: [ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    component.project = PROJECTS[0];
    router = TestBed.inject(Router);
  });

  it("should create the Project Card", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'Restoration and Reforestation Observatory Dashboard'", () => {
    fixture.detectChanges();
    expect(element.querySelector("h4").textContent).toContain(
      "Restoration and Reforestation Observatory Dashboard"
    );
  });

  it("should have a description", () => {
    fixture.detectChanges();
    expect(element.querySelector("p").textContent).toContain(
      "A dashboard for visualizing reforestation and restauration numbers mapped by the Observatory in Brazil."
    );
  });

  it("should navigate to a Project page", fakeAsync(() => {
    const link = element.querySelector("a") as HTMLElement;
    fixture.detectChanges();
    link.click();
    tick();
    expect(router.url).toBe(
      `/projects/${component.project.title.replaceAll(" ", "%20")}`
    );
  }));
});
