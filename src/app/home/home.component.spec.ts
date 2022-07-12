import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
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
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
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
      "Hi! I’m Pedro, I build solutions for the web and other fun stuff."
    );
  });
});
