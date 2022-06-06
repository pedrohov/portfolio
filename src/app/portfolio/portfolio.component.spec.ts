import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { PROJECTS } from "@core/data/projects";
import { TAGS } from "@core/data/tags";
import { TagService } from "@core/tag.service";
import { TagComponent } from "@shared/tag/tag.component";
import { TagFilterPipe } from "../pipes/tag-filter.pipe";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { PortfolioComponent } from "./portfolio.component";

describe("PortfolioComponent", () => {
  let tagService: TagService;
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [
        PortfolioComponent,
        TagComponent,
        ProjectCardComponent,
        TagFilterPipe,
      ],
      providers: [TagService],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    tagService = TestBed.inject(TagService);
  });

  it("should create the Portfolio", () => {
    expect(component).toBeTruthy();
  });

  it("should create the TagService", () => {
    expect(tagService).toBeTruthy();
  });

  it("should fetch all service Tags", () => {
    let tags = [];
    tagService.getTags().subscribe((t) => (tags = t));
    expect(tags).toEqual(TAGS);
  });

  it("should have tags", () => {
    let tags = [];
    tagService.getTags().subscribe((t) => (tags = t));
    fixture.detectChanges();
    expect(component.tags).toEqual(tags);
  });

  it("should get all selected tags", () => {
    tagService.getTags().subscribe((t) => (component.tags = t));
    component.tags[1].selected = false;
    const selectedTags = component.getSelectedTags();
    fixture.detectChanges();
    expect(component.tags.length).toBeGreaterThan(selectedTags.length);
  });

  it("should fetch all projects", () => {
    let projects = [];
    component.getProjects();
    component.projects$.subscribe((p) => (projects = p));
    fixture.detectChanges();
    expect(projects).toEqual(PROJECTS);
  });
});
