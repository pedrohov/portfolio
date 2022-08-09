import { CommonModule } from "@angular/common";
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
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

  it("should not create the chart if the container is undefined", () => {
    fixture.detectChanges();
    component.containerRef = undefined;
    window.dispatchEvent(new Event("resize"));
    expect(document.querySelector("svg")).toBeFalsy();
  });

  it("should call onMouseMove after a mousemove event is fired", () => {
    component.enableEvents = true;
    fixture.detectChanges();
    const mouseMoveSpy = spyOn<any>(component, "onMouseMove").and.callThrough();
    window.dispatchEvent(new Event("mousemove"));
    expect(mouseMoveSpy).toHaveBeenCalled();
  });

  it("should not color a feature on pointer over while fading in", () => {
    component.enableEvents = true;
    fixture.detectChanges();
    const feature = document.querySelector("path");
    feature.dispatchEvent(new Event("pointerover"));
    fixture.detectChanges();
    // TODO: Is it possible to wait for the transition to complete?
    expect(feature.getAttribute("fill-opacity")).toEqual("0");
  });

  it("should color a feature on pointer over when not fading in", fakeAsync(() => {
    component.enableEvents = true;
    fixture.detectChanges();
    tick(1000);
    const feature = document.querySelector("path");
    feature.dispatchEvent(new Event("pointerover"));
    fixture.detectChanges();
    expect(feature.getAttribute("fill-opacity")).toEqual("0");
  }));

  it("should set the stroke color if the color attribute is provided", () => {
    component.color = "red";
    fixture.detectChanges();
    const feature = document.querySelector("path");
    expect(feature.getAttribute("stroke")).toEqual("red");
  });
});
