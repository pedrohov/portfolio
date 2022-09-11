import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ThemeTogglerComponent } from "./theme-toggler.component";

describe("ThemeTogglerComponent", () => {
  let fixture: ComponentFixture<ThemeTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ThemeTogglerComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ThemeTogglerComponent);
  });

  it("should create the Theme toggler component", () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
