import { Component, OnDestroy } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter, map } from "rxjs/operators";
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";
import { GoogleAnalyticsService } from "@core/google-analytics.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("toggleMenu", [
      state("open", style({ maxHeight: "180px" })),
      state("closed", style({ maxHeight: "0" })),
      transition("open <=> closed", [animate("0.3s ease-out")]),
    ]),
  ],
})
export class AppComponent implements OnDestroy {
  toggleState: boolean = false;
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

  toggle(): void {
    this.toggleState = !this.toggleState;
  }

  prepareRoute(outlet: RouterOutlet): void {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
