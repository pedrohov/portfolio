import { TestBed } from "@angular/core/testing";
import { TAGS } from "./data/tags";
import { TagService } from "./tag.service";

describe("TagService", () => {
  let tagService: TagService;
  let tag = TAGS[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService],
    }).compileComponents();

    tagService = TestBed.inject(TagService);
  });

  it("should create the Tag service", () => {
    expect(tagService).toBeTruthy();
  });

  it("should fetch all Tags", () => {
    let tags = [];
    tagService.getTags().subscribe((t) => (tags = t));
    expect(tags).toEqual(TAGS);
  });

  it("should fetch a single Tag", () => {
    let fetchedTag;
    tagService.getTag(tag.name).subscribe((t) => (fetchedTag = t));
    expect(fetchedTag).toEqual(tag);
  });
});
