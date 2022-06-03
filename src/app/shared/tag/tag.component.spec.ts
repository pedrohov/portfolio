import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TagComponent } from "./tag.component";

describe("TagComponent", () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    component.tag = {
      name: "Angular",
      color: "red",
      selected: true,
    };
  });

  it("should create the Tag", () => {
    expect(component).toBeTruthy();
  });

  it("should have as name 'Angular'", () => {
    fixture.detectChanges();
    expect(element.textContent).toContain("Angular");
  });

  it("should be selected", () => {
    fixture.detectChanges();
    expect(component.tag.selected).toBe(true);
  });
});
