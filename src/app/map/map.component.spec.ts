import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ProjectService } from "@core/project.service";
import { ROUTES } from "../app-routing.module";
import { MapComponent } from "../map/map.component";

describe("HomeComponent", () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
      declarations: [MapComponent],
      providers: [ProjectService],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
  });

  it("should create the Map Component", () => {
    expect(component).toBeTruthy();
  });

  it("should have a svg", () => {
    fixture.detectChanges();
    const svg = element.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("should recreate the chart on window resize", () => {
    fixture.detectChanges();
    const chartCreateSpy = spyOn<any>(component, "create");
    window.dispatchEvent(new Event("resize"));
    expect(chartCreateSpy).toHaveBeenCalled();
  });

  it("should call onMouseMove after a mousemove event is fired", () => {
    fixture.detectChanges();
    const mouseMoveSpy = spyOn<any>(component, "onMouseMove").and.callThrough();
    window.dispatchEvent(new Event("mousemove"));
    expect(mouseMoveSpy).toHaveBeenCalled();
  });
});
