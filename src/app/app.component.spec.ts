import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { GoogleAnalyticsService } from "@core/google-analytics.service";
import { Subject } from "rxjs";
import { AppComponent } from "./app.component";
import { ThemeTogglerComponent } from "./theme-toggler/theme-toggler.component";

describe("AppComponent", () => {
  const routerEventsSubject = new Subject<RouterEvent>();
  let googleAnalyticsService: GoogleAnalyticsService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, ThemeTogglerComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            events: routerEventsSubject.asObservable(),
          },
        },
        GoogleAnalyticsService,
      ],
    }).compileComponents();
    googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    fixture = TestBed.createComponent(AppComponent);
  });

  it("should create the app", () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should send page view events when navigation happens", () => {
    spyOn(googleAnalyticsService, "sendPageViewEvent");
    routerEventsSubject.next(new NavigationEnd(1, "/", "/SIMFaz"));
    fixture.detectChanges();
    expect(googleAnalyticsService.sendPageViewEvent).toHaveBeenCalled();
  });

  it("should not send page view events when navigation start happens", () => {
    spyOn(googleAnalyticsService, "sendPageViewEvent");
    routerEventsSubject.next(new NavigationStart(1, "/"));
    fixture.detectChanges();
    expect(googleAnalyticsService.sendPageViewEvent).not.toHaveBeenCalled();
  });
});
