import { TestBed } from "@angular/core/testing";
import { EnvironmentService } from "./environment.service";
import { GoogleAnalyticsService } from "./google-analytics.service";

describe("GoogleAnalyticsService", () => {
  let googleAnalyticsService: GoogleAnalyticsService;
  let environmentService: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsService, EnvironmentService],
    }).compileComponents();

    document.querySelector("#ga")?.remove();
    document.querySelector("#ga-tag-manager")?.remove();

    googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    environmentService = TestBed.inject(EnvironmentService);
  });

  it("should create the GoogleAnalytics service", () => {
    expect(googleAnalyticsService).toBeTruthy();
  });

  it("should add the google analytics tags Only in production environment", () => {
    spyOn(environmentService, "getEnvironment").and.returnValue({
      production: false,
      gaTrackingID: "",
    });
    googleAnalyticsService.setupGoogleAnalytics();
    expect(document.querySelector("#ga")).toBeNull();
    expect(document.querySelector("#ga-tag-manager")).toBeNull();
  });

  it("should add the google analytics tags in production environment", () => {
    spyOn(environmentService, "getEnvironment").and.returnValue({
      production: true,
      gaTrackingID: "1234",
    });
    googleAnalyticsService.setupGoogleAnalytics();
    expect(document.querySelector("#ga")).toBeTruthy();
    expect(document.querySelector("#ga-tag-manager")).toBeTruthy();
  });

  it("should return false if a view event was not sent", () => {
    spyOn(environmentService, "getEnvironment").and.returnValue({
      production: false,
      gaTrackingID: "1234",
    });
    googleAnalyticsService.setupGoogleAnalytics();
    const response = googleAnalyticsService.sendPageViewEvent("/test");
    expect(response).toBeFalse();
  });

  it("should return true if a view event was sent", () => {
    spyOn(environmentService, "getEnvironment").and.returnValue({
      production: true,
      gaTrackingID: "1234",
    });
    googleAnalyticsService.setupGoogleAnalytics();
    const response = googleAnalyticsService.sendPageViewEvent("/test");
    expect(response).toBeTrue();
  });
});
