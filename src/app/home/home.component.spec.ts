import { CommonModule } from "@angular/common";
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ROUTES } from "../app-routing.module";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    router = TestBed.inject(Router);
  });

  it("should create the Home Page", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to Projects", fakeAsync(() => {
    const link = element.querySelector(
      ".home__call-to-action a"
    ) as HTMLElement;
    link.click();
    tick();
    expect(router.url).toBe("/projects");
  }));

  it("should have a Header", () => {
    fixture.detectChanges();
    const header = element.querySelector("h1");
    expect(header).toBeTruthy();
    expect(header.innerText).toContain("Oi, eu sou Pedro");
  });

  it("should have a Subtitle", () => {
    fixture.detectChanges();
    const subtitle = element.querySelector(".subtitle") as HTMLElement;
    expect(subtitle).toBeTruthy();
    expect(subtitle.innerText).toContain(
      "Cientista da Computação com experiência em Engenharia de Software e Desenvolvimento Web."
    );
  });

  it("should have a button to view Projects", () => {
    fixture.detectChanges();
    const portfolioBtn = element.querySelector(".home__call-to-action a");
    expect(portfolioBtn).toBeTruthy();
  });
});
