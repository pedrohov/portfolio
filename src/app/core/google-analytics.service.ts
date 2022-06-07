import { Injectable } from "@angular/core";
import { environment } from "@env";

declare const gtag: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService {
  constructor() {}

  /** Create the script tags only for production environments and only if there is a GA Tracking ID */
  public setupGoogleAnalytics(): void {
    if (!environment.gaTrackingID || !environment.production) return;
    // register google tag manager
    const gTagManagerScript = document.createElement("script");
    gTagManagerScript.async = true;
    gTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaTrackingID}`;
    document.head.appendChild(gTagManagerScript);

    // register google analytics
    const gaScript = document.createElement("script");
    gaScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${environment.gaTrackingID}');
      `;
    document.head.appendChild(gaScript);
  }

  /** Send a page view event whenever the route changes
   *  https://developers.google.com/analytics/devguides/collection/gtagjs/pages#page_view_event
   *  @param path Route path '/unit/new'
   */
  public sendPageViewEvent(path: string): void {
    if (!environment.gaTrackingID || !environment.production) return;
    gtag("config", "GA_MEASUREMENT_ID", { page_path: `/app${path}` });
  }
}
