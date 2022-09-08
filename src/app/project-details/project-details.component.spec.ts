import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Title } from "@angular/platform-browser";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ProjectService } from "@core/project.service";
import { Subject } from "rxjs";
import { PROJECTS } from "src/assets/projects/projects";
import { ROUTES } from "../app-routing.module";
import { NextProjectComponent } from "../next-project/next-project.component";
import { ProjectDetailsComponent } from "./project-details.component";

describe("ProjectDetailsComponent", () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  let element: HTMLElement;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let projectService: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule.withRoutes(ROUTES)],
      declarations: [ProjectDetailsComponent, NextProjectComponent],
      providers: [Title, ProjectService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    projectService = TestBed.inject(ProjectService);
  });

  it("should create the Project Detail component", () => {
    expect(component).toBeTruthy();
  });

  it("should change the page title", () => {
    spyOn(activatedRoute.snapshot.paramMap, "get").and.returnValue(
      PROJECTS[0].title
    );
    component.getProject();
    fixture.detectChanges();
    const title = TestBed.inject(Title);
    expect(title.getTitle()).toContain(PROJECTS[0].title);
  });

  it("shoud call getProject when route changes", () => {
    const getProjectSpy = spyOn(component, "getProject");
    (router.events as Subject<RouterEvent>).next(
      new NavigationEnd(1, "/", "/SIMFaz")
    );
    fixture.detectChanges();
    expect(getProjectSpy).toHaveBeenCalled();
  });

  it("shoud not call getProject when there is a NavigationStart event", () => {
    const getProjectSpy = spyOn(component, "getProject");
    const router = TestBed.inject(Router);
    (router.events as Subject<RouterEvent>).next(new NavigationStart(1, "/"));
    fixture.detectChanges();
    expect(getProjectSpy).not.toHaveBeenCalled();
  });

  it("should redirect to home page if the project is not found", () => {
    const routeSpy = spyOn(router, "navigate");
    spyOn(activatedRoute.snapshot.paramMap, "get").and.returnValue("Invalid");
    component.getProject();
    fixture.detectChanges();
    expect(routeSpy).toHaveBeenCalled();
  });
});
