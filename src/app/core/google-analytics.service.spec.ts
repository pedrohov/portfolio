import { TestBed } from "@angular/core/testing";
import { GoogleAnalyticsService } from "./google-analytics.service";

describe("GoogleAnalyticsService", () => {
  let googleAnalyticsService: GoogleAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsService],
    }).compileComponents();

    googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
  });

  it("should create the GoogleAnalytics service", () => {
    expect(googleAnalyticsService).toBeTruthy();
  });

  it("should add the google analytics tags only in production environment", () => {
    googleAnalyticsService.setupGoogleAnalytics();
    expect(document.querySelector("#ga")).toBeNull();
    expect(document.querySelector("#ga-tag-manager")).toBeNull();
  });

  it("should return false if a view event was not sent", () => {
    googleAnalyticsService.setupGoogleAnalytics();
    const response = googleAnalyticsService.sendPageViewEvent("/test");
    expect(response).toBeFalse();
  });
});
