import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { PROJECTS } from "src/assets/projects/projects";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NextProjectComponent } from "./next-project.component";

describe("NextProjectComponent", () => {
  let component: NextProjectComponent;
  let fixture: ComponentFixture<NextProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [NextProjectComponent, ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextProjectComponent);
    component = fixture.componentInstance;
    component.project = PROJECTS[0];
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });
});
