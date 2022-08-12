import { TestBed } from "@angular/core/testing";
import { ProjectService } from "./project.service";
import { Theme, ThemeService } from "./theme.service";

describe("ThemeService", () => {
  let themeService: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService],
    }).compileComponents();

    themeService = TestBed.inject(ThemeService);
  });

  it("should create the Theme service", () => {
    expect(themeService).toBeTruthy();
  });

  it("should exit if the chosen theme is the same as the current theme", () => {
    const switchThemeSpy = spyOn(themeService, "switch");
    themeService.switch(Theme.Light);
    themeService.switch(Theme.Light);
    expect(switchThemeSpy).toHaveBeenCalledTimes(2);
  });

  it("should swap theme if none is specified", () => {
    themeService.switch(Theme.Light);
    themeService.switch();
    expect(document.querySelector("body").classList).toContain(
      `${themeService.theme}-theme`
    );
  });
});
