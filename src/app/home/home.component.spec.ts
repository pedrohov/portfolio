import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule],
      declarations: [HomeComponent],
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
