import { Component, OnDestroy } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { GoogleAnalyticsService } from "@core/google-analytics.service";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  routeSub: Subscription;

  constructor(router: Router, googleAnalyticsService: GoogleAnalyticsService) {
    googleAnalyticsService.setupGoogleAnalytics();
    this.routeSub = router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        googleAnalyticsService.sendPageViewEvent(event.urlAfterRedirects);
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
